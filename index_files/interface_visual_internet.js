function somedivs(linha_d){
 for(var i=1;i<=parseInt(menuItensTotal,10);i++){
     if(i != linha_d) {
       document.getElementById('menu'+i).style.display = 'none';
     } else {
       if(document.getElementById('menu_pai_'+linha_d).className != 'menu_lateral_n1_ativo'){
        document.getElementById('menu'+linha_d).style.display = 'inline';
       }
       else{
        document.getElementById('menu_pai_'+linha_d).className = 'menu_lateral_n1';
        document.getElementById('menu'+linha_d).style.display = 'none';
       }
     }
  }
}

function muda_imagem(linha_d) {
  for(var i=1;i<=parseInt(menuItensTotal,10);i++){
    document.getElementById('menu_pai_'+i).className = 'menu_lateral_n1';
  }
  if(document.getElementById('menu'+linha_d).style.display == 'inline')
    document.getElementById('menu_pai_'+linha_d).className = 'menu_lateral_n1_ativo';
}

function menu_principal_over(status,obj) {
   if (obj.className == 'menu_lateral_n1_ativo') return;
   if (status == 'ativar') {
     obj.className = 'menu_lateral_n1_hover';
   } else {
     obj.className = 'menu_lateral_n1';
   }
}
function menu_sub2_over(status,obj) {
   if (obj.className == 'menu_lateral_n2_ativo') return;
   if (status == 'ativar') {
     obj.className = 'menu_lateral_n2_hover';
   } else {
     obj.className = 'menu_lateral_n2';
   }
}
//'idCabecalhoPesquisaCampo', 'idServicosPesquisaNoticiasFrm'
function quandoClicaCabecalhoPesquisaBotao(idCabecalhoPesquisaCampo, idServicosPesquisaNoticiasFrm){
	if(document.getElementById('idCabecalhoPesquisaCampo') && document.getElementById('idServicosPesquisaNoticiasFrm')){
		if(document.getElementById('idCabecalhoPesquisaCampo').value == '' || document.getElementById('idCabecalhoPesquisaCampo').value.length < 4){
			alert('Digite algum termo significativo para pesquisa!');
		}else{
			document.getElementById('idServicosPesquisaNoticiasFrm').submit();
		}
	}
}
function quandoPrecionaTeclaCabecalhoPesquisaCampo() {}
function quandoClicaInterfaceVisualAreaEsquerdaBannerNumero01() {
	window.location = 'https://www.stj.jus.br/';
}
function quandoClicaInterfaceVisualAreaEsquerdaBannerNumero02() {
	window.location = 'https://www.stj.jus.br/';
}
function quandoClicaInterfaceVisualAreaEsquerdaBannerNumero03() {
	window.location = 'https://scon.stj.jus.br/SCON/';
}
function quandoClicaInterfaceVisualAreaEsquerdaBannerNumero04() {
	window.location = 'https://ww2.stj.jus.br/processo/pesquisa/?aplicacao=processos.ea';
}
function quandoClicaInterfaceVisualAreaEsquerdaBannerNumero05() {
	window.location = 'https://ww2.stj.jus.br/estj/login.pag';
}
function quandoClicaInterfaceVisualAreaEsquerdaBannerNumero06() {
	window.location = 'https://ww2.stj.jus.br/processo/push/';
}
function desabilitaLinksSysportal() {
	var x = document.getElementsByTagName("a");
	var txt;
	for (var i = 0; i < x.length; i++) { 
		txt = '';
		for (var j = 0; j < x[i].attributes.length; j++) {
			txt = txt + x[i].attributes[j].name + ' = ' + x[i].attributes[j].value + '\n';
			if (x[i].attributes[j].name == 'href')
				if (x[i].attributes[j].value.indexOf('engine.wsp') != -1) {
					x[i].attributes[j].value = '#';
				}
		}		
	}
}
function quandoClicaInterfaceVisualCorpo() {}
function quandoClicaIrParaInicioSiteSTJ() {}
