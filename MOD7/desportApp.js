let marcacoes = [];

class Marcacao {
    
    // definir campos desta classe
    dia;
    hora;
    socio;
    maquina;

    // definir um construtor
    constructor(dia, hora, socio, maquina) {
        this.dia = dia;
        this.hora = hora;
        this.socio = socio;
        this.maquina = maquina;
    } 
}


function inicializar() {
    let marcacao1 = new Marcacao("1", "12h00", "João", "Pesos");
    marcacoes[0] = marcacao1;
    let marcacao2 = new Marcacao("1", "12h00", "Maria", "Passadeira");
    marcacoes[1] = marcacao2;
}

function imprimir() {
    // que imprimia na consola
    for (var mar in marcacoes) {
        console.log("dia = " + mar.dia);
        console.log("hora = " + mar.hora);
        console.log("socio = " + mar.socio);
        console.log("maquina = " + mar.maquina);
      }
}

const listaMarcacoesHtml = document.getElementById("listaMarcacoesHtml");

function clearList() {
    while (listaMarcacoesHtml.firstChild) {
        listaMarcacoesHtml.removeChild(listaMarcacoesHtml.firstChild);
    }
}

function createSessionElement(marcacao) {
    const li = document.createElement("li");
    // Parei aqui
    li.textContent = "Dia: " + marcacao.dia + "Hora: " + marcacao.hora;
    return li;
};

function displaySchedule() {
    clearList();
    
    for (let i = 0; i < marcacoes.length; i++) {
        const li = createSessionElement(marcacoes[i]);
        listaMarcacoesHtml.appendChild(li);
    }
}
inicializar();
displaySchedule();