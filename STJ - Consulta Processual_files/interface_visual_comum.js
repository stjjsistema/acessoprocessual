function mostraEsconde(quem) {
	if(document.getElementById(quem)){
		if(document.getElementById(quem).style.display == 'none' || document.getElementById(quem).style.display == ''){
			mostra(quem);
		}else{
			esconde(quem);
		}
	}
}
function mostra(quem) {
	if(document.getElementById(quem)){
		document.getElementById(quem).style.display = 'block';
	}
}
function esconde(quem) {
	if(document.getElementById(quem)){
		document.getElementById(quem).style.display = 'none';
	}
}
function redefineArea (quem, largura, altura) {
	if(document.getElementById(quem)){
		document.getElementById(quem).style.display = 'inline-block';
		document.getElementById(quem).style.width = largura;
		document.getElementById(quem).style.height = altura;
	}	
}
function redefineLargura (quem, quanto){
	if(document.getElementById(quem)){
		document.getElementById(quem).style.width = quanto;
	}
}
function setHeight(id, valor){
	if(document.getElementById(id)){
		document.getElementById(id).style.height = valor;
		document.getElementById(id).style.height = valor;
	}
}
function setPadding(id, top, right, bottom, left) {
	if(document.getElementById(id)){
		document.getElementById(id).style.paddingRight = right;
		document.getElementById(id).style.paddingLeft = left;
		document.getElementById(id).style.paddingTop = top;
		document.getElementById(id).style.paddingBottom = bottom;
	}
}
function setPaddingTodos(id, todos) {
	setPadding(id, todos, todos, todos, todos);
}
function setMarginTodos(id, todos) {
	setMargin(id, todos, todos, todos, todos);
}
function setMargin(id, top, right, bottom, left) {
	if(document.getElementById(id)){
		document.getElementById(id).style.marginRight = right;
		document.getElementById(id).style.marginLeft = left;
		document.getElementById(id).style.marginTop = top;
		document.getElementById(id).style.marginBottom = bottom;
	}
}
function setColor(quem, valor) {
	if(document.getElementById(quem)){
		document.getElementById(quem).style.color = valor;
	}
}
function setDisplay(id, valor){
	if(document.getElementById(id)){
		document.getElementById(id).style.display = valor;
	}
}
function setFloat(id, valor) {
	if(document.getElementById(id)){
		if (typeof document.getElementById(id).style.cssFloat != "undefined"){
			document.getElementById(id).style.cssFloat = valor;
		} else {			
			document.getElementById(id).style.styleFloat = valor;
		}
		//document.getElementById(id).setAttribute("style", "float: "+valor+";");
	}
}
function setBackGroundColor (id, valor) {setBackgroundColor(id, valor);}
function setBackgroundColor(id, valor) {
	if(document.getElementById(id)){
		document.getElementById(id).style.background = valor;
	} 
}