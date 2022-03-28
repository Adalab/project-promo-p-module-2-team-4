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

// Colapsar DISEÑA
designLegend.addEventListener('click', () => {
  design.classList.toggle('collapsed');
  arrowDesign.classList.toggle('rotate');
});

// Colapsar RELLENA
fillLegend.addEventListener('click', () => {
  fill.classList.toggle('collapsed');
  arrowFill.classList.toggle('rotate');
});

// Colapsar COMPARTE
shareLegend.addEventListener('click', () => {
  share.classList.toggle('collapsed');
  arrowShare.classList.toggle('rotate');
});
