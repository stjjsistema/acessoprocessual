jQuery(document).ready(function($) {

	var tituloPagina = $("title").text();
	if (tituloPagina)
	if ("STJ - Estatística Processual" == tituloPagina) {
		setPesquisaSatisfacaoTopo("https://forms.office.com/r/V3ASsdYYsQ","E ajude a aprimorar a Estatística Processual");
	}

	$("#idInterfaceVisualCabecalhoPesquisa").attr("href","javascript:;");
	
	$("#idInterfaceVisualCabecalhoPesquisa").click(function() {
		$(".sample-search-toolbar").toggle();
		if ($(".sample-search-toolbar").is(":visible"))
			$(".cab_pesq_campoTexto").focus();
			
	});
	
//	$(".clsInterfaceVisualMenuLateralLinkNivel1Ativo,.clsInterfaceVisualMenuLateralLinkNivel1").each(function(){
//		if ($(this).attr("href") == "#")
//			$(this).attr("href","javascript:;");
//	});

	$(".sample-search-toolbar input").keyup(function(event) {
		var str="";
		str += $( this ).val();
		if (str != "") 
			$(".tipo-pesquisa").show();
		else
			$(".tipo-pesquisa").hide();
		$("label.div-sugestoes-pesquisa-jur").text( "buscar '" + str + "' em Jurisprudência");
		$("label.div-sugestoes-pesquisa-proc").text( "buscar '" + str + "' em Processos");
		$("label.div-sugestoes-pesquisa-portal").text( "buscar '" + str + "' em todo o Portal");
		$("#headerLivre").attr("value", str);
		$("#headerTermo").attr("value", str);
	});
	
	$(".div-sugestoes-pesquisa-jur").click(function() {
		$("#frmPesquisaJurHeader").submit();
	});
	
	$(".div-sugestoes-pesquisa-proc").click(function() {
		$("#frmPesquisaProcHeader").submit();
	});
	
	$(".tipo-pesquisa").click(function() {
		$(".sample-search-toolbar").hide();
	});
	
	$(".clsInterfaceVisualCabecalhoMenuSuperiorItem").each(
			function() {
				if ($(this).parent().children("ul").length > 0) {
					$(this).attr("href","javascript:;");
					$( "<span class='seta-menu-ativo'></span>" ).appendTo(this);
				}
			});

	$("#idInterfaceVisualBlocoDeMenuBannersNavegacaoAplicacaoEmpacotador").focusin(function () {
		if ($(".clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo").length > 0) {
			$(".clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo").children("ul").hide();
			$(".clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo").removeClass("clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo").addClass("clsInterfaceVisualCabecalhoMenuSuperiorNivel1");
		}
	});

	$(".clsInterfaceVisualCabecalhoMenuSuperiorNivel1").click(function() {
		var ativo = ($(this).hasClass("clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo"));
		
		$(".clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo").children("ul").hide();
		$(".clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo").removeClass("clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo").addClass("clsInterfaceVisualCabecalhoMenuSuperiorNivel1");
		
		if (!ativo) {
			$(this).children("ul").show();		
			$(this).removeClass("clsInterfaceVisualCabecalhoMenuSuperiorNivel1").addClass("clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo");
		} else {
			$(this).children("ul").hide();		
			$(this).removeClass("clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo").addClass("clsInterfaceVisualCabecalhoMenuSuperiorNivel1");
		}
	});

	$("#idInterfaceVisualMenuLateral li a").click(function() {
		if ($(this).parent().children("ul").is(":visible"))
			$(this).parent().children("ul").slideUp();
		else {
			$("#idInterfaceVisualMenuLateral li a").parent().children("ul").hide();
			$(this).parent().children("ul").slideDown();
		}
	});

	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 0) {
			$(".classInterfaceVisualRodapeVaiTopo").show();
		} else {
			$(".classInterfaceVisualRodapeVaiTopo").hide();			
		}
	});
	
	$(".classInterfaceVisualRodapeVaiTopo").click(function() {
		$("html,body").animate({scrollTop: $('#voltarTopo').offset().top}, 1000); 		
	});
	
	$("#idInterfaceVisualBlocoDeMenuBannersNavegacaoAplicacaoEmpacotador").click(function() {
		// Fecha menu superior
		$(".clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo").children("ul").hide();
		$(".clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo").removeClass("clsInterfaceVisualCabecalhoMenuSuperiorNivel1Ativo").addClass("clsInterfaceVisualCabecalhoMenuSuperiorNivel1");
		
		if ($("#menumobile").length > 0) {
			$("#menumobile").hide();
		}

		if ($(".sample-search-toolbar").length > 0) {
			$(".sample-search-toolbar").hide();
		}

	});
	
//	$(".seloPesquisaSatisfacao,.seloPesquisaSatisfacaoPeq").click(function(){
		//var id = $(this).attr("id");
		//window.open("https://www.stj.jus.br/webstj/pesquisa/pesquisa.asp?desc_sigla="+id, 'PS', 'resizable=true,scrollbars=yes,width=550,height=800');
//	});
	
	$("#idInterfaceVisualCabecalhoLocalSitePrincipal a").click(function(){
		window.location = "https://www.stj.jus.br/";
	});

	$(".mapaDoSite a.mostraSubNiveis").click(function(){
		if ($(this).parent().children("ul").is(":visible")) {
			$(this).text("+");
			$(this).parent().children("ul").slideUp();
		}
		else {
			$(this).text("-");
			$(this).parent().children("ul").slideDown();
		}
	});
	
	$(".mapaDoSite a.mostraTodosSubNiveis").click(function(){
		$(".mapaDoSite a.mostraSubNiveis").each(function(){
			$(this).parent().children("ul").slideDown();
			$(this).text("-");
		});
		$(".mapaDoSite a.escondeTodosSubNiveis").show();
		$(".mapaDoSite a.mostraTodosSubNiveis").hide();
	});

	$(".mapaDoSite a.escondeTodosSubNiveis").click(function(){
		$(".mapaDoSite a.mostraSubNiveis").each(function(){
			$(this).parent().children("ul").slideUp();
			$(this).text("+");
		});
		$(".mapaDoSite a.escondeTodosSubNiveis").hide();
		$(".mapaDoSite a.mostraTodosSubNiveis").show();
	});

	$("a").each(function(){
		//console.log($(this).attr("href"));
		var link = $(this).attr("href");
		if (link != null) {
			if (link.indexOf("https://ww2.stj.jus.br/processo/") != -1) {
				link = link.replace("https://ww2.stj.jus.br/processo/","https://processo.stj.jus.br/processo/");
				$(this).attr("href",link);
			}
		}
	});
});

function setPesquisaSatisfacao(link, texto) {
	if (link != '' && texto != '') {
		var elementoPesquisa =  
					'<div class="divPesqSatisfacaoLeft">' +
					'<a href="' + link + '" target="_blank">' +
					'<span class="clsPesqTitulo">Avalie nosso serviço</span>'+
					'<span>' + texto + '</span>'+
					'</a>'+
					'</div>';
		$("#idInterfaceVisualAreaEsquerdaBlocoBanners").append(elementoPesquisa);
	}
}
function setPesquisaSatisfacaoTopo(link, texto) {
	if (link != '' && texto != '') {
		var elementoPesquisa =  
					'<div class="divPesqSatisfacaoTopo">' +
					'<a href="' + link + '" target="_blank">' +
					'<span class="clsPesqTitulo">Avalie nosso serviço</span>'+
					'<span>' + texto + '</span>'+
					'</a>'+
					'</div>';
		$("#dv_pesquisa_satisfacao").after(elementoPesquisa);
	}
}
function setPesquisaSatisfacaoBot(link, texto, local) {
	if (link != '' && texto != '') {
		var elementoPesquisa =  
					'<div class="divPesqSatisfacaoLeft">' +
					'<a href="' + link + '" target="_blank">' +
					'<span class="clsPesqTitulo">Avalie nosso serviço</span>'+
					'<span>' + texto + '</span>'+
					'</a>'+
					'</div>';
		$("#" + local).append(elementoPesquisa);
	}
}
