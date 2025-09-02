import express from "express";
import dados from "./src/data/dados.js"
import bruxos from "./src/data/bruxos.js";

const { casas, varinhas, animais, pocoes } = dados;

const app = express();
app.use(express.json());

const serverPort = 3000;

app.get("/", (req, res) => {
    res.send("servidor funcionando...")
})


app.get("/bruxos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const bruxo = bruxos.find(b => b.id === id);



    if (bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
            mensagem: "Bruxo não encontrado!"
        })
    }
});

app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome;
    nome = nome.toLowerCase();

    const nomesFiltrados = bruxos.filter(b => b.nome.toLowerCase().includes(nome));

    if (nomesFiltrados.length > 0) {
        res.status(200).json(nomesFiltrados);
    } else {
        res.status(404).json({
            mensagem: "Bruxo não encontrado!"
        })
    }
});

//rota para buscar bruxos
app.get("/bruxos", (req, res) => {

    if (bruxos.length > 0) {
        res.status(200).json(bruxos);
    } else {
        res.status(404).json({
            mensagem: "Nenhum bruxo encontrado!"
        })
    }
});

//rota para buscar casas
app.get("/casas", (req, res) => {

    if (casas.length > 0) {
        res.status(200).json(casas);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma casa encontrada!"
        })
    }
});

//rota para buscar varinhas
app.get("/varinhas", (req, res) => {

    if (varinhas.length > 0) {
        res.status(200).json(varinhas);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma varinha encontrada!"
        })
    }
});

//rota para buscar animais
app.get("/animais", (req, res) => {

    if (animais.length > 0) {
        res.status(200).json(animais);
    } else {
        res.status(404).json({
            mensagem: "Nenhum animal encontrado!"
        })
    }
});

//rota para buscar poções
app.get("/pocoes", (req, res) => {

    if (pocoes.length > 0) {
        res.status(200).json(pocoes);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma poção encontrada!"
        })
    }
});

//rota GetbyId para varinhas
app.get("/varinhas/:id", (req, res) => {

    let id = parseInt(req.params.id);

    const varinha = varinhas.find(v => v.id === id);

    if (varinha) {
        res.status(200).json(varinha);
    } else {
        res.status(404).json({
            mensagem: "Varinha não encontrada!"
        })
    }
});

//rota GetbyId para animais 
app.get("/animais/:id", (req, res) => {

    let id = parseInt(req.params.id);

    const animal = animais.find(a => a.id === id);

    if (animal) {
        res.status(200).json(animal);
    } else {
        res.status(404).json({
            mensagem: "Animal não encontrado!"
        })
    }
});

//rota GetbyId para poções
app.get("/pocoes/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const pocao = pocoes.find(p => p.id === id);

    if (pocao) {
        res.status(200).json(pocao)
    } else {
        res.status(404).json({
            mensagem: "Poção não encontrada!"
        })
    }
});

app.listen(serverPort, () => {
    console.log("Servidor esta rodando...");
});


