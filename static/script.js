// Selecionando os elementos corretamente
const loginTab = document.querySelector('#login-tab');
const cadastroTab = document.querySelector('#cadastro-tab');
const loginForm = document.querySelector('.card-login');
const cadastroForm = document.querySelector('.card-login-cadastro');

// Função para mostrar o formulário de login
function mostraLogin() {
    loginForm.style.display = 'flex';
    cadastroForm.style.display = 'none';
}

// Função para mostrar o formulário de cadastro
function mostraCadastro() {
    loginForm.style.display = 'none';
    cadastroForm.style.display = 'flex';
}

// Eventos de clique para mudar entre os formulários
cadastroTab.addEventListener('click', mostraCadastro);  // Clica no "Cadastrar" para mostrar o cadastro
loginTab.addEventListener('click', mostraLogin);        // Clica no "Login" para mostrar o login

// Inicializa com o formulário de login visível
mostraLogin();
