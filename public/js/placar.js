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
    var acertos = $("#acertos").text();
    var jogador = $("#nome-jogador").val();

    var linha = novoPlacar(jogador, acertos);

    corpoTabela.append(linha);
    placar.slideDown(500);
}

function salvaPlacar() {
    var placar = [];
    var linhas = $("tbody>tr");


    linhas.each(function() {
        var jogador = $(this).find("td:nth-child(1)").text();
        var score = $(this).find("td:nth-child(2)").text();

        var lista = {
            jogador: jogador,
            pontos: score
        };
        if (jogador != "") {
            placar.push(lista);
        }
    });

    var dados = {
        placar: placar
    }
    $.post("http://localhost:3000/placar", dados)
}

function ordenaLista(a, b) {
    return b.pontos - a.pontos;
}

function atualizaPlacar() {
    $.get("http://localhost:3000/placar", function(data) {
        data.sort(ordenaLista);
        $(data).each(function() {
            var linha = novoPlacar(this.jogador, this.pontos);
            $("tbody").append(linha);
        })
    });
}

function exibePlacar() {
    var botao = $("#botao-placar");
    botao.on("click", function() {
        placar.stop().slideToggle(500);
    });
}

exibePlacar();
