//Devem ser chamada no load do body
function quandoCarregaCorpoParaInterfaceVisualResponsiva() {determinaLarguraUtil();}

window.onresize = function(){determinaLarguraUtil();};

var janelaLarguraUtil = -1;
var janelaAlturaVisivel = -1;

function determinaLarguraUtil() {
	var _janelaLarguraVisivel = -1;
	var _janelaAlturaVisivel = -1;
	try{
		if (document.body && document.body.offsetWidth) {
			_janelaLarguraVisivel = document.body.offsetWidth;
			_janelaAlturaVisivel = document.body.offsetHeight;
		}
		if (document.compatMode=='CSS1Compat' &&
			document.documentElement &&
			document.documentElement.offsetWidth ) {
			_janelaLarguraVisivel = document.documentElement.offsetWidth;
			_janelaAlturaVisivel = document.documentElement.offsetHeight;
		}
		if (window.innerWidth && window.innerHeight) {
			_janelaLarguraVisivel = window.innerWidth;
			_janelaAlturaVisivel = window.innerHeight;
		}
		if(_janelaLarguraVisivel < 321 && janelaLarguraUtil != 320){
			janelaLarguraUtil = 320;
			quandoAlteraLarguraUtilJanelaNavegadorPara320();//console.log('321:'+_janelaLarguraVisivel);
		}else if(_janelaLarguraVisivel > 320 && _janelaLarguraVisivel < 401 && janelaLarguraUtil != 400){
			janelaLarguraUtil = 400;
			quandoAlteraLarguraUtilJanelaNavegadorPara400();//console.log('480:'+_janelaLarguraVisivel);
		}else if(_janelaLarguraVisivel > 400 && _janelaLarguraVisivel < 481 && janelaLarguraUtil != 480){
			janelaLarguraUtil = 480;
			quandoAlteraLarguraUtilJanelaNavegadorPara480();//console.log('480:'+_janelaLarguraVisivel);
		}else if(_janelaLarguraVisivel > 480 && _janelaLarguraVisivel < 541 && janelaLarguraUtil != 540){
			janelaLarguraUtil = 540;
			quandoAlteraLarguraUtilJanelaNavegadorPara540();//console.log('600:'+_janelaLarguraVisivel);
		}else if(_janelaLarguraVisivel > 540 && _janelaLarguraVisivel < 601 && janelaLarguraUtil != 600){
			janelaLarguraUtil = 600;
			quandoAlteraLarguraUtilJanelaNavegadorPara600();//console.log('600:'+_janelaLarguraVisivel);
		}else if(_janelaLarguraVisivel > 600 && _janelaLarguraVisivel < 681 && janelaLarguraUtil != 680){
			janelaLarguraUtil = 680;
			quandoAlteraLarguraUtilJanelaNavegadorPara680();//console.log('760:'+_janelaLarguraVisivel);
		}else if(_janelaLarguraVisivel > 680 && _janelaLarguraVisivel < 761 && janelaLarguraUtil != 760){
			janelaLarguraUtil = 760;
			quandoAlteraLarguraUtilJanelaNavegadorPara760();//console.log('760:'+_janelaLarguraVisivel);
		}else if(_janelaLarguraVisivel > 760 && _janelaLarguraVisivel < 831 && janelaLarguraUtil != 830){
			janelaLarguraUtil = 830;
			quandoAlteraLarguraUtilJanelaNavegadorPara830();//console.log('900:'+_janelaLarguraVisivel);
		}else if(_janelaLarguraVisivel > 830 && _janelaLarguraVisivel < 901 && janelaLarguraUtil != 900){
			janelaLarguraUtil = 900;
			quandoAlteraLarguraUtilJanelaNavegadorPara900();//console.log('900:'+_janelaLarguraVisivel);
		}else if(_janelaLarguraVisivel > 900 && _janelaLarguraVisivel < 1001 && janelaLarguraUtil != 1000){
			janelaLarguraUtil = 1000;
			quandoAlteraLarguraUtilJanelaNavegadorPara1000();//console.log('1200:'+_janelaLarguraVisivel);
		}else if(_janelaLarguraVisivel > 1000 && _janelaLarguraVisivel < 1201 && janelaLarguraUtil != 1200){
			janelaLarguraUtil = 1200;
			quandoAlteraLarguraUtilJanelaNavegadorPara1200();//console.log('1200:'+_janelaLarguraVisivel);
		}else if(_janelaLarguraVisivel > 1200 && janelaLarguraUtil != -2){
			janelaLarguraUtil = -2;
			quandoAlteraLarguraUtilJanelaNavegadorParaMaiorQue1200();//console.log('1200:'+_janelaLarguraVisivel);
		}	
	}catch (e) {
		//document.write("O erro <b>" + e.message +"</b> aconteceu.");
		alert('O erro "' + e.message +'" aconteceu.');
	}
}
function quandoAlteraLarguraUtilJanelaNavegadorPara320(){
	if(typeof(quandoAlteraLarguraUtilJanelaNavegadorPara320FuncaoLocal) != 'undefined'){
		quandoAlteraLarguraUtilJanelaNavegadorPara320FuncaoLocal();
	}
}
function quandoAlteraLarguraUtilJanelaNavegadorPara400(){
	quandoAlteraLarguraUtilJanelaNavegadorPara320();
	if(typeof(quandoAlteraLarguraUtilJanelaNavegadorPara400FuncaoLocal) != 'undefined'){
		quandoAlteraLarguraUtilJanelaNavegadorPara400FuncaoLocal();
	}
}
//Implementar em script específico por aplicação
//function quandoAlteraLarguraUtilJanelaNavegadorPara320FuncaoLocal() {}

function quandoAlteraLarguraUtilJanelaNavegadorPara480(){
	if(typeof(quandoAlteraLarguraUtilJanelaNavegadorPara480FuncaoLocal) != 'undefined'){
		quandoAlteraLarguraUtilJanelaNavegadorPara480FuncaoLocal();
	}
}
function quandoAlteraLarguraUtilJanelaNavegadorPara540(){
	quandoAlteraLarguraUtilJanelaNavegadorPara480();
	if(typeof(quandoAlteraLarguraUtilJanelaNavegadorPara540FuncaoLocal) != 'undefined'){
		quandoAlteraLarguraUtilJanelaNavegadorPara540FuncaoLocal();
	}
}
//Implementar em script específico por aplicação
//function quandoAlteraLarguraUtilJanelaNavegadorPara480FuncaoLocal() {}

function quandoAlteraLarguraUtilJanelaNavegadorPara600(){
	if(typeof(quandoAlteraLarguraUtilJanelaNavegadorPara600FuncaoLocal) != 'undefined'){
		quandoAlteraLarguraUtilJanelaNavegadorPara600FuncaoLocal();
	}
}
function quandoAlteraLarguraUtilJanelaNavegadorPara680(){
	quandoAlteraLarguraUtilJanelaNavegadorPara600();
	if(typeof(quandoAlteraLarguraUtilJanelaNavegadorPara680FuncaoLocal) != 'undefined'){
		quandoAlteraLarguraUtilJanelaNavegadorPara680FuncaoLocal();
	}
}
//Implementar em script específico por aplicação
//function quandoAlteraLarguraUtilJanelaNavegadorPara600FuncaoLocal() {}

function quandoAlteraLarguraUtilJanelaNavegadorPara760(){
	if(typeof(quandoAlteraLarguraUtilJanelaNavegadorPara760FuncaoLocal) != 'undefined'){
		quandoAlteraLarguraUtilJanelaNavegadorPara760FuncaoLocal();
	}
}
function quandoAlteraLarguraUtilJanelaNavegadorPara830(){
	quandoAlteraLarguraUtilJanelaNavegadorPara760();
	if(typeof(quandoAlteraLarguraUtilJanelaNavegadorPara830FuncaoLocal) != 'undefined'){
		quandoAlteraLarguraUtilJanelaNavegadorPara830FuncaoLocal();
	}
}
//Implementar em script específico por aplicação
//function quandoAlteraLarguraUtilJanelaNavegadorPara760FuncaoLocal() {}

function quandoAlteraLarguraUtilJanelaNavegadorPara900(){
	if(typeof(quandoAlteraLarguraUtilJanelaNavegadorPara900FuncaoLocal) != 'undefined'){
		quandoAlteraLarguraUtilJanelaNavegadorPara900FuncaoLocal();
	}
}
function quandoAlteraLarguraUtilJanelaNavegadorPara1000(){
	quandoAlteraLarguraUtilJanelaNavegadorPara900();
	if(typeof(quandoAlteraLarguraUtilJanelaNavegadorPara1000FuncaoLocal) != 'undefined'){
		quandoAlteraLarguraUtilJanelaNavegadorPara1000FuncaoLocal();
	}
}
//Implementar em script específico por aplicação
//function quandoAlteraLarguraUtilJanelaNavegadorPara900FuncaoLocal() {}

function quandoAlteraLarguraUtilJanelaNavegadorPara1200(){
	quandoAlteraLarguraUtilJanelaNavegadorPara900();
}
function quandoAlteraLarguraUtilJanelaNavegadorParaMaiorQue1200() {
	quandoAlteraLarguraUtilJanelaNavegadorPara900();
}