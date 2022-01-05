var api = {};

var frases = [
    { _id: 0, texto: 'Sou o primeiro campeão brasileiro na era dos pontos corridos.', tempo: 20, resposta: 'cruzeiro' },
    { _id: 1, texto: 'Na década de 2000, ganhei contra um time paulista a minha única copa do Brasil', tempo: 20, resposta: 'sport' },
    { _id: 2, texto: 'No ano de meu centenário, conquistei a libertadores e o título estadual.', tempo: 20, resposta: 'vasco' },
    { _id: 3, texto: 'Ganhei meu primeiro campeonato brasileiro em 1990.', tempo: 20, resposta: 'corinthians' },
    { _id: 4, texto: 'Ganhei quatro títulos brasileiros na decáda de 80.', tempo: 20, resposta: 'flamengo' },
    { _id: 5, texto: 'Fui cinco vezes rebaixado para a segunda divisão.', tempo: 20, resposta: 'santa cruz' },
    { _id: 6, texto: 'Fui vice campeão da libertadores para um time paraguaio na década passada.', tempo: 30, resposta: 'são caetano' },
    { _id: 7, texto: 'Sou o clube que mais marcou gols em uma única edição de Libertadores.', tempo: 30, resposta: 'cruzeiro' },
    { _id: 8, texto: 'Sou o clube com mais vitórias consecutivas na história da Libertadores.', tempo: 40, resposta: 'vasco' },
    { _id: 9, texto: 'Em 1965, representei a seleção brasileira em um amistoso contra o Uruguai.', tempo: 40, resposta: 'palmeiras' },
    { _id: 10, texto: 'Sou o clube que mais ganhou o campeonato brasileiro na década de 70.', tempo: 40, resposta: 'internacional' },
];

api.lista = function(req, res) {
    setTimeout(function() {
        if (req.query.id) return res.json(frases[req.query.id]);

        res.json(frases);
    }, 1500);
};

module.exports = api;