function isEmail(valor) {
	if (valor == '')
		return false;
	return (valor.search(/^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.\w+$/) != -1);
}
