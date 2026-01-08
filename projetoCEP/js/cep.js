"use strict";

// Variáveis

const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");

// Functions

function obterCep() {
    return cep.value;
}

function gerarStringEndereco({logradouro, bairro, localidade, uf}) {
    return `${logradouro}<br>${bairro}<br>${localidade}/${uf}`;
}

async function BuscarDadosCep() {
    
    saida.innerHTML = "";

    const urlViaCep = `https://viacep.com.br/ws/${obterCep()}/json/`;

    try {
        const resposta = await fetch(urlViaCep);
        const dadoJSON = await resposta.json();

        if (!resposta.ok) {
            throw new Error ("Erro na requisição HTTP.");
        }
        if (!dadoJSON.erro){
            saida.innerHTML = gerarStringEndereco(dadoJSON);
        } else {
            throw new Error ("CEP invalido!");
        }


        console.log(typeof dadoJSON);
        console.log(dadoJSON);
    } catch (erro) {
        saida.innerHTML = `Erro ao buscar Cep (<i>${erro.message}</i>).`;
    }
}

// Event listeners

btnPesquisar.addEventListener("click", BuscarDadosCep);
