document.addEventListener("DOMContentLoaded", function () {
    const carrosseis = document.querySelectorAll(".carousel-livro");

    carrosseis.forEach((carrossel) => {
        const primeiraImagem = carrossel.querySelector(".img-slider-livro");
        const setas = carrossel.parentElement.parentElement.querySelectorAll("i");

        if (!carrossel || !primeiraImagem || setas.length === 0) {
            console.error("Erro: Elementos de carrossel ou setas não encontrados.");
            return;
        }

        let arrastando = false, posicaoInicialX, scrollInicial;

        // Duplicando as imagens para efeito de loop
        const qtdImagens = carrossel.children.length;
        for (let i = 0; i < qtdImagens; i++) {
            carrossel.appendChild(carrossel.children[i].cloneNode(true));
        }

        // Função para rolagem suave com as setas
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
            };

            requestAnimationFrame(animacao);
        };

        // Função de facilidade para animação suave
        const facilitar = (tempo, inicio, mudanca, duracao) => {
            tempo /= duracao / 2;
            if (tempo < 1) return mudanca / 2 * tempo * tempo + inicio;
            tempo--;
            return -mudanca / 2 * (tempo * (tempo - 2) - 1) + inicio;
        };

        // Configuração das setas de rolagem
        setas.forEach(seta => {
            seta.addEventListener("click", () => {
                let larguraImagem = primeiraImagem.clientWidth + 15; // largura da imagem + margens
                let deslocamento = larguraImagem * 3; // move 3 livros
                rolarSuavemente(carrossel.scrollLeft + (seta.id.includes("esquerda") ? -deslocamento : deslocamento), 500);
            });
        });

        // Funções de arrasto
        carrossel.addEventListener("mousedown", (evento) => {
            arrastando = true;
            posicaoInicialX = evento.pageX;
            scrollInicial = carrossel.scrollLeft;
            carrossel.classList.add("arrastando");
        });

        carrossel.addEventListener("mousemove", (evento) => {
            if (!arrastando) return;
            evento.preventDefault();
            const deslocamento = evento.pageX - posicaoInicialX;
            carrossel.scrollLeft = scrollInicial - deslocamento; // Rola o carrossel com base na posição inicial
        });

        carrossel.addEventListener("mouseup", () => {
            arrastando = false;
            carrossel.classList.remove("arrastando");
        });

        carrossel.addEventListener("mouseleave", () => {
            arrastando = false;
            carrossel.classList.remove("arrastando");
        });

        // Para compatibilidade com dispositivos móveis
        carrossel.addEventListener("touchstart", (evento) => {
            arrastando = true;
            posicaoInicialX = evento.touches[0].pageX;
            scrollInicial = carrossel.scrollLeft;
            carrossel.classList.add("arrastando");
        });

        carrossel.addEventListener("touchmove", (evento) => {
            if (!arrastando) return;
            const deslocamento = evento.touches[0].pageX - posicaoInicialX;
            carrossel.scrollLeft = scrollInicial - deslocamento;
        });

        carrossel.addEventListener("touchend", () => {
            arrastando = false;
            carrossel.classList.remove("arrastando");
        });

        // Previne o comportamento padrão do mouse para evitar que a imagem "grude"
        carrossel.addEventListener("dragstart", (evento) => {
            evento.preventDefault();
        });
    });
});
