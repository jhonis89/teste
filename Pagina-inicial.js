function Menu(){

    var barra = document.getElementById("barra-de-tarefas");
    var menu = document.getElementById("menu-cel");
    var simbolo = document.getElementById("botao-cel")

    if(barra.style.display === "inline-block"){
        barra.style.display = "none";
        menu.style.display = "none";
        simbolo.innerHTML = "&#9776"

    }
    else{
        barra.style.display = "inline-block"
        menu.style.display = "inline-block"
        simbolo.innerHTML = "X"

    }
}

function Pesquisa(){
    var texto = document.getElementById("texto-da-pesquisa-cel");
    var caixa = document.getElementById("caixa-da-pesquisa-cel");
    var botao_pesquisar = document.getElementById("botao-da-pesquisa-cel");
    var botao_voltar = document.getElementById("botao-voltar-pesquisa-cel");
    var topo = document.getElementById("top");

    /* SE A PESQUISA NÃO ESTÁ VISÍVEL */
    if (texto.style.display === "none" || texto.style.display === "") {
        topo.style.display = "none"; 
        caixa.style.height = "6vh"; 
        caixa.style.display = "flex"; 
        botao_pesquisar.style.display = "inline-block"; 
        texto.style.display = "block"; 
        botao_voltar.style.display = "inline-block"; 
    }
}

    /* SE A PESQUISA NÃO ESTÁ VISÍVEL */
function VoltarPesquisa(){
    var texto = document.getElementById("texto-da-pesquisa-cel");
    var caixa = document.getElementById("caixa-da-pesquisa-cel");
    var botao_voltar = document.getElementById("botao-voltar-pesquisa-cel");
    var topo = document.getElementById("top");

    topo.style.display = "flex"; 
    caixa.style.display = "none"; 
    texto.style.display = "none"; 
    botao_voltar.style.display = "none";
    
}
