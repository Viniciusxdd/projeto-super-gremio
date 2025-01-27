const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const video = document.getElementById('video')
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function () {
        const cartaVirada = cartao.querySelector(".carta-virada");

        cartao.classList.toggle("virar");

        cartaVirada.classList.toggle("mostrar-fundo-carta");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder");
    });
});


btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCarta(cartaoAtual);

});


btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCarta(cartaoAtual);
});



window.onload = function() {
    const video = document.getElementById("video");
    const soundButton = document.getElementById("ativar-som");

    // Configuração inicial do vídeo
    video.loop = true;
    video.muted = true;  // Inicia mutado para evitar bloqueios de autoplay
    video.play();

    // Alternar som ao clicar no botão
    soundButton.addEventListener("click", function() {
        video.muted = !video.muted; // Inverte o estado do mute
    });
};


function mostrarCarta(cartaoAtual) {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
