let filmes = [

{
id: 1,
capa: "https://upload.wikimedia.org/wikipedia/pt/3/3b/ZootopiaOficialPoster.jpg",
nome: "Zootopia",
genero: "Comédia",
ano: 2016,
classificacao: "Livre",
produtora: "Walt Disney Animation Studios"
}

];

document.addEventListener("DOMContentLoaded", () => {
atualizarLocalStorage();
renderizarTabela();
});

function mostrarHome(){
document.getElementById("home").style.display = "block";
document.getElementById("cadastro").style.display = "none";
}

function mostrarCadastro(){
document.getElementById("home").style.display = "none";
document.getElementById("cadastro").style.display = "block";
renderizarTabela();
}

function abrirModal(){
document.getElementById("modal").style.display = "flex";
}

function fecharModal(){
document.getElementById("modal").style.display = "none";
limparCampos();
}

function salvarFilme(){

const capa = document.getElementById("capa").value.trim();
const nome = document.getElementById("nome").value.trim();
const genero = document.getElementById("genero").value;
const ano = document.getElementById("ano").value;
const classificacao = document.getElementById("classificacao").value;
const produtora = document.getElementById("produtora").value;

if(!nome){
alert("Nome é obrigatório");
return;
}

const novoFilme = {
id: Date.now(),
capa,
nome,
genero,
ano,
classificacao,
produtora
};

filmes.push(novoFilme);

atualizarLocalStorage();
renderizarTabela();
fecharModal();

}

function renderizarTabela(lista = filmes){

const tabela = document.getElementById("dados");
tabela.innerHTML = "";

lista.forEach(filme => {

tabela.innerHTML += `
<tr>

<td>
<img src="${filme.capa}" width="60">
</td>

<td>${filme.nome}</td>
<td>${filme.genero}</td>
<td>${filme.ano}</td>
<td>${filme.classificacao}</td>
<td>${filme.produtora}</td>

<td>
<button onclick="excluirFilme(${filme.id})">Excluir</button>
</td>

</tr>
`;

});

}

function excluirFilme(id){

if(!confirm("Deseja excluir este filme?")) return;

filmes = filmes.filter(filme => filme.id !== id);

atualizarLocalStorage();
renderizarTabela();

}

function filtrarGenero(){

const genero = document.getElementById("filtroGenero").value;

if(genero === ""){
renderizarTabela();
return;
}

const filtrados = filmes.filter(filme => filme.genero === genero);

renderizarTabela(filtrados);

}

function atualizarLocalStorage(){
localStorage.setItem("filmes", JSON.stringify(filmes));
}

function limparCampos(){

document.getElementById("capa").value = "";
document.getElementById("nome").value = "";
document.getElementById("ano").value = "";
document.getElementById("classificacao").value = "";
document.getElementById("produtora").value = "";

}

