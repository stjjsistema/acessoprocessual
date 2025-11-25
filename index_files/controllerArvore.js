angular.module("app").controller(
		"ProcessoController",
		function($scope, $routeParams, $http, $window, $location) {
			var isIE = /* @cc_on!@ */false || !!document.documentMode;

			if (!$scope.numregistro) {
				$scope.numregistro = $routeParams.numregistro;
			}
			$scope.formData={};

			$scope.usuario={};

			$scope.tipoUsuario=document.getElementById('idUsuarioPerfilTipo').value;
			
			$scope.exibirPecasSTJ = true;
			$scope.exibirPecasOutrosTribunais = true;
			
			testeLogin();
			
			function testeLogin(){
				$http.get("/feitos/api/autenticacao/usuario/").then(function successCallback(response) {
					$scope.usuarioAutenticado = true;
					$scope.usuario = response.data;
					if($scope.numregistro){
						carregarArvore();
					}
				}, function errorCallback(response) {
					$scope.usuarioAutenticado = false;
				});

			}

			$scope.login = function(){
				var credentials = btoa($scope.formData.cpf + ':' + $scope.formData.senha);
				
				var header = { headers: {'Authorization': 'Basic ' + credentials, 'gRecaptchaResponse':grecaptcha.getResponse()} }

				$http.get("/feitos/api/autenticacao/basic", header).then(function successCallback(response) {
					$scope.usuario = response.data;
					$scope.usuarioAutenticado = true;
					$scope.errorMessage = null;
					if($scope.numregistro){
						carregarArvore();
					}
				}, function errorCallback(response) {
					$scope.usuarioAutenticado = false;
					$scope.errorMessage = response.data.errorMessage;
					grecaptcha.reset();
				});

			}

			$scope.loginChaveAcesso = function(){
				var header = { headers: {'gRecaptchaResponse':grecaptcha.getResponse()} }

				$http.get("/feitos/api/autenticacao/chaveAcesso/"+$scope.formData.chaveAcesso, header).then(function successCallback(response) {
					location.href='/processo/pesquisa/?usuarioPerfilTipo=chaveAcesso&tipoPesquisa=tipoPesquisaNumeroRegistro&termo='+response.data.numRegistro				
				}, function errorCallback(response) {
					$scope.usuarioAutenticado = false;
					$scope.errorMessage = response.data.errorMessage;
					grecaptcha.reset();
				});

			}

			$scope.testeCertificado = function() {

				var header = { headers: {'gRecaptchaResponse':grecaptcha.getResponse()} }

				$http.get("/feitos/api/autenticacao/certificado", header).then(function successCallback(response) {

					$http.get("/processo/a2v/login");

					$scope.usuario = response.data;
					$scope.usuarioAutenticado = true;
					$scope.errorMessage = null;
					carregarArvore();			
				}, function errorCallback(response) {
					$scope.usuarioAutenticado = false;
					if(response.data && response.data.errorMessage){
						$scope.errorMessage = response.data.errorMessage;
					} else{
						$scope.errorMessage = decodeURIComponent(escape("Não foi encontrado nenhum certificado digital válido para autenticação."));
					}
					
					grecaptcha.reset();
				});

			}

			$scope.sair = function(redirectURL){
				$http.get("/feitos/api/autenticacao/sair").then(function successCallback(response) {
					$http.get("/processo/a2v/logout");
					$window.location.href = redirectURL;				
				}, function errorCallback(response) {
					$window.location.href = redirectURL;
					$scope.errorMessage = response.data.errorMessage;
				});

			}

			function carregarArvore(){
				$scope.loading = true;
				revalidarSessaoProcesso();
				$http.get("/feitos/api/visualizador/processo/" + $scope.numregistro).then(function successCallback(response) {
					$scope.loading = false;
					$scope.errorMessage = null;
					$scope.processo = [ response.data ];
					var ultimoVolume = $scope.processo[0].children.length - 1;
					$scope.expandedNodes = [ $scope.processo[0], $scope.processo[0].children[ultimoVolume] ];
				}, function errorCallback(response) {
					$scope.loading = false;
					if (response.status == 401) {
						$scope.usuarioAutenticado = false;
					} else if (response.status == 403) {
						$scope.usuarioAutenticado = true;
						$scope.cabecalhoErro = decodeURIComponent(escape('Você não tem permissão para visualizar o processo ' + $scope.numregistro + '.'));
						$scope.errorMessage = response.data;
					} else if (response.status == 404) {
						$scope.usuarioAutenticado = true;
						$scope.errorMessage = decodeURIComponent(escape("Processo " + $scope.numregistro + " não encontrado"));
					} else {
						$scope.errorMessage = decodeURIComponent(escape("Erro inesperado."));
					}
				});
					
			}

			$scope.exibirPeca = function(node){
				console.log(node);
				if(node.isPecaSTJ == undefined){
					return true;
				} else if(node.isPecaSTJ && $scope.exibirPecasSTJ){
					return true;
				} else if(!node.isPecaSTJ && $scope.exibirPecasOutrosTribunais){
					return true;
				} else{
					return false;
				}
			}

			function revalidarSessaoProcesso(){
				$http.get("/processo/a2v/sessao");
			}

			$scope.treeOptions = {
				nodeChildren : "children",
				dirSelectable : true,
				allowDeselect : false,
				injectClasses : {
					ul : "a1",
					li : "a2",
					liSelected : "a7",
					iExpanded : "a3",
					iCollapsed : "a4",
					iLeaf : "a5",
					label : "a6",
					labelSelected : "a8"
				}
			}


			$scope.showSelected = function(node, download) {
				$scope.selectedNode = node;

 				if ($scope.selectedNode.type == 'peca' && $scope.selectedNode.tipoPecaEletronica == 'DIGITALIZADA') {
 					url="/visualizador/visualizador.html?numeroRegistro="+$scope.numregistro+"&seqPeca=" + $scope.selectedNode.seqPeca;		
				} else if ($scope.selectedNode.type == 'peca') {
					url='/feitos/api/visualizador/processo/' + $scope.numregistro + '/peca/' + $scope.selectedNode.seqPeca;
				} else if ($scope.selectedNode.type == 'encartado') {
					url='/feitos/api/visualizador/processo/' + $scope.numregistro + '/encartado/' + $scope.selectedNode.seqPeca;
				}else if ($scope.selectedNode.type == 'link') {
					url='/feitos/api/visualizador/numeroRegistro/' + $scope.numregistro + '/link/' + $scope.selectedNode.seqLink;
				} else if ($scope.selectedNode.type == 'indice') {
					url='/feitos/api/visualizador/indice/' + $scope.numregistro;
				} else if ($scope.selectedNode.type == 'capa') {
					url='/feitos/api/visualizador/capa/' + $scope.numregistro;
				} else if ($scope.selectedNode.type == 'processo') {
					url='/feitos/api/visualizador/processo/' + $scope.numregistro + '/pdf';
				} else if ($scope.selectedNode.type == 'volume') {
					url='/feitos/api/visualizador/processo/' + $scope.numregistro + '/volume/' + $scope.selectedNode.numero + '/processoApensoEnum/' + $scope.selectedNode.processoApensoEnum;
				}

				if(url){
					revalidarSessaoProcesso();
					if(download){
						url=url+"?download="+download;
					}
					$window.open(url);
				}
			};

		});