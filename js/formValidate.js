/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/form-validate/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/form-validate/js/custom-select.js":
/*!******************************************************!*\
  !*** ./components/form-validate/js/custom-select.js ***!
  \******************************************************/
/*! exports provided: CustomSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSelect", function() { return CustomSelect; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Функции создания разметки и рендера нативного селекта
var createElement = function createElement(template) {
  var newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

var renderElement = function renderElement(container, component) {
  var place = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'beforeend';

  switch (place) {
    case 'prepend':
      container.prepend(component);
      break;

    case 'afterend':
      container.after(component);
      break;

    case 'beforeend':
      container.append(component);
      break;
  }
};

var createNativeOptionsMarkup = function createNativeOptionsMarkup(items, activeIndex) {
  return items.map(function (el, index) {
    if (activeIndex.length) {
      var currentIndex = activeIndex.find(function (item) {
        return item === index;
      });

      if (currentIndex === index) {
        return "<option ".concat(el.value ? "value=".concat(el.value) : '', " selected>").concat(el.text ? "".concat(el.text) : '', "</option>");
      } else {
        return "<option ".concat(el.value ? "value=".concat(el.value) : '', ">").concat(el.text ? "".concat(el.text) : '', "</option>");
      }
    } else {
      return "<option ".concat(el.value ? "value=".concat(el.value) : '', ">").concat(el.text ? "".concat(el.text) : '', "</option>");
    }
  }).join('\n');
};

var createNativeSelectMarkup = function createNativeSelectMarkup(_ref) {
  var id = _ref.id,
      items = _ref.items,
      multiple = _ref.multiple,
      name = _ref.name,
      required = _ref.required,
      _ref$activeIndex = _ref.activeIndex,
      activeIndex = _ref$activeIndex === void 0 ? [] : _ref$activeIndex;
  return "<select ".concat(id ? "id='".concat(id, "'") : '', " ").concat(name ? "name='".concat(name, "'") : '', " ").concat(multiple ? 'multiple' : '', " ").concat(required ? 'required' : '', " tabindex=\"-1\" aria-hidden=\"true\">\n            <option value=\"\"></option>\n            ").concat(createNativeOptionsMarkup(items, activeIndex), "\n          </select>");
}; // Функция расстановки активных состояний у li по умолчанию


var setActiveState = function setActiveState(multiple, selectItems) {
  var flag = true;
  var activeIndex = [];
  selectItems.forEach(function (item, index) {
    if (multiple) {
      if (item.getAttribute('aria-selected') === 'true') {
        activeIndex.push(index);
      }
    } else {
      if (item.getAttribute('aria-selected') === 'true' && flag) {
        activeIndex.push(index);
        flag = false;
      } else {
        item.setAttribute('aria-selected', 'false');
      }
    }
  });
  return activeIndex;
}; // Формирование строки для мультиселекта


var createMultiString = function createMultiString(arr) {
  var str = '';

  if (arr.length) {
    if (arr.length === 1) {
      str = arr[0].innerHTML;
    } else {
      arr.forEach(function (el, index) {
        if (index === arr.length - 1) {
          str += el.innerHTML;
        } else {
          str += "".concat(el.innerHTML, ", ");
        }
      });
    }
  }

  return str;
}; // Функция расстановки активных состояний у li по умолчанию


var setSelectActiveState = function setSelectActiveState(multiple, insert, item) {
  var buttonTextBlock = item.querySelector('.custom-select__text');
  var activeItems = item.querySelectorAll('.custom-select__item[aria-selected="true"]');
  var label = item.querySelector('.custom-select__label');
  var str = createMultiString(activeItems);
  buttonTextBlock.style.transition = '0s';

  if (label) {
    label.style.transition = '0s';
  }

  setTimeout(function () {
    if (label) {
      label.style.transition = null;
    }

    buttonTextBlock.style.transition = null;
  }, 300);

  if (multiple && insert) {
    item.classList.add('not-empty');
    buttonTextBlock.innerHTML = str;
  } else if (multiple) {
    return;
  } else {
    item.classList.add('not-empty');
    buttonTextBlock.innerHTML = activeItems[0].innerHTML;
  }
}; // Функция создания структуры селекта, после создания селекта она сразу его рендерит


var createSelectStructure = function createSelectStructure(item) {
  var options = {};
  options.items = [];
  var multiple = item.dataset.multiple;
  var id = item.dataset.id;
  var name = item.dataset.name;
  var required = item.dataset.required;
  var insert = item.dataset.insert;
  var selectItems = item.querySelectorAll('.custom-select__item');
  var activeIndex = setActiveState(multiple, selectItems);

  if (activeIndex.length) {
    options.activeIndex = activeIndex;
    setSelectActiveState(multiple, insert, item);
  }

  options.name = name || false;
  options.id = id || false;
  options.required = Boolean(required);
  options.multiple = Boolean(multiple);
  selectItems.forEach(function (selectItem) {
    var value = selectItem.dataset.selectValue;
    var itemInfo = {};
    itemInfo.text = selectItem.innerText;
    itemInfo.value = value;
    options.items.push(itemInfo);
  });
  renderElement(item, createElement(createNativeSelectMarkup(options)));
  return item;
}; // Закрытие селекта


var closeSelect = function closeSelect() {
  var activeSelect = document.querySelector('[data-select].is-open');
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onEscapePress);

  if (activeSelect) {
    activeSelect.classList.remove('is-open');
  }
}; // Действия при клике на элемент списка


var clickAction = function clickAction(el, index) {
  var parent = el.closest('.custom-select');
  var multiple = parent.dataset.multiple;
  var insert = parent.dataset.insert;
  var buttonTextBlock = parent.querySelector('.custom-select__text');
  var itemText = el.innerText;
  var options = parent.querySelectorAll('option');
  var select = parent.querySelector('select');
  var changeEv = new CustomEvent('change');
  var inputEv = new CustomEvent('input');
  select.dispatchEvent(changeEv);
  select.dispatchEvent(inputEv);
  var form = select.closest('form');

  if (form) {
    var formChangeEv = new CustomEvent('change');
    var formInputEv = new CustomEvent('input');
    form.dispatchEvent(formChangeEv);
    form.dispatchEvent(formInputEv);
  }

  if (multiple) {
    if (insert === 'true') {
      if (el.getAttribute('aria-selected') === 'true') {
        el.setAttribute('aria-selected', 'false');
        var activeItems = parent.querySelectorAll('.custom-select__item[aria-selected="true"]');
        var str = createMultiString(activeItems);
        options[index + 1].selected = false;
        buttonTextBlock.innerText = str;

        if (!str) {
          parent.classList.remove('not-empty');
          parent.classList.remove('is-valid');
        }
      } else {
        el.setAttribute('aria-selected', 'true');

        var _activeItems = parent.querySelectorAll('.custom-select__item[aria-selected="true"]');

        var _str = createMultiString(_activeItems);

        buttonTextBlock.innerText = _str;
        parent.classList.add('not-empty');
        parent.classList.add('is-valid');
        options[index + 1].selected = true;
      }
    } else {
      if (el.getAttribute('aria-selected') === 'true') {
        el.setAttribute('aria-selected', 'false');
        options[index + 1].selected = false;
      } else {
        el.setAttribute('aria-selected', 'true');
        options[index + 1].selected = true;
      }
    }
  } else {
    var activeItem = parent.querySelector('.custom-select__item[aria-selected="true"]');

    if (el.getAttribute('aria-selected') === 'true') {
      closeSelect();
    } else {
      if (activeItem) {
        activeItem.setAttribute('aria-selected', 'false');
        parent.classList.remove('not-empty');
        parent.classList.remove('is-valid');
      }

      buttonTextBlock.innerText = itemText;
      el.setAttribute('aria-selected', 'true');
      parent.classList.add('not-empty');
      parent.classList.add('is-valid');
      options[index + 1].selected = true;
      closeSelect();
    }
  }
}; // Обработчики событий


var onDocumentClick = function onDocumentClick(_ref2) {
  var target = _ref2.target;

  if (!target.closest('.custom-select')) {
    closeSelect();
  }
};

var onEscapePress = function onEscapePress(e) {
  var isEscape = e.key === 'Escape';

  if (isEscape) {
    closeSelect();
  }
};

var onItemClick = function onItemClick(el, index) {
  clickAction(el, index);
};

var onItemKeydown = function onItemKeydown(e, el, index) {
  var isEnter = e.key === 'Enter';

  if (isEnter) {
    clickAction(el, index);
  }
};

var onLastItemKeydown = function onLastItemKeydown(e) {
  var isTab = e.key === 'Tab';

  if (isTab) {
    closeSelect();
  }
};

var onSelectClick = function onSelectClick(e) {
  var parent = e.target.closest('[data-select]');
  var activeSelect = document.querySelector('[data-select].is-open');
  parent.classList.remove('is-invalid');

  if (activeSelect && activeSelect === parent) {
    activeSelect.classList.remove('is-open');
    return;
  }

  if (activeSelect) {
    closeSelect();
  }

  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onEscapePress);

  if (parent.classList.contains('is-open')) {
    parent.classList.remove('is-open');
  } else {
    parent.classList.add('is-open');
  }
};

var onSelectKeydown = function onSelectKeydown(e) {
  var parent = e.target.closest('[data-select]');
  parent.classList.remove('is-invalid');

  if (e.shiftKey && e.key === 'Tab' && parent.closest('.is-open')) {
    closeSelect();
  }
}; // Все действия с селектом


var setSelectAction = function setSelectAction(item) {
  var customSelect = item;
  var button = customSelect.querySelector('.custom-select__button');
  var selectItems = customSelect.querySelectorAll('.custom-select__item');
  button.addEventListener('click', onSelectClick);
  button.addEventListener('keydown', onSelectKeydown);
  selectItems.forEach(function (el, index) {
    el.addEventListener('click', function () {
      onItemClick(el, index);
    });
    el.addEventListener('keydown', function (e) {
      onItemKeydown(e, el, index);
    });

    if (index === selectItems.length - 1) {
      el.addEventListener('keydown', onLastItemKeydown);
    }
  });
}; // Класс CustomSelect


var CustomSelect = /*#__PURE__*/function () {
  function CustomSelect() {
    _classCallCheck(this, CustomSelect);

    window.selectInit = this.init.bind(this);
  }

  _createClass(CustomSelect, [{
    key: "setAction",
    value: function setAction(item) {
      setSelectAction(item);
    }
  }, {
    key: "createSelect",
    value: function createSelect(item) {
      createSelectStructure(item);
      return item;
    }
  }, {
    key: "initSelects",
    value: function initSelects() {
      var _this = this;

      var selects = document.querySelectorAll('[data-select]');

      if (selects.length) {
        selects.forEach(function (select) {
          if (!select.classList.contains('is-initialized')) {
            var newSelect = _this.createSelect(select);

            _this.setAction(newSelect);

            select.classList.add('is-initialized');
          }
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.initSelects();
    }
  }]);

  return CustomSelect;
}();

/***/ }),

/***/ "./components/form-validate/js/form-validate.js":
/*!******************************************************!*\
  !*** ./components/form-validate/js/form-validate.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormsValidate; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Константы и переменные
var BASE_COUNTRY_CODE = '+7';
var BASE_MATRIX = '(___) ___ __ __';
var phoneLength = BASE_COUNTRY_CODE.length + BASE_MATRIX.length;
var MAX_PHONE_LENGTH = 18;
var MIN_PHONE_LENGTH = 6; // Ограничения ввода для обычных полей

var returnLimitationsRegEx = function returnLimitationsRegEx(dataLimitations) {
  switch (dataLimitations) {
    case 'digit':
      return /[^\d]/g;

    case 'simple-phone':
      return /[^+\d]/g;

    case 'name':
      return /[^a-zA-Zа-яёА-ЯЁ\-\s]/g;

    case 'letters':
      return /[^a-zA-Zа-яёА-ЯЁ\s]/g;

    case 'letters-and-digit':
      return /[^a-zA-Zа-яёА-ЯЁ\s\d]/g;

    case 'cyrillic':
      return /[^а-яёА-ЯЁ\s]/g;

    case 'latin':
      return /[^a-zA-Z\s]/g;

    default:
      return false;
  }
};

var simpleLimitations = function simpleLimitations(formElement, dataLimitations) {
  var RegEx = returnLimitationsRegEx(dataLimitations);

  if (RegEx) {
    formElement.addEventListener('input', function () {
      formElement.value = formElement.value.replace(RegEx, '');
    });
    return;
  } // eslint-disable-next-line no-console


  console.error("\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F: ".concat(dataLimitations, ", \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439."));
}; // Ограничения ввода для обычных полей с матрицей


var returnMatrixLimitationsRegEx = function returnMatrixLimitationsRegEx(dataMatrixLimitations) {
  switch (dataMatrixLimitations) {
    case 'digit':
      return /[^\d]/g;

    case 'name':
      return /[^\а-яё\А-ЯЁ\a-z\A-Z\-]]/g;

    case 'letters':
      return /[^\а-яё\А-ЯЁ\a-z\A-Z]/g;

    case 'letters-and-digit':
      return /[^\а-яё\А-ЯЁ\a-z\A-Z\d]/g;

    case 'cyrillic':
      return /[^\а-яё\А-ЯЁ]/g;

    case 'latin':
      return /[^\a-z\A-Z]/g;

    default:
      return false;
  }
};

var initMatrixReplace = function initMatrixReplace(target, matrix, RegEx) {
  var def = matrix.replace(RegEx, '');
  var val = target.value.replace(RegEx, '');
  var i = 0;

  if (def.length >= val.length) {
    val = def;
  }

  target.value = matrix.replace(/./g, function (a) {
    if (/[_\^]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    } else {
      return a;
    }
  });
};

var simpleMatrix = function simpleMatrix(formElement, dataMatrix, dataMatrixLimitations) {
  if (dataMatrixLimitations === null) {
    // eslint-disable-next-line no-console
    console.error('При валидации по матрице обязательно указывать формат ограничений: data-matrix-limitations=""');
    return;
  }

  var RegEx = returnMatrixLimitationsRegEx(dataMatrixLimitations);

  if (RegEx) {
    formElement.addEventListener('input', function () {
      initMatrixReplace(formElement, dataMatrix, RegEx);
    });
  } else {
    // eslint-disable-next-line no-console
    console.error("\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F: ".concat(dataMatrixLimitations, ", \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439."));
  }
}; // Маска для телефона


var onInputPhoneInput = function onInputPhoneInput(_ref) {
  var target = _ref.target;
  var matrix = "".concat(BASE_COUNTRY_CODE).concat(BASE_MATRIX);
  var def = matrix.replace(/\D/g, '');
  var i = 0;
  var val = target.value.replace(/\D/g, '');

  if (def.length >= val.length) {
    val = def;
  }

  target.value = matrix.replace(/./g, function (a) {
    if (/[_\d]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    } else {
      return a;
    }
  });
};

var prettifyPhoneInput = function prettifyPhoneInput(input) {
  if (!input.value.startsWith(BASE_COUNTRY_CODE)) {
    if (input.value.startsWith('8')) {
      input.value = input.value.replace('8', BASE_COUNTRY_CODE);
    } else {
      input.value = "".concat(BASE_COUNTRY_CODE).concat(input.value);
    }
  } // onInputPhoneInput({input});


  var matrix = "".concat(BASE_COUNTRY_CODE).concat(BASE_MATRIX);
  var def = matrix.replace(/\D/g, '');
  var i = 0;
  var val = input.value.replace(/\D/g, '');

  if (def.length >= val.length) {
    val = def;
  }

  input.value = matrix.replace(/./g, function (a) {
    if (/[_\d]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    } else {
      return a;
    }
  });
};

var onFocusPhoneInput = function onFocusPhoneInput(_ref2) {
  var target = _ref2.target;

  if (!target.value) {
    target.value = BASE_COUNTRY_CODE;
  }

  target.addEventListener('input', onInputPhoneInput);
  target.addEventListener('blur', onBlurPhoneInput);
  target.addEventListener('keydown', onKeydownPhoneInput);
};

var onKeydownPhoneInput = function onKeydownPhoneInput(e) {
  if (e.target.selectionStart === 1 && e.keyCode === 8 || e.keyCode === 46) {
    e.preventDefault();
  }

  if (e.target.selectionStart <= phoneLength && e.keyCode !== 8 && e.keyCode !== 46 && e.keyCode !== 37 && e.keyCode !== 39) {
    e.target.setSelectionRange(phoneLength, phoneLength);
  }
};

var onBlurPhoneInput = function onBlurPhoneInput(_ref3) {
  var target = _ref3.target;

  if (target.value === BASE_COUNTRY_CODE) {
    var parent = target.closest('[data-validate-type="phone"]');
    target.value = '';
    parent.classList.remove('not-empty');
    target.removeEventListener('input', onInputPhoneInput);
    target.removeEventListener('blur', onBlurPhoneInput);
  }
}; // Показ ошибок полей форм


var hideError = function hideError(el) {
  if (el.classList.contains('toggle-group')) {
    validateToggleGroup(el);
    el.setAttribute('aria-invalid', 'true');
    el.classList.remove('is-invalid');
    el.classList.add('is-valid');
  } else {
    var parent = el.closest('[data-validate-type]');
    el.setAttribute('aria-invalid', 'false');
    parent.classList.remove('is-invalid');
    parent.classList.add('is-valid');
  }
};

var showError = function showError(el) {
  if (el.classList.contains('toggle-group')) {
    validateToggleGroup(el);
    el.setAttribute('aria-invalid', 'false');
    el.classList.add('is-invalid');
    el.classList.remove('is-valid');
  } else {
    var parent = el.closest('[data-validate-type]');
    el.setAttribute('aria-invalid', 'true');
    parent.classList.add('is-invalid');
    parent.classList.remove('is-valid');
  }
};

var showInputsError = function showInputsError(inputs) {
  var flag = true;
  var result = true;
  inputs.forEach(function (input) {
    var type = input.closest('[data-validate-type]').dataset.validateType;

    if (type === 'toggle-group') {
      return;
    }

    flag = validateInputs(type, input);

    if (!flag) {
      result = flag;
      showError(input);
    } else {
      hideError(input);
    }
  });
  return result;
};

var showGroupInputsError = function showGroupInputsError(parents) {
  var flag = true;
  var result = true;

  if (!parents.length) {
    return result;
  }

  parents.forEach(function (parent) {
    flag = validateToggleGroup(parent);

    if (!flag) {
      result = flag;
      showError(parent);
    } else {
      hideError(parent);
    }
  });
  return result;
};

var showErrors = function showErrors(inputs, parents) {
  var result = true;
  var inputsResult = showInputsError(inputs);
  var groupResult = showGroupInputsError(parents);

  if (!inputsResult || !groupResult) {
    result = false;
  }

  return result;
}; // Валидация полей форм


var validateTextInput = function validateTextInput(input) {
  var parent = input.closest('[data-validate-type]');
  var flag = true;
  var minLength = +input.getAttribute('minlength');

  if (!minLength) {
    minLength = 1;
  }

  if (input.value.length >= minLength) {
    parent.classList.add('is-valid');
    parent.classList.remove('is-invalid');
    input.setAttribute('aria-invalid', 'false');
  } else {
    parent.classList.remove('is-valid');
    input.setAttribute('aria-invalid', 'true');
    flag = false;
  }

  return flag;
};

var validatePhoneInput = function validatePhoneInput(input) {
  var parent = input.closest('[data-validate-type]');
  var flag = true;

  if (input.value.length >= phoneLength) {
    parent.classList.remove('is-invalid');
    parent.classList.add('is-valid');
    input.setAttribute('aria-invalid', 'false');
  } else {
    parent.classList.remove('is-valid');
    input.setAttribute('aria-invalid', 'true');
    flag = false;
  }

  return flag;
};

var validateSimplePhoneInput = function validateSimplePhoneInput(input) {
  var parent = input.closest('[data-validate-type]');
  var flag = true;

  if (input.value.length < MAX_PHONE_LENGTH && input.value.length > MIN_PHONE_LENGTH && input.value.match(/^\+[0-9]+$/)) {
    parent.classList.remove('is-invalid');
    parent.classList.add('is-valid');
    input.setAttribute('aria-invalid', 'false');
  } else {
    parent.classList.remove('is-valid');
    input.setAttribute('aria-invalid', 'true');
    flag = false;
  }

  return flag;
};

var validateEmailInput = function validateEmailInput(input) {
  var parent = input.closest('[data-validate-type]');
  var flag = true;
  var emailString = /[a-zA-Zа-яёА-ЯЁ0-9]{1}([a-zA-Zа-яёА-ЯЁ0-9\-_\.]{1,})?@[a-zA-Zа-яёА-ЯЁ0-9\-]{1}([a-zA-Zа-яёА-ЯЁ0-9.\-]{1,})?[a-zA-Zа-яёА-ЯЁ0-9\-]{1}\.[a-zA-Zа-яёА-ЯЁ]{2,6}/;
  var regEmail = new RegExp(emailString, '');

  if (regEmail.test(input.value)) {
    parent.classList.remove('is-invalid');
    parent.classList.add('is-valid');
    input.setAttribute('aria-invalid', 'false');
  } else {
    parent.classList.remove('is-valid');
    input.setAttribute('aria-invalid', 'true');
    flag = false;
  }

  return flag;
};

var validateMatrixInput = function validateMatrixInput(input) {
  var parent = input.closest('[data-validate-type]');
  var flag = true;
  var matrix = input.closest('[data-matrix]').dataset.matrix;

  if (input.value.length === matrix.length) {
    parent.classList.remove('is-invalid');
    parent.classList.add('is-valid');
    input.setAttribute('aria-invalid', 'false');
  } else {
    parent.classList.remove('is-valid');
    input.setAttribute('aria-invalid', 'true');
    flag = false;
  }

  return flag;
};

var findSelectedOption = function findSelectedOption(options) {
  var flag = false;
  options.forEach(function (option) {
    if (option.value && option.selected) {
      flag = true;
    }
  });
  return flag;
};

var validateSelect = function validateSelect(input) {
  var parent = input.closest('[data-validate-type]');
  var options = input.querySelectorAll('option');
  var customSelectText = parent.querySelector('.custom-select__text');
  input.setAttribute('aria-invalid', 'false');
  var flag = true;

  if (findSelectedOption(options)) {
    parent.classList.remove('is-invalid');
    parent.classList.add('is-valid');
    input.setAttribute('aria-invalid', 'false');
  } else {
    parent.classList.remove('is-valid');
    input.setAttribute('aria-invalid', 'true');
    customSelectText.innerHTML = '';
    parent.classList.remove('not-empty');
    flag = false;
  }

  return flag;
};

var validateCheckbox = function validateCheckbox(input) {
  var parent = input.closest('[data-validate-type]');
  var flag = true;

  if (input.checked) {
    parent.classList.remove('is-invalid');
    parent.classList.add('is-valid');
  } else {
    parent.classList.remove('is-valid');
    flag = false;
  }

  return flag;
};

var validateInputs = function validateInputs(type, input) {
  switch (type) {
    case 'text':
      return validateTextInput(input);

    case 'phone':
      return validatePhoneInput(input);

    case 'simple-phone':
      return validateSimplePhoneInput(input);

    case 'email':
      return validateEmailInput(input);

    case 'matrix':
      return validateMatrixInput(input);

    case 'select':
      return validateSelect(input);

    case 'checkbox':
      return validateCheckbox(input);

    default:
      return false;
  }
};

var returnCheckedElements = function returnCheckedElements(inputs) {
  var flag = false;
  inputs.forEach(function (input) {
    if (input.checked) {
      flag = true;
    }
  });
  return flag;
};

var removeGroupAria = function removeGroupAria(inputs) {
  inputs.forEach(function (input) {
    if (!input.checked) {
      input.removeAttribute('aria-required');
      input.removeAttribute('aria-invalid');
    } else {
      input.setAttribute('aria-required', true);
      input.setAttribute('aria-invalid', false);
    }
  });
};

var setGroupAria = function setGroupAria(inputs) {
  inputs.forEach(function (input) {
    input.setAttribute('aria-required', true);
    input.setAttribute('aria-invalid', true);
  });
};

var validateToggleGroup = function validateToggleGroup(parent) {
  var formElements = parent.querySelectorAll('input');
  var flag = true;

  if (returnCheckedElements(formElements)) {
    removeGroupAria(formElements);
    parent.classList.remove('is-invalid');
    parent.classList.add('is-valid');
  } else {
    setGroupAria(formElements);
    parent.classList.remove('is-valid');
    flag = false;
  }

  return flag;
};

var checkInputValidity = function checkInputValidity(type, input) {
  validateInputs(type, input);
}; // Установка всех действий в полях форм


var formElementLimitationsAction = function formElementLimitationsAction(formValidateElement) {
  var dataLimitations = formValidateElement.dataset.limitations ? formValidateElement.dataset.limitations : null;
  var formElement = formValidateElement.querySelector('input');

  if (!formElement) {
    formElement = formValidateElement.querySelector('textarea');
  }

  if (!formElement) {
    // eslint-disable-next-line no-console
    console.error('В валидируемом блоке отсутствует поле формы');
    return;
  }

  if (dataLimitations) {
    simpleLimitations(formElement, dataLimitations);
  }
};

var formElementMatrixAction = function formElementMatrixAction(formValidateElement) {
  var dataMatrix = formValidateElement.dataset.matrix ? formValidateElement.dataset.matrix : null;
  var dataMatrixLimitations = formValidateElement.dataset.matrixLimitations ? formValidateElement.dataset.matrixLimitations : null;
  var formElement = formValidateElement.querySelector('input');

  if (!formElement) {
    formElement = formValidateElement.querySelector('textarea');
  }

  if (!formElement) {
    // eslint-disable-next-line no-console
    console.error('В валидируемом блоке отсутствует поле формы');
    return;
  }

  if (dataMatrix) {
    simpleMatrix(formElement, dataMatrix, dataMatrixLimitations);
  }
};

var formElementValidateAction = function formElementValidateAction(formValidateElement) {
  var dataValidateType = formValidateElement.dataset.validateType;
  var dataLimitations = formValidateElement.dataset.limitations ? formValidateElement.dataset.limitations : null;
  var dataMatrix = formValidateElement.dataset.matrix ? formValidateElement.dataset.matrix : null;
  var dataMatrixLimitations = formValidateElement.dataset.matrixLimitations ? formValidateElement.dataset.matrixLimitations : null;

  if (dataValidateType !== 'toggle-group') {
    var formElement = formValidateElement.querySelector('input');

    if (!formElement) {
      formElement = formValidateElement.querySelector('textarea');
    }

    if (!formElement) {
      formElement = formValidateElement.querySelector('select');
    }

    if (!formElement) {
      // eslint-disable-next-line no-console
      console.error('В валидируемом блоке отсутствует поле формы');
      return;
    }

    formElement.setAttribute('aria-required', true);
    formElement.setAttribute('aria-invalid', true);

    if (dataLimitations) {
      simpleLimitations(formElement, dataLimitations);
    }

    if (dataMatrix) {
      simpleMatrix(formElement, dataMatrix, dataMatrixLimitations);
    }

    if (dataValidateType === 'phone') {
      if (formElement.value) {
        prettifyPhoneInput(formElement);
      }

      formElement.addEventListener('focus', onFocusPhoneInput);
    }

    formElement.addEventListener('input', function () {
      checkInputValidity(dataValidateType, formElement);
    });
    checkInputValidity(dataValidateType, formElement);
  } else {
    var formElements = formValidateElement.querySelectorAll('input');

    if (formElements.length) {
      formElements.forEach(function (el) {
        el.setAttribute('aria-required', true);
        el.setAttribute('aria-invalid', true);
        el.addEventListener('input', function () {
          validateToggleGroup(formValidateElement);
        });
      });
      validateToggleGroup(formValidateElement);
    } else {
      // eslint-disable-next-line no-console
      console.error('В валидируемом блоке отсутствуют поля формы');
      return;
    }
  }
}; // Обработка события submit на форме


var onFormSubmit = function onFormSubmit(e, callback) {
  var formElements = e.target.querySelectorAll('[aria-required="true"]');
  var groupsFormElement = e.target.querySelectorAll('[data-validate-type="toggle-group"]');

  if (showErrors(formElements, groupsFormElement) && callback && callback.validationSuccessCallback) {
    callback.validationSuccessCallback(e);
  } else if (callback && callback.validationErrorCallback) {
    callback.validationErrorCallback(e);
  } else {
    e.preventDefault();
  }
}; // Очистка полей формы


var clearForm = function clearForm(form) {
  form.reset();
  var formValidateElements = form.querySelectorAll('[data-validate-type]');
  var notEmptyInputs = form.querySelectorAll('.not-empty');
  var invalidInputs = form.querySelectorAll('.is-invalid');
  notEmptyInputs.forEach(function (notEmptyInput) {
    notEmptyInput.classList.remove('not-empty');
  });
  invalidInputs.forEach(function (invalidInput) {
    invalidInput.classList.remove('is-invalid');
  });
  formValidateElements.forEach(function (formValidateElement) {
    var dataValidateType = formValidateElement.dataset.validateType;

    if (dataValidateType !== 'toggle-group') {
      var formElement = formValidateElement.querySelector('input');

      if (!formElement) {
        formElement = formValidateElement.querySelector('textarea');
      }

      if (!formElement) {
        formElement = formValidateElement.querySelector('select');
      }

      if (!formElement) {
        // eslint-disable-next-line no-console
        console.error('В валидируемом блоке отсутствует поле формы');
        return;
      }

      formElement.value = '';
      checkInputValidity(dataValidateType, formElement);
    } else {
      validateToggleGroup(formValidateElement);
    }
  });
};

window.clearForm = clearForm; // Класс FormsValidate

var FormsValidate = /*#__PURE__*/function () {
  function FormsValidate(wrappers) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FormsValidate);

    this.wrappers = wrappers;
    this.callback = callback;
  }

  _createClass(FormsValidate, [{
    key: "init",
    value: function init(formWrappers) {
      var _this = this;

      if (!formWrappers) {
        formWrappers = this.wrappers;
      }

      var typeOfNode = Object.prototype.toString.call(formWrappers);

      if (typeOfNode === '[object HTMLCollection]' || typeOfNode === '[object NodeList]' || typeOfNode === '[object Array]') {
        formWrappers.forEach(function (wrapper) {
          if (wrapper.classList.contains('is-initialized')) {
            // eslint-disable-next-line no-console
            console.error('На данной форме валидация уже инициализированна');
          } else {
            _this.initItem(wrapper);
          }
        });
      } else if (typeOfNode === '[object HTMLDivElement]' || typeOfNode === '[object HTMLElement]') {
        if (!formWrappers.classList.contains('is-initialized')) {
          this.initItem(formWrappers);
        }
      } else {
        // eslint-disable-next-line no-console
        console.error('Переданный обьект не соответствует формату');
        return;
      }
    }
  }, {
    key: "initItem",
    value: function initItem(element) {
      var _this2 = this;

      element.classList.add('is-initialized');
      var form = element.querySelector('form');
      var resetButtons = form.querySelectorAll('button[type="reset"], [data-reset]');
      form.noValidate = true;
      form.addEventListener('submit', function (e) {
        onFormSubmit(e, _this2.callback);
      });

      if (resetButtons.length) {
        resetButtons.forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();
            clearForm(form);
          });
        });
      }

      var formValidateElements = form.querySelectorAll('[data-validate-type]');
      var formLimitationsElements = form.querySelectorAll('[data-limitations]:not([data-validate-type])');
      var formMatrixElements = form.querySelectorAll('[data-matrix]:not([data-validate-type])');

      if (formValidateElements.length) {
        formValidateElements.forEach(function (el) {
          formElementValidateAction(el);
        });
      }

      if (formLimitationsElements.length) {
        formLimitationsElements.forEach(function (el) {
          formElementLimitationsAction(el);
        });
      }

      if (formMatrixElements.length) {
        formMatrixElements.forEach(function (el) {
          formElementMatrixAction(el);
        });
      }
    }
  }]);

  return FormsValidate;
}();


window.FormsValidate = FormsValidate;

/***/ }),

/***/ "./components/form-validate/js/index.js":
/*!**********************************************!*\
  !*** ./components/form-validate/js/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-select */ "./components/form-validate/js/custom-select.js");
/* harmony import */ var _init_form_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-form-validate */ "./components/form-validate/js/init-form-validate.js");


window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('load', function () {
    var select = new _custom_select__WEBPACK_IMPORTED_MODULE_0__["CustomSelect"]();
    select.init();
    Object(_init_form_validate__WEBPACK_IMPORTED_MODULE_1__["initFormValidate"])();
  });
});

/***/ }),

/***/ "./components/form-validate/js/init-form-validate.js":
/*!***********************************************************!*\
  !*** ./components/form-validate/js/init-form-validate.js ***!
  \***********************************************************/
/*! exports provided: initFormValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFormValidate", function() { return initFormValidate; });
/* harmony import */ var _form_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validate */ "./components/form-validate/js/form-validate.js");

var formWrappers = document.querySelectorAll('[data-validate]');

var resetForm = function resetForm(form) {
  setTimeout(function () {
    window.clearForm(form);
  }, 1000);
};

var baseValidationSuccessCallback = function baseValidationSuccessCallback(e) {
  e.preventDefault(); // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке

  resetForm(e.target);
};

var baseValidationErrorCallback = function baseValidationErrorCallback(e) {
  e.preventDefault();
};

var customExampleValidationSuccessCallback = function customExampleValidationSuccessCallback(e) {
  e.preventDefault(); // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке

  resetForm(e.target); // eslint-disable-next-line no-console

  console.log('Ваша форма успешна отправлена');
};

var customExampleValidationErrorCallback = function customExampleValidationErrorCallback(e) {
  e.preventDefault(); // eslint-disable-next-line no-console

  console.error('Отправка формы невозможна, заполните все обязательные поля');
};

var callbacks = {
  base: {
    // Колбек при успешной валидации формы при попытке её отправки
    validationSuccessCallback: baseValidationSuccessCallback,
    // Колбек при не успешной валидации формы при попытке её отправки, не связан с запросами на сервер
    validationErrorCallback: baseValidationErrorCallback
  },
  customExample: {
    validationSuccessCallback: customExampleValidationSuccessCallback,
    validationErrorCallback: customExampleValidationErrorCallback
  }
};

var setCustomPhoneInputsEvent = function setCustomPhoneInputsEvent() {
  if (document.querySelectorAll('[data-validate-type="phone"] input').length) {
    document.querySelector('html').addEventListener('input', function (_ref) {
      var target = _ref.target;

      if (target.closest('[data-validate-type="phone"]')) {
        target.closest('[data-validate-type="phone"]').querySelector('input').dispatchEvent(new Event('input'));
      }
    });
  }
};

var initFormValidate = function initFormValidate() {
  if (formWrappers.length) {
    setCustomPhoneInputsEvent();
    formWrappers.forEach(function (wrapper) {
      var callback = wrapper.dataset.callback;

      if (!callback) {
        callback = 'base';
      }

      var formValidate = new _form_validate__WEBPACK_IMPORTED_MODULE_0__["default"](wrapper, callbacks[callback]);
      return formValidate.init();
    });
  }
};

/***/ })

/******/ });
//# sourceMappingURL=formValidate.min.js.map