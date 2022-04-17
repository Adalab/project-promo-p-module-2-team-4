'use strict';

// VARIABLES
const name = document.querySelector('.js_name');
const job = document.querySelector('.js_job');
const photo = document.querySelector('.js_photo');
const email = document.querySelector('.js_email');
const phone = document.querySelector('.js_phone');
const linkedin = document.querySelector('.js_linkedin');
const github = document.querySelector('.js_github');

// Función para guardar los datos (data) actualizado cada vez que realizamos un cambio (que puede ser clic fuera del input p. ej.)
function handleChangeFormFields(event) {
  event.preventDefault();

  localStorage.setItem('updatedData', JSON.stringify(data));
}

form.addEventListener('change', handleChangeFormFields);




// Función para que el contenido del LS se quede en los inputs
function getFromLocalStorage() {
  const getInfo = JSON.parse(localStorage.getItem('updatedData'));
   data = getInfo;

  name.value = data.name;
  name.value = data.name;
  job.value = data.job;
  email.value = data.email;
  phone.value = data.phone;
  linkedin.value = data.linkedin;
  github.value = data.github;

  if (data.photo !== '') {
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }

  renderPreview();
  
}

getFromLocalStorage();

