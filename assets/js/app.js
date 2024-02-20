/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (function() {

eval("// const menuToggle = document.getElementById(\"burger-menu-toggle\");\r\n// const menu = document.querySelector(\".burger-menu\");\r\n\r\n// menuToggle.addEventListener(\"change\", function () {\r\n// \tif (this.checked) {\r\n// \t\tmenu.classList.add(\"_active\");\r\n// \t\tdocument.documentElement.style.overflow = \"hidden\";\r\n// \t} else {\r\n// \t\tmenu.classList.remove(\"_active\");\r\n// \t\tdocument.documentElement.style.overflow = \"auto\";\r\n// \t}\r\n// });\r\n\r\n// // Закрытие меню при клике на пункт меню\r\n// const menuItems = document.querySelectorAll(\".burger-menu__link\");\r\n// menuItems.forEach(function (item) {\r\n// \titem.addEventListener(\"click\", function () {\r\n// \t\tmenu.classList.remove(\"_active\");\r\n// \t\tdocument.documentElement.style.overflow = \"auto\";\r\n\r\n// \t\tmenuToggle.checked = false;\r\n// \t});\r\n// });\r\n\n\n//# sourceURL=webpack://denis/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/filters-btn.js":
/*!**************************************!*\
  !*** ./src/assets/js/filters-btn.js ***!
  \**************************************/
/***/ (function() {

eval("const filtersBtn = document.querySelectorAll(\".filters-btn__btn\");\r\nconst filtersBtnApply = document.querySelectorAll(\".filters-btn__btn-apply\");\r\nconst filtersBtnItems = document.querySelectorAll(\".filters-btn__item\");\r\n\r\nif (filtersBtn.length) {\r\n\tconst toggleFilters = e => {\r\n\t\tconst currentTarget = e.currentTarget;\r\n\r\n\t\tcurrentTarget.nextElementSibling.classList.toggle(\"_active\");\r\n\t};\r\n\r\n\tconst hideFilters = () => {\r\n\t\tconst elems = document.querySelectorAll(\".filters-btn__content\");\r\n\r\n\t\telems.forEach(item => {\r\n\t\t\titem.classList.remove(\"_active\");\r\n\t\t});\r\n\t};\r\n\tfiltersBtn.forEach(item => {\r\n\t\titem.addEventListener(\"click\", toggleFilters);\r\n\t});\r\n\tfiltersBtnApply.forEach(item => {\r\n\t\titem.addEventListener(\"click\", hideFilters);\r\n\t});\r\n\r\n\tfiltersBtnItems.forEach(item => {\r\n\t\tconst checkbox = item.querySelector(\".filters-btn__checkbox\");\r\n\r\n\t\titem.addEventListener(\"click\", e => {\r\n\t\t\tconst target = e.target;\r\n\r\n\t\t\tif (target.closest(\".filters-btn__item\")) {\r\n\t\t\t\ttarget.classList.toggle(\"_active\");\r\n\t\t\t}\r\n\t\t\tcheckbox.checked = !checkbox.checked;\r\n\t\t});\r\n\t});\r\n\r\n\tdocument.body.addEventListener(\"click\", e => {\r\n\t\tconst target = e.target;\r\n\r\n\t\tif (\r\n\t\t\t!target.closest(\".filters-btn__btn\") &&\r\n\t\t\t!target.closest(\".filters-btn__content\")\r\n\t\t) {\r\n\t\t\thideFilters();\r\n\t\t}\r\n\t});\r\n}\r\n\n\n//# sourceURL=webpack://denis/./src/assets/js/filters-btn.js?");

/***/ }),

/***/ "./src/assets/js/none-sync-bs.js":
/*!***************************************!*\
  !*** ./src/assets/js/none-sync-bs.js ***!
  \***************************************/
/***/ (function() {

eval("const i = setInterval(() => {\r\n\tconst bsNotify = document.querySelector('#__bs_notify__');\r\n\r\n\tif (bsNotify) {\r\n\t\tbsNotify.remove();\r\n\t\tclearInterval(i);\r\n\t}\r\n}, 0);\r\n\n\n//# sourceURL=webpack://denis/./src/assets/js/none-sync-bs.js?");

/***/ }),

/***/ "./src/assets/js/smooth-header.js":
/*!****************************************!*\
  !*** ./src/assets/js/smooth-header.js ***!
  \****************************************/
/***/ (function() {

eval("let lastScroll = 0;\r\nconst defaultOffset = 800;\r\nconst header = document.querySelector(\".burger-menu-container\");\r\n\r\nconst scrollPosition = () =>\r\n\twindow.pageYOffset || document.documentElement.scrollTop;\r\nconst containHide = () => header.classList.contains(\"hide\");\r\n\r\nwindow.addEventListener(\"scroll\", () => {\r\n\tif (\r\n\t\tscrollPosition() > lastScroll &&\r\n\t\t!containHide() &&\r\n\t\tscrollPosition() > defaultOffset\r\n\t) {\r\n\t\t//scroll down\r\n\t\theader.classList.add(\"hide\");\r\n\t} else if (scrollPosition() < lastScroll && containHide()) {\r\n\t\t//scroll up\r\n\t\theader.classList.remove(\"hide\");\r\n\t}\r\n\r\n\tlastScroll = scrollPosition();\r\n});\r\n\n\n//# sourceURL=webpack://denis/./src/assets/js/smooth-header.js?");

/***/ }),

/***/ "./src/assets/js/toggle-language.js":
/*!******************************************!*\
  !*** ./src/assets/js/toggle-language.js ***!
  \******************************************/
/***/ (function() {

eval("const btnLanguage = document.querySelector(\".languages__button\");\r\nconst bodyLanguage = document.querySelector(\".languages__body\");\r\n\r\n// show hide language\r\n\r\nconst toggleLanguage = () => {\r\n\tbodyLanguage.classList.toggle(\"_active\");\r\n};\r\n\r\nif (btnLanguage) {\r\n\tbtnLanguage.addEventListener(\"click\", toggleLanguage);\r\n}\r\n\n\n//# sourceURL=webpack://denis/./src/assets/js/toggle-language.js?");

/***/ }),

/***/ "./src/assets/js/validation.js":
/*!*************************************!*\
  !*** ./src/assets/js/validation.js ***!
  \*************************************/
/***/ (function() {

eval("// const submitBtn = document.querySelector(\".feedback-form__submit\");\r\n// const nameInput = document.querySelector(\".feedback-form__input._name\");\r\n// const numberInput = document.querySelector(\".feedback-form__input._tel\");\r\n// const emailInput = document.querySelector(\".feedback-form__input._email\");\r\n\r\n// const getName = () => {\r\n// \treturn nameInput.value;\r\n// };\r\n// const getTel = () => {\r\n// \treturn numberInput.value;\r\n// };\r\n\r\n// const getEmail = () => {\r\n// \treturn emailInput.value;\r\n// };\r\n\r\n// function sendEmail(getName, getTel, getEmail) {\r\n// \tconst message = `Imię: ${getName}\\nNumer telefonu: ${getTel}\\nAdres e-mail: ${getEmail}`;\r\n\r\n// \tconst url = \"./php/mail.php\"; // URL вашего PHP-скрипта для отправки почты\r\n\r\n// \tconst data = new URLSearchParams();\r\n// \tdata.append(\"message\", message);\r\n\r\n// \tfetch(url, {\r\n// \t\tmethod: \"POST\",\r\n// \t\theaders: {\r\n// \t\t\t\"Content-Type\": \"application/x-www-form-urlencoded\",\r\n// \t\t},\r\n// \t\tbody: data,\r\n// \t})\r\n// \t\t.then(response => response.text())\r\n// \t\t.then(result => {\r\n// \t\t\tsubmitBtn.textContent = \"Wysłano\";\r\n// \t\t\tnameInput.value = \"\";\r\n// \t\t\tnumberInput.value = \"\";\r\n// \t\t\temailInput.value = \"\";\r\n// \t\t})\r\n// \t\t.catch(error => {\r\n// \t\t\tconsole.error(\"Ошибка:\", error);\r\n// \t\t});\r\n// }\r\n\r\n// function showErrMsg(elem, msg) {\r\n// \telem.textContent = msg;\r\n// \telem.classList.remove(\"err-message_hide\");\r\n// }\r\n\r\n// function hideErrMsg(elem) {\r\n// \telem.classList.add(\"err-message_hide\");\r\n// }\r\n\r\n// submitBtn.addEventListener(\"click\", function (e) {\r\n// \te.preventDefault();\r\n\r\n// \t// Валидация\r\n\r\n// \tconst submitMessageName = document.querySelector(\".err-message-name\");\r\n\r\n// \t// input имени\r\n// \tif (!nameInput.value.trim()) {\r\n// \t\tsubmitMessageName.classList.remove(\"err-message_hide\");\r\n// \t\tshowErrMsg(submitMessageName, \"Wpisz prawidłową nazwę\");\r\n\r\n// \t\tnameInput.addEventListener(\"input\", () => {\r\n// \t\t\tif (nameInput.value.trim()) {\r\n// \t\t\t\tsubmitMessageName.classList.add(\"err-message_hide\");\r\n// \t\t\t\thideErrMsg(submitMessageName, \"Wpisz prawidłową nazwę\");\r\n// \t\t\t} else {\r\n// \t\t\t\tsubmitMessageName.classList.remove(\"err-message_hide\");\r\n// \t\t\t\tshowErrMsg(submitMessageName, \"Wpisz prawidłową nazwę\");\r\n// \t\t\t}\r\n// \t\t});\r\n// \t}\r\n\r\n// \tconst submitMessageNumber = document.querySelector(\".err-message-tel\");\r\n\r\n// \t// input номера телефона\r\n// \tif (!numberInput.value.trim()) {\r\n// \t\tsubmitMessageNumber.classList.remove(\"err-message_hide\");\r\n// \t\tshowErrMsg(submitMessageNumber, \"Wpisz poprawny numer telefonu\");\r\n\r\n// \t\tnumberInput.addEventListener(\"input\", () => {\r\n// \t\t\tif (numberInput.value.trim()) {\r\n// \t\t\t\tsubmitMessageNumber.classList.add(\"err-message_hide\");\r\n// \t\t\t\thideErrMsg(submitMessageNumber, \"Wpisz poprawny numer telefonu\");\r\n// \t\t\t} else {\r\n// \t\t\t\tsubmitMessageNumber.classList.remove(\"err-message_hide\");\r\n// \t\t\t\tshowErrMsg(submitMessageNumber, \"Wpisz poprawny numer telefonu\");\r\n// \t\t\t}\r\n// \t\t});\r\n// \t}\r\n\r\n// \tconst submitMessageEmail = document.querySelector(\".err-message-email\");\r\n\r\n// \t// input email телефона\r\n// \tif (!emailInput.value.trim()) {\r\n// \t\tsubmitMessageEmail.classList.remove(\"err-message_hide\");\r\n// \t\tshowErrMsg(submitMessageEmail, \"Wpisz poprawny adres e-mail\");\r\n\r\n// \t\temailInput.addEventListener(\"input\", () => {\r\n// \t\t\tif (emailInput.value.trim()) {\r\n// \t\t\t\tsubmitMessageEmail.classList.add(\"err-message_hide\");\r\n// \t\t\t\thideErrMsg(submitMessageEmail, \"Wpisz poprawny adres e-mail\");\r\n// \t\t\t} else {\r\n// \t\t\t\tsubmitMessageEmail.classList.remove(\"err-message_hide\");\r\n// \t\t\t\tshowErrMsg(submitMessageEmail, \"Wpisz poprawny adres e-mail\");\r\n// \t\t\t}\r\n// \t\t});\r\n// \t}\r\n\r\n// \tconst errMessageWithErrName = document.querySelector(\r\n// \t\t\".err-message_hide.err-message-name\"\r\n// \t);\r\n// \tconst errMessageWithErrTel = document.querySelector(\r\n// \t\t\".err-message_hide.err-message-tel\"\r\n// \t);\r\n// \tconst errMessageWithErrEmail = document.querySelector(\r\n// \t\t\".err-message_hide.err-message-email\"\r\n// \t);\r\n\r\n// \t// Полная проверка\r\n// \tif (errMessageWithErrName && errMessageWithErrTel && errMessageWithErrEmail) {\r\n// \t\tsendEmail(getName(), getTel(), getEmail());\r\n// \t}\r\n// });\r\n\r\n// auth\r\n\r\nconst authInputLogin = document.querySelector(\".auth__input-login\");\r\nconst authInputPass = document.querySelector(\".auth__input-pass\");\r\nconst authInputPass2 = document.querySelector(\".auth__input-pass2\");\r\n\r\nconst authSubmit = document.querySelector(\".auth__submit\");\r\n\r\nif (authSubmit) {\r\n\tauthSubmit.addEventListener(\"click\", e => {\r\n\t\te.preventDefault();\r\n\r\n\t\tvalidation();\r\n\t});\r\n}\r\n\r\nconst validation = () => {\r\n\tif (authInputLogin) {\r\n\t\t// Проверка на путсые поля\r\n\r\n\t\tif (!authInputLogin.value.trim()) {\r\n\t\t\tauthInputLogin.nextElementSibling.textContent =\r\n\t\t\t\t\"Заполните пожалуйста поля\";\r\n\t\t\tauthInputLogin.classList.add(\"_no-valid\");\r\n\t\t} else {\r\n\t\t\tauthInputLogin.classList.remove(\"_no-valid\");\r\n\t\t}\r\n\r\n\t\tif (!authInputPass.value.trim()) {\r\n\t\t\tauthInputPass.nextElementSibling.textContent =\r\n\t\t\t\t\"Заполните пожалуйста поля\";\r\n\r\n\t\t\tauthInputPass.classList.add(\"_no-valid\");\r\n\t\t} else {\r\n\t\t\tauthInputPass.classList.remove(\"_no-valid\");\r\n\t\t}\r\n\r\n\t\tif (authInputPass2) {\r\n\t\t\tif (!authInputPass2.value.trim()) {\r\n\t\t\t\tauthInputPass2.nextElementSibling.textContent =\r\n\t\t\t\t\t\"Заполните пожалуйста поля\";\r\n\t\t\t\tauthInputPass2.classList.add(\"_no-valid\");\r\n\t\t\t} else {\r\n\t\t\t\tauthInputPass2.classList.remove(\"_no-valid\");\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tif (authInputPass2) {\r\n\t\t// Проверка на идентичность паролей\r\n\r\n\t\tif (authInputPass.value.trim() !== authInputPass2.value.trim()) {\r\n\t\t\tauthInputPass.classList.add(\"_no-valid\");\r\n\t\t\tauthInputPass2.classList.add(\"_no-valid\");\r\n\t\t\tauthInputPass2.nextElementSibling.textContent = \"Пароли должны совпадать\";\r\n\t\t\tauthInputPass.nextElementSibling.textContent = \"Пароли должны совпадать\";\r\n\t\t} else {\r\n\t\t\tif (authInputPass.value && authInputPass2.value) {\r\n\t\t\t\tauthInputPass.classList.remove(\"_no-valid\");\r\n\t\t\t\tauthInputPass2.classList.remove(\"_no-valid\");\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n};\r\n\r\nif (authInputPass2) {\r\n\tauthInputPass2.addEventListener(\"input\", validation);\r\n}\r\nif (authInputLogin) {\r\n\tauthInputLogin.addEventListener(\"input\", validation);\r\n\tauthInputPass.addEventListener(\"input\", validation);\r\n}\r\n\n\n//# sourceURL=webpack://denis/./src/assets/js/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/filters-btn.js"]();
/******/ 	__webpack_modules__["./src/assets/js/none-sync-bs.js"]();
/******/ 	__webpack_modules__["./src/assets/js/smooth-header.js"]();
/******/ 	__webpack_modules__["./src/assets/js/toggle-language.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/validation.js"]();
/******/ 	
/******/ })()
;