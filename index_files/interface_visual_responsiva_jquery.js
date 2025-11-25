jQuery(document).ready(function($) {

	// Interface responsiva
	$("#idInterfaceVisualMinimoCabecalhoMenuSuperior li").each(
			function() {
				if ($(this).children("ul").length > 0) {
					$(this).children("a.link_menu").addClass("subMenu");
				}
			});

	$( "#idInterfaceVisualMinimoCabecalhoMenuSuperior .subMenu" ).after( "<span class='mais' title='Clique para mais itens.'>&nbsp;</span>" );
	

	$("#idInterfaceVisualMinimoCabecalhoMenuSuperior li a, #idInterfaceVisualMinimoCabecalhoMenuSuperior .mais").click(function() {
		var ativo = ($(this).parent().children("ul").is(":visible"));
		if (ativo) { 
			$(this).parent().children("a").removeClass("linkAtivo");
			$(this).parent().children("ul").slideUp();
			$(this).parent().parent().children("li").css("display","block");

			$(this).parent().parent().parent().children("a.link_menu").css("display","block");
		}
		else {
			
			if ($(this).parent().children("ul").length > 0) {
				// antes de abrir o menu atual, fecha todos os outros
				$(this).parent().parent().children("li").children("ul").hide();
				// esconde os outros itens de mesmo nivel
				$(this).parent().parent().children("li").hide();
				$(this).parent().css("display","block");
				$(this).parent().children("a").addClass("linkAtivo");
				$(this).parent().children("ul").children("li").css("display","block");
				$(this).parent().children("ul").slideDown();

				$(this).parent().parent().parent().children("a.link_menu").hide();
				
				$("html,body").animate({scrollTop: ($('#menumobile').offset().top-60)}, 500);
			}
		}
	});
	
	$("#mostraMenu").click(function(){
		var ativo = ($("#menumobile").is(":visible"));
		if (ativo)
			$("#menumobile").slideUp();
		else
			$("#menumobile").slideDown();
	});

	// Posiciona o menu superior no link correspondente a pagina corrente
	
	// esconde os itens não ativos 
	if ($(".menu_mobile_n2_hover").length > 0) {
		$(".menu_mobile_n1").hide();
		$(".menu_mobile_n1_hover").css("display","block");
//		console.log("mostra n1_hover");
		$(".menu_mobile_n1_hover").children("a").addClass("linkAtivo");
		$(".menu_mobile_n1_hover").children("ul").css("display","block");
	}

	if ($(".menu_mobile_n3_hover").length > 0) {
		$(".menu_mobile_n2").hide();
		$(".menu_mobile_n2_hover").parent().parent().children("a").hide();
		$(".menu_mobile_n2_hover").css("display","block");
//		console.log("mostra n2_hover");
		$(".menu_mobile_n2_hover").children("a").addClass("linkAtivo");
		$(".menu_mobile_n2_hover").children("ul").css("display","block");
	}

	if ($(".menu_mobile_n4_hover").length > 0) {
		$(".menu_mobile_n3").hide();
		$(".menu_mobile_n3_hover").parent().parent().children("a").hide();
		$(".menu_mobile_n3_hover").css("display","block");
//		console.log("mostra n3_hover");
		$(".menu_mobile_n3_hover").children("a").addClass("linkAtivo");
		$(".menu_mobile_n3_hover").children("ul").css("display","block");
	}

	if ($(".menu_mobile_n5_hover").length > 0) {
		$(".menu_mobile_n4").hide();
		$(".menu_mobile_n4_hover").parent().parent().children("a").hide();
		$(".menu_mobile_n4_hover").css("display","block");
//		console.log("mostra n4_hover");
		$(".menu_mobile_n4_hover").children("a").addClass("linkAtivo");
		$(".menu_mobile_n4_hover").children("ul").css("display","block");
	}
	
	// ---------------------------------------------------------
	
});

