const olho = document.getElementById('password-condition');
const senha = document.getElementById('password');

olho.addEventListener('click', verOuEsconderSenha);

function verOuEsconderSenha() {
    if (senha.type === 'password') {
        senha.type = 'text';
        olho.src = './bit_image/password-hide.png';
    } else {
        senha.type = 'password';
        olho.src = './bit_image/view-password.png';
    }
};
