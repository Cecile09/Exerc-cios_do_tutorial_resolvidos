//Q1 - Crie uma aplicação Express com uma rota GET / que exiba: bem-vindo ao sistema

 const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('bem-vindo ao sistema');
});
app.listen(
3000,
() => console.log(`testando o express`)
);

//Q2 - Crie uma rota GET "/sobre" que exiba uma mensagem sobre a aplicação.

// Rota GET para o caminho '/sobre'
app.get('/sobre', (req, res) => {
    res.send('Esta é uma aplicação de estudos desenvolvida com Express.js e Node.js.');
});

//Q3 - Crie uma rota GET /contato retornando um JSON com email e telefone
app.get('/contato', (req, res) => {

// Rota GET para o caminho '/contato' 
    res.json({
        email: "contato@email.com",
        telefone: "(81) 99999-9999"
    });
});

//Q4 - Crie uma rota GET /erro que retorne status HTTP 404 e a mensagem Página não encontrada

// Rota GET para o caminho '/erro'
app.get('/erro', (req, res) => {
    res.status(404).send('Página não encontrada');
});

//Q5 - Crie uma rota GET /inicio que redirecione o usuário para /

app.get('/inicio', (req, res) => {
    res.redirect('/'); 
});

//Q6 - Crie uma rota GET /usuários/:id. A rota deve exibir o ID enviado na URL. Exemplo: /usuários/10 -> Resposta: Usuário 10

app.get('/usuários/:id', (req, res) => {
    const id = req.params.id; 
    res.send(`Usuário ${id}`); 
});

//Q7 - Crie uma rota GET /produtos/:nome. A rota deve exibir o nome do produto enviado

app.get('/produtos/:nome', (req, res) => {
    const nomeProduto = req.params.nome; 
    res.send(`Produto: ${nomeProduto}`); 
});

//Q8 - Crie uma rota GET /filmes/:id/:nome. Exiba: ID do filme e Nome do filme

app.get('/filmes/:id/:nome', (req, res) => {
    const idFilme = req.params.id;     
    const nomeFilme = req.params.nome; 
    
    res.send(`ID do filme: ${idFilme} <br> Nome do filme: ${nomeFilme}`);
});

//Q9 - Crie uma rota GET /buscar. Receba a query string nome. Exemplo: /buscar?nome=João -> Resposta: Buscando por: João

app.get('/buscar', (req, res) => {
    const nomeBuscado = req.query.nome; 
    res.send(`Buscando por: ${nomeBuscado}`);
});

//Q10 - Crie uma rota GET /produtos. Receba: categoria e pagina. Exiba os valores recebidos

app.get('/produtos', (req, res) => {
    const categoria = req.query.categoria; 
    const pagina = req.query.pagina;       

    res.send(`Categoria: ${categoria} <br> Página: ${pagina}`);
});

//Q11 - Crie uma rota GET /usuários. Receba a query string idade. Exiba: Filtrando usuários com idade X.

app.get('/usuários', (req, res) => {
    const idade = req.query.idade; 
    res.send(`Filtrando usuários com idade ${idade}`);
});

//Q12 - Configure o Handlebars no Express. Crie uma view home.handlebars exibindo: Bem-vindo ao sistema

const express = require('express');
const exprs = require('express-handlebars'); 
const app = express();

app.engine('handlebars', exprs.engine({ defaultLayout: false })); 
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home'); 
});

app.listen(3000, () => console.log('Servidor em http://localhost:3000'));

//Q13 - Crie uma rota /perfil. Envie para a view: nome e idade. Exiba essas informações no HTML usando Handlebars.

app.get('/perfil', (req, res) => {
    res.render('perfil', {
        nome: 'João Silva',
        idade: 17
    });
});

//Q14 - Crie uma view que exiba uma lista de filmes usando {{#each}}. Os filmes devem ser enviados pelo servidor.

app.get('/meus-filmes', (req, res) => {
    const lista = ['Matrix', 'Interestelar', 'Avatar', 'Sonic the hedgehog'];
    res.render('listaFilmes', {
        filmes: lista
    });
});

//Q15 - Crie uma view com if, else e unless. Exiba mensagens diferentes dependendo dos dados enviados 

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        usuárioLogado: true,
        eAdministrador: false
    });
});

//Q16 - Crie uma página /filmes que liste filmes, exiba nome e ano, utilize array de objetos e utilize {{#each}}

app.get('/filmes', (req, res) => {
    const listaDeFilmes = [
        { nome: 'Matrix', ano: 1999 },
        { nome: 'Interestelar', ano: 2014 },
        { nome: 'Avatar', ano: 2009 },
        { nome: 'Vingadores: Ultimato', ano: 2019 }
    ];
    res.render('filmes', {
        catalogo: listaDeFilmes
    });
});

//Q17 - projeto tik e tok

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bancoVideos = [
    { usuário: '@dev_master', titulo: 'Dica rápida de Express.js! ', url: 'https://unsplash.com' },
    { usuário: '@html_girl', titulo: 'Como centralizar uma div em 2026', url: 'https://unsplash.com' }
];

app.get('/TikTok', (req, res) => {
    res.render('TikTok_feed', { videos: bancoVideos });
});

app.post('/TikTok/novo', (req, res) => {
    const novoVideo = {
        usuário: req.body.usuário,
        titulo: req.body.titulo,
        url: req.body.url
    };
    bancoVideos.push(novoVideo);
    res.render('TikTok_sucesso', { usuário: novoVideo.usuário });
});
