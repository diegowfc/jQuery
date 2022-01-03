var campo = $(".campo-digitacao");
var tempoInicio = $("#tempo-digitacao").text();
var botaoReiniciar = $(".botao-reiniciar");
var frase = $(".frase");

$(function() {
    inicializaJogo();
    inicializaCronometro();
    atualizaPlacar();
    exibeJogo();
    desistirJogo();
});

function inicializaJogo() {
    mostraFrase();
    campo.on("input", confereResposta);
}

function inicializaCronometro() {
    atualizaTempo();
    campo.one("focus", function() {
        $("#botao-desistir").attr("hidden", false);
        var id = setInterval(function() {
            tempoInicio--;
            $("#tempo-digitacao").text(tempoInicio);
            if (tempoInicio < 1 || contador > 10 || desistirJogo() == true) {
                clearInterval(id);
                finalizaJogo();
                if (contador > 10) {
                    enviaMensagem();
                    botaoReiniciar.click(recarregaPagina());
                }
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
    salvaPlacar();
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

function desistirJogo() {
    var desistir = $("#botao-desistir")
    desistir.click(function() {
        tempoInicio = 1;
    })
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

function recarregaPagina() {
    botaoReiniciar.click(function() {
        if (true) {
            document.location.reload();
        }
    })
}
