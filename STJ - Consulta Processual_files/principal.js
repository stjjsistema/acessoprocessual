var ie = {
	init: function () {
		var nua = navigator.userAgent;
		this.isIE = true;
		this.isModoDeCompatibilidade = true;
		this.modoDeCompatibilidade = 6;
		this.isModoDeCompatibilidade6 = false;
		this.isModoDeCompatibilidade7 = false;
		this.isModoDeCompatibilidade8 = false;
		this.isModoDeCompatibilidade9 = false;
		this.isModoDeCompatibilidade10 = false;
		this.versao = 6;
		this.isVersao6 = false;
		this.isVersao7 = false;
		this.isVersao8 = false;
		this.isVersao9 = false;
		this.isVersao10 = false;
		this.modoDocumento = document.documentMode ? document.documentMode : -1;
		this.isModoDocumento5 = document.documentMode && document.documentMode == 5;
		this.isModoDocumento7 = document.documentMode && document.documentMode == 7;
		this.isModoDocumento8 = document.documentMode && document.documentMode == 8;
		this.isModoDocumento9 = document.documentMode && document.documentMode == 9;
		var regex = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (regex.exec(nua) == null){
			//exception = "The user agent detected does not contai Internet Explorer.";
			this.isIE = false;
		}else{
			this.renderVersion = parseFloat(RegExp.$1);
			this.isVersao = this.renderVersion;			 
			if (nua.indexOf("Trident/6.0") > -1) {
				this.isVersao10 = true;//IE10
				this.versao = 10;
				if (nua.indexOf("MSIE 10.0") > -1) {
					this.isModoDeCompatibilidade = false;
				}
			} else if (nua.indexOf("Trident/5.0") > -1) {
				this.isVersao9 = true;//IE9
				this.versao = 9;
				if (nua.indexOf("MSIE 9.0") > -1) {
					this.isModoDeCompatibilidade = false;
				}
			} else if (nua.indexOf("Trident/4.0") > -1) {
				this.isVersao8 = true;//IE8
				this.versao = 8;
				if (nua.indexOf("MSIE 8.0") > -1) {
					this.isModoDeCompatibilidade = false;
				}
			} else if (nua.indexOf("MSIE 7.0") > -1){
				this.isModoDeCompatibilidade = false;
				this.isVersao7 = true;//IE7
				this.versao = 7;
			} else {
				this.isModoDeCompatibilidade = false;
				this.isVersao6 = true;//IE6
			}
			if (nua.indexOf("MSIE 10.0") > -1){
				this.isModoDeCompatibilidade10 = true;
				this.modoDeCompatibilidade = 10;
			} else if (nua.indexOf("MSIE 9.0") > -1){
				this.isModoDeCompatibilidade9 = true;
				this.modoDeCompatibilidade = 9;
			} else if (nua.indexOf("MSIE 8.0") > -1){
				this.isModoDeCompatibilidade8 = true;
				this.modoDeCompatibilidade = 8;
			} else if (nua.indexOf("MSIE 7.0") > -1){
				this.isModoDeCompatibilidade7 = true;
				this.modoDeCompatibilidade = 7;
			} else {
				this.isModoDeCompatibilidade6 = true;
				this.modoDeCompatibilidade = 6;
			}
		}
	}
};
ie.init();
//erro por conta da atualiza##o do windows de antes de 10/01/2014
var displayAbaDetalhes = !ie.isIE ? 'inline-block' : ((!ie.isModoDocumento7 && ie.isModoDeCompatibilidade8) || (ie.isModoDocumento8 && ie.isModoDeCompatibilidade7) || ie.isModoDocumento9 || ie.isModoDeCompatibilidade9) ? 'inline-block' : 'block';
//alert(ie.isModoDocumento7 +','+ ie.isModoDeCompatibilidade8);
//alert(ie.isModoDocumento9 +','+  ie.isModoDeCompatibilidade9);
//alert(navigator.userAgent);
//alert(displayAbaDetalhes);
function quandoClicaIconeAjudaDoCampo(id) {
	mostraEsconde(id);
}
function quandoClicaParteAutor() {
	if(document.getElementById("idParteAutor") && document.getElementById("idParteAutorTemp")){
		if(document.getElementById("idParteAutorTemp").checked){
			document.getElementById("idParteAutor").value = "TRUE";
		}else{
			document.getElementById("idParteAutor").value = "FALSE";
		}
	}
}
function quandoClicaParteReu() {
	if(document.getElementById("idParteReu") && document.getElementById("idParteReuTemp")){
		if(document.getElementById("idParteReuTemp").checked){
			document.getElementById("idParteReu").value = "TRUE";
		}else{
			document.getElementById("idParteReu").value = "FALSE";
		}
	}
}
function quandoClicaParteOutros() {
	if(document.getElementById("idParteOutros") && document.getElementById("idParteOutrosTemp")){
		if(document.getElementById("idParteOutrosTemp").checked){
			document.getElementById("idParteOutros").value = "TRUE";
		}else{
			document.getElementById("idParteOutros").value = "FALSE";
		}
	}
}
function quandoClicaCabecalhoDireitaItem1(){}
function quandoClicaCabecalhoDireitaItem2(){	
	window.location.href = "/processo/pesquisa/preferencias/?aplicacao=processos.preferencias";
}

function quandoClicaCabecalhoDireitaItem3(){//quandoClicaPesquisaProcessualAjudaIcone
	quandoClicaLinkPerguntasFrequentes();
}
function quandoClicaCabecalhoDireitaItem4(){
	window.location.href = "/processo/pesquisa/?aplicacao=processos";
}
function quandoClicaCabecalhoDireitaItem5(){}
function quandoClicaCabecalhoDireitaMenu() {
	if(document.getElementById("idDivMenu")){
		if(document.getElementById("idDivMenu").style.display == 'block'){
			document.getElementById("idDivMenu").style.display = 'none';
		}else{			
			document.getElementById("idDivMenu").style.display = 'block';
		}
	}
}
function quandoClicaPesquisaProcessualHomeIcone(p){
	if(!p){
		window.location.href = "/processo/pesquisa/";
	}else{
		window.location.href = "/processo/pesquisa/?aplicacao=" + p;
	}	
}
function quandoClicaPesquisaProcessualPreferenciasIcone(p) {
	if(!p){
		window.location.href = "/processo/pesquisa/preferencias/";
	}else{
		window.location.href = "/processo/pesquisa/preferencias/?aplicacao=" + p;
	}
}
function quandoClicaPesquisaProcessualAjudaIcone() {
	if(document.getElementById('idAplicacao') && (document.getElementById('idAplicacao').value == "processos" || document.getElementById('idAplicacao').value == "processos.ea")){
		if(document.getElementById('idPesquisaProcessualAjudaItens')){
			if(document.getElementById('idPesquisaProcessualAjudaItens').style.display == 'inline-block'){
				setDisplay('idPesquisaProcessualAjudaItens', 'none');				
			}else{
				setDisplay('idPesquisaProcessualAjudaItens', 'inline-block');
			}
		}
	}else{
		quandoClicaPreferenciasIconeAjuda('idPreferenciasItemExplicacao');		
	}	
}
function quandoClicaLinkPerguntasFrequentes(){
	window.location.href = "/out/in/faq/pesquisa/?acao=pesquisaporassunto&descricaoPesquisa=&sequencialAssunto=71&aplicacao=faq.proc";
}
function quandoClicaLinkTutorialExportacaoConsulta(){
	window.open("/docs_internet/judiciaria/faq/consulta_processual_exportacao.pdf");
}
//tentaConsultar();
function quandoPrecionaTeclaNoNumeroProcesso(evento, campo) {
	if(isPressionouEnter(evento)){
		tentaConsultar();
	}
}
function quandoPrecionaTeclaNoNumeroRegistro(evento, campo) {
	colocaMascaraNumeroRegistro(evento, campo);
	if(isPressionouEnter(evento)){
//	if(validaNumeroRegistro(campo.value)){
			tentaConsultar();
//	}
	}
	setUsabilidade(campo);
}
function quandoPrecionaTeclaNoNUP(evento, campo) {
	colocaMascaraNUP(evento, campo);
	if(isPressionouEnter(evento)){
		tentaConsultar();
	}
	//return trataEntrada(this, event);
}
function quandoPrecionaTeclaNoNumeroOriginario(evento, campo) {
	if(isPressionouEnter(evento)){
//	if(validaNumeroOriginario(campo.value)){
			tentaConsultar();
//	}
	}		
}
function quandoPrecionaTeclaNaOab(evento, campo) {
	if(isPressionouEnter(evento)){
		reformataCodOab(campo.value, campo);
		if(validaCodigoOab(campo.value)){
			tentaConsultar();
		}
	}		
}
function quandoPrecionaTeclaNoParteNome(evento, campo) {
	if(isPressionouEnter(evento)){
//	if(validaParteNome(campo.value)){
			tentaConsultar();
//	}
	}
	setUsabilidade(campo);
}
function quandoPrecionaTeclaNoAdvogadoNome(evento, campo) {
	if(isPressionouEnter(evento)){
//	if(validaAdvogadoNome(campo.value)){
			tentaConsultar();
//	}
	}
	setUsabilidade(campo);
}
function quandoPrecionaTeclaPautaPublicacaoDataInicial(evento, quem){
	FormataData(quem, evento);
	if(isPressionouEnter(evento)){		
		tentaConsultar();
	}	
}
function quandoPrecionaTeclaPautaPublicacaoDataFinal(evento, quem){
	FormataData(quem, evento);
	if(isPressionouEnter(evento)){		
		tentaConsultar();
	}	
}
function quandoPrecionaTeclaDataPublicacaoInicial(evento, quem){
	FormataData(quem, evento);
	if(isPressionouEnter(evento)){		
		tentaConsultar();
	}	
}
function quandoPrecionaTeclaDataPublicacaoFinal(evento, quem){
	FormataData(quem, evento);
	if(isPressionouEnter(evento)){		
		tentaConsultar();
	}
}

function quandoPrecionaTeclaDataAutuacaoInicial(evento, quem) {
	FormataData(quem, evento);
	if(isPressionouEnter(evento)){		
		tentaConsultar();
	}
}
function quandoPrecionaTeclaDataAutuacaoFinal(evento, quem) {
	FormataData(quem, evento);
	if(isPressionouEnter(evento)){		
		tentaConsultar();
	}
}
function quandoPressionaTeclaJulgadorOrgao(evento){
	if(isPressionouEnter(evento)){		
		tentaConsultar();
	}
}
function quandoPressionaTeclaJulgadorMinistro(evento){
	if(isPressionouEnter(evento)){		
		tentaConsultar();
	}
}
function quandoPressionaTeclaOrigemOrgao(evento){
	if(isPressionouEnter(evento)){		
		tentaConsultar();
	}
}
function quandoPressionaTeclaOrigemUf(evento){
	if(isPressionouEnter(evento)){		
		tentaConsultar();
	}
}
function quandoPressionaTeclaTipoRamo(evento){
	if(isPressionouEnter(evento)){		
		tentaConsultar();
	}
}
function quandoClicaOpcaoFoneticaContem(evento, campo) {
	trocaOpcaoFonetica(campo);
	setUsabilidade(campo);
}
function quandoClicaOpcaoFoneticaIniciaCom(evento, campo) {
	trocaOpcaoFonetica(campo);
	setUsabilidade(campo);
}
function quandoClicaOpcaoFoneticaIgual(evento, campo) {
	trocaOpcaoFonetica(campo);
	setUsabilidade(campo);
}
function setUsabilidade(campo){
	if(!document.getElementById('idSelectTipoPesquisaFormulario')){ //apenas para formul#rio extendido
		var desabilita = false;
		if(campo.id == 'idNumeroRegistro'){
			setDisable('idNumeroRegistro', desabilita);
			if(document.getElementById('idNumeroRegistro').value != ''){ //n#mero de registro preenchido
				desabilita = true;
			} else {
				desabilita = false;
			}
			setDisable('idNumeroProcesso', desabilita);
			setDisable('idNumeroUnico', desabilita);
			setDisable('idNumeroOriginario', desabilita);
			setDisable('idAdvogadoCodigo', desabilita);
			setDisable('idDataAutuacaoInicial', desabilita);
			setDisable('idDataAutuacaoFinal', desabilita);
			setDisable('idDataPublicacaoInicial', desabilita);
			setDisable('idDataPublicacaoFinal', desabilita);
			setDisable('idPautaDataPublicacaoInicial', desabilita);
			setDisable('idPautaDataPublicacaoFinal', desabilita);
			setDisable('idParteNome', desabilita);
			setDisable('idAdvogadoNome', desabilita);
			setDisable('idParteAutorTemp', desabilita);
			setDisable('idParteReuTemp', desabilita);
			setDisable('idParteOutrosTemp', desabilita);
			setDisable('idChkParteFoneticaContem', desabilita);
			setDisable('idChkParteFoneticaIniciaCom', desabilita);
			setDisable('idChkParteFoneticaIgual', desabilita);
			setDisable('idChkFoneticaContem', desabilita);
			setDisable('idChkFoneticaIniciaCom', desabilita);
			setDisable('idChkFoneticaIgual', desabilita);
			setDisable('idClasse', desabilita);
			setVisibility('idJulgadorMinistroBlocoInterno', desabilita ? 'hidden' : 'visible');
			setVisibility('idJulgadorOrgaoBlocoInterno',desabilita ? 'hidden' : 'visible');
			setVisibility('idOrigemUFBlocoInterno',desabilita ? 'hidden' : 'visible');
			setVisibility('idOrgaosOrigemBlocoInterno',desabilita ? 'hidden' : 'visible');
			setVisibility('idTipoRamosDireitoBlocoInterno',desabilita ? 'hidden' : 'visible');
			setDisable('idOrgaosOrigemCampoParaPesquisar', desabilita);
			setDisable('idOrigemOrgaosSelecionados', desabilita);
			setDisable('idOrigemUFSelecionados', desabilita);
			setDisable('idJulgadorOrgaoSelecionados', desabilita);
			setDisable('idJulgadorMinistroSelecionados', desabilita);
			setDisable('idTipoRamosDireitoSelecionados', desabilita);
		} else if(campo.id == 'idParteNome' || campo.id == 'idComboFoneticaPhonosParte' || campo.id == 'idChkParteFoneticaContem' || campo.id == 'idChkParteFoneticaIniciaCom' || campo.id == 'idChkParteFoneticaIgual'){
			setParteFoneticaOpcao();
			desabilita = false;
			if(document.getElementById('idParteNome').value != ''){ //nome da parte preenchido
				setDisable('idNumeroRegistro', true);
				if((document.getElementById('idChkParteFoneticaIgual') && !document.getElementById('idChkParteFoneticaIgual').checked) ||
						(document.getElementById('idTipoOperacaoFoneticaPhonos') && document.getElementById('idTipoOperacaoFoneticaPhonos').value != -2)){ //com fon#tica
					desabilita = true;
				} else { //sem fon#tica
					desabilita = false;
				}
			} else {
				desabilita = false;
				setDisable('idNumeroRegistro', false);
			}
			if((document.getElementById('idChkParteFoneticaIgual') && document.getElementById('idChkParteFoneticaIgual').checked &&
					document.getElementById('idChkFoneticaIgual') && document.getElementById('idChkFoneticaIgual').checked) ||
					(document.getElementById('idTipoOperacaoFoneticaPhonos') && document.getElementById('idTipoOperacaoFoneticaPhonos').value == -2)){//sem fon#tica
				setDisable('idAdvogadoNome', false);
				setDisable('idParteNome', false);
			} else {
				if(document.getElementById('idParteNome').value == ''){
					setDisable('idAdvogadoNome', false);
				} else {
					setDisable('idAdvogadoNome', true);
				}
			}
			setDisable('idNumeroProcesso', desabilita);
			setDisable('idNumeroUnico', desabilita);
			setDisable('idNumeroOriginario', desabilita);
			setDisable('idAdvogadoCodigo', desabilita);
			setDisable('idDataAutuacaoInicial', desabilita);
			setDisable('idDataAutuacaoFinal', desabilita);
			setDisable('idDataPublicacaoInicial', desabilita);
			setDisable('idDataPublicacaoFinal', desabilita);
			setDisable('idPautaDataPublicacaoInicial', desabilita);
			setDisable('idPautaDataPublicacaoFinal', desabilita);
			setDisable('idClasse', desabilita);
			setVisibility('idJulgadorMinistroBlocoInterno', desabilita ? 'hidden' : 'visible');
			setVisibility('idJulgadorOrgaoBlocoInterno',desabilita ? 'hidden' : 'visible');
			setVisibility('idOrigemUFBlocoInterno',desabilita ? 'hidden' : 'visible');
			setVisibility('idOrgaosOrigemBlocoInterno',desabilita ? 'hidden' : 'visible');
			setVisibility('idTipoRamosDireitoBlocoInterno',desabilita ? 'hidden' : 'visible');
			setDisable('idOrgaosOrigemCampoParaPesquisar', desabilita);
			setDisable('idOrigemOrgaosSelecionados', desabilita);
			setDisable('idOrigemUFSelecionados', desabilita);
			setDisable('idJulgadorOrgaoSelecionados', desabilita);
			setDisable('idJulgadorMinistroSelecionados', desabilita);
			setDisable('idTipoRamosDireitoSelecionados', desabilita);
			setDisable('idParteNome', false);
			setDisable('idParteAutorTemp', false);
			setDisable('idParteReuTemp', false);
			setDisable('idParteOutrosTemp', false);
		} else if(campo.id == 'idAdvogadoNome' || campo.id == 'idComboFoneticaPhonosAdvogado' || campo.id == 'idChkFoneticaContem' || campo.id == 'idChkFoneticaIniciaCom' || campo.id == 'idChkFoneticaIgual'){
			setAdvogadoFoneticaOpcao();
			desabilita = false;
			if(document.getElementById('idAdvogadoNome').value != ''){ //nome do advogado preenchido
				setDisable('idNumeroRegistro', true);
				if((document.getElementById('idChkFoneticaIgual') && !document.getElementById('idChkFoneticaIgual').checked) ||
						(document.getElementById('idTipoOperacaoFoneticaPhonos') && document.getElementById('idTipoOperacaoFoneticaPhonos').value != -2)){ //com fon#tica
					desabilita = true;
				} else { // sem fon#tica
					desabilita = false;
				}
			} else {//nome do advogado n#o preenchido
				desabilita = false;
				setDisable('idNumeroRegistro', false);
			}
			if((document.getElementById('idChkParteFoneticaIgual') && document.getElementById('idChkFoneticaIgual') && 
					document.getElementById('idChkParteFoneticaIgual').checked && document.getElementById('idChkFoneticaIgual').checked) ||
					(document.getElementById('idTipoOperacaoFoneticaPhonos') && document.getElementById('idTipoOperacaoFoneticaPhonos').value == -2)){//sem fon#tica
				setDisable('idAdvogadoNome', false);
				setDisable('idParteNome', false);
			} else {
				if(document.getElementById('idAdvogadoNome').value == ''){
					setDisable('idParteNome', false);
				} else {
					setDisable('idParteNome', true);
				}
			}
			setDisable('idNumeroProcesso', desabilita);
			setDisable('idNumeroUnico', desabilita);
			setDisable('idNumeroOriginario', desabilita);
			setDisable('idAdvogadoCodigo', desabilita);
			setDisable('idDataAutuacaoInicial', desabilita);
			setDisable('idDataAutuacaoFinal', desabilita);
			setDisable('idDataPublicacaoInicial', desabilita);
			setDisable('idDataPublicacaoFinal', desabilita);
			setDisable('idPautaDataPublicacaoInicial', desabilita);
			setDisable('idPautaDataPublicacaoFinal', desabilita);
			setDisable('idClasse', desabilita);
			setVisibility('idJulgadorMinistroBlocoInterno', desabilita ? 'hidden' : 'visible');
			setVisibility('idJulgadorOrgaoBlocoInterno',desabilita ? 'hidden' : 'visible');
			setVisibility('idOrigemUFBlocoInterno',desabilita ? 'hidden' : 'visible');
			setVisibility('idOrgaosOrigemBlocoInterno',desabilita ? 'hidden' : 'visible');
			setVisibility('idTipoRamosDireitoBlocoInterno',desabilita ? 'hidden' : 'visible');
			setDisable('idOrgaosOrigemCampoParaPesquisar', desabilita);
			setDisable('idOrigemOrgaosSelecionados', desabilita);
			setDisable('idOrigemUFSelecionados', desabilita);
			setDisable('idJulgadorOrgaoSelecionados', desabilita);
			setDisable('idJulgadorMinistroSelecionados', desabilita);
			setDisable('idTipoRamosDireitoSelecionados', desabilita);
			setDisable('idAdvogadoNome', false);
			setDisable('idParteAutorTemp', false);
			setDisable('idParteReuTemp', false);
			setDisable('idParteOutrosTemp', false);
		}
	}
}
function setDisable(id, valor) {
	if(document.getElementById(id)){
		document.getElementById(id).disabled = valor;
	}
}
function setVisibility(id, valor) {
	if(document.getElementById(id)){
		document.getElementById(id).style.visibility = valor;
	}
}
function trocaOpcaoFonetica(campo){
	if(document.getElementById("idTipoOperacaoFonetica")){
		document.getElementById("idTipoOperacaoFonetica").value = campo.value;//alert(document.getElementById("idTipoOperacaoFonetica").value);
	}
}
function setFoneticaOpcao(){
	if(document.getElementById('idComboTipoOperacaoFoneticaPhonos') && document.getElementById('idTipoOperacaoFoneticaPhonos')){
		document.getElementById('idTipoOperacaoFoneticaPhonos').value = document.getElementById('idComboTipoOperacaoFoneticaPhonos').options[document.getElementById('idComboTipoOperacaoFoneticaPhonos').selectedIndex].value;
	}	
}
function setParteFoneticaOpcao(){
	if(document.getElementById('idChkParteFoneticaContem') && document.getElementById('idChkParteFoneticaContem').checked){
		document.getElementById('idTipoOperacaoFonetica').value = document.getElementById('idChkParteFoneticaContem').value;
	} else if(document.getElementById('idChkParteFoneticaIniciaCom') && document.getElementById('idChkParteFoneticaIniciaCom').checked){
		document.getElementById('idTipoOperacaoFonetica').value = document.getElementById('idChkParteFoneticaIniciaCom').value;
	} else if(document.getElementById('idChkParteFoneticaIgual') && document.getElementById('idChkParteFoneticaIgual').checked){
		document.getElementById('idTipoOperacaoFonetica').value = document.getElementById('idChkParteFoneticaIgual').value;//alert(document.getElementById('idTipoOperacaoFonetica').value);
	}
	var i = -1;
	while(true){
		i++;
		if(document.getElementById('idComboFoneticaPhonosParte_'+ i) && document.getElementById('idTipoOperacaoFoneticaPhonos')){
			if(document.getElementById('idComboFoneticaPhonosParte_'+ i).checked){			
				document.getElementById('idTipoOperacaoFoneticaPhonos').value = document.getElementById('idComboFoneticaPhonosParte_'+ i).value;
			}
		}else{
			break;
		}
	}
	if(document.getElementById('idTipoOperacaoFoneticaPhonos') && document.getElementById('idPhonosQuantidadeTermosPresentesParte')){
		if(document.getElementById('idTipoOperacaoFoneticaPhonos').value == '4'){
			document.getElementById('idPhonosQuantidadeTermosPresentesParte').style.display = 'inline-block';
		}else{
			document.getElementById('idPhonosQuantidadeTermosPresentesParte').style.display = 'none';
		}
	}
}
function setAdvogadoFoneticaOpcao(){
	if(document.getElementById('idChkFoneticaContem') && document.getElementById('idChkFoneticaContem').checked){
		document.getElementById('idTipoOperacaoFonetica').value = document.getElementById('idChkFoneticaContem').value;
	} else if(document.getElementById('idChkFoneticaIniciaCom') && document.getElementById('idChkFoneticaIniciaCom').checked){
		document.getElementById('idTipoOperacaoFonetica').value = document.getElementById('idChkFoneticaIniciaCom').value;
	} else if(document.getElementById('idChkFoneticaIgual') && document.getElementById('idChkFoneticaIgual').checked){
		document.getElementById('idTipoOperacaoFonetica').value = document.getElementById('idChkFoneticaIgual').value;
	}
	var i = -1;
	while(true){
		i++;
		if(document.getElementById('idComboFoneticaPhonosAdvogado_'+ i) && document.getElementById('idTipoOperacaoFoneticaPhonos')){
			if(document.getElementById('idComboFoneticaPhonosAdvogado_'+ i).checked){			
				document.getElementById('idTipoOperacaoFoneticaPhonos').value = document.getElementById('idComboFoneticaPhonosAdvogado_'+ i).value;
			}
		}else{
			break;
		}
	}
	if(document.getElementById('idTipoOperacaoFoneticaPhonos') && document.getElementById('idPhonosQuantidadeTermosPresentesAdvogado')){
		if(document.getElementById('idTipoOperacaoFoneticaPhonos').value == '4'){
			document.getElementById('idPhonosQuantidadeTermosPresentesAdvogado').style.display = 'inline-block';
		}else{
			document.getElementById('idPhonosQuantidadeTermosPresentesAdvogado').style.display = 'none';
		}
	}
}
function quandoClicaPushBotaoIncluir(idProcessoDetalhePushBotoesBloco, idPushLoginBloco, idPushForm, idLogado, idNumeroRegistro) {
	if(document.getElementById(idPushForm) && document.getElementById(idLogado) && document.getElementById(idNumeroRegistro)){
		if(document.getElementById(idLogado).value == "TRUE" || document.getElementById(idLogado).value == "true"){
//			alert(document.getElementById(idLogado).value);
			document.getElementById(idPushForm).submit();			
		}else{
			alert("Faça login antes de incluir processos no Push!");
			mostra(idPushLoginBloco);
			esconde(idProcessoDetalhePushBotoesBloco);
		}
	}
}
function quandoClicaProcessoListaGravarConsultaPushLoginBotao(){
	if(document.getElementById("idProcessoListaPushLoginFormulario") && document.getElementById("idForm") && 
			document.getElementById("idAcao") && document.getElementById("idProcessoListaPushLoginDescEmail") && document.getElementById("idProcessoListaPushLoginSenha")){
		if(document.getElementById("idProcessoListaPushLoginDescEmail").value == '' && document.getElementById("idProcessoListaPushLoginSenha").value == ''){
			alert("Digite usuário e senha!");
		}else{		
			document.getElementById("idPushLoginDescEmail").value =	document.getElementById("idProcessoListaPushLoginDescEmail").value;
			document.getElementById("idPushLoginSenha").value =	document.getElementById("idProcessoListaPushLoginSenha").value;
			if(document.getElementById("idHddPaginacaoNumPaginaAtual")){
				document.getElementById("idHddPaginacaoNumPaginaAtual").value = document.getElementById("idHddPaginacaoNumPaginaAtual").value -1;
			}
			document.getElementById("idAcao").value = "pushacessargravarprocessoconsulta";
			document.getElementById("idForm").submit();
		}
	}
}
function quandoClicaProcessoListaGravarConsultaPushBotao(){
	if(document.getElementById("idProcessoListaPushLoginFormulario") && document.getElementById("idLogado") && document.getElementById("idForm") && document.getElementById("idAcao")){
		if(document.getElementById("idLogado").value == "TRUE" || document.getElementById("idLogado").value == "true"){
			if(document.getElementById("idHddPaginacaoNumPaginaAtual")){
				document.getElementById("idHddPaginacaoNumPaginaAtual").value = document.getElementById("idHddPaginacaoNumPaginaAtual").value -1;
			}
			document.getElementById("idAcao").value = "pushgravarprocessoconsulta";
			document.getElementById("idForm").submit();
		}else{
			mostra("idPushLoginBloco");
			esconde("idPushLoginFormulario");
			esconde("idProcessoListaPushBotaoIncluir");
			if(document.getElementById("idExportacaoForaLimite") && (document.getElementById("idExportacaoForaLimite").value == "TRUE" || document.getElementById("idExportacaoForaLimite").value == "true")){//alert(document.getElementById("idExportacaoForaLimite").value);
				mostra("idPushMensagemForaLimiteBloco");
				esconde("idProcessoListaBotoesBloco");
				esconde("idPushMensagemBloco");
			}else{				
				mostra("idPushMensagemBloco");
			}
		}
	}
}
function quandoClicaProcessoListaGravarConsultaPushLoginMostraBotao() {
	esconde("idPushMensagemBloco");
	mostra("idPushLoginFormulario");
}
function quandoClicaProcessoListaGravarConsultaPushCadastroBotao() {
	window.location.href = "/processo/push/";
}
function quandoClicaProcessoListaExportacaoNovaConsulta() {
	quandoClicaNovaConsulta('idDivBlocoFormularioExtendido', 'idDivFoneticaBloco', 'idDivFormularioExtendidoLinhaBotaoNovaConsulta');
}
function quandoClicaProcessoListaExportacaoRefinar(){
	esconde("idPushLoginBloco");
	quandoClicaRefinar();
}
function quandoClicaProcessosListaMaisDetalhes(id, ids, idbotao) {
	var nums;
	nums = ids.split("|");
	var idOutrobotao, idProcessoListaParteBlocoCabecalho;
	for(var i=0; i <= nums.length; i++){
		if(nums[i] != id && document.getElementById(nums[i])){
			document.getElementById(nums[i]).style.display = 'none';
		}
		idOutrobotao = 'idProcessosListaMaisMenosDetalhes'+ nums[i];
		idProcessoListaParteBlocoCabecalho = 'idProcessoListaParteBlocoCabecalho'+ nums[i];
		if(document.getElementById(idOutrobotao) && idbotao != idOutrobotao){
			document.getElementById(idOutrobotao).value = "mais";
		}
	}
	if(document.getElementById(idbotao)){
		if(document.getElementById(idbotao).value == "mais"){
			document.getElementById(idbotao).value = "menos";
			//document.getElementById(idbotao).style.backgroundColor = "#ADC9DF";//#357ab1,#4C4F52,#ADC9DF
		} else {
			document.getElementById(idbotao).value = "mais";
			//document.getElementById(idbotao).style.backgroundColor = "#C2D2E1";
		}
	}
	mostraEsconde(id);
	mostraEsconde('idProcessoListaParteBlocoCabecalho'+ id);
}
function quandoClicaLinhaFaseMostraBlocoDocumentos(id) {
	mostraEsconde(id);
}
function quandoClicaPushLoginBotao(idForm, idEmail, idSenha) {
	if(pushValidaLogin(idEmail, idSenha)){
		frm = document.getElementById(idForm);
		frm.submit();
	}	
}
function quandoTeclaPushEnter(evento, isto, idForm, idEmail, idSenha){
	var ev = evento.keyCode;
	if(ev == 13){
		if(isto != 'undefined'){
			if(pushValidaLogin(idEmail, idSenha)){
				frm = document.getElementById(idForm);
				frm.submit();
			}
		}
	}
}
function pushValidaLogin(idEmail, idSenha){
	descEmail = document.getElementById(idEmail); 
	senha = document.getElementById(idSenha);
	if(descEmail.value == ""){
		alert("E-mail é obrigatório!");
		descEmail.focus();
		return false;
	}else{
		if(!isEmail(descEmail.value)){
			alert("E-mail não está em um formato correto!");
			descEmail.focus();
			return false;
		}
	}
	if(senha.value == ""){
		alert("Senha é obrigatória!");
		senha.focus();
		return false;
	}
	return true;
}
function mostraEsconde(id) {
	if(document.getElementById(id)){
		if(document.getElementById(id).style.display == 'none' || document.getElementById(id).style.display == ''){
			document.getElementById(id).style.display = 'block';
		} else {
			document.getElementById(id).style.display = 'none';
		}
	}	
}
function mostra(id){
	if(document.getElementById(id)){
		document.getElementById(id).style.display = 'block';
	}	
}
function esconde(id){
	if(document.getElementById(id)){
		document.getElementById(id).style.display = 'none';
	}	
}
function quandoClicaDocumentoDePauta(documentoSequencial, dataPauta) {
	window.open('/processo/revista/documento/mediado/?componente=PTA&sequencial='+ documentoSequencial, "PautaDeJulgamentos");
}
function quandoClicaDocumentoDePautaWeb(documentoSequencial) {
	window.open('/processo/pauta/buscar/?seq_documento='+ documentoSequencial, "PautaDeJulgamentos");
}
function setVisibilidadeAbaDetalhes()
{
	mostraAba('idDivDetalhes', 'idSpanAbaDetalhes');
	escondeAbas('idDivFases', 'idSpanAbaFases');
	escondeAbas('idDivDecisoes', 'idSpanAbaDecisoes');
	escondeAbas('idDivPeticoes', 'idSpanAbaPeticoes');
	escondeAbas('idDivPautas', 'idSpanAbaPautas');
	escondeAbas('idDivIndice', 'idSpanAbaIndice');
}
function setVisibilidadeAbaFases()
{
	escondeAbas('idDivDetalhes', 'idSpanAbaDetalhes');
	mostraAba('idDivFases', 'idSpanAbaFases');
	escondeAbas('idDivDecisoes', 'idSpanAbaDecisoes');
	escondeAbas('idDivPeticoes', 'idSpanAbaPeticoes');
	escondeAbas('idDivPautas', 'idSpanAbaPautas');
	escondeAbas('idDivIndice', 'idSpanAbaIndice');
}
function setVisibilidadeAbaDecisoes()
{
	escondeAbas('idDivDetalhes', 'idSpanAbaDetalhes');
	escondeAbas('idDivFases', 'idSpanAbaFases');
	mostraAba('idDivDecisoes', 'idSpanAbaDecisoes');
	escondeAbas('idDivPeticoes', 'idSpanAbaPeticoes');
	escondeAbas('idDivPautas', 'idSpanAbaPautas');
	escondeAbas('idDivIndice', 'idSpanAbaIndice');
}
function setVisibilidadeAbaPeticoes()
{
	escondeAbas('idDivDetalhes', 'idSpanAbaDetalhes');
	escondeAbas('idDivFases', 'idSpanAbaFases');
	escondeAbas('idDivDecisoes', 'idSpanAbaDecisoes');
	mostraAba('idDivPeticoes', 'idSpanAbaPeticoes');
	escondeAbas('idDivPautas', 'idSpanAbaPautas');
	escondeAbas('idDivIndice', 'idSpanAbaIndice');
}
function setVisibilidadeAbaIndice()
{
	escondeAbas('idDivDetalhes', 'idSpanAbaDetalhes');
	escondeAbas('idDivFases', 'idSpanAbaFases');
	escondeAbas('idDivDecisoes', 'idSpanAbaDecisoes');
	escondeAbas('idDivPeticoes', 'idSpanAbaPeticoes');
	escondeAbas('idDivPautas', 'idSpanAbaPautas');
	mostraAba('idDivIndice', 'idSpanAbaIndice');
}
function setVisibilidadeAbaPauta() {
	escondeAbas('idDivDetalhes', 'idSpanAbaDetalhes');
	escondeAbas('idDivFases', 'idSpanAbaFases');
	escondeAbas('idDivDecisoes', 'idSpanAbaDecisoes');
	escondeAbas('idDivPeticoes', 'idSpanAbaPeticoes');
	mostraAba('idDivPautas', 'idSpanAbaPautas');
	escondeAbas('idDivIndice', 'idSpanAbaIndice');
}
function mostraAba(pDiv, pSpan) {
	if(document.getElementById(pDiv)) document.getElementById(pDiv).style.display = displayAbaDetalhes;
	if(document.getElementById(pSpan)) document.getElementById(pSpan).className = 'classSpanAbaSelecionadaPesquisa';
}
function escondeAbas(pDiv, pSpan) {
	if(document.getElementById(pDiv)) document.getElementById(pDiv).style.display = 'none';
	if(document.getElementById(pDiv)) document.getElementById(pSpan).className = 'classSpanAbaPesquisa';
}
//depreciado
function mostraEscondeAba(pMostra, pEsconde1, pEsconde2, pEsconde3, pEsconde4, pAbaMostra, pAbaEsconde1, pAbaEsconde2, pAbaEsconde3) {
	mostraEscondeAba(pMostra, pEsconde1, pEsconde2, pEsconde3, pEsconde4, pAbaMostra, pAbaEsconde1, pAbaEsconde2, pAbaEsconde3, '');	
}
function mostraEscondeAba(pMostra, pEsconde1, pEsconde2, pEsconde3, pEsconde4, pAbaMostra, pAbaEsconde1, pAbaEsconde2, pAbaEsconde3, pAbaEsconde4) {
	if(document.getElementById(pMostra)) document.getElementById(pMostra).style.display = displayAbaDetalhes;
	if(document.getElementById(pEsconde1)) document.getElementById(pEsconde1).style.display = 'none';
	if(document.getElementById(pEsconde2)) document.getElementById(pEsconde2).style.display = 'none';
	if(document.getElementById(pEsconde3)) document.getElementById(pEsconde3).style.display = 'none';
	if(document.getElementById(pEsconde4)) document.getElementById(pEsconde4).style.display = 'none';
	
	if(document.getElementById(pAbaMostra)) document.getElementById(pAbaMostra).className = 'classSpanAbaSelecionadaPesquisa';
	if(document.getElementById(pEsconde1)) document.getElementById(pAbaEsconde1).className = 'classSpanAbaPesquisa';
	if(document.getElementById(pEsconde2)) document.getElementById(pAbaEsconde2).className = 'classSpanAbaPesquisa';
	if(document.getElementById(pEsconde3)) document.getElementById(pAbaEsconde3).className = 'classSpanAbaPesquisa';
	if(document.getElementById(pEsconde4)) document.getElementById(pAbaEsconde4).className = 'classSpanAbaPesquisa';
}
//fim, depreciado
function quandoCarregaCorpo(){
	if(document.getElementById("idLarguraPreferncial") && document.getElementById('idDivCorpo')){
		if(parseInt(document.getElementById("idLarguraPreferncial").value) > 149){
			document.getElementById('idDivCorpo').style.width = document.getElementById("idLarguraPreferncial").value +"px";
		}
	}
	if(typeof(determinaLarguraUtil) != 'undefined'){
		determinaLarguraUtil();
	}
	getComboTipoRamosDireito().carregarTodo();
	getComboSituacoes().carregarTodo();
	getComboJulgadorOrgao().carregarTodo();
	getComboJulgadorMinistro().carregarTodo();
	getComboOrigemUF().carregarTodo();
	getComboOrgaosOrigem().carregarPreSelecionados();
	$(document).ready(function() {
//		if ($('#dv_pesquisa_satisfacao').length > 0)
//			pesquisa_satisfacao('PESPRO', '#dv_pesquisa_satisfacao');//alert('');
	});
}
function mudaLargura (quem, largura) {
	if(largura && largura != ''){
		document.getElementById(quem).style.width = largura +"px";
	}else{
		if(document.getElementById("idLarguraPreferncial") && document.getElementById(quem)){
			if(parseInt(document.getElementById("idLarguraPreferncial").value) > 149){
				document.getElementById(quem).style.width = document.getElementById("idLarguraPreferncial").value +"px";
			}
		}
	}
}
function quandoPressionaEnterNoTermo(evento){
	if(isPressionouEnter(evento)){
		tentaConsultar();
	}
}
function isPressionouEnter(evento){
	var codigo = (window.event) ? window.event.keyCode : evento.keyCode;
	if(codigo && codigo == 13){
		return true;
	}
	return false;
}
function quandoSoltaTeclaOpcaoFoneticaPhonos (e, campo) {
	setFoneticaOpcao();
	if(isPressionouEnter(e)){
		tentaConsultar();
	}	
}
function quandoTrocaOpcaoFoneticaPhonos (e, campo){
	setFoneticaOpcao();
}
function quandoTrocaOpcaoFoneticaPhonosParte (evento, campo){
	setParteFoneticaOpcao();
	if(isPressionouEnter(evento)){
		tentaConsultar();
	}
	setUsabilidade(campo);
	//trocaAjudaOpcaoFoneticaPhonosParte(campo);
}
function trocaAjudaOpcaoFoneticaPhonosParte(campo) {
	var i = 0;
	while (true) {
		i++;
		if(document.getElementById("idComboFoneticaPhonosParteAjuda_"+ i)){
			document.getElementById("idComboFoneticaPhonosParteAjuda_"+ i).style.display = 'none';
		}else{
			break;
		}
	}
	p = campo.id;
	p = p.substring(p.length -1, p.length);
	if(document.getElementById("idComboFoneticaPhonosParteAjuda_"+ p)){		
		document.getElementById("idComboFoneticaPhonosParteAjuda_"+ p).style.display = 'block';//document.getElementById("idParteNomeAjuda").style.display = 'block';
	}
}
function quandoClicaOpcoesAvancadasParteFonetica() {
	if(document.getElementById("idComboFoneticaPhonosParteOpcoes") && document.getElementById("idParteFoneticaOpcoesBloco02")){
		if(document.getElementById("idComboFoneticaPhonosParteOpcoes").checked){
			document.getElementById("idParteFoneticaOpcoesBloco02").style.display = 'block';
		}else{
			document.getElementById("idParteFoneticaOpcoesBloco02").style.display = 'none';
		}
	}//alert(document.getElementById("idComboFoneticaPhonosParteOpcoes").checked);
}
function quandoClicaOpcoesAvancadasAdvogadoFonetica(){
	if(document.getElementById("idComboFoneticaPhonosAdvogadoOpcoes") && document.getElementById("idAdvogadoFoneticaOpcoesBloco02")){
		if(document.getElementById("idComboFoneticaPhonosAdvogadoOpcoes").checked){
			document.getElementById("idAdvogadoFoneticaOpcoesBloco02").style.display = 'block';
		}else{
			document.getElementById("idAdvogadoFoneticaOpcoesBloco02").style.display = 'none';
		}
	}//alert(document.getElementById("idComboFoneticaPhonosParteOpcoes").checked);	
}
function quandoTrocaOpcaoFoneticaPhonosAdvogado (evento, campo){
	setAdvogadoFoneticaOpcao();
	if(isPressionouEnter(evento)){
		tentaConsultar();
	}
	setUsabilidade(campo);
	//trocaAjudaOpcaoFoneticaPhonosAdvogado(campo);
}
function trocaAjudaOpcaoFoneticaPhonosAdvogado(campo) {
	var i = 0;
	while (true) {
		i++;
		if(document.getElementById("idComboFoneticaPhonosAdvogadoAjuda_"+ i)){
			document.getElementById("idComboFoneticaPhonosAdvogadoAjuda_"+ i).style.display = 'none';
		}else{
			break;
		}
	}
	p = campo.id;
	p = p.substring(p.length -1, p.length);
	if(document.getElementById("idComboFoneticaPhonosAdvogadoAjuda_"+ p)){		
		document.getElementById("idComboFoneticaPhonosAdvogadoAjuda_"+ p).style.display = 'block';//document.getElementById("idParteNomeAjuda").style.display = 'block';
	}
}
function quandoTeclaEnterProcessoListaPush(evento, eu){
	if(isPressionouEnter(evento)){
		quandoClicaProcessoListaGravarConsultaPushLoginBotao();
	}
}
function quandoClicaConsultar(){
	if(document.getElementById("idTipoPesquisaSecundaria")){
		document.getElementById("idTipoPesquisaSecundaria").value = "";
	}
	tentaConsultar();
}
function quandoAlteraTipoPesquisa(){
	var selectTipoPesquisa = document.getElementById("idSelectTipoPesquisaFormulario");
	var blocoFoneticaTexto = document.getElementById("idDivFoneticaBloco");
	if(selectTipoPesquisa){
		if(selectTipoPesquisa.value == 'tipoPesquisaParteNome' && document.getElementById("idParteAutorReuBloco")){
			document.getElementById("idParteAutorReuBloco").style.display = 'block';
		}else{
			document.getElementById("idParteAutorReuBloco").style.display = 'none';
		}
		if(blocoFoneticaTexto){
			if(selectTipoPesquisa.value == 'tipoPesquisaAdvogadoNome' || selectTipoPesquisa.value == 'tipoPesquisaParteNome'){
				blocoFoneticaTexto.style.display = 'block';
			}else{
				blocoFoneticaTexto.style.display = 'none';
			}
		}
		if(document.getElementById("idClasse")){
			if(selectTipoPesquisa.value == 'tipoPesquisaNumeroProcesso'){
				document.getElementById("idClasse").style.display = 'inline-block';
			}else{
				document.getElementById("idClasse").style.display = 'none';
			}
		}
	}
}
function quandoClicaLimpar() {
	if(document.getElementById("idAplicacao")){
		window.location.href = "/processo/pesquisa/?aplicacao=" + document.getElementById("idAplicacao").value;
	}
}
function quandoClicaNovaConsulta(p, j, i) {
	if(document.getElementById("idAplicacao")){
		window.location.href = "/processo/pesquisa/?aplicacao=" + document.getElementById("idAplicacao").value;
	}
//	if(document.getElementById(p)){
//		document.getElementById(p).style.display = 'block';
//	}	
//	if(document.getElementById(j)){
//		document.getElementById(j).style.display = 'block';
//	}
//	if(document.getElementById(i)){
//		document.getElementById(i).style.display = 'none';
//	}
}
function quandoClicaMarcarTodos() {
	var spa = -1;
	var t = "";
	while(true){
		spa = spa + 1;
		t = "idSequencialParteAdvogado" + spa;
		if(document.getElementById(t)){
			document.getElementById(t).checked = true;
		}else{
			break;
		}
		if(spa == 200){
			break;
		}
	}
	if(document.getElementById("idSequenciaisParteAdvogado")){
		document.getElementById("idSequenciaisParteAdvogado").value = "-1";
	}
}
function quandoClicaDesMarcarTodos() {
	var spa = -1;
	var t = "";
	while(true){
		spa = spa + 1;
		t = "idSequencialParteAdvogado" + spa;
		if(document.getElementById(t)){
			document.getElementById(t).checked = false;
		}else{
			break;
		}
		if(spa == 200){
			break;
		}
	}
	if(document.getElementById("idSequenciaisParteAdvogado")){
		document.getElementById("idSequenciaisParteAdvogado").value = "-1";
	}
}
function quandoClicaPessoa(id) {
	setAdvogadoParteRefinamento(true);
	var tipo = (document.getElementById("idTipoPesquisaAdvogadoParteSequenciais") ? document.getElementById("idTipoPesquisaAdvogadoParteSequenciais").value : "");
	var pesquisaPossivel = false;
	var t = "idSequencialParteAdvogado" + id;
	if(document.getElementById("idSequenciaisParteAdvogado")){
		document.getElementById("idSequenciaisParteAdvogado").value = "";
	}
	if(document.getElementById(t)){
		if(document.getElementById("idSequenciaisParteAdvogado")){
			document.getElementById("idSequenciaisParteAdvogado").value += document.getElementById(t).value +",";
			pesquisaPossivel = true;
		}
	}
	if(pesquisaPossivel){
		if(document.getElementById("idHddPaginacaoNumPaginaAtual")){
			document.getElementById("idHddPaginacaoNumPaginaAtual").value = -1;
		}
		if(document.getElementById("idTipoPesquisaSecundaria")){
			if(tipo == 'tipoPesquisaParteSequenciais'){				
				document.getElementById("idTipoPesquisaSecundaria").value = "tipoPesquisaParteSequenciais";
			}else{
				document.getElementById("idTipoPesquisaSecundaria").value = "tipoPesquisaAdvogadoSequenciais";
			}
		}
		document.getElementById("idForm").submit();
	}
}
function quandoClicaPesquisarMarcados(){
	setPessoasMarcadasParaPesquisa();
	setAdvogadoParteRefinamento(false);
	if(isPesquisaPossivelPessoasMarcadas()){
		if(document.getElementById("idHddPaginacaoNumPaginaAtual")){
			document.getElementById("idHddPaginacaoNumPaginaAtual").value = -1;
		}
		setTipoPesquisaPessoasMarcadas();
		document.getElementById("idForm").submit();
	}else{
		alert("Selecione ao menos uma pessoa para pesquisa!");
	}
}
function setTipoPesquisaPessoasMarcadas() {
	var tipo = (document.getElementById("idTipoPesquisaAdvogadoParteSequenciais") && document.getElementById("idTipoPesquisaAdvogadoParteSequenciais").value != "" ? document.getElementById("idTipoPesquisaAdvogadoParteSequenciais").value : "");
	if(document.getElementById("idTipoPesquisaSecundaria")){
		if(tipo == 'tipoPesquisaParteSequenciais'){
			document.getElementById("idTipoPesquisaSecundaria").value = "tipoPesquisaParteSequenciais";
		}else{
			document.getElementById("idTipoPesquisaSecundaria").value = "tipoPesquisaAdvogadoSequenciais";
		}//alert(tipo);
	}
}
function isPesquisaPossivelPessoasMarcadas() {
	if(document.getElementById("idSequenciaisParteAdvogado") && document.getElementById("idSequenciaisParteAdvogado").value != "-1"){		
		var s = document.getElementById("idSequenciaisParteAdvogado").value.split(",");
		return s.length > 0;
	}
	return false;
}
function setPessoasMarcadasParaPesquisa() {
	var limiteMarcados = 250;
	var valido = false;
	if(document.getElementById("idSequenciaisParteAdvogado")){
		if(document.getElementById("idSequencialParteAdvogado0")){
			document.getElementById("idSequenciaisParteAdvogado").value = "";
			if(!document.getElementById("idSequencialParteAdvogado1")){//tem apenas um
				document.getElementById("idSequenciaisParteAdvogado").value += document.getElementById("idSequencialParteAdvogado0").value +",";
				valido = true;
			}else{
				var t = "";
				var spa = -1, valido = false;
				while(true){
					spa = spa + 1;
					t = "idSequencialParteAdvogado" + spa;
					if(document.getElementById(t)){
						if(document.getElementById("idSequenciaisParteAdvogado") && document.getElementById(t).checked){
							document.getElementById("idSequenciaisParteAdvogado").value += document.getElementById(t).value +",";
							valido = true;
						}
					}else{
						break;
					}
					if(spa > limiteMarcados){
						alert("É permitido marcar para pesquisa até "+ limiteMarcados +" partes ou advogados, desmarque alguns itens e tente novamente!");
						document.getElementById("idSequenciaisParteAdvogado").value = "-1";
						break;
					}
				}
			}
			if(!valido){
				document.getElementById("idSequenciaisParteAdvogado").value = "-1";
			}
		}
	}
}
function tentaConsultar(){
	if(validar()){
		if(document.getElementById("idHddPaginacaoNumPaginaAtual")){
			document.getElementById("idHddPaginacaoNumPaginaAtual").value = -1;
		}
		if(document.getElementById("idHddPaginacaofasesNumPaginaAtual")){
			document.getElementById("idHddPaginacaofasesNumPaginaAtual").value = -1;
		}
		if(document.getElementById("idHddPaginacaopeticoesNumPaginaAtual")){
			document.getElementById("idHddPaginacaopeticoesNumPaginaAtual").value = -1;
		}
		document.getElementById("idForm").submit();
	}
}
var janelaCertidaoAndamento;
function quandoClicaBotaoGerarCertidaoAndamento(registro) {
	if (janelaCertidaoAndamento) {
		if (!janelaCertidaoAndamento.closed) {
			janelaCertidaoAndamento.close();
		}
	}
	var url = '/processo/certidao/emitir?certidaoTipo=andamento&acao=emitir&num_registro=' + registro;
	parametros = 'directories=no,hotkeys=no,location=no,resizable=yes,scrollbars=no,toolbar=no,menubar=no,dependent=yes,top=0';
	janelaCertidaoAndamento = window.open(url,'STJ_Pesquisa_Processual_Certidao_Andamento', parametros);
}
function quandoClicaBotaoImprimir() {
	var controle = document.getElementById('idVisualizarImpressao');
	if(controle){
		if(controle.checked){
			controle.checked = false;
		}else{
			controle.checked = true;
		}
	}
	quandoClicaVisualizarParaImpressao();
}
function quandoClicaImprir(){
	window.print();
}
//idVisualizarImpressaoLinha
//idVisualizarImpressaoItens
function quandoClicaVisualizarParaImpressao(){
	var controle = document.getElementById('idVisualizarImpressao');
	
	var areaProcessoDetalheBotoesBloco = document.getElementById('idProcessoDetalheBotoesBloco');
	var areaVisualizarImpressaoLinha = document.getElementById('idVisualizarImpressaoLinha');
	var areaDivAbas = document.getElementById('idDivAbas');
	var	areaAreaTitulo = document.getElementById('idAreaTitulo') ? document.getElementById('idAreaTitulo') : document.getElementById('idInterfaceVisualAreaTitulo');;
	var areaDivcabecalho = document.getElementById('divcabecalho') ? document.getElementById('divcabecalho') : document.getElementById('idInterfaceVisualCabecalhoBlocoExterno');//no responsivo trocar por idInterfaceVisualCabecalhoBlocoExterno
	var areaDivRodapeMovel = document.getElementById('divRodape') ? document.getElementById('divRodape') : document.getElementById('idInterfaceVisualMinimoRodape');
	var areaRodape = document.getElementById('idRodape') ? document.getElementById('idRodape') : document.getElementById('idInterfaceVisualRodape');
	var areaDivcabecalhoMovel = document.getElementById('divCabecalho') ? document.getElementById('divCabecalho') : document.getElementById('idInterfaceVisualMinimoCabecalhoBlocoExterno');//idInterfaceVisualCabecalhoBlocoExterno
	var areaInterfaceVisualAreaEsquerdaBlocoMenuBanners = document.getElementById('idInterfaceVisualAreaEsquerdaBlocoMenuBanners');
	var areaDivLinhaFormulario = document.getElementById('idDivLinhaFormulario');
	var areaProcessoDetalhePushBotoesBloco = document.getElementById('idProcessoDetalhePushBotoesBloco');//idProcessoDetalhePushBotoesBloco
	var areaPushLoginBloco = document.getElementById('idPushLoginBloco');
	var areaAreaRota = document.getElementById('idAreaRota') ? document.getElementById('idAreaRota') : document.getElementById('idInterfaceVisualAreaRota');
	
	var areaDivContainer = document.getElementById('idDivContainer') ? document.getElementById('idDivContainer') : document.getElementById('idInterfaceVisualAreaAreaTitulo');//.width = 'auto';
	var areaDivPrincipal = document.getElementById('divprincipal') ? document.getElementById('divprincipal') : document.getElementById('idInterfaceVisualCorpo');//.width = 'auto';//quando responsivo trocar por idInterfaceVisualCorpo;
	var areaArea = document.getElementById('idArea') ? document.getElementById('idArea') : document.getElementById('idInterfaceVisualArea');// = 'auto';
	var areaInternetBlocoEmpacotador = document.getElementById('idInternetBlocoEmpacotador') ? document.getElementById('idInternetBlocoEmpacotador') : document.getElementById('idInterfaceVisualBlocoDeMenuBannersNavegacaoAplicacao');//interface visual antiga idInternetBlocoEmpacotador, interface visual responsiva idInterfaceVisualBlocoDeMenuBannersNavegacaoAplicacao;
	var areaDivPeticoesImpressaoCabecalho = document.getElementById('idDivPeticoesImpressaoCabecalho');
	var areaDivFasesImpressaoCabecalho = document.getElementById('idDivFasesImpressaoCabecalho');
	var areaDivDecisoesImpressaoCabecalho = document.getElementById('idDivDecisoesImpressaoCabecalho');
	var areaDivDetalhesImpressaoCabecalho = document.getElementById('idDivDetalhesImpressaoCabecalho');
	var areaDivPautasImpressaoCabecalho = document.getElementById('idDivPautasImpressaoCabecalho');
	var areaAreaBlocoExterno = document.getElementById('idAreaBlocoExterno') ? document.getElementById('idAreaBlocoExterno') : document.getElementById('idInterfaceVisualAreaBlocoExterno');
	//var areaDivPeticoesImpressaoCabecalho = document.getElementById('idDivPeticoesImpressaoCabecalho');
	var areaVisualizarImpressaoItens = document.getElementById('idVisualizarImpressaoItens');
	var detalhesPartesAdvogadosProcuradores = document.getElementById('idDetalhesPartesAdvogadosProcuradores');

	var areaDivDetalhes = document.getElementById('idDivDetalhes');
	var areaDivFases = document.getElementById('idDivFases');
	var areaDivPeticoes = document.getElementById('idDivPeticoes');
	var areaDivDecisoes = document.getElementById('idDivDecisoes');
	var areaDivPautas = document.getElementById('idDivPautas');
	
	var linhaDeBotoes1 = document.getElementById('idProcessoDetalheBotoesBloco1');
	var linhaDeBotoes2 = document.getElementById('idProcessoDetalheBotoesBloco2');

	var descricaoProcessoLinha = document.getElementById('idDescricaoProcesso');
	var descricaoProcessoClasseNumeroNumeroRegistro = document.getElementById('idSpanClasseDescricaoNumeroRegistro');
	var descricaoProcessoClasseNumero = document.getElementById('idSpanClasseDescricao');
	var descricaoProcessoNumeroRegistro = document.getElementById('idSpanNumeroRegistro');
	var descricaoProcessoDataAutuacao = document.getElementById('idDataAutuacaoCabecalho');
	
	var usuarioPerfilTipolinha = document.getElementById('idUsuarioPerfilTipolinha');
	
	var bannerOuvidoria = document.getElementById('dv_pesquisa_satisfacao');
	
	if(controle){
		if(controle.checked){
			if(areaDivAbas) areaDivAbas.style.display = "none";
			if(areaAreaTitulo) areaAreaTitulo.style.display = "none";
			if(areaDivcabecalho) areaDivcabecalho.style.display = "none";
			if(areaInterfaceVisualAreaEsquerdaBlocoMenuBanners) areaInterfaceVisualAreaEsquerdaBlocoMenuBanners.style.display = "none";
			if(areaDivLinhaFormulario) areaDivLinhaFormulario.style.display = "none";
			if(areaProcessoDetalhePushBotoesBloco) areaProcessoDetalhePushBotoesBloco.style.display = "none";
			if(areaPushLoginBloco) areaPushLoginBloco.style.display = "none";
			if(areaRodape) areaRodape.style.display = "none";
			if(areaAreaRota) areaAreaRota.style.display = "none";

			//if(areaDivContainer) areaDivContainer.style.marginLeft = '0px';
			if(areaDivPrincipal) areaDivPrincipal.style.width = 'auto';
			if(areaArea) areaArea.style.width = 'auto';
			if(areaInternetBlocoEmpacotador) areaInternetBlocoEmpacotador.style.background = 'none repeat scroll 0 0 transparent';
			if(areaInternetBlocoEmpacotador) areaInternetBlocoEmpacotador.style.backgroundImage = 'none';
			if(areaInternetBlocoEmpacotador) areaInternetBlocoEmpacotador.style.backgroundColor = 'white';
			if(areaInterfaceVisualAreaEsquerdaBlocoMenuBanners) areaInterfaceVisualAreaEsquerdaBlocoMenuBanners.style.backgroundColor = 'white';

			if(areaDivPeticoesImpressaoCabecalho) areaDivPeticoesImpressaoCabecalho.style.display= 'block';
			if(areaDivFasesImpressaoCabecalho) areaDivFasesImpressaoCabecalho.style.display= 'block';
			if(areaDivDecisoesImpressaoCabecalho) areaDivDecisoesImpressaoCabecalho.style.display= 'block';
			if(areaDivDetalhesImpressaoCabecalho) areaDivDetalhesImpressaoCabecalho.style.display= 'block';
			if(areaDivPautasImpressaoCabecalho) areaDivPautasImpressaoCabecalho.style.display= 'block';
			if(areaVisualizarImpressaoItens) areaVisualizarImpressaoItens.style.display= 'inline-block';
			if(areaAreaBlocoExterno) areaAreaBlocoExterno.style.borderStyle = 'none';
			//if(areaDivDetalhes) areaDivDetalhes.style.display= 'inline-block';
			if(areaDivDetalhes) areaDivDetalhes.style.display= 'block';
			if(areaDivDetalhes) areaDivDetalhes.style.width= '100%';
			if(areaVisualizarImpressaoLinha) areaVisualizarImpressaoLinha.style.display= 'block';
			if(areaProcessoDetalheBotoesBloco) areaProcessoDetalheBotoesBloco.style.display= 'none';
			if(areaDivcabecalhoMovel) areaDivcabecalhoMovel.style.display= 'none';
			if(areaDivRodapeMovel) areaDivRodapeMovel.style.display= 'none';
			//width: 168px;
			if(linhaDeBotoes1) linhaDeBotoes1.style.display= 'none';
			if(linhaDeBotoes2) linhaDeBotoes2.style.display= 'none';
			if(detalhesPartesAdvogadosProcuradores) detalhesPartesAdvogadosProcuradores.style.maxHeight="none";
			if(areaDivPrincipal) areaDivPrincipal.style.boxShadow = "none";
			
			if(usuarioPerfilTipolinha) usuarioPerfilTipolinha.style.display= 'none';
			
			if(bannerOuvidoria) bannerOuvidoria.style.display= 'none';

			var descricaoProcessoLinhaCorDeFundo = '#e9e9e9';//#313131
			var descricaoProcessoLinhaCorDoTexto = '#414f55';
			if(descricaoProcessoLinha) descricaoProcessoLinha.style.backgroundColor = descricaoProcessoLinhaCorDeFundo;
			if(descricaoProcessoClasseNumeroNumeroRegistro) descricaoProcessoClasseNumeroNumeroRegistro.style.backgroundColor = descricaoProcessoLinhaCorDeFundo;
			if(descricaoProcessoClasseNumero) descricaoProcessoClasseNumero.style.backgroundColor = descricaoProcessoLinhaCorDeFundo;
			if(descricaoProcessoNumeroRegistro) descricaoProcessoNumeroRegistro.style.backgroundColor = descricaoProcessoLinhaCorDeFundo;
			if(descricaoProcessoDataAutuacao) descricaoProcessoDataAutuacao.style.backgroundColor = descricaoProcessoLinhaCorDeFundo;
			if(descricaoProcessoClasseNumero) descricaoProcessoClasseNumero.style.color = descricaoProcessoLinhaCorDoTexto;
			if(descricaoProcessoNumeroRegistro) descricaoProcessoNumeroRegistro.style.color = descricaoProcessoLinhaCorDoTexto;
			if(descricaoProcessoDataAutuacao) descricaoProcessoDataAutuacao.style.color = descricaoProcessoLinhaCorDoTexto;
		}else{
			if(areaDivAbas) areaDivAbas.style.display = "block";
			if(areaAreaTitulo) areaAreaTitulo.style.display = "block";
			//if(areaDivLinhaFormulario) areaDivLinhaFormulario.style.display = "block";
			if(areaProcessoDetalhePushBotoesBloco) areaProcessoDetalhePushBotoesBloco.style.display = "block";
			//if(areaPushLoginBloco) areaPushLoginBloco.style.display = "block";	
			if(areaAreaRota) areaAreaRota.style.display = "block";
			
			//if(areaDivContainer) areaDivContainer.style.marginLeft = '169px';
			if(areaDivPrincipal) areaDivPrincipal.style.width = '1187px';//779
			if(areaArea) areaArea.style.width = 'auto';
			if(areaInternetBlocoEmpacotador) areaInternetBlocoEmpacotador.style.background = 'none repeat scroll 0 0 transparent';
			if(areaInternetBlocoEmpacotador) areaInternetBlocoEmpacotador.style.backgroundImage = 'none';
			//if(areaInternetBlocoEmpacotador) areaInternetBlocoEmpacotador.style.backgroundColor = '#fff';#003366
			
			if(areaDivPeticoesImpressaoCabecalho) areaDivPeticoesImpressaoCabecalho.style.display= 'none';
			if(areaDivFasesImpressaoCabecalho) areaDivFasesImpressaoCabecalho.style.display= 'none';
			if(areaDivDecisoesImpressaoCabecalho) areaDivDecisoesImpressaoCabecalho.style.display= 'none';
			if(areaDivDetalhesImpressaoCabecalho) areaDivDetalhesImpressaoCabecalho.style.display= 'none';
			if(areaDivPautasImpressaoCabecalho) areaDivPautasImpressaoCabecalho.style.display= 'none';
			if(areaVisualizarImpressaoItens) areaVisualizarImpressaoItens.style.display= 'none';
			//if(areaAreaBlocoExterno) areaAreaBlocoExterno.style.borderStyle = 'solid';
			
			if(areaDivFases) areaDivFases.style.display= 'none';
			if(areaDivPeticoes) areaDivPeticoes.style.display= 'none';
			if(areaDivDecisoes) areaDivDecisoes.style.display= 'none';
			if(areaDivPautas) areaDivPautas.style.display= 'none';
			if(areaVisualizarImpressaoLinha) areaVisualizarImpressaoLinha.style.display= 'none';
			if(areaProcessoDetalheBotoesBloco) areaProcessoDetalheBotoesBloco.style.display= 'block';

			if(linhaDeBotoes1) linhaDeBotoes1.style.display= 'block';
			if(linhaDeBotoes2) linhaDeBotoes2.style.display= 'block';

			escondeAbas('idDivFases', 'idSpanAbaFases');
			escondeAbas('idDivPeticoes', 'idSpanAbaPeticoes');
			escondeAbas('idDivPautas', 'idSpanAbaPautas');
			mostraAba('idDivDetalhes', 'idSpanAbaDetalhes');
			'idDivDecisoes', 'idSpanAbaDecisoes'
			if(areaDivcabecalho) areaDivcabecalho.style.display = "block";
//			if(areaDivRodapeMovel) areaDivRodapeMovel.style.display= 'block';
			if(areaRodape) areaRodape.style.display = "block";
//			if(areaDivcabecalhoMovel) areaDivcabecalhoMovel.style.display= 'block';
			if(areaInterfaceVisualAreaEsquerdaBlocoMenuBanners) areaInterfaceVisualAreaEsquerdaBlocoMenuBanners.style.display = "inline-block";
			if(areaInterfaceVisualAreaEsquerdaBlocoMenuBanners) areaInterfaceVisualAreaEsquerdaBlocoMenuBanners.style.backgroundColor = '#fff';//#003366
			if(areaDivPrincipal) areaDivPrincipal.style.boxShadow = "0 0 8px #999999";
			
			if(usuarioPerfilTipolinha) usuarioPerfilTipolinha.style.display= 'block';
			
			if(bannerOuvidoria) bannerOuvidoria.style.display= 'block';
			
			var descricaoProcessoLinhaCorDeFundo = '#414f55';//#313131
			var descricaoProcessoLinhaCorDoTexto = '#ffffff';
			if(descricaoProcessoLinha) descricaoProcessoLinha.style.backgroundColor = descricaoProcessoLinhaCorDeFundo;
			if(descricaoProcessoClasseNumeroNumeroRegistro) descricaoProcessoClasseNumeroNumeroRegistro.style.backgroundColor = descricaoProcessoLinhaCorDeFundo;
			if(descricaoProcessoClasseNumero) descricaoProcessoClasseNumero.style.backgroundColor = descricaoProcessoLinhaCorDeFundo;
			if(descricaoProcessoNumeroRegistro) descricaoProcessoNumeroRegistro.style.backgroundColor = descricaoProcessoLinhaCorDeFundo;
			if(descricaoProcessoDataAutuacao) descricaoProcessoDataAutuacao.style.backgroundColor = descricaoProcessoLinhaCorDeFundo;
			if(descricaoProcessoClasseNumero) descricaoProcessoClasseNumero.style.color = descricaoProcessoLinhaCorDoTexto;
			if(descricaoProcessoNumeroRegistro) descricaoProcessoNumeroRegistro.style.color = descricaoProcessoLinhaCorDoTexto;
			if(descricaoProcessoDataAutuacao) descricaoProcessoDataAutuacao.style.color = descricaoProcessoLinhaCorDoTexto;

			if(typeof(determinaLarguraUtil) != 'undefined'){janelaLarguraUtil = 0;determinaLarguraUtil();}
		}
	}
}
function quandoClicaVisualizarParaImpressaoItemFases(){
	var area = document.getElementById('idDivFases');
	var controle = document.getElementById('idVisualizarImpressaoItemFases');
	if(area && controle){
		if(controle.checked){
			area.style.display = "block";
		}else{
			area.style.display = "none";
		}
	}
}

function quandoClicaVisualizarParaImpressaoItemPeticoes(){
	var area = document.getElementById('idDivPeticoes');
	var controle = document.getElementById('idVisualizarImpressaoItemPeticoes');
	if(area && controle){
		if(controle.checked){
			area.style.display = "block";
		}else{
			area.style.display = "none";
		}
	}
}
function quandoClicaVisualizarParaImpressaoItemPautas() {
	var area = document.getElementById('idDivPautas');
	var controle = document.getElementById('idVisualizarImpressaoItemPautas');
	if(area && controle){
		if(controle.checked){
			area.style.display = "block";
		}else{
			area.style.display = "none";
		}
	}	
}
function quandoClicaVisualizarParaImpressaoItemDecisoes(){	
	var area = document.getElementById('idDivDecisoes');
	var controle = document.getElementById('idVisualizarImpressaoItemDecisoes');
	if(area && controle){
		if(controle.checked){
			area.style.display = "block";
		}else{
			area.style.display = "none";
		}
	}
}
function quandoClicaListarProcessosSomenteAtivos(){
	if(document.getElementById("idListarProcessosAtivosSomente") && document.getElementById("idListarProcessosAtivosSomenteTemp")){
		if(document.getElementById("idListarProcessosAtivosSomenteTemp").checked){
			document.getElementById("idListarProcessosAtivosSomente").value = "TRUE";
		}else{
			document.getElementById("idListarProcessosAtivosSomente").value = "FALSE";
		}
	}
}
function quandoClicaListarProcessosOrdemCrescente(){
	if(document.getElementById("idListarProcessosOrdemDescrecente") && document.getElementById("idListarProcessosOrdemDescrecenteTemp")){
		if(document.getElementById("idListarProcessosOrdemDescrecenteTemp").checked){
			document.getElementById("idListarProcessosOrdemDescrecente").value = "TRUE";
		}else{
			document.getElementById("idListarProcessosOrdemDescrecente").value = "FALSE";
		}
	}
}
function quandoClicaListarProcessosEletronicosSomente(){
	if(document.getElementById("idListarProcessosEletronicosSomente") && document.getElementById("idListarProcessosEletronicosSomenteTemp")){
		if(document.getElementById("idListarProcessosEletronicosSomenteTemp").checked){
			document.getElementById("idListarProcessosEletronicosSomente").value = "TRUE";
		}else{
			document.getElementById("idListarProcessosEletronicosSomente").value = "FALSE";
		}
	}
}
function validar(){
	var select = null;
	if(document.getElementById("idSelectTipoPesquisaFormulario")){
		select = document.getElementById("idSelectTipoPesquisaFormulario");	
	}
	var termoTemp = "";
	if(document.getElementById("idCampoPesquisarTempFormulario")){
		termoTemp = document.getElementById("idCampoPesquisarTempFormulario").value;		
	}
	if(document.getElementById("idCampoPesquisarFormulario")){
		document.getElementById("idCampoPesquisarFormulario").value = termoTemp;
	}
	var termo = "";
	if(document.getElementById("idCampoPesquisarFormulario")){
		termo = document.getElementById("idCampoPesquisarFormulario").value;
	}
	if(select && termo){
		if(termo && termo == ''){
			alert("Termo de pesquisa não pode ser vazio!");
			return false;
		}
		if(select.value == "tipoPesquisaNumeroProcesso"){
			if(!validaNumeroProcesso(termo)){
				return false;
			}
		}else if(select.value == "tipoPesquisaNumeroRegistro"){//1992/0006086-2
			if(!validaNumeroRegistro(termo)){
				return false;
			}
		}else if(select.value == "tipoPesquisaNumeroUnico"){
			if(!validaNumeroUnico(termo)){
				return false;
			}
		}else if(select.value == "tipoPesquisaNumeroOrigem"){
			if(!validaNumeroOriginario(termo)){
				return false;
			}
		}else if(select.value == "tipoPesquisaAdvogadoCodigo"){
			reformataCodOab(termo, document.getElementById("idCampoPesquisarFormulario"));
			if(!validaCodigoOab(termo)){
				return false;
			}
		}else if(select.value == "tipoPesquisaAdvogadoNome"){
			if(!validaAdvogadoNome(termo)){
				return false;
			}
		}else if(select.value == "tipoPesquisaParteNome"){
			if(!validaParteNome(termo)){
				return false;
			}
		}
	} else {
		var temCampoPreenchido = false;
		if(document.getElementById("idNumeroProcesso") && document.getElementById("idNumeroProcesso").value != ""){
			temCampoPreenchido = true;
			if(!validaNumeroProcesso(document.getElementById("idNumeroProcesso").value)){
				return false;
			}
		} 
		if(document.getElementById("idNumeroRegistro") && document.getElementById("idNumeroRegistro").value != ""){
			temCampoPreenchido = true;
			if(!validaNumeroRegistro(document.getElementById("idNumeroRegistro").value)){
				return false;
			}
		}
		if(document.getElementById("idNumeroUnico") && document.getElementById("idNumeroUnico").value != ""){
			temCampoPreenchido = true;
			if(!validaNumeroUnico(document.getElementById("idNumeroUnico").value)){
				return false;
			}
		}
		if(document.getElementById("idNumeroOriginario") && trim(document.getElementById("idNumeroOriginario").value) != ""){
			temCampoPreenchido = true;
			if(!validaNumeroOriginario(document.getElementById("idNumeroOriginario").value)){
				return false;
			}
		}
		if(document.getElementById("idAdvogadoCodigo") && document.getElementById("idAdvogadoCodigo").value != ""){
			temCampoPreenchido = true;
			reformataCodOab(document.getElementById("idAdvogadoCodigo").value, document.getElementById("idAdvogadoCodigo"));
			if(!validaCodigoOab(document.getElementById("idAdvogadoCodigo").value)){
				return false;
			}
		}
		if(document.getElementById("idParteNome") && trim(document.getElementById("idParteNome").value) != "" && 
			document.getElementById("idAdvogadoNome") && trim(document.getElementById("idAdvogadoNome").value) != ""){
			if((document.getElementById("idChkFoneticaIgual") && !document.getElementById("idChkFoneticaIgual").checked &&
				document.getElementById("idChkParteFoneticaIgual") && !document.getElementById("idChkParteFoneticaIgual").checked) ||
				(document.getElementById("idComboFoneticaPhonosParte") && document.getElementById("idComboFoneticaPhonosParte").value != -2 &&
				document.getElementById("idComboFoneticaPhonosAdvogado") && document.getElementById("idComboFoneticaPhonosAdvogado").value != -2)){
				alert("Não é possível pesquisar por ambos nome de advogado e nome da parte!");
				return false;
			}
		}
		if(document.getElementById("idParteNome") && trim(document.getElementById("idParteNome").value) != ""){
			temCampoPreenchido = true;
			if(!validaParteNome(document.getElementById("idParteNome").value)){
				return false;
			}
		}
		if(document.getElementById("idAdvogadoNome") && trim(document.getElementById("idAdvogadoNome").value) != ""){
			temCampoPreenchido = true;
			if(!validaAdvogadoNome(document.getElementById("idAdvogadoNome").value)){
				return false;
			}
		}
		if(document.getElementById("idOrigemOrgaosSelecionados") && document.getElementById("idOrigemOrgaosSelecionados").value != ""){
			temCampoPreenchido = true;
		}
		if(document.getElementById("idOrigemUFSelecionados") && document.getElementById("idOrigemUFSelecionados").value != ""){
			temCampoPreenchido = true;
		}
		if(document.getElementById("idJulgadorOrgaoSelecionados") && document.getElementById("idJulgadorOrgaoSelecionados").value != ""){
			temCampoPreenchido = true;
		}
		if(document.getElementById("idJulgadorMinistroSelecionados") && document.getElementById("idJulgadorMinistroSelecionados").value != ""){
			temCampoPreenchido = true;
		}
		if(document.getElementById("idTipoRamosDireitoSelecionados") && document.getElementById("idTipoRamosDireitoSelecionados").value != ""){
			temCampoPreenchido = true;
		}
		if(document.getElementById("idSituacoesSelecionadas") && document.getElementById("idSituacoesSelecionadas").value != ""){
			temCampoPreenchido = true;
		}
		if(document.getElementById("idSequenciaisParteAdvogado") && 
				document.getElementById("idSequenciaisParteAdvogado").value != "-1" && 
					trim(document.getElementById("idSequenciaisParteAdvogado").value) != ""){
				temCampoPreenchido = true;
		}
		if(!temCampoPreenchido &&
				document.getElementById("idMaximaDiferencaEntreDataAutuacaoInicialFinal") && document.getElementById("idMaximaDiferencaEntreDataAutuacaoInicialFinal").value != "" &&
				document.getElementById("idDataAutuacaoFinal") && document.getElementById("idDataAutuacaoFinal").value != "" && isDate(document.getElementById("idDataAutuacaoFinal").value) &&
				document.getElementById("idDataAutuacaoInicial") && document.getElementById("idDataAutuacaoInicial").value != "" && isDate(document.getElementById("idDataAutuacaoInicial").value)){
			if(diferencaDeDiasEntreDatas(document.getElementById("idDataAutuacaoInicial").value, document.getElementById("idDataAutuacaoFinal").value) > parseInt(document.getElementById("idMaximaDiferencaEntreDataAutuacaoInicialFinal").value)){
				alert("Data de autuação inicial e final não podem representar período maior que " + document.getElementById("idMaximaDiferencaEntreDataAutuacaoInicialFinal").value + " dia(s).");
				return false;
			}
		}
		if(document.getElementById("idDataAutuacaoFinal") && document.getElementById("idDataAutuacaoFinal").value != ""){
			temCampoPreenchido = true;
			if(!isDate(document.getElementById("idDataAutuacaoFinal").value)){
				return false;
			}
		}
		if(document.getElementById("idDataAutuacaoInicial") && document.getElementById("idDataAutuacaoInicial").value != ""){
			temCampoPreenchido = true;
			if(!isDate(document.getElementById("idDataAutuacaoInicial").value)){
				return false;
			}
		}
		if(!temCampoPreenchido &&
				document.getElementById("idMaximaDiferencaEntreDataPublicacaoInicialFinal") && document.getElementById("idMaximaDiferencaEntreDataPublicacaoInicialFinal").value != "" &&
				document.getElementById("idDataPublicacaoFinal") && document.getElementById("idDataPublicacaoFinal").value != "" && isDate(document.getElementById("idDataPublicacaoFinal").value) &&
				document.getElementById("idDataPublicacaoInicial") && document.getElementById("idDataPublicacaoInicial").value != "" && isDate(document.getElementById("idDataPublicacaoInicial").value)){
			if(diferencaDeDiasEntreDatas(document.getElementById("idDataPublicacaoInicial").value, document.getElementById("idDataPublicacaoFinal").value) > parseInt(document.getElementById("idMaximaDiferencaEntreDataPublicacaoInicialFinal").value)){
				alert("Data de publicação inicial e final não podem representar período maior que " + document.getElementById("idMaximaDiferencaEntreDataPublicacaoInicialFinal").value + " dia(s).");
				return false;
			}
		}
		if(document.getElementById("idDataPublicacaoFinal") && document.getElementById("idDataPublicacaoFinal").value != ""){
			temCampoPreenchido = true;
			if(!isDate(document.getElementById("idDataPublicacaoFinal").value)){
				return false;
			}
		}
		if(document.getElementById("idDataPublicacaoInicial") && document.getElementById("idDataPublicacaoInicial").value != ""){
			temCampoPreenchido = true;
			if(!isDate(document.getElementById("idDataPublicacaoInicial").value)){
				return false;
			}
		}
		if(!temCampoPreenchido &&
				document.getElementById("idMaximaDiferencaEntrePautaDataPublicacaoInicialFinal") && document.getElementById("idMaximaDiferencaEntrePautaDataPublicacaoInicialFinal").value != "" &&
				document.getElementById("idPautaDataPublicacaoFinal") && document.getElementById("idPautaDataPublicacaoFinal").value != "" && isDate(document.getElementById("idPautaDataPublicacaoFinal").value) &&
				document.getElementById("idPautaDataPublicacaoInicial") && document.getElementById("idPautaDataPublicacaoInicial").value != "" && isDate(document.getElementById("idPautaDataPublicacaoInicial").value)){
			if(diferencaDeDiasEntreDatas(document.getElementById("idPautaDataPublicacaoInicial").value, document.getElementById("idPautaDataPublicacaoFinal").value) > parseInt(document.getElementById("idMaximaDiferencaEntrePautaDataPublicacaoInicialFinal").value)){
				alert("Data de pauta inicial e final não podem representar período maior que " + document.getElementById("idMaximaDiferencaEntrePautaDataPublicacaoInicialFinal").value + " dia(s).");
				return false;
			}
		}
		if(document.getElementById("idPautaDataPublicacaoFinal") && document.getElementById("idPautaDataPublicacaoFinal").value != ""){
			temCampoPreenchido = true;
			if(!isDate(document.getElementById("idPautaDataPublicacaoFinal").value)){
				return false;
			}
		}
		if(document.getElementById("idPautaDataPublicacaoInicial") && document.getElementById("idPautaDataPublicacaoFinal").value != ""){
			temCampoPreenchido = true;
			if(!isDate(document.getElementById("idPautaDataPublicacaoInicial").value)){
				return false;
			}
		}
		if(!temCampoPreenchido){
			alert("Ao menos um campo deve ser preenchido!");
			return false;
		}
	}
	return true;;
}
function validaAdvogadoNome(p) {
	return true;
}
function validaParteNome(p) {
	return true;
}
function validaCodigoOab(p){
	return isCodOabValida(p);
}
function validaNumeroOriginario(p) {
	if(p && p.length < 1){
		alert("Número originário não pode ser vazio!");
		return false;
	}
	if(p && p.length > 50){
		alert("Número originário não pode ter mais de 50 caracteres!");
		return false;
	}
	return true;
}
function validaNumeroProcesso(p){
	var numeros = getLetrasOuNumeros(trim(p), 'N');
	numeros = numeros.trim();
	var letras = getLetrasOuNumeros(trim(p), 'L');
	if(p && numeros && (numeros.length > 8 || numeros.length == 0)){
		alert("Número de processo deve ter no máximo 8 dígitos!");
		return false;
	}
	if(numeros.length == 0){
		alert("Número de processo deve ser informado!");
		return false;
	}
	if(!letras && !numeros || ((letras && letras.length == 0) && (numeros && numeros.length == 0))){
		alert("Número de processo inválido!");
		return false;
	}
	if((letras && letras.length > 0 && document.getElementById('idProcessoClassesSiglas'))){
		var siglas = document.getElementById('idProcessoClassesSiglas').value;
		if(siglas.length > 0){
			var s = siglas.split(","), h = "";
			for(var i=0; i < s.length; i++){
				if(s[i] && s[i] != ''){
					if(s[i].toUpperCase() == letras.toUpperCase()){
						return true;
					}
					if(i % 8 == 0){
						h +="\n   ";
					}
					h += s[i] +", ";
				}
			}
			alert('Sigla de classe processual não reconhecida!\nAs siglas disponíveis são:   '+ h);
			return false;
		}
	}
	return true;
}
function validaNumeroUnico(p){
	//if(!isNumeroUnicoValido(p)){
	var t = "";
	if(p){
		t = retiraCaracteresNaoNumericos(p);
	}
	if(t && t.length == 20){
		return true;
	}else{
		alert("Número único inválido!");
		return false;
	}
}
function validaNumeroRegistro(termo){
	var t = retiraCaracteresNaoNumericos(termo);
	if(t.length != 12){
		alert("Para consultas com número de registro do STJ é necessário que o termo de pesquisa esteja no formato ####/#######-# ou ############.");
		return false;
	}
	return true;
}
function colocaMascaraNumeroRegistro(e , obj) {
	var evento = (window.event) ? window.event : e;
	var codigo = 0;
	if (evento && evento.keyCode){
		codigo = evento.keyCode;
	} else if (evento.which){
		codigo = evento.which;
	}
	if (codigo >= 48 && codigo <= 57){
		iTam = obj.value.length;
		if (iTam == 4){			
			obj.value = obj.value + "/";
		} 
		if (iTam == 12){			
			obj.value = obj.value + "-";
		}
	}
}
function colocaMascaraNUP(e, obj) {
	var evento = (window.event) ? window.event : e;
	var codigo = 0;
	if (evento && evento.keyCode){
		codigo = evento.keyCode;
	} else if (evento.which){
		codigo = evento.which;
	}
	if (codigo >= 48 && codigo <= 57){
		iTam = obj.value.length;
		if (iTam == 7){			
			obj.value = obj.value + "-";
		} 
		if (iTam == 10){			
			obj.value = obj.value + ".";
		} 
		if (iTam == 15){			
			obj.value = obj.value + ".";
		}
		if (iTam == 17) {
			obj.value = obj.value + ".";			
		}
		if (iTam == 20) {			
			obj.value = obj.value + ".";
		}
	}
}
function trataEntradaNumerica(obj, e) {
	var evento = (window.event) ? window.event : e;
	if (evento.keyCode == 13){		
		evento.returnValue=true;
	}else{
		if (evento.keyCode < 48 || evento.keyCode > 57){			
			evento.returnValue=false;
		}
	}
}

function quandoClicaMaisMenosBlocoNome(){
	mostraEsconde('idFormularioExtendidoBlocoNome');
	trocaIconeMaisMenosBloco('idFormularioExtendidoBlocoNome', 'idNomeBlocoIconeMaisMenos');
}
function quandoClicaMaisMenosBlocoOpcoes() {
	mostraEsconde('idFormularioExtendidoBlocoOpcoes');
	trocaIconeMaisMenosBloco('idFormularioExtendidoBlocoOpcoes', 'idOpcoesBlocoIconeMaisMenos');
} 
function quandoClicaMaisMenosBlocoData() {
	mostraEsconde('idFormularioExtendidoBlocoData');
	trocaIconeMaisMenosBloco('idFormularioExtendidoBlocoData', 'idDataBlocoIconeMaisMenos');
} 
function quandoClicaMaisMenosBlocoCodigoNumero() {
	mostraEsconde('idFormularioExtendidoBlocoCodigoNumero');
	trocaIconeMaisMenosBloco('idFormularioExtendidoBlocoCodigoNumero', 'idCodigoNumeroBlocoIconeMaisMenos');
} 
function quandoClicaMaisMenosBlocoJulgador(){
	mostraEsconde('idFormularioExtendidoBlocoJulgador');
	trocaIconeMaisMenosBloco('idFormularioExtendidoBlocoJulgador','idJulgadorBlocoIconeMaisMenos');
}
function quandoClicaMaisMenosBlocoOrigem(){
	mostraEsconde('idFormularioExtendidoBlocoOrigem');
	trocaIconeMaisMenosBloco('idFormularioExtendidoBlocoJulgador','idOrigemBlocoIconeMaisMenos');
}
function quandoClicaMaisMenosBlocoTipo(){
	mostraEsconde('idFormularioExtendidoBlocoTipo');
	trocaIconeMaisMenosBloco('idFormularioExtendidoBlocoJulgador','idTipoBlocoIconeMaisMenos');
}
function quandoClicaMaisMenosBlocoJulgadorOrigemTipo(){
	mostra('idFormularioExtendidoBlocoJulgador');
	mostra('idFormularioExtendidoBlocoOrigem');
	mostra('idFormularioExtendidoBlocoTipo');
	mostra('idFormularioExtendidoBlocoExternoJulgador');
	mostra('idFormularioExtendidoBlocoExternoOrigem');
	mostra('idFormularioExtendidoBlocoExternoTipo');
	esconde('idJulgadorOrigemTipoBlocoLabel');
}

function trocaIconeMaisMenosBloco(idBloco, idImagem) {
	if(document.getElementById(idBloco) && document.getElementById(idImagem)){
		if(document.getElementById(idBloco).style.display == "none"){
			document.getElementById(idImagem).src = "/recursos/imagens/mais.jpg";
		} else {
			document.getElementById(idImagem).src = "/recursos/imagens/menos.jpg";
		}
	}	
}

function quandoClicaBotaoCopiarColarCSV(){
	esconde('idCopiarColarTabelaBlocoExterno');
	mostra('idCopiarParaCSV');
	copiarTextoParaClipBoard('idCopiarParaCSV');	
}
function quandoClicaBotaoCopiarColarTabela(){
	esconde('idCopiarParaCSV');
	mostra('idCopiarColarTabelaBlocoExterno');
	copiarHtmlParaClipBoard('idCopiarParaTabela');
}

var janela;
function abrirDocumento(url, formato, novaJanela, idBlocoDocumento){
	if(document.getElementById(idBlocoDocumento) && document.getElementById(idBlocoDocumento).value != 'undefined'){
		url = url + '&formato=' + document.getElementById(idBlocoDocumento).value;
	}else{			
	    if (formato && formato == 'TRUE'){
	        url = url + '&formato=HTML';
		}else{
			url = url + '&formato=PDF';		
		}
	}
	if (janela) {
		if (!janela.closed) {
			janela.close();
		}
	}
	//parametros = 'directories=no,hotkeys=no,location=no,resizable=yes,scrollbars=no,toolbar=no,menubar=no,dependent=yes,top=0,left=' + vLeft + ',width=' + vLargura	+ ',height=' + (alturaUtil - 5);
	parametros = 'directories=no,hotkeys=no,location=no,resizable=yes,scrollbars=no,toolbar=no,menubar=no,dependent=yes,top=0';
	if(novaJanela && (novaJanela == 'TRUE' || novaJanela == 'true')){
		janela = window.open(url,'STJ_Pesquisa_Processual', parametros);
	}else{
		window.location.href = url;
	}
}
function quandoClicaConsultarRefinando(){
	if(!isPesquisaPossivelPessoasMarcadas()){
		//if(document.getElementById("idTipoPesquisaSecundaria")){document.getElementById("idTipoPesquisaSecundaria").value = "";}		
	}
	//alert(document.getElementById("idTipoPesquisaSecundaria").value);
	tentaConsultar();
}
function quandoClicaRefinar(){
	esconde("idProcessoListaPushBlocoExterno");
	if((document.getElementById("idChkFoneticaIgual") && document.getElementById("idChkParteFoneticaIgual").checked &&
			document.getElementById("idChkParteFoneticaIgual") && document.getElementById("idChkFoneticaIgual").checked) ||
			((document.getElementById("idComboFoneticaPhonosAdvogado") && document.getElementById("idComboFoneticaPhonosAdvogado").value == -2) ||
			(document.getElementById("idComboFoneticaPhonosParte") && document.getElementById("idComboFoneticaPhonosParte").value == -2))){// sem fon#tica
		mostra("idDivLinhaFormulario");
		mostra("idFormularioOpcoesBloco");
		esconde("idDivBlocoPaginacaoTopo");
		esconde("idBlocoLinhasProcesso");
		esconde("idDivBlocoPaginacaoBase");
		esconde("idProcessoListaBotoesBloco");
		esconde("idDivBlocoMensagem");
		esconde("idProcessoListaBotoesCopiarColar");
		esconde("idExportacaoBlocoMensagem");
		esconde("idFormularioExtendidoBlocoRegistroNumero");
		esconde("idFormularioExtendidoBlocoNumeroUnico");
		//esconde('idDivFoneticaBloco');
		setDisable("idChkParteFoneticaContem", true);
		setDisable("idChkParteFoneticaIniciaCom", true);
		setDisable("idChkFoneticaContem", true);
		setDisable("idChkFoneticaIniciaCom", true);
	}else{
		var tipo = (!document.getElementById("idTipoPesquisaAdvogadoParteSequenciais") ? "processo" : document.getElementById("idTipoPesquisaAdvogadoParteSequenciais").value == 'tipoPesquisaParteSequenciais' ? "parte" : "advogado");
		setPessoasMarcadasParaPesquisa();
		var apenasUm = document.getElementById("idSequencialParteAdvogado0") && !document.getElementById("idSequencialParteAdvogado1") ? true : false;
		setAdvogadoParteRefinamento(apenasUm);
		if(!isPesquisaPossivelPessoasMarcadas() && (tipo == "parte" || tipo == "advogado")){
			alert("Deve-se selecionar ao menos uma pessoa para refinamento!");
			return false;
		}
		if(document.getElementById("idParteNome")){
			document.getElementById("idParteNome").disabled = true;
		}
		if(document.getElementById("idAdvogadoNome")){
			document.getElementById("idAdvogadoNome").disabled = true;
		}
		mostra("idDivLinhaFormulario");
		mostra("idFormularioOpcoesBloco");
		esconde("idBotaoPesquisarFormularioExtendido");
		esconde("idDivBlocoPaginacaoTopo");
		esconde("idBlocoLinhasProcesso");
		esconde("idDivBlocoPaginacaoBase");
		esconde("idProcessoListaBotoesBloco");
		esconde("idDivBlocoMensagem");
		esconde("idProcessoListaBotoesCopiarColar");
		esconde("idExportacaoBlocoMensagem");
		esconde("idFormularioExtendidoBlocoRegistroNumero");
		esconde("idFormularioExtendidoBlocoNumeroUnico");
		if((document.getElementById("idRefinamentoAdvogado") && document.getElementById("idRefinamentoAdvogado").value != '')
				|| (document.getElementById("idRefinamentoParte") && document.getElementById("idRefinamentoParte").value != '')){
			esconde('idFormularioExtendidoParteAdvogadoFonetica');
		}
		setDisplay("idBotaoPesquisarRefinandoFormularioExtendido", "inline-block");
		if(tipo == "parte"){
			setDisplay("idFormularioExtendidoParteRefinamento", "inline-block");
			if(document.getElementById("idTipoPesquisaSecundaria")){document.getElementById("idTipoPesquisaSecundaria").value = "tipoPesquisaSecundariaRefinamentoParteSequenciais";}
		}
		if(tipo == "advogado"){
			esconde("idFormularioExtendidoBlocoAdvogadoCodigo");
			setDisplay("idFormularioExtendidoAdvogadoRefinamento", "inline-block");
			if(document.getElementById("idTipoPesquisaSecundaria")){document.getElementById("idTipoPesquisaSecundaria").value = "tipoPesquisaSecundariaRefinamentoAdvogadoSequenciais";}
		}
		if(tipo == "parte" || tipo == "advogado"){
			esconde("idBlocoPessoas");
			esconde("idDivLinhaMarcarDesmarcarTodos");
			setDisplay("idFormularioExtendidoParteAdvogadoRefinamento", "inline-block");		
			var t = "", u = "", v = "", conteudo = "";
			var spa = -1;	
			var destino = document.getElementById(tipo == "parte" ? "idFormularioExtendidoParteRefinamentoItens" : "idFormularioExtendidoAdvogadoRefinamentoItens");
			var conteudoAdvogado = "", conteudoParte = "", sequenciais = "";
			if(destino){		
				while(true){
					spa = spa + 1;//alert(spa);
					t = "idSequencialParteAdvogado" + spa;//sequencial
					u = "idValorParteAdvogado"+ spa;//nome
					v = "idCodigoParteAdvogado"+ spa;//codigo
					if(document.getElementById(t) && document.getElementById(u) && document.getElementById(v)){
						if(document.getElementById(t).checked || apenasUm){
							var sequencial = document.getElementById(t).value;
							var nome = document.getElementById(u).value;
							var codigo = document.getElementById(v).value;
							conteudo += "<div class='clsParteAdvogadoRefinamentoItem'>"+ nome + (codigo != "-1" && codigo != "0" ? "("+ codigo +")" : "") +"</div>";
							conteudoParte += sequencial +","+ codigo +","+ nome +",";
							conteudoAdvogado += sequencial +","+ codigo +","+ nome +",";
							sequenciais += sequencial +",";//alert(sequenciais);
						}
					}else{
						break;
					}
				}
				if(tipo == "parte" && document.getElementById('idRefinamentoParte')){
					document.getElementById('idRefinamentoParte').value = conteudoParte; 
				}
				if(tipo == "advogado" && document.getElementById('idRefinamentoAdvogado')){
					document.getElementById('idRefinamentoAdvogado').value = conteudoAdvogado; 
				}
				if(sequenciais && sequenciais != "" && document.getElementById('idSequenciaisParteAdvogado')){
					document.getElementById('idSequenciaisParteAdvogado').value = sequenciais;
				}
				destino.innerHTML = conteudo;
			}
		}//alert(tipo);
		if(tipo == "processo"){
			setDisable("idChkParteFoneticaContem", true);
			setDisable("idChkParteFoneticaIniciaCom", true);
			setDisable("idChkFoneticaContem", true);
			setDisable("idChkFoneticaIniciaCom", true);
			document.getElementById("idChkFoneticaIgual").checked = true;
			document.getElementById("idChkParteFoneticaIgual").checked = true;
			var origem = null;
			var destino = null;
			var conteudo = "";
			if (document.getElementById('idRefinamentoAdvogado') && document.getElementById('idRefinamentoAdvogado').value != ''){
				origem = document.getElementById('idRefinamentoAdvogado').value.split(',');
				destino = document.getElementById("idFormularioExtendidoAdvogadoRefinamentoItens");
				esconde("idFormularioExtendidoBlocoAdvogadoCodigo");
				setDisplay("idFormularioExtendidoAdvogadoRefinamento", "inline-block");
			}
			if (document.getElementById('idRefinamentoParte') && document.getElementById('idRefinamentoParte').value != ''){
				setDisplay("idFormularioExtendidoParteRefinamento", "inline-block");
				origem = document.getElementById('idRefinamentoParte').value.split(',');
				destino = document.getElementById("idFormularioExtendidoParteRefinamentoItens");
			}
			if(destino && origem && origem.length > 0){
				if(document.getElementById("idTipoPesquisaSecundaria") && 'tipoPesquisaAdvogadoSequenciais' == document.getElementById("idTipoPesquisaSecundaria").value){document.getElementById("idTipoPesquisaSecundaria").value = "tipoPesquisaSecundariaRefinamentoAdvogadoSequenciais";}
				if(document.getElementById("idTipoPesquisaSecundaria") && 'tipoPesquisaParteSequenciais' == document.getElementById("idTipoPesquisaSecundaria").value){document.getElementById("idTipoPesquisaSecundaria").value = "tipoPesquisaSecundariaRefinamentoParteSequenciais";}
				setDisplay("idFormularioExtendidoParteAdvogadoRefinamento", "inline-block");
				for(var i=0; i < origem.length; i++){
					var sequencial = origem[i];
					var codigo = (origem[i++] ? origem[i] : null);
					var nome = (origem[i++] ? origem[i] : null);
					if(nome && codigo) {					
						conteudo += "<div class='clsParteAdvogadoRefinamentoItem'>"+ nome + (codigo != "-1" && codigo != "0" ? " ("+ codigo +")" : "") +"</div>";				
					}
					if(sequencial && document.getElementById('idSequenciaisParteAdvogado')){
						document.getElementById('idSequenciaisParteAdvogado').value += sequencial +",";
					}
				}
				destino.innerHTML = conteudo;
			}
		}
	}
}
function isAdvogadoPartetRefinamentoValido() {
	return (!document.getElementById("idTipoPesquisaAdvogadoParteSequenciais") ? true : getAdvogadoPartetRefinamentoLocal().value == '-1' ? false : true); 
}
function getAdvogadoPartetRefinamentoLocal() {
	var tipo = document.getElementById("idTipoPesquisaAdvogadoParteSequenciais") ? document.getElementById("idTipoPesquisaAdvogadoParteSequenciais").value : null, local = null;
	if(tipo == 'tipoPesquisaParteSequenciais'){
		local = document.getElementById("idRefinamentoParte");
	}else{
		local = document.getElementById("idRefinamentoAdvogado");
	}
	return local;
}
function setAdvogadoParteRefinamento(apenasUm){
	var limiteSelecao = 250;
	var local = getAdvogadoPartetRefinamentoLocal();
	if(document.getElementById("idTipoPesquisaAdvogadoParteSequenciais") && local){
		var t = "";
		var spa = -1;
		local.value = "";
		while(true){
			spa = spa + 1;
			t = "idSequencialParteAdvogado" + spa;
			u = "idValorParteAdvogado" + spa;
			v = "idCodigoParteAdvogado" + spa;
			if(document.getElementById(t)){
				if(document.getElementById(t).checked || apenasUm){
					local.value += document.getElementById(t).value +","+ document.getElementById(v).value +","+ document.getElementById(u).value +",";
				}
			}else{
				break;
			}
			if(spa > limiteSelecao){
				alert("É possível selecionar até "+ limiteSelecao +" partes ou advogados, desmarque alguns itens e tente novamente!");
				local.value = "-1";
				break;
			}
		}//alert(local.value);//alert(apenasUm);
	}	
}
function FNavegaProcessosPessoas(proximo, numeroPagina){
	setAdvogadoParteRefinamento(false);
	if(isAdvogadoPartetRefinamentoValido()){
		if(typeof(FConfiguraAction) != 'undefined'){FConfiguraAction();}
		if(proximo){
			document.getElementById('idForm').VaiParaPaginaSeguinte.value = "true";
			document.getElementById('idForm').VaiParaPaginaAnterior.value = "false";
		}else{
			document.getElementById('idForm').VaiParaPaginaSeguinte.value = "false";
			document.getElementById('idForm').VaiParaPaginaAnterior.value = "true";
		}
		if(isNaN(numeroPagina)){alert('Somente números são aceitos!'); return false;}
		document.getElementById('idForm').NumPaginaAtual.value = numeroPagina;
		document.getElementById('idForm').submit();
	}
}
function FNavegaFases(proximo, numeroPagina){
if(typeof(FConfiguraAction) != 'undefined'){FConfiguraAction();}
   if(proximo){
      document.getElementById('idForm').fasesVaiParaPaginaSeguinte.value = "true";
      document.getElementById('idForm').fasesVaiParaPaginaAnterior.value = "false";
   }else{
      document.getElementById('idForm').fasesVaiParaPaginaSeguinte.value = "false";
      document.getElementById('idForm').fasesVaiParaPaginaAnterior.value = "true";
   }
   if(isNaN(numeroPagina)){alert('Somente números são aceitos!'); return false;}   document.getElementById('idForm').fasesNumPaginaAtual.value = numeroPagina;
   document.getElementById('idForm').submit();
}

function FNavegaPeticoes(proximo, numeroPagina){
if(typeof(FConfiguraAction) != 'undefined'){FConfiguraAction();}
   if(proximo){
      document.getElementById('idForm').peticoesVaiParaPaginaSeguinte.value = "true";
      document.getElementById('idForm').peticoesVaiParaPaginaAnterior.value = "false";
   }else{
      document.getElementById('idForm').peticoesVaiParaPaginaSeguinte.value = "false";
      document.getElementById('idForm').peticoesVaiParaPaginaAnterior.value = "true";
   }
   if(isNaN(numeroPagina)){alert('Somente números são aceitos!'); return false;}   document.getElementById('idForm').peticoesNumPaginaAtual.value = numeroPagina;
   document.getElementById('idForm').submit();
}

function getComboOrgaosOrigem(){
	var orgaos;
	if(typeof(orgaos) == 'undefined'){
		orgaos = new comboComPesquisa('idOrgaosOrigemValores', 'idOrgaosOrigemBlocoInterno', 'idOrgaoOrigem', 'idOrgaosOrigemItem', 'idOrgaoOrigemSelecionado', 'idOrigemOrgaosSelecionados', 'quandoEscolheUmOrgaoOrigem');
		orgaos.setClasseCss('clsOrgaosOrigemItem');
	}
	return orgaos;
}
function getOrgaoOrigemConectivo(){
	var conectivo = "E";
	if (document.getElementById ('idOrgaosOrigemConectivoOu') && document.getElementById ('idOrgaosOrigemConectivoOu').checked){
		conectivo = document.getElementById ('idOrgaosOrigemConectivoOu').value;
	} else if (document.getElementById ('idOrgaosOrigemConectivoE') && document.getElementById ('idOrgaosOrigemConectivoE').checked){
		conectivo = document.getElementById ('idOrgaosOrigemConectivoE').value;
	}
	return conectivo;
}
function quandoDigitaParaPesquisarOrgaoOrigem(){
	getComboOrgaosOrigem().pesquisar(getTermosDePesquisa(), getOrgaoOrigemConectivo());
}
function getTermosDePesquisa(){	
	var t = document.getElementById ('idOrgaosOrigemCampoParaPesquisar').value;
	t = t.replace ("  "," ");
	t = t.replace ("  "," ");
	t = t.replace ("  "," ");
	t = t.replace (" ",",");
	t = t.replace (" ",",");
	t = t.replace (" ",",");
	t = t.replace (" ",",");
	return t.split(",");
}
function quandoTrocaConectivoOrgaosOrigem(){
	getComboOrgaosOrigem().pesquisar(getTermosDePesquisa(), getOrgaoOrigemConectivo());
}
function quandoClicaMarcarTodosOrgaosOrigem(){
	getComboOrgaosOrigem().marcar(true);
}
function quandoClicaDesMarcarTodosOrgaosOrigem(){
	getComboOrgaosOrigem().desmarcar(true);	
}
function quandoEscolheUmOrgaoOrigem(pOrdem){
	getComboOrgaosOrigem().escolherUmItem(pOrdem);
}
function getComboTipoRamosDireito(){	
	var ramos;
	if(typeof(ramos) == 'undefined'){
		ramos = new comboComPesquisa('idTipoRamosDireitoValores', 'idTipoRamosDireitoBlocoInterno', 'idTipoRamosDireito', 'idTipoRamosDireitoItem', 'idTipoRamosDireitoSelecionado', 'idTipoRamosDireitoSelecionados', 'quandoEscolheUmTipoRamoDireito');
		ramos.setClasseCss('clsTipoRamosDireitoItem');
	}
	return ramos;	
}
function quandoClicaMarcarTodosRamosDireito(){
	getComboTipoRamosDireito().marcar(true);
}
function quandoClicaDesMarcarTodosRamosDireito(){
	getComboTipoRamosDireito().desmarcar(true);
}
function quandoEscolheUmTipoRamoDireito(pOrdem){
	getComboTipoRamosDireito().escolherUmItem(pOrdem);	
}
function getComboSituacoes(){
	var situacoes;
	if(typeof(situacoes) == 'undefined'){
		situacoes = new comboComPesquisa('idSituacoesValores', 'idSituacoesBlocoInterno', 'idSituacoes', 'idSituacoesItem', 'idSituacoesSelecionadas', 'idSituacoesSelecionadas', 'quandoEscolheUmaSituacao');
		situacoes.setClasseCss('clsSituacoesItem');
	}
	return situacoes;
}
function quandoClicaMarcarTodasSituacoes(){
	getComboSituacoes().marcar(true);
}
function quandoClicaDesMarcarTodasSituacoes(){
	getComboSituacoes().desmarcar(true);
}
function quandoEscolheUmaSituacao(pOrdem){
	getComboSituacoes().escolherUmItem(pOrdem);	
}
function getComboJulgadorOrgao(){
	var JulgadorOrgao;
	if(typeof(JulgadorOrgao) == 'undefined'){
		JulgadorOrgao = new comboComPesquisa('idJulgadorOrgaoValores', 'idJulgadorOrgaoBlocoInterno', 'idJulgadorOrgao', 'idJulgadorOrgaoItem', 'idJulgadorOrgaoSelecionado', 'idJulgadorOrgaoSelecionados', 'quandoEscolheUmJulgadorOrgao');
		JulgadorOrgao.setClasseCss('clsJulgadorOrgaoItem');
	}
	return JulgadorOrgao;
}
function quandoClicaMarcarTodosJulgadorOrgao(){
	getComboJulgadorOrgao().marcar(true);
}
function quandoClicaDesMarcarTodosJulgadorOrgao(){
	getComboJulgadorOrgao().desmarcar(true);	
}
function quandoEscolheUmJulgadorOrgao(pOrdem){
	getComboJulgadorOrgao().escolherUmItem(pOrdem);	
}
function getComboJulgadorMinistro(){
	var JulgadorMinistro;
	if(typeof(JulgadorMinistro) == 'undefined'){
		JulgadorMinistro = new comboComPesquisa('idJulgadorMinistroValores', 'idJulgadorMinistroBlocoInterno', 'idJulgadorMinistro', 'idJulgadorMinistroItem', 'idJulgadorMinistroSelecionado', 'idJulgadorMinistroSelecionados', 'quandoEscolheUmJulgadorMinistro');
		JulgadorMinistro.setClasseCss('clsJulgadorMinistroItem');
	}
	return JulgadorMinistro;
}
function quandoClicaMarcarTodosJulgadorMinistro(){
	getComboJulgadorMinistro().marcar(true);
}
function quandoClicaDesMarcarTodosJulgadorMinistro(){
	getComboJulgadorMinistro().desmarcar(true);	
}
function quandoEscolheUmJulgadorMinistro(pOrdem){
	getComboJulgadorMinistro().escolherUmItem(pOrdem);	
}
function getComboOrigemUF(){
	var OrigemUF;
	if(typeof(OrigemUF) == 'undefined'){
		OrigemUF = new comboComPesquisa('idOrigemUFValores', 'idOrigemUFBlocoInterno', 'idOrigemUF', 'idOrigemUFItem', 'idOrigemUFSelecionado', 'idOrigemUFSelecionados', 'quandoEscolheUmOrigemUF');
		OrigemUF.setClasseCss('clsOrigemUFItem');
	}
	return OrigemUF;
}
function quandoClicaMarcarTodosOrigemUF(){
	getComboOrigemUF().marcar(true);
}
function quandoClicaDesMarcarTodosOrigemUF(){
	getComboOrigemUF().desmarcar(true);	
}
function quandoEscolheUmOrigemUF(pOrdem){
	getComboOrigemUF().escolherUmItem(pOrdem);	
}
function quandoClicaRepetitivosGrupoRepresentativos(url) {
	window.open(url, "ProcessoRepetitivosRepresentativosGrupo");
}
function quandoClicaPesquisaProcessualPesquisaSatisfacao(){
	window.open('https://www.stj.jus.br/webstj/Pesquisa/pesquisa.asp?desc_sigla=PESPRO', 'PS', 'resizable=true,scrollbars=auto,width=550,height=800');
}
function quandoEscolhePerfilDeUsuario(){
	perfil = document.getElementById("idUsuarioPerfilTipoCombo").value;
	var vaiPara = '/processo/pesquisa/?usuarioPerfilTipo=';
	if('advogadoCerficadoDigital' == perfil){
		vaiPara = 'https://cpe.web.stj.jus.br/#/';//document.getElementById('idHostAutenticacaoCertificado').value + vaiPara + 'advogadoCerficadoDigital';
	} else if('parteCerficadoDigital' == perfil){
		vaiPara = 'https://cpe.web.stj.jus.br/#/';//document.getElementById('idHostAutenticacaoCertificado').value + vaiPara + 'parteCerficadoDigital';
	} else if('entePublicoCerficadoDigital' == perfil){
		vaiPara = 'https://cpe.web.stj.jus.br/#/';//document.getElementById('idHostAutenticacaoCertificado').value + vaiPara + 'entePublicoCerficadoDigital';
	} else if('entePublicoUsuarioSenha' == perfil){
		vaiPara = 'https://cpe.web.stj.jus.br/#/';//document.getElementById('idHostAutenticacaoUsuarioSenha').value + vaiPara + 'entePublicoUsuarioSenha';
	} else if('chaveAcesso' == perfil){
		vaiPara = 'https://cpe.web.stj.jus.br/#/chave';//document.getElementById('idHostAutenticacaoUsuarioSenha').value + vaiPara + 'chaveAcesso';
	}else {
		vaiPara = 'https://cpe.web.stj.jus.br/#/';//document.getElementById('idHostPublico').value + vaiPara + 'publico';		
	}
	if(document.getElementById("idForm") && document.getElementById("idForm").elements["num_registro"] && document.getElementById("idForm").elements["num_registro"].value != ''){
		vaiPara += '&tipoPesquisa=tipoPesquisaNumeroRegistro&termo=' + document.getElementById("idForm").elements["num_registro"].value;//alert(vaiPara);
	}
	if ('publico' == perfil)
		vaiPara='/processo/pesquisa/';
	else {
//		vaiPara='https://cpe.web.stj.jus.br/#/';
	if (confirm('A CPE será aberta em uma nova janela. Deseja continuar?'))	
		window.open(vaiPara,'CPE');
	}
//	window.location.href = vaiPara;
}
jQuery(document).ready(function($) {
	
	//console.log($(".clsLinhaPessoa").length + " partes encontradas");
	if ($(".clsLinhaPessoa").length == 1) {
		quandoClicaPessoa('0');
	}
	
	
//	$("a#idInterfaceVisualRodapeAvaliacao").attr("href","https://forms.office.com/r/RQptHmZiP6");
	if ($("#idInterfaceVisualAreaBlocoInterno").length > 0) { // Indica que é internet
	setPesquisaSatisfacaoTopo("https://forms.office.com/r/RQptHmZiP6","E ajude a aprimorar a Consulta Processual");
	if ($("#idDescricaoProcesso").length > 0) {
		$(".divPesqSatisfacaoTopo").css("margin-top", "1px");
		$(".divPesqSatisfacaoTopo").css("margin-right", "1px");
	}
	}
	$(".clsMensagemLink").click(function(){
		$(this).next(".clsMensagemConteudo").toggle();
	});
	$(".clsMensagemLink").mouseover(function(){
		$(this).next(".clsMensagemConteudo").show();
	});
	$(".clsMensagemConteudo .clsFechar").click(function(){
		$(this).parent().hide();
	});
	$(".clsMensagemConteudo").mouseover(function(){
		$(this).show();
	});
	$(".clsMensagemConteudo").mouseout(function(){
		$(this).delay(3000).hide();
	});
  
    document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new bootstrap.Popover(popover)
    })
});