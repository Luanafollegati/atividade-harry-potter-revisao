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

app.get("/bruxos", (req, res) => {
    res.json(bruxos);
})

app.get ("/bruxos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const bruxo = bruxos.find(b => b.id === id);
    
    

if(bruxo) {
    res.status(200).json(bruxo);
}else{
    res.status(404).json({
        mensagem:"Bruxo não encontrado!"
    })
  }
});

app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome;
    nome = nome.toLowerCase();

    const nomesFiltrados = bruxos.filter(b => b.nome.toLowerCase().includes(nome));

    if(nomesFiltrados) {
        res.status(200).json(nomesFiltrados);
    }else {
        res.status(404).json({
            mensagen:"Bruxo não encontrado!"
        })
    }
});


app.get ("/bruxos",(req, res) => {
    let bruxos = req.params.nome;
    bruxos = bruxos.toLowerCase();

    const bruxosFiltrados = bruxos.filter(b => b.bruxos.toLowerCase().includes(bruxos));


    if(bruxos.lenght > 0){
        res.status(200).json(bruxos);
    } else {
        res.status(404).json({
            mensagem:"Nenhum bruxo encontrado!"
        })
    }
});

app.get("/casas", (req, res) =>{
    let casas = req.params.nome;
    casas = casas.toLowerCase();
    const casasFiltrados = casas.filter(c => c.casas.toLowerCase().includes(casas));


    if(casas.lenght > 0){
        res.status(200).json(casas);
    } else {
        res.status(404).json({
            mensagem:"Nenhuma casa encontrado!"
        })
    }
});

app.get("/varinhas", (req, res) =>{
    let varinhas = req.params.nome;
    varinhas = varinhas.toLowerCase();

    const varinhasFiltrados = varinhas.filter(v => v.varinhas.toLowerCase().includes(varinhas));


    if(varinhas.lenght > 0){
        res.status(200).json(varinhas);
    } else {
        res.status(404).json({
            mensagem:"Nenhuma varinha encontrado!"
        })
    }
});

app.get("/animais", (req, res) =>{
    let animais = req.params.nome;
    animais = animais.toLowerCase();

    const animaisFiltrados = animais.filter(a => a.animais.toLowerCase().includes(animais));


    if(animais.lenght > 0){
        res.status(200).json(animais);
    } else {
        res.status(404).json({
            mensagem:"Nenhum animal encontrado!"
        })
    }
});

app.get("/pocoes", (req, res) =>{
    let pocoes = req.params.nome;
    pocoes = pocoes.toLowerCase();

    const pocoesFiltrados = pocoes.filter(p => p.pocoes.toLowerCase().includes(pocoes));


    if(pocoes.lenght > 0){
        res.status(200).json(pocoes);
    } else {
        res.status(404).json({
            mensagem:"Nenhuma poção encontrado!"
        })
    }
});

app.listen(serverPort, () => {
    console.log("Servidor esta rodando...");
});


