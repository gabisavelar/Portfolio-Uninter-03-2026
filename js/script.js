// Carrega o tema salvo no navegador ao abrir a página
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    }
});

// Alterna entre tema claro e escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    });
}

// Mostra ou esconde o menu mobile
const menuToggle = document.getElementById('menu-toggle');
const links = document.querySelector('.links');

if (menuToggle && links) {
    menuToggle.addEventListener('click', () => {
        links.classList.toggle('show');
    });
}

// Valida e "envia" o formulário de contato
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        // Verifica se os campos estão preenchidos
        if (!nome) {
            alert('Por favor, preencha o campo Nome.');
            return;
        }
        
        if (!email) {
            alert('Por favor, preencha o campo E-mail.');
            return;
        }
        
        if (!mensagem) {
            alert('Por favor, preencha o campo Mensagem.');
            return;
        }
        
        // Valida formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido no formato usuario@dominio.com.');
            return;
        }
        
        // Simula envio bem-sucedido
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });
}