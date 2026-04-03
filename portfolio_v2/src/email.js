import config from './config.js';

emailjs.init(config.PUBLIC_KEY);

const form = document.querySelector('#contact-form');

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
};

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = form.querySelector('input[name="user_email"]').value.trim();

  if (!isValidEmail(email)) {
    alert('Email inválido.');
    return;
  }

  emailjs.sendForm(config.SERVICE_ID, config.TEMPLATE_ID, this)
    .then(
      result => {
        console.log('SUCCESS:', result.text);
        alert('Email enviado com sucesso!');
        form.reset();
      },
      error => {
        console.log('FAILED:', error.text);
        alert('Erro ao enviar email.');
      }
    );
});