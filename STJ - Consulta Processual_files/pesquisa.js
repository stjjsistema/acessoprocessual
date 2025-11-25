function pesquisa_satisfacao(txt_sigla_servico, txt_div_exibicao) {
	$.get( "https://www.stj.jus.br/webstj/pesquisa/questao.asp", { desc_sigla: txt_sigla_servico }, function( data ) {
		$(txt_div_exibicao).html(data);
	});
}