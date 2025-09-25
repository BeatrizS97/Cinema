const modal = document.getElementById('modal'); // Seleciona o modal
const btns = document.querySelectorAll('.btn-comprar'); // Seleciona todos os botões de compra
const span = document.getElementsByClassName('close')[0]; // Seleciona o elemento de fechar (x)

// Abre o modal quando qualquer botão é clicado
btns.forEach(btn => {
    btn.onclick = function () {
        modal.style.display = 'flex';
    }
});

// Fecha o modal quando o usuário clica no (x)
span.onclick = function () {
    modal.style.display = 'none';
}

// Fecha o modal quando o usuário clica fora do conteúdo do modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Criação de gotas de sangue escorrendo a partir da base do h2
const bloodDropsContainer = document.getElementById('blood-drops-container');
function createBloodDrop() {
    const drop = document.createElement('div');
    drop.classList.add('blood-drop'); // Adiciona a classe para estilização
    drop.style.left = `${Math.random() * 100}%`; // Posição horizontal aleatória
    drop.style.animationDuration = `${3 + Math.random() * 2}s`; // Duração entre 3-5s
    drop.style.animationDelay = `${Math.random() * 4}s`; // Delay aleatório
    bloodDropsContainer.appendChild(drop); // Adiciona a gota ao container

    // Remove a gota após a animação
    drop.addEventListener('animationend', () => {
        drop.remove();
    });
}

// Gera gotas continuamente a cada 3-7 segundos para reduzir quantidade
setInterval(createBloodDrop, 3000 + Math.random() * 4000);

// Função para alternar modo assustador sincronizado para título principal e cards
const title = document.querySelector('.titulo-principal');
const cards = document.querySelectorAll('.card');
function toggleScaryMode() {
    // Ativa o tremor no título principal
    title.classList.add('tremble-active');
    // Ativa o modo assustador nos cards
    cards.forEach(card => {
        const img = card.querySelector('img');
        img.src = img.getAttribute('data-alternative'); // Troca para a imagem alternativa
        img.classList.add('monster-jump'); // Adiciona a classe de animação
    });
    // Reverte após 2.5s
    setTimeout(() => {
        title.classList.remove('tremble-active'); // Remove o tremor
        cards.forEach(card => {
            const img = card.querySelector('img');
            img.src = img.getAttribute('data-original');
            img.classList.remove('monster-jump'); // Remove a classe de animação
        });
    }, 2500); // Mantém o modo assustador por 2.5s
}

// Inicia a alternância a cada 40s para sincronizar with fontIllusion and tremble
setInterval(toggleScaryMode, 40000);