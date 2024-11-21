
var botao = false; // Variável para controlar a visibilidade

function Coracao() {
    var coracao = document.getElementsByClassName("botao-coracao");
    var coracaovermelho = document.getElementsByClassName("botao-coracaovermelho");
    if (!botao) {
        // Se não está visível, mostra
        if (coracao.length > 0) {
            coracaovermelho[0].style.display = "flex";
            coracao[0].style.display = "none";
        }
        botao = true; // Atualiza o estado
    } else {
        // Se está visível, esconde
        if (coracaovermelho.length > 0) {
            coracao[0].style.display = "flex";
            coracaovermelho[0].style.display = "none";
        }
        botao = false; // Atualiza o estado
    }
    
}


    var compartilharVisible = false; // Variável para controlar a visibilidade

function Compartilhar() {
    var corpo = document.getElementsByClassName("corpo");
    
    if (!compartilharVisible) {
        // Se não está visível, mostra
        if (corpo.length > 0) {
            corpo[0].style.display = "flex";
        }
        compartilharVisible = true; // Atualiza o estado
    } else {
        // Se está visível, esconde
        if (corpo.length > 0) {
            corpo[0].style.display = "none";
        }
        compartilharVisible = false; // Atualiza o estado
    }
    
}

var avaliar = false; // Variável para controlar a visibilidade

function Avaliar() {
    var corpoav = document.getElementsByClassName("corpoav");
    
    if (!avaliar) {
        // Se não está visível, mostra
        if (corpoav.length > 0) {
            corpoav[0].style.display = "flex";
        }
        avaliar = true; // Atualiza o estado
    } else {
        // Se está visível, esconde
        if (corpoav.length > 0) {
            corpoav[0].style.display = "none";
        }
        avaliar = false; // Atualiza o estado
    }
    
}

const estrela = document.querySelectorAll('span');
document.getElementById('avaliar').addEventListener('click', function() {
    element.dataset.value = "10"; // Troca o valor para "10"
    valorSpan.textContent = element.dataset.value; // Atualiza o conteúdo exibido
});

//const spans = document.querySelectorAll('.estrela span'); // Seleciona todos os spans dentro da div com a classe 'estrela'

// Armazenando os valores em variáveis diferentes
//const [value1, value2, value3, value4, value5] = Array.from(spans).map(span => span.dataset.value);

//console.log(value1); // "1"
//console.log(value2); // "2"
//console.log(value3); // "3"
//console.log(value4); // "4"
//console.log(value5); // "5"
