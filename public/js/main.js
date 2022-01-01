var campo = $(".campo-digitacao");
var tempoInicio = $("#tempo-digitacao").text();
var botaoReiniciar = $(".botao-reiniciar");
var frase = $(".frase");

$(function() {
    inicializaJogo();
    inicializaCronometro();
});

function inicializaJogo() {
    mostraFrase();
    campo.on("input", confereResposta);
}

function inicializaCronometro() {
    atualizaTempo();
    campo.one("focus", function() {
        var id = setInterval(function() {
            tempoInicio--;
            $("#tempo-digitacao").text(tempoInicio);
            if (tempoInicio < 1 || contador > 10) {
                clearInterval(id);
                finalizaJogo();
                contador = 0;
            }
            if (tempoInicio < 10) {
                $(".tempo").addClass("avisoTempo");
            }
        }, 1000);
        $(".frase").removeAttr('hidden');
        campo.removeAttr('placeholder');
    })
}

function finalizaJogo() {
    campo.attr("disabled", true);
    botaoReiniciar.addClass("botao-reiniciar-ativo");
    botaoReiniciar.removeClass("botao-reiniciar");
    inserePlacar();
}

function reiniciaCampo() {
    campo.attr("disabled", false);
    campo.val(""); //limpa o campo
    botaoReiniciar.addClass("botao-reiniciar");
    botaoReiniciar.removeClass("botao-reiniciar-ativo");
    $('.tempo').removeClass("avisoTempo");
}

function reiniciaJogo() {
    inicializaCronometro();
    botaoReiniciar.click(atualizaInformacao());
    campo.focus();
    $(".placar").fadeOut(1000);
}

function atualizaTempo(tempo) {
    tempoInicio = tempo;
    $("#tempo-digitacao").text(tempo);
}

function atualizaInformacao() {
    acertos.text(0);
    contador = 0;
    mostraFrase();
    reiniciaCampo();
}
