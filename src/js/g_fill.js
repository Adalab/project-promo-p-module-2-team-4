'use strict';

//VARIABLES

// Esta constante está en las variables de Clara
// const fill = document.querySelector('.js_fill');

// Objeto que recoge los valores que escribimos en los inputs
const data = {
  palette: 1,
  name: '',
  job: '',
  email: '',
  phone:'',
  linkedin: '',
  github: '',
  photo: '',
};

// Constantes de los elementos de la tarjeta
const cardName = document.querySelector('.js_cardName');
const cardJob = document.querySelector('.js_cardJob');
const cardPhone = document.querySelector('.js_cardPhone');
const cardEmail = document.querySelector('.js_cardEmail');
const cardLinkedin = document.querySelector('.js_cardLinkedin');
const cardGithub = document.querySelector('.js_cardGithub');



// Funciones con "una" acción

function rederPreview() {

  const githubName = data.github;
  const githubValue = githubName.slice(1);

  cardName.innerHTML = data.name;
  cardJob.innerHTML = data.job;
  cardPhone.href = `tel: ${data.phone}`;
  cardEmail.href = `mailto: ${data.email}`;
  cardLinkedin.href = `https://www.${data.linkedin}`;
  cardGithub.href = `https://github.com/${githubValue}`;

}



// Función manejadora

function handleKeyupInputs(event) {

  const inputUsed = event.target;

  if (inputUsed.id === 'name') {

    if (inputUsed.value === '') {
      data.name = 'Nombre Apellidos';
    } else {
      data.name = inputUsed.value;
      data.job = 'Front-end developer';
    }

  } else if (inputUsed.id === 'job') {

    if (inputUsed.value === '') {
      data.job = 'Front-end developer';
    } else {
      data.job = inputUsed.value;
      data.name = 'Nombre Apellidos';
    }

  } else if (inputUsed.id === 'email') {

    data.email = inputUsed.value;

  } else if (inputUsed.id === 'phone') {

    data.phone = inputUsed.value;

  } else if (inputUsed.id === 'linkedin') {

    data.linkedin = inputUsed.value;

  } else if (inputUsed.id === 'github') {

    data.github = inputUsed.value;

  }

  rederPreview();

}



// Evento 'keyup'

fill.addEventListener('keyup', handleKeyupInputs);