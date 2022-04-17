'use strict';

// Función para guardar los datos (data) actualizado cada vez que realizamos un cambio (que puede ser clic fuera del input p. ej.)
function handleChangeFormFields(event) {
  event.preventDefault();

  localStorage.setItem('updatedData', JSON.stringify(data));
}

form.addEventListener('change', handleChangeFormFields);

// Función para que el contenido del LS se quede en los inputs
function getFromLocalStorage() {
  const getInfo = JSON.parse(localStorage.getItem('updatedData'));

  console.log(getInfo);

  for (const formInput of formLC) {
    if (formInput.id === 'name') {
      formInput.value = data.name;
      console.log(formInput.value);
      console.log(data.name);
    } else if (formInput.id === 'job') {
      formInput.value = data.job;
    } else if (formInput.id === 'email') {
      formInput.value = data.email;
    } else if (formInput.id === 'phone') {
      formInput.value = data.phone;
    } else if (formInput.id === 'linkedin') {
      formInput.value = data.linkedin;
    } else if (formInput.id === 'github') {
      formInput.value = data.github;
    }
  }
}

getFromLocalStorage();
