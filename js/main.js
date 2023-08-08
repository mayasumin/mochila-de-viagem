const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let nome = evento.target.elements['nome'].value;
    let quantidade = evento.target.elements['quantidade'].value;
    
    criaElemento(nome, quantidade);
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const quantidadeItem = document.createElement("strong");
    quantidadeItem.innerHTML = quantidade;

    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);
}