var dtCh= "/";
var minYear=1900;
var maxYear=2100;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}

function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31;
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30;}
		if (i==2) {this[i] = 29;}
   } 
   return this;
}

function isDate(dtStr){
	var daysInMonth = DaysArray(12);
	var pos1=dtStr.indexOf(dtCh);
	var pos2=dtStr.indexOf(dtCh,pos1+1);
	var strDay=dtStr.substring(0,pos1);
	var strMonth=dtStr.substring(pos1+1,pos2);
	var strYear=dtStr.substring(pos2+1);
	strYr=strYear;
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1);
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1);
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1);
	}
	month=parseInt(strMonth);
	day=parseInt(strDay);
	year=parseInt(strYr);
	if (pos1==-1 || pos2==-1){
		alert("O formato da data deve ser: dd/mm/aaaa");
		return false;
	}
	if (strMonth.length<1 || month<1 || month>12){
		alert("Informe um mês válido.");
		return false;
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		alert("Informe um dia válido.");
		return false;
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		alert("Informe um ano válido entre "+minYear+" e "+maxYear);
		return false;
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		alert("Informe uma data válida");
		return false;
	}
	return true;
}

function parseStringToDate(pData) {
	// alert(pData);
	var diaData = pData.substring(0, pData.indexOf("/"));
	var mesData = pData.substring(pData.indexOf("/") + 1, pData
			.lastIndexOf("/"));
	var anoData = pData.substring(pData.lastIndexOf("/") + 1, pData.length);
	var data = new Date(anoData, mesData - 1, diaData, 12, 0, 0);
	// alertDebug(data);
	return data;
}

function diferencaDeDiasEntreDatas(pDataInicio, pDataFim) {
	//var one_day = 1000 * 60 * 60 * 24;
	var dataInicio = parseStringToDate(pDataInicio);
	var dataFim = parseStringToDate(pDataFim);
	var h1 = dataInicio.getTimezoneOffset();
	var h2 = dataFim.getTimezoneOffset();
	var horarioVerao = (h2 - h1) * 60000;
	var quantidadeDeDias = Math.ceil((((Math.abs(dataFim.getTime() - dataInicio.getTime() - horarioVerao) / 1000) / 60) / 60) / 24);
	//alertDebug("São " + (quantidadeDeDias) + " dias entre " + pDataInicio + " e " + pDataFim);
	return quantidadeDeDias;
}