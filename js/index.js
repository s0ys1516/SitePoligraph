import { CustomSelect } from './custom-select';
import { initFormValidate } from './init-form-validate';
import { initModals } from './init-modals';

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
