'use strict';
// Nueva constante para poder hacer un querySelectorALL del formulario (la otra que teníamos era un querySelector nada más):
// const form(LocalStorage) = document.querySelectorAll('.js_form');

function localStoragePalettes() {
  if (data.palette === radioButton1.value) {
    previewContainerCard.classList.remove('palette-2');
    previewContainerCard.classList.remove('palette-3');
    previewContainerCard.classList.add('palette-1');

    radioButton1.checked = true;
  } else if (data.palette === radioButton2.value) {
    previewContainerCard.classList.remove('palette-1');
    previewContainerCard.classList.remove('palette-3');
    previewContainerCard.classList.add('palette-2');

    radioButton2.checked = true;
  } else if (data.palette === radioButton3.value) {
    previewContainerCard.classList.remove('palette-1');
    previewContainerCard.classList.remove('palette-2');
    previewContainerCard.classList.add('palette-3');

    radioButton3.checked = true;
  }
}

function localStorageFill() {
  for (const formInput of form) {
    if (formInput.id === 'name') {
      formInput.value = data.name;
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

function localStorageImage() {
  if (data.photo !== '') {
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
}

function handleLocalStorage() {
  const getInfo = localStorage.getItem('localStorage');

  if (getInfo !== null) {
    data = JSON.parse(getInfo);

    localStoragePalettes();
    localStorageFill();
    localStorageImage();

    renderPreview();
  }
}

handleLocalStorage();
