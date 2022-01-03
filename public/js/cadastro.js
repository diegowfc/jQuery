var botaoIniciar = $(".botao-iniciar");

function exibeJogo() {
    botaoIniciar.click(function() {
        var nomeJogador = $("#nome-jogador").val();
        if (nomeJogador != "") {
            $(".body-jogo").attr("hidden", false);
            $(".body-cadastro").attr("hidden", true);
        }
    })
}