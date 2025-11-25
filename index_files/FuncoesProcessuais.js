//********************  Funuçes processuais  ******************** //
function isNumeroUnicoValido(num){
	if(num.length < 20){
		alert("Número único deve ter 20 dígitos!");
		return false;
	}
	if(ValidaMod97_P1(num)){
		return true;
	}else{
		return false;
	}
}

function isNumeroRegistroValido(numReg){
	if (numReg.length != 12)
	{
		alert("Número de registro deve ter 12 números!");
		return false;
	}
	num = numReg.substr(4);
	if (num=="")
	{
		return false;
	}
	if(isNaN(numReg)){
		alert("Número de registro deve ter apenas números!");
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
	}//alert(codigo);
	if ((codigo >= 48 && codigo <= 57) || (codigo >= 96 && codigo <= 105)){
		iTam = obj.value.length;//alert(obj.value.length);
		if (iTam == 4){			
			obj.value = obj.value + "/";
		} 
		if (iTam == 12){			
			obj.value = obj.value + "-";
		}
	}
}
function reformataNumeroRegistro(numReg, campo){
		numReg = retiraCaracteresNaoNumericos(numReg);
		num = numReg.substr(2);
		ano = numReg.substr(0,2);
		if (ano != "19" && ano != "20")
		{
			if (ano < "40")
			{
				ano = "20" + ano;
			}
			else
			{
				ano = "19" + ano;
			}
			campo.value = ano + "000000000".substr(1,8-(num.length)) + num;//alert("sim "+campo.value);
		}else{
			if(numReg.length > 4){
				ano = numReg.substr(0,4);
				num = numReg.substr(4,numReg.length-4);
				var t = "0000000" + num;//alert(t.substring(t.length - 8, t.length -1));
				campo.value = ano +"/"+ t.substring(t.length - 8, t.length -1) +"-"+ t.substring(t.length -1, t.length);//alert("nao "+campo.value);
			}
		}
}

function isCodOabValida(codOab){
	uf = codOab.substr(0,2);
	uf = uf.toUpperCase();
	uf = trim(uf);
	fim = codOab.substr(2,codOab.length);
	if (codOab == "" || "AC;AL;AM;AP;BA;CE;DF;ES;GO;MA;MG;MS;MT;PA;PB;PE;PI;PR;RJ;RN;RO;RR;RS;SC;SE;SP;TO".indexOf(uf)==-1)
	{
		alert("UF da OAB informada não é válida.");
		return false;
	}
	if(fim.length > 7){
		alert("A parte final do código OAB não pode ser maior que 7 caracteres!");
	    return false;
	}
	return true;
}

function reformataCodOab(codOab, campo){
	uf = codOab.substr(0,2);
	uf = uf.toUpperCase();
	uf = trim(uf);

	seqnum = codOab.substr(2);
	seqnum = trim(seqnum);

	if (!isNaN(seqnum))
	{
		if (seqnum.length < 6)
		{
			seqnum = "000000".substr(1,6-(seqnum.length)) + seqnum;
		}
	}
	else
	{
		if (seqnum.length < 7)
		{
			seqnum = "0000000".substr(1,7-(seqnum.length)) + seqnum;
		}
	}
	campo.value = uf + seqnum;
}

function validaSiglaProcesso(){}

//********************  FIM - Funuçes processuais  ******************** //