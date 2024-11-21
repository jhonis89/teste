const tamanhoTela = window.matchMedia("(max-width: 800px)");

function barraCel(){
    var lista = document.getElementById("listaCel");
    var btn = document.getElementById("btn");

    if (lista.style.display === "flex"){
        lista.style.display = "none";
        btn.innerHTML = "&#9776;"
    }    
    else{
        lista.style.display = "flex";
        btn.innerHTML = "X";
        
    }
}

function Abrir_pesquisa() {
    var logo = document.getElementById("logo");
    var input = document.getElementById("input_pesquisa");
    var btn_voltar = document.getElementById("btn_voltar");
    var btn_tarefas = document.getElementById("btn");
    var pesq = document.getElementById("pesquisa");

    var logoDisplay = window.getComputedStyle(logo).display;

    if (logoDisplay === "inline-block" || logoDisplay === "block"){
        history.pushState({ aberto: true }, null, "");
        pesq.style.width = "100vw";
        logo.style.display = "none";
        input.style.display = "inline-block";
        btn_voltar.style.display = "inline-block";
        btn_tarefas.style.display = "none";
    }
}

window.onpopstate = function(event) {
    var logo = document.getElementById("logo");
    var input = document.getElementById("input_pesquisa");
    var btn_voltar = document.getElementById("btn_voltar");
    var btn_tarefas = document.getElementById("btn");

    if (event.state && event.state.aberto){
        logo.style.display = "inline-block";
        input.style.display = "none";
        btn_voltar.style.display = "none";
        btn_tarefas.style.display = "inline-block";
    }
}

function Voltar_pesquisa() {
    var logo = document.getElementById("logo");
    var input = document.getElementById("input_pesquisa");
    var btn_voltar = document.getElementById("btn_voltar");
    var btn_tarefas = document.getElementById("btn");
    var pesq = document.getElementById("pesquisa");
    var logoDisplay = window.getComputedStyle(logo).display;

    if (logoDisplay === "none"){
        pesq.style.width = "auto";
        logo.style.display = "inline-block";
        input.style.display = "none";
        btn_voltar.style.display = "none";
        btn_tarefas.style.display = "inline-block";
    }
}

function ajustarLayout() {
    var logo = document.getElementById("logo");
    var input = document.getElementById("input_pesquisa");
    var btn_voltar = document.getElementById("btn_voltar");
    var btn_tarefas = document.getElementById("btn");
    var imgOn = document.getElementById("imgOn")
    var pesq = document.getAnimations("pesquisa")

    if (tamanhoTela.matches) {

        imgOn.onclick = Abrir_pesquisa;

        if (window.getComputedStyle(input).display === "inline-block") {
            btn_voltar.style.display = "inline-block";
            btn_tarefas.style.display = "none";
        }
        
        else{
            btn_tarefas.style.display = "inline-block";
            input.style.display = "none";
 
        }
    }
    
    else{
        logo.style.display = "inline-block";
        input.style.display = "inline-block"; 
        btn_voltar.style.display = "none";
        btn_tarefas.style.display = "none"; 
        imgOn.onclick = null;
    }
}

ajustarLayout();
tamanhoTela.addListener(ajustarLayout);


function redirecionarGenero(genero) {
    window.location.href = `/genero/${genero}`;
}