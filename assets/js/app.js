!function(){var e,t,n,i,l,s,o,c;!function(){var e=document.querySelectorAll(".filters-btn__btn"),t=document.querySelectorAll(".filters-btn__btn-apply"),n=document.querySelectorAll(".filters-btn__item");if(e.length){var i=function(e){e.currentTarget.nextElementSibling.classList.toggle("_active")},l=function(){document.querySelectorAll(".filters-btn__content").forEach((function(e){e.classList.remove("_active")}))};e.forEach((function(e){e.addEventListener("click",i)})),t.forEach((function(e){e.addEventListener("click",l)})),n.forEach((function(e){var t=e.querySelector(".filters-btn__checkbox");e.addEventListener("click",(function(e){var n=e.target;n.closest(".filters-btn__item")&&n.classList.toggle("_active"),t.checked=!t.checked}))})),document.body.addEventListener("click",(function(e){var t=e.target;t.closest(".filters-btn__btn")||t.closest(".filters-btn__content")||l()}))}}(),e=setInterval((function(){var t=document.querySelector("#__bs_notify__");t&&(t.remove(),clearInterval(e))}),0),(t=document.querySelectorAll(".filters-btn-open-close")).length&&t.forEach((function(e){var t=e.dataset.open,n=e.querySelector(".filters-btn__btn span"),i=e.querySelector(".filters-btn__active-open-close"),l=e.querySelector(".filters-btn__active-open-close");"Open"===t?e.nextElementSibling.classList.add("_active"):"Close"===t&&e.nextElementSibling.classList.remove("_active"),n.textContent=e.dataset.open,i.addEventListener("click",(function(){var t=e.dataset.open;"Open"===t?(e.dataset.open="Close",l.textContent="Open",e.nextElementSibling.classList.add("_active")):"Close"===t&&(e.dataset.open="Open",l.textContent="Close",e.nextElementSibling.classList.remove("_active")),n.textContent=e.dataset.open,e.nextElementSibling.classList.toggle("_active")}))})),document.querySelector(".slider-about-us")&&new Swiper(".slider-about-us",{slidesPerView:4,spaceBetween:30,simulateTouch:!0,grabCursor:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:8}}}),document.querySelector(".slider-reviews")&&new Swiper(".slider-reviews",{slidesPerView:"auto",spaceBetween:24,simulateTouch:!0,grabCursor:!0,loop:!0}),n=0,i=document.querySelector(".burger-menu-container"),l=function(){return window.pageYOffset||document.documentElement.scrollTop},s=function(){return i.classList.contains("hide")},window.addEventListener("scroll",(function(){l()>n&&!s()&&l()>800?i.classList.add("hide"):l()<n&&s()&&i.classList.remove("hide"),n=l()})),o=document.querySelector(".languages__button"),c=document.querySelector(".languages__body"),o&&o.addEventListener("click",(function(){c.classList.toggle("_active")})),function(){var e=document.querySelector(".auth__input-login"),t=document.querySelector(".auth__input-pass"),n=document.querySelector(".auth__input-pass2"),i=document.querySelector(".auth__submit");i&&i.addEventListener("click",(function(e){e.preventDefault(),l()}));var l=function(){e&&(e.value.trim()?e.classList.remove("_no-valid"):(e.nextElementSibling.textContent="Заполните пожалуйста поля",e.classList.add("_no-valid")),t.value.trim()?t.classList.remove("_no-valid"):(t.nextElementSibling.textContent="Заполните пожалуйста поля",t.classList.add("_no-valid")),n&&(n.value.trim()?n.classList.remove("_no-valid"):(n.nextElementSibling.textContent="Заполните пожалуйста поля",n.classList.add("_no-valid")))),n&&(t.value.trim()!==n.value.trim()?(t.classList.add("_no-valid"),n.classList.add("_no-valid"),n.nextElementSibling.textContent="Пароли должны совпадать",t.nextElementSibling.textContent="Пароли должны совпадать"):t.value&&n.value&&(t.classList.remove("_no-valid"),n.classList.remove("_no-valid")))};n&&n.addEventListener("input",l),e&&(e.addEventListener("input",l),t.addEventListener("input",l))}()}();