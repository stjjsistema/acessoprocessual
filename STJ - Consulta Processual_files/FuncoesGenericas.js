//********************  Funções genéricas  ******************** //

//****************************************
//Área para declaração de variáveis globais
//****************************************

var larguraNaJanela = 0, alturaNaJanela = 0;

function getLetrasOuNumeros(texto, tipo){
	var tempCar = '';
	var tempNum = '';
	for (var i=0; i < texto.length; i++){
	   if(!isNaN(texto.substr(i,1))){
	     tempNum += texto.substr(i,1);
	   }else{
	     tempCar += texto.substr(i,1);
	   }
	}
	if(tipo == "L"){
    	return tempCar;
	}else{
		return tempNum;
	}
}

function getNumeros(pTexto){
	return getLetrasOuNumeros(pTexto, "N");
}

function retiraCaracteresNaoNumericos(valor){
	var novoValor = '';
	for (var i=0; i < valor.length ; i++){
		if(!isNaN(valor.substr(i,1))) novoValor = novoValor + valor.substr(i,1);
	}
	return novoValor;
}

function FormataData(campo,teclapres) {
	var tecla = teclapres.parametroCode;
	var temp = campo.value;
	var vr = "";
	if (tecla != 8 && tecla != 46)
	{
		for (var i=0 ; i < temp.length +1; i++){
			if (!isNaN(temp.substr( i , 1 ))){vr = vr + temp.substr( i , 1);}
		}
		var tam = vr.length + 1;
		if ( tam > 2 && tam < 5 )
			campo.value = vr.substr( 0, tam - 2  ) + '/' + vr.substr( tam - 2, tam );
		if ( tam >= 5 && tam <= 10 )
			campo.value = vr.substr( 0, 2 ) + '/' + vr.substr( 2, 2 ) + '/' + vr.substr( 4, 4 );
		if ( tam >= 8 )
			campo.value = vr.substr( 0, 2 ) + '/' + vr.substr( 2, 2 ) + '/' + vr.substr( 4, 4 ); 
	}
}

function FormataHora(Campo, teclapres) 
{
	var tecla = teclapres.keyCode;
	
	var vr = new String(Campo.value);
	vr = vr.replace(":", "");
	vr = vr.replace(":", "");

	var tam = vr.length + 1;
	
	if (tecla != 9 && tecla != 8) {
		if (tam > 2 && tam < 5)
			Campo.value = vr.substr(0, 2) + ':' + vr.substr(2, tam);
		if (tam >= 5 && tam < 9)
			Campo.value = vr.substr(0,2) + ':' + vr.substr(2,2) + ':' + vr.substr(4,2);
	}
}
//  12/11/2010 12:00
//  12 11 2010 1 2  0  0
//  12 34 5678 910 11 12
function FormataDataHoraMinuto(campo, teclapres) {
	var tecla = teclapres.parametroCode;
	var temp = campo.value;
	var vr = "";
	if (tecla != 8 && tecla != 46)
	{
		for (var i=0 ; i < temp.length +1; i++){
			if(temp.substr(i , 1) != ' '){
				if (!isNaN(temp.substr( i , 1 ))){vr = vr + temp.substr( i , 1);}
			}
		}
		var tam = vr.length + 1;
		if ( tam > 2 && tam < 5 )
			campo.value = vr.substr( 0, tam - 2  ) + '/' + vr.substr( tam - 2, tam );
		if ( tam >= 5 && tam < 10 )
			campo.value = vr.substr( 0, 2 ) + '/' + vr.substr( 2, 2 ) + '/' + vr.substr( 4, 4 );
		if ( tam >= 10 && tam <= 16)
			campo.value = vr.substr(0, 2) + '/' + vr.substr(2, 2) + '/' + vr.substr(4, 4) +" "+ vr.substr(8, 2) +":"+ vr.substr(10, 2);
	}
}

function parseDate(field) {
	  if (field.value.length == 10){
		  if (trim(field.value).length == 0){
		    return false;
		  }
		  var DATE = field.value;
		  if (DATE==null || DATE=='' || DATE.length==0) {
		    return false;
		  }
		  var begin = DATE.indexOf('/');
		  var last = DATE.lastIndexOf('/');
		  var dia = DATE.substr(0,begin);
		  var mes = DATE.substr((begin+1),((last-begin)-1));
		  var ano = DATE.substr((last+1));
		
		  if (!isNumber(dia) || !isNumber(mes) || !isNumber(ano) || ano.length != 4 ) {
		    alert('Preencha a Data no formato dd/mm/aaaa!');
		    field.focus();
		    return false;
		  }
		  if (ano<1 || ano>9999) {
		    alert('Data Inválida - Verifique o ano informado!');
		    field.focus();
		    return false;
		  } 
		  if (mes<1 || mes>12) {
		    alert('Data Inválida - Verifique o mês informado!');
		    field.focus();
		    return false;
		  } 
		  if (mes==1 || mes=='01' || 
		      mes==5 || mes=='05' || 
		      mes==7 || mes=='07' || 
		      mes==8 || mes=='08' || 
		      mes=='10' || 
		      mes=='12') {
		    if (dia<1 || dia>31) {
		      alert('Data Inválida - Verifique o dia informado (mês com 31 dias)!');
		      field.focus();
		      return false;
		    }
		  } else if (mes==2 || mes==02) {
		    if (dia<1 || dia>29) {
		      alert('Data Inválida - Verifique o dia informado (mês com até 29 dias)!');
		      field.focus();
		      return false;
		    }
		  } else if (mes==1 || mes==01 || 
		      mes==4 || mes=='04' || 
		      mes==9 || mes=='09' || 
		      mes=='11') {
		    if (dia<1 || dia>30) {
		      alert('Data Inválida - Verifique o dia informado (mês com 30 dias)!');
		      field.focus();
		      return false;
		    }
		  }
		} else {return false;}
		return true;
}

function isNumber(inputValue) {
	  if (inputValue != null)
	  {
		  inputStr = inputValue.toString();
		  for (var i = 0; i < inputStr.length; i++) {
			var oneChar = inputStr.charAt(i);
			if (i == 0 && oneChar == "-") {
			  continue;
			}
			if (oneChar == ".") {
			  continue;
			}
			if (oneChar == "," && !oneDecimal) {
			  oneDecimal = true;
			  continue;
			}
			if (oneChar < "0" || oneChar > "9") {
			  return false;
			}
		  }
	  }
	  return true;
}
function isTime(valor) {
	if (valor.length != 8) {
		alert("Informe a hora no formato HH:MM:SS.");
		return false;
	} else {
		if (valor.substring(2,3) != ":" || valor.substring(5,6) != ":") {
			alert("Informe a hora no formato HH:MM:SS.");
			return false;
		}
		hora = parseInt(valor.substring(0,2));
		if ((hora > 23) || (hora < 0)) {
			alert("Hora inválida.");
			return false;
		}
		minuto = parseInt(valor.substring(3,5));
		if ((minuto > 59) || (minuto < 0)) {
			alert("Hora inválida.");
			return false;
		}
		segundo = parseInt(valor.substring(6,8));
		if ((segundo > 59) || (segundo < 0)) {
			alert("Hora inválida.");
			return false;
		}
	}
	return true;
}
// Retira espaço em branco
function trim(nome) {
	tam = nome.length;
	ini = 0;
	fim = 0;
	for (var i = 0; i < tam; i++) {
		elem = nome.charAt(i);
		if (elem == " "){
			ini = ini + 1;
		} else {
			break;
		}
	}
	for (var i = 1; i < tam; i++) {
		elem = nome.charAt(tam - i);
		if (elem == " "){
			fim = fim + 1;
		} else {
			break;
		}
	}
	if (fim != 0) {
		return nome.slice(ini, -fim);
	} else {
		return nome.substr(ini);
	}
}

function getCookie(nome) {
	if (document.cookie.length > 0) {
		inicio = document.cookie.indexOf(nome + "=");
		if (inicio != -1) {
			inicio = inicio + nome.length + 1;
			fim = document.cookie.indexOf(";", inicio);
			if (fim == -1)
				fim = document.cookie.length;
			return unescape(document.cookie.substring(inicio, fim));
		}
	}
	return "";
}

function setCookie(strNome, strValor, intDias){
	setCookieCompleto(strNome, strValor, intDias, '', '');
}

function setCookieCompleto(strNome, strValor, intDias, strPath, strDominio) {
	var date = new Date();
	var expires = "";
	if (intDias) {
		date.setTime(date.getTime() + (intDias * 24 * 60 * 60 * 1000));
		expires = date.toGMTString();
	}
	if(!strPath || strPath == ''){	
		strPath = "/";
	}
	if(!strDominio || strDominio == ''){
		document.cookie = strNome + "=" + strValor +"; expires=" + expires + "; path="+ strPath;
	}else{
		document.cookie = strNome + "=" + strValor +"; expires=" + expires + "; path="+ strPath +"; domain="+ strDominio;
	}
}

function setLarguraAlturaDisponiveisNoBrowser() {
	if (typeof(window.innerWidth) == 'number') {
		// Não-IE
		larguraNaJanela = window.innerWidth;
		alturaNaJanela = window.innerHeight;
	} else if (document.documentElement
			&& (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		// Para IE 6+
		larguraNaJanela = document.documentElement.clientWidth;
		alturaNaJanela = document.documentElement.clientHeight;
	} else if (document.body
			&& (document.body.clientWidth || document.body.clientHeight)) {
		// Compativel com IE 4
		larguraNaJanela = document.body.clientWidth;
		alturaNaJanela = document.body.clientHeight;
	}
}

//As funções FProximoAnterior() e FNavega() são dependentes 
//É necessário ter estas variáveis na página original configuradas como abaixo.
//ids como uma string com separação por vírgula
//   var ids = '<%= ids %>';
//id do documento aberto
//   var id = '<%= request.getParameter("seq_documento") %>';
//construção do array
//   var idArr = ids.split(",");
//Primeiro id da lista ou id do documento aberto
//   var idInit = '<%= request.getParameter("seq_documento") %>';
//boleano definindo estado de debug ou não
//   var debug = <%= debug %>;

var fimOuInicioLista = "";

function FProximoAnterior(proximo, nome, url){
	FProximoAnterior(proximo, null, nome, url);
}

function FProximoAnterior(proximo, idIframe, nomeIframe, url){
	var o = null;
	if(idIframe && document.getElementById(idIframe)){		
		o = document.getElementById(idIframe);
	}else{
		if(nomeIframe && window.frames[nomeIframe]){
			o = window.frames[nomeIframe];
		}
	}	if (o) {
		fimOuInicioLista = "";
		id = FNavega(proximo);
		if(fimOuInicioLista == "fim") alert("Fim de lista. \n Encaminhado para o primeiro documento da lista!");
		if(fimOuInicioLista == "inicio") alert("Início de lista. \n Encaminhado para o último documento da lista!");
		o.src = url;
	}
	verificaCaptcha();
}
function FNavega(proximo){
  for (var i = 0; i < idArr.length; i++){
    if(idInit == idArr[i]){
      if(proximo) {
        if (i+1 < idArr.length){
          idInit = idArr[i + 1];
          if (debug) alert("proximo "+ idInit +"-"+ i +"-"+ idArr.length);
        }else{
          fimOuInicioLista = "fim";
          idInit = idArr[0];
        }
      }else{
        if(i > 0){
          idInit = idArr[i - 1];
          if (debug) alert("anterior "+ idInit +"-"+ i +"-"+ idArr.length);
        }else{
          fimOuInicioLista = "inicio";
          idInit = idArr[idArr.length - 1];
        }
      }
      break;
    }
  }
  return idInit;
}

function CalculaDigitoVerificadorMod97(iNumeroSequencialProcesso, iAno, iOrgaoJudiciario, iUnidadeJudiciario){
	var sSequencial, sOrgaoJudiciario, sUnidadeJudiciario, sAno, Resto1, Resto2, resultado;
	sSequencial = acrescentaZerosEsquerda(iNumeroSequencialProcesso, 7);//sete digitos completos com zero a esquerda
	sOrgaoJudiciario = acrescentaZerosEsquerda(iOrgaoJudiciario,3);//tres digitos completos com zero a esquerda
	sUnidadeJudiciario = acrescentaZerosEsquerda(iUnidadeJudiciario, 4);//quatro digitos completos com zero a esquerda
	sAno = acrescentaZerosEsquerda(iAno, 4);//quatro digitos completos com zero a esquerda
	
	Resto1 = iNumeroSequencialProcesso % 97;
	Resto2 = Resto1 +''+ sAno +''+ sOrgaoJudiciario;//CONCATENA##O
	Resto2 = parseInt(Resto2) % 97;
	//Resto2 com dois digitos com zeros a esquerda
	resultado = acrescentaZerosEsquerda(Resto2, 2) +''+ sUnidadeJudiciario + '00'; //CONCATEN##O
	
	resultado = 98 - (parseInt(resultado) % 97);
	return acrescentaZerosEsquerda(resultado, 2);//com dois digitos com zeros a esquerda
}

function ValidaMod97_P1(num){
	return ValidaMod97(num.substring(0, 7), num.substring(9, 13), num.substring(13, 16), num.substring(16, 20), num.substring(7, 9));
}

function ValidaMod97(iNumeroSequencialProcesso, iAno, iOrgaoJudiciario, iUnidadeJudiciario, Verificador){
	var sSequencial, sOrgaoJudiciario, sUnidadeJudiciario, sAno;//String
	var Resto1, Resto2, resultado;//integer
	sSequencial = acrescentaZerosEsquerda(iNumeroSequencialProcesso, 7);//sete digitos completos com zero a esquerda
	sOrgaoJudiciario = acrescentaZerosEsquerda(iOrgaoJudiciario, 3);//tres digitos completos com zero a esquerda
	sUnidadeJudiciario = acrescentaZerosEsquerda(iUnidadeJudiciario, 4);//quatro digitos completos com zero a esquerda
	sAno = acrescentaZerosEsquerda(iAno, 4);//quatro digitos completos com zero a esquerda
	
	Resto1 = iNumeroSequencialProcesso % 97;
	Resto2 = acrescentaZerosEsquerda(Resto1, 2) + sAno + sOrgaoJudiciario;
	Resto2 = parseInt(Resto2) % 97;
	resultado = acrescentaZerosEsquerda(Resto2, 2) + sUnidadeJudiciario +''+ acrescentaZerosEsquerda(Verificador,2);
	
	resultado = (parseInt(resultado) % 97);
	return (resultado == 1);
}

function acrescentaTribunalOrgao(valor, orgao){
	if(valor.length > 7){
		if(valor.substring(valor.length - 7, valor.length) != orgao){
			valor = valor + orgao;
		}
	}
	return valor;
}

function acrescentaZerosEsquerda(string, quantidade){
	for(var i = 0; i < quantidade; i++){
		string = '0' + string;
	}
	return string.substring(string.length - quantidade, string.length);
}

function validaSomenteNumeros(id_campo){
	var campo = document.getElementById(id_campo);
	var valor = campo.value;
	campo.value = getLetrasOuNumeros(valor, 'N');
}

function proximoSomenteNumeros(atual, prox, e){
	var codigo = (window.event) ? event.keyCode : e.keyCode;
	var campo = document.getElementById(atual);
	campo.value = getLetrasOuNumeros(campo.value, 'N');
	if((codigo >= 48 && codigo <= 57) || (codigo >= 96 && codigo <= 105)){
		proximo(atual, prox);
	}
}

function proximo(atual, prox){
	var e = document.getElementById(atual);
	if(e){
		maxlen = e.getAttribute("size");
		if (e.value.length >= maxlen){
		        document.getElementById(prox).focus();
		}
	}
}

//********************  FIM - Fun##es gen#ricas  ******************** //
//********************  COPIAR e COLAR  ******************** //
var isConteudoSelecionado = false;
function selecionarConteudo (el) {
	var elemToSelect = document.getElementById (el);
	try{
		if (window.getSelection) {// all browsers, except IE before version 9
			var selection = window.getSelection ();
			var rangeToSelect = document.createRange ();
			rangeToSelect.selectNodeContents (elemToSelect);
			selection.removeAllRanges();
			selection.addRange (rangeToSelect);
		} else if (document.body.createTextRange) {// Internet Explorer
			var rangeToSelect = document.body.createTextRange ();
			rangeToSelect.moveToElementText (elemToSelect);
			rangeToSelect.select ();
		}  else if (document.createRange && window.getSelection) {         
			range = document.createRange();
			range.selectNodeContents(elemToSelect);
			var sel = window.getSelection();
			sel.removeAllRanges();
			sel.addRange(range);
		}
		isConteudoSelecionado = true;
	}catch(e){//alert(e.message);
	}
}
function copiarTextoParaClipBoard(id){
	if(document.getElementById(id)){
		var elemento = document.getElementById(id);
		elemento.select();
		try{
			document.execCommand('copy');
			alert("Conteúdo selecionado e copiado para área de transferência!");
		}catch(e){
			//window.prompt("Este navegador n#o permite copiar para #rea de transfer#ncia, para copiar utilize CRTL+C e depois ENTER", elemento.value);
			alert("Este navegador não permite copiar para área de transferência, utilize CRTL+C para copiar!");
		}
	}
}
function copiarHtmlParaClipBoard(id){
	selecionarConteudo(id);
	if(isConteudoSelecionado){
		try{
			document.execCommand('copy');
			alert("Conteúdo selecionado e copiado para área de transferência!");
		}catch(e){
			alert("Este navegador não permite copiar para área de transferência, utilize CRTL+C para copiar!");
		}
	}else{
		alert("Selecione o conteúdo e utilize CRTL+C para copiar!");
	}
}
//********************  FIM - COPIAR e COLAR  ******************** //
//********************  COMBO COM PESQUISA  ******************** //
function comboComPesquisa(idOrigemDosValores, idLocalDoCombo, idControleChave, idControleItem, idControleSelecao, idControleSelecionados, pFuncaoJavaScriptOnClick){
	this.idOrigemDosValores=idOrigemDosValores;
	this.idLocalDoCombo=idLocalDoCombo;
	this.idControleSelecao=idControleSelecao;
	this.idControleChave=idControleChave; 
	this.idControleItem=idControleItem;  
	this.idControleSelecionados=idControleSelecionados;
	this.classeCss = "clsComboComPesquisa";
	this.funcaoJavaScriptOnClick = pFuncaoJavaScriptOnClick;
	this.chave = '##CHAVE##';
	this.valor = '##VALOR##';
	this.ordem = '##ORDEM##';
	this.estilo = '##ESTILO##';
	this.marcado = '##MARCADO##';
	this.getTemplate = function (){
		this.template = '<div id=\''+ this.idControleItem +''+ this.ordem +'\' class=\''+ this.classeCss +'\' style=\''+ this.estilo +'\'><a onclick=\''+ this.funcaoJavaScriptOnClick +'('+ this.ordem +')\'>';
		this.template += '<input id=\''+ this.idControleSelecao +''+ this.ordem +'\' type=\'hidden\' value=\''+ this.marcado +'\'>';
		this.template += '<input id=\''+ this.idControleChave +''+ this.ordem +'\' type=\'hidden\' value=\''+ this.chave +'\'>'+ this.valor +'</a></div>';
		return this.template;
	};
	this.setClasseCss = function (p){
		this.classeCss = p;
	};
	this.carregarTodo = function (){
		if (document.getElementById(idOrigemDosValores) && document.getElementById(idLocalDoCombo)){
			var destino = document.getElementById (idLocalDoCombo);
			var conteudo = "";
			var elementos = document.getElementById(idOrigemDosValores).value.split (',');
			var selecionados = document.getElementById(this.idControleSelecionados).value.split (',');
			var j = 0, k = 0, total = 0;
			for (var i = 0; i < elementos.length; i++){
				k = 0;
				dChave =  (elementos[i++]).toUpperCase ();
				dValor =  (elementos[i]).toUpperCase ();
				temp = this.getTemplate().replace(this.chave, dChave);
				temp = temp.replace (this.chave, dChave);
				temp = temp.replace (this.chave, dChave);
				temp = temp.replace (this.ordem, j);
				temp = temp.replace (this.ordem, j);
				temp = temp.replace (this.ordem, j);
				temp = temp.replace (this.ordem, j);
				temp = temp.replace (this.ordem, j++);
				for(var p = 0; p < selecionados.length; p++){
					if(selecionados[p] == dChave){
						temp = temp.replace (this.estilo, 'background-color:#D3D3D3');
						temp = temp.replace (this.marcado, 'TRUE');
					}
				}
				temp = temp.replace (this.estilo, '');
				temp = temp.replace (this.marcado, '');
				conteudo += temp.replace (this.valor, dValor);
			}
			destino.innerHTML = conteudo;
		}
	};
	this.carregarPreSelecionados = function (){
		if (document.getElementById(idOrigemDosValores) && document.getElementById(idLocalDoCombo) && document.getElementById(idControleSelecionados)){
			var destino = document.getElementById (idLocalDoCombo);
			var conteudo = "";
			var elementos = document.getElementById(idOrigemDosValores).value.split (',');
			var selecionados = document.getElementById(this.idControleSelecionados).value.split (',');
			var j = 0, k = 0, total = 0;
			for (var i = 0; i < elementos.length; i++){
				k = 0;
				dChave =  (elementos[i++]).toUpperCase ();
				dValor =  (elementos[i]).toUpperCase ();
				for(var p = 0; p < selecionados.length; p++){
					if(selecionados[p] == dChave){
						temp = this.getTemplate().replace(this.chave, dChave);
						temp = temp.replace (this.chave, dChave);
						temp = temp.replace (this.chave, dChave);
						temp = temp.replace (this.ordem, j);
						temp = temp.replace (this.ordem, j);
						temp = temp.replace (this.ordem, j);
						temp = temp.replace (this.ordem, j);
						temp = temp.replace (this.ordem, j++);
						temp = temp.replace (this.estilo, 'background-color:#D3D3D3');
						temp = temp.replace (this.marcado, 'TRUE');
						conteudo += temp.replace (this.valor, dValor);
					}
				}
			}
			destino.innerHTML = conteudo;
		}
	};
	this.pesquisar = function (termosDePesquisa, conectivo){
		if (document.getElementById (idOrigemDosValores) && document.getElementById (idLocalDoCombo) && termosDePesquisa && termosDePesquisa.length > 0){
			var destino = document.getElementById (idLocalDoCombo);
			var conteudo = "";
			var elementos = document.getElementById (idOrigemDosValores).value.split (',');
			var j = 0, k = 0, total = 0;
			var incluir = false;
			for (var i = 0; i < elementos.length; i++){
				k = 0;
				incluir = false;
				dChave =  (elementos[i++]).toUpperCase ();
				dValor =  (elementos[i]).toUpperCase ();
				for (var h=0; h < termosDePesquisa.length; h++){
					if (termosDePesquisa[h] && dValor.indexOf (termosDePesquisa[h].toUpperCase ()) > -1){
						k++;
					}
				}
				if(conectivo && conectivo != ""){
					incluir = (("E" == conectivo && k) == termosDePesquisa.length ? true : ("OU" == conectivo && k > 0) ? true : false);
				}else{
					incluir = (k == termosDePesquisa.length);
				}
				if (incluir){
					temp = this.getTemplate().replace(this.chave, dChave);
					temp = temp.replace (this.chave, dChave);
					temp = temp.replace (this.chave, dChave);
					temp = temp.replace (this.ordem, j);
					temp = temp.replace (this.ordem, j);
					temp = temp.replace (this.ordem, j);
					temp = temp.replace (this.ordem, j);
					temp = temp.replace (this.ordem, j++);
					conteudo += temp.replace (this.valor, dValor);
					total++;
				}
			}
			destino.innerHTML = conteudo;
			if(total == 1){
				this.escolherUmItem("0");
			}
		}
	};
	this.desmarcar = function (pTodos){
		var j = 0;
		var s = document.getElementById (this.idControleSelecao + j);
		var k = document.getElementById (this.idControleItem + j);
		if(document.getElementById(this.idControleSelecionados)) document.getElementById(this.idControleSelecionados).value = "";
		while (s)
		{
			if(pTodos){
				s.value = "FALSE";
			}
			if (s.value == "FALSE"){
				k.style.backgroundColor = "#FFF";
			}
			s = document.getElementById (this.idControleSelecao + j);
			k = document.getElementById (this.idControleItem + j);
			j++;
		}	
	};
	this.marcar = function (pTodos){
		var j = 0;
		var p = document.getElementById (this.idControleChave + j);
		var s = document.getElementById (this.idControleSelecao + j);
		var k = document.getElementById (this.idControleItem + j);
		document.getElementById (this.idControleSelecionados).value = "";
		while (p && s)
		{
			if(pTodos){
				s.value = "TRUE";
			}
			if (s.value == "TRUE"){//alert(p.id);alert(s.value);
				k.style.backgroundColor = "#D3D3D3";
				document.getElementById (this.idControleSelecionados).value += p.value + ",";
			}
			j++;
			p = document.getElementById (this.idControleChave + j);
			s = document.getElementById (this.idControleSelecao + j);
			k = document.getElementById (this.idControleItem + j);
		}
	};
	this.marcarUm = function (pIdControleSelecaoOrdem){
		var s = document.getElementById (pIdControleSelecaoOrdem);
		if (s){
			s.value == "TRUE" ? s.value = "FALSE" : s.value = "TRUE";
		}
	};
	this.escolherUmItem = function (pOrdem){
		this.marcarUm(this.idControleSelecao + pOrdem);
		this.desmarcar(false);
		this.marcar(false);
	};
}
//********************  FIM - COMBO COM PESQUISA  ******************** //
function escalarFonte(fator) {
	if (document.body.style.fontSize == "") {
		document.body.style.fontSize = "1.0em";
	}
	document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (fator * 0.1) + "em";
}

function quandoRespondeSeEhHumano() {
	var g = $("#g-recaptcha-response").val();
	$.post("/processo/setCaptcha",{ 
		"g-recaptcha-response": g 
	}, function(data, status){
		console.log(data,status);
	});
}
function verificaCaptcha() {
	$.get("/processo/setCaptcha", function(data, status){
		if (data == "valido") { 
			$("#idCaptchaLinha").hide();
			$("#validCaptcha").val("true");
		} else {
			$("#idCaptchaLinha").show();
			$("#validCaptcha").val("false");
		}
	});
}
