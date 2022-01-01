var contador = 0;

function confereResposta() {
    $.get("http://localhost:3000/frases", comparaResposta);
}

function comparaResposta(data) {
    var respostaUsuario = campo.val();
    if (contador <= 10) var respostaPergunta = data[contador].resposta;
    if (respostaUsuario == respostaPergunta) {
        contador++;
        contaAcertos(contador);
        reiniciaCampo();
        if (contador <= 10) {
            frase.text(data[contador].texto);
            atualizaTempo(data[contador].tempo);
            reiniciaCampo();
        }
    }
}

function mostraFrase() {
    $.get("http://localhost:3000/frases", function(data) {
        frase.text(data[0].texto);
        atualizaTempo(data[0].tempo);
    });
}

function enviaMensagem() {
    alert("PARABÉNS!!! VOCÊ COMPLETOU O QUIZ!!");
}
