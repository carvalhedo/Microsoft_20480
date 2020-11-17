
let totPara = 65;
const listParagrafosHtml = document.getElementById("listaParagrafosHtml");
const buttonBotaoAdicionar = document.getElementById("botaoAdicionar");
const buttonBotaoLimpar = document.getElementById("botaoLimpar");

function clearList() {
    while (listParagrafosHtml.firstChild) {
        listParagrafosHtml.removeChild(listParagrafosHtml.firstChild);
    }
}

function criaLiComP(contador) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = 'Parágrafo ' + String.fromCharCode(contador);

    li.appendChild(p);
    return li;
};


function adicionarParagrafo() {
    // Cria <li> com <p>
    const li = criaLiComP(totPara);

    // controla cor
    if (totPara % 2===0) {
        li.className = 'vermelho';
    }
    else {
        li.className = 'amarelo';
    }

    // Adiciona Novo
    listParagrafosHtml.appendChild(li);
    totPara = totPara + 1;
}

buttonBotaoAdicionar.addEventListener("click", adicionarParagrafo, false);
buttonBotaoLimpar.addEventListener("click", clearList, false);