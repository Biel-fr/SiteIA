// Controle do modal
const modal = document.getElementById('modal');
const btn = document.getElementById('openModal');
const span = document.getElementsByClassName('close')[0];

// Quando o botão é clicado, abre o modal
if (btn) {
    btn.onclick = function() {
        modal.style.display = 'block'; // Exibe o modal
    }
}

// Quando o usuário clica no X, fecha o modal
if (span) {
    span.onclick = function() {
        modal.style.display = 'none'; // Oculta o modal
    }
}

// Quando o usuário clica fora do modal, fecha
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'; // Oculta o modal
    }
}

// Animação de fade-in ao rolar a página
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Adiciona a classe visible
            observer.unobserve(entry.target); // Para observar o elemento após a animação
        }
    });
});

// Aplica a animação em todos os elementos com a classe fade-in
fadeIns.forEach(fadeIn => {
    observer.observe(fadeIn); // Começa a observar o elemento
});