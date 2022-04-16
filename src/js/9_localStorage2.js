'use strict';


function handleChangeFormFields(event) {
  event.preventDefault();

  localStorage.setItem('updatedData', JSON.stringify(data));
}


form.addEventListener('change', handleChangeFormFields);