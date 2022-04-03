'use strict';

const form = document.querySelector('.js_form');
const resetButton = document.querySelector('.js_reset');

resetButton.addEventListener('click', ()  => {

  // Reset de los inputs del formulario (incluyendo las paletas que vuelven al valor predeterminado asignando el atributo 'checked' a la paleta 1)
  form.reset();

  // Reset de los campos de las tarjeta preview
  cardName.innerHTML = 'Nombre Apellidos';
  cardJob.innerHTML = 'Front-end developer';
  cardPhone.href = '';
  cardEmail.href = '';
  cardLinkedin.href = '';
  cardGithub.href = '';
});

