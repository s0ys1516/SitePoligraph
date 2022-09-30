import { CustomSelect } from './custom-select.js';
import { initFormValidate } from './init-form-validate.js';
import { initModals } from './init-modals.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initModals();
  });
});

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    const select = new CustomSelect();
    select.init();
    initFormValidate();
  });
});
