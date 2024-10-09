const carrossel = document.querySelector(".carousel");
const primeiraImagem = carrossel.querySelector(".img-slider");
const setas = document.querySelectorAll(".container-slider i");

let arrastando = false, movimentoIniciado = false, posicaoInicialX, scrollInicial;

// Duplicação das imagens para criar um loop contínuo
const imagens = carrossel.children;
const qtdImagens = imagens.length;
for (let i = 0; i < qtdImagens; i++) {
    carrossel.appendChild(imagens[i].cloneNode(true));
}

setas.forEach(seta => {
    seta.style.display = "block";
    seta.addEventListener("click", () => {
        let larguraImagem = primeiraImagem.clientWidth + 15;
        rolarSuavemente(carrossel.scrollLeft + (seta.id === "esquerda" ? -larguraImagem : larguraImagem), 500);
    });
});

const limitarFrequencia = (callback, delay) => {
    let ultimaChamada = 0;
    return (...args) => {
        const agora = Date.now();
        if (agora - ultimaChamada >= delay) {
            ultimaChamada = agora;
            callback(...args);
        }
    };
};

const arrastar = limitarFrequencia((evento) => {
    if (!movimentoIniciado) return;
    evento.preventDefault();
    arrastando = true;
    carrossel.classList.add("arrastando");

    const posicaoAtualX = evento.pageX || evento.touches[0].pageX;
    const deslocamento = posicaoAtualX - posicaoInicialX;

    carrossel.scrollLeft = scrollInicial - deslocamento;
    verificarLoop();
}, 16);

const iniciarArrasto = (evento) => {
    movimentoIniciado = true;
    posicaoInicialX = evento.pageX || evento.touches[0].pageX;
    scrollInicial = carrossel.scrollLeft;
};

const pararArrasto = () => {
    movimentoIniciado = false;
    carrossel.classList.remove("arrastando");
    arrastando = false;
    verificarLoop();
};

const verificarLoop = () => {
    const larguraImagem = primeiraImagem.clientWidth + 15;
    const larguraTotal = larguraImagem * qtdImagens;

    if (carrossel.scrollLeft >= larguraTotal) {
        carrossel.scrollLeft -= larguraTotal;
    } else if (carrossel.scrollLeft <= 0) {
        carrossel.scrollLeft = larguraTotal;
    }
};

const rolarSuavemente = (destino, duracao) => {
    const inicio = carrossel.scrollLeft;
    const distancia = destino - inicio;
    let tempoInicio = null;

    const animacao = (tempoAtual) => {
        if (!tempoInicio) tempoInicio = tempoAtual;
        const tempoDecorrido = tempoAtual - tempoInicio;
        const progresso = facilitar(tempoDecorrido, inicio, distancia, duracao);

        carrossel.scrollLeft = progresso;
        if (tempoDecorrido < duracao) requestAnimationFrame(animacao);
        else verificarLoop();
    };

    requestAnimationFrame(animacao);
};

const facilitar = (tempo, inicio, mudanca, duracao) => {
    tempo /= duracao / 2;
    if (tempo < 1) return mudanca / 2 * tempo * tempo + inicio;
    tempo--;
    return -mudanca / 2 * (tempo * (tempo - 2) - 1) + inicio;
};

carrossel.addEventListener("dragstart", (e) => e.preventDefault());
carrossel.addEventListener("mousedown", iniciarArrasto);
carrossel.addEventListener("mousemove", arrastar);
carrossel.addEventListener("mouseup", pararArrasto);
carrossel.addEventListener("mouseleave", pararArrasto);
carrossel.addEventListener("touchstart", iniciarArrasto);
carrossel.addEventListener("touchmove", arrastar);
carrossel.addEventListener("touchend", pararArrasto);
