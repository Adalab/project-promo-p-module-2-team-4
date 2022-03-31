'use strict';
// Constantes DISEÑA
const designLegend = document.querySelector('.js_designLegend');
const design = document.querySelector('.js_design');
const arrowDesign = document.querySelector('.js_arrowDesign');
// Constantes RELLENA
const fillLegend = document.querySelector('.js_fillLegend');
const fill = document.querySelector('.js_fill');
const arrowFill = document.querySelector('.js_arrowFill');
// Constantes COMPARTE
const shareLegend = document.querySelector('.js_shareLegend');
const share = document.querySelector('.js_share');
const arrowShare = document.querySelector('.js_arrowShare');

// Función para colapsar las secciones (section)
function unfoldForm(legendId) {
  if (legendId === 'designLegend') {
    design.classList.toggle('collapsed');
    fill.classList.add('collapsed');
    share.classList.add('collapsed');
    arrowDesign.classList.toggle('rotate');
    arrowFill.classList.add('rotate');
    arrowShare.classList.add('rotate');
  }

  if (legendId === 'fillLegend') {
    design.classList.add('collapsed');
    fill.classList.toggle('collapsed');
    share.classList.add('collapsed');
    arrowDesign.classList.add('rotate');
    arrowFill.classList.toggle('rotate');
    arrowShare.classList.add('rotate');
  }

  if (legendId === 'shareLegend') {
    design.classList.add('collapsed');
    fill.classList.add('collapsed');
    share.classList.toggle('collapsed');
    arrowDesign.classList.add('rotate');
    arrowFill.classList.add('rotate');
    arrowShare.classList.toggle('rotate');
  }
}

// Función manejadora
function handleCollapsed(event) {
  event.preventDefault();
  const legendId = event.currentTarget.id;
  unfoldForm(legendId);
  // rotateArrow(legendId);
}

// Eventos
designLegend.addEventListener('click', handleCollapsed);
fillLegend.addEventListener('click', handleCollapsed);
shareLegend.addEventListener('click', handleCollapsed);

// Función para rotar la flecha, si preferimos separarlo. Sólo hay que recordar descomentar la función en la manejadora también
/* function rotateArrow(arrow) {
  if (arrow === 'designLegend') {
    arrowDesign.classList.toggle('rotate');
    arrowFill.classList.add('rotate');
    arrowShare.classList.add('rotate');
  }

  if (arrow === 'fillLegend') {
    arrowDesign.classList.add('rotate');
    arrowFill.classList.toggle('rotate');
    arrowShare.classList.add('rotate');
  }

  if (arrow === 'shareLegend') {
    arrowDesign.classList.add('rotate');
    arrowFill.classList.add('rotate');
    arrowShare.classList.toggle('rotate');
  }
} */

// Colapsar DISEÑA
/*
designLegend.addEventListener('click', () => {
  design.classList.toggle('collapsed');
  arrowDesign.classList.toggle('rotate');
});
*/

// Colapsar RELLENA
/*
fillLegend.addEventListener('click', () => {
  fill.classList.toggle('collapsed');
  arrowFill.classList.toggle('rotate');
});
*/

// Colapsar COMPARTE
/*
shareLegend.addEventListener('click', () => {
  share.classList.toggle('collapsed');
  arrowShare.classList.toggle('rotate');
});
*/
