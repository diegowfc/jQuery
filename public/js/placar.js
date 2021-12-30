var placar = $(".placar");

function novoPlacar(jogador, acertos) {
    var linha = $("<tr>");
    var colunaJogador = $("<td>").text(jogador);
    var colunaAcertos = $("<td>").text(acertos);

    linha.append(colunaJogador);
    linha.append(colunaAcertos);

    return linha;
}

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var jogador = "Diego";
    var acertos = $("#acertos").text();

    var linha = novoPlacar(jogador, acertos);

    corpoTabela.append(linha);
    placar.slideDown(500);
}

function exibePlacar() {
    var botao = $("#botao-placar");
    botao.on("click", function() {
        placar.stop().slideToggle(500);
    });
}

exibePlacar();