// login.js

function validarFormulario() {
    // Obter os valores dos campos de email e senha
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    // Verificar se ambos os campos estão preenchidos
    if (email === '' || senha === '') {
      alert('Por favor, preencha ambos os campos de email e senha.');
      return false;
    }
  
    // Verificar se o email contém '@'
    if (email.indexOf('@') === -1) {
      alert('O email deve conter o caractere "@"');
      return false;
    }
  
    // Verificar se a senha tem no mínimo 4 caracteres
    if (senha.length < 4) {
      alert('A senha deve ter pelo menos 4 caracteres.');
      return false;
    }
  
    // Verificar se o email não contém caracteres proibidos (exemplo: caracteres especiais)
    var caracteresProibidos = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]+/;
    if (caracteresProibidos.test(email)) {
      alert('O email contém caracteres proibidos. Por favor, remova-os.');
      return false;
    }
  
    // Se todas as verificações passaram, redirecionar para a página home
    window.location.href = './home.html';
  
    // Retornar false para evitar que o formulário seja enviado normalmente
    return false;
  }
  