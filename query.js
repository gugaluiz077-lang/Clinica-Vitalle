const menu = document.querySelector('.menu-toggle');

menu.addEventListener('click', function() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('aberto');
});

const form = document.querySelector('#form-agendamento');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Formulário enviado!');

  const nome = document.querySelector('#nome').value;
  const telefone = document.querySelector('#telefone').value;
  const servico = document.querySelector('#servico').value;
  const data = document.querySelector('#data').value;

  console.log('Nome:', nome);
  console.log('Telefone:', telefone);
  console.log('Serviço:', servico);
  console.log('Data:', data);
});

const nomeImput = document.querySelector('#nome');


form.addEventListener('submit', function(event) { 
 const valorNumero = nomeImput.value.trim();

  if (nomeImput.value === '') {
     event.preventDefault();
   nomeImput.placeholder = 'Por favor, preencha este campo.';
  nomeImput.style.borderColor = 'red';
  } else {
nomeImput.style.borderColor = 'green';
  }
});

const telefoneImput = document.querySelector('#telefone');


form.addEventListener('submit', function(event) { 
 const valorNumero = telefoneImput.value.trim();

  if (telefoneImput.value === '') {
     event.preventDefault();
   telefoneImput.placeholder = 'Por favor, preencha este campo.';
  telefoneImput.style.borderColor = 'red';
  } else {
telefoneImput.style.borderColor = 'green';
  }
});

// Campo do telefone com mascara de entrada
// 1. Seleciona o elemento input no DOM
const campoTelefone = document.querySelector('#telefone');

// 2. Adiciona o ouvinte para o evento 'input'
campoTelefone.addEventListener('input', (e) => {
    // Remove qualquer caractere que não seja número
    let digitos = e.target.value.replace(/\D/g, '');

    // Garante no máximo 11 dígitos
    digitos = digitos.substring(0, 11);

    // 3. Aplica os símbolos de acordo com a quantidade de dígitos
    if (digitos.length > 10) {
        // Formato Celular (11 dígitos): (XX) XXXXX-XXXX
        e.target.value = digitos.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (digitos.length > 6) {
        // Formato Fixo (10 dígitos): (XX) XXXX-XXXX
        e.target.value = digitos.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (digitos.length > 2) {
        // Início da digitação: (XX) XXXX
        e.target.value = digitos.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else {
        // Menos de 3 dígitos
        e.target.value = digitos;
    }
});

// Data Correta
const hoje = new Date();

const ano = hoje.getFullYear();

// Corrigido: 'String' e 'padStart' com maiúsculas
const mes = String(hoje.getMonth() + 1).padStart(2, '0');

// Corrigido: 'String' e 'padStart' com maiúsculas
const dia = String(hoje.getDate()).padStart(2, '0');

const dataMinima = `${ano}-${mes}-${dia}`;

// Aplica a data mínima no input type="date"
document.querySelector('#data').setAttribute('min', dataMinima);
