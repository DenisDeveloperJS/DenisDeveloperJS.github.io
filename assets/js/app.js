!function(){var e,t,n,o,i,l,c,r,s,a,d;e=document.getElementById("burger-menu-toggle"),t=document.querySelector(".burger-menu"),n=document.querySelector(".header__right._mob"),e.addEventListener("change",(function(){this.checked?(t.classList.add("_active"),n.classList.add("_active"),document.documentElement.style.overflow="hidden"):(t.classList.remove("_active"),n.classList.remove("_active"),document.documentElement.style.overflow="auto")})),document.querySelectorAll(".categories__item._scroll").forEach((function(o){o.addEventListener("click",(function(){t.classList.remove("_active"),n.classList.remove("_active"),document.documentElement.style.overflow="auto",e.checked=!1}))})),function(){var e=document.querySelectorAll(".filters-btn__btn"),t=document.querySelectorAll(".filters-btn__btn-apply"),n=(document.querySelectorAll(".filters-btn__item"),document.querySelectorAll(".filters-btn__content")),o=document.querySelectorAll(".filters-btn__checkbox");if(e.length){o.forEach((function(e){e.addEventListener("change",(function(){e.parentElement.classList.toggle("_active")}))}));var i=function(e){var t,n,o=e.currentTarget;null==o||null===(t=o.nextElementSibling)||void 0===t||null===(n=t.classList)||void 0===n||n.toggle("_active")},l=function(){document.querySelectorAll(".filters-btn__content").forEach((function(e){e.classList.remove("_active")}))};e.forEach((function(e){e.addEventListener("click",i)})),t.forEach((function(e){e.addEventListener("click",l)})),n.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.closest(".filters-btn__item");if(t){var n=t.querySelector(".filters-btn__checkbox");console.log(t),t.classList.toggle("_active"),n.checked=!n.checked}}))})),document.body.addEventListener("click",(function(e){var t=e.target;t.closest(".filters-btn__btn")||t.closest(".filters-btn__content")||l()}))}}(),(o=document.getElementById("image-upload"))&&o.addEventListener("change",(function(e){var t=document.querySelector(".image-gallery");Array.from(e.target.files).forEach((function(e){var n=new FileReader;n.onload=function(e){var n=document.createElement("div");n.classList.add("form-admin-shop__image-upload");var o=document.createElement("img");o.src=e.target.result,o.classList.add("uploaded-image"),n.prepend(o),t.prepend(n),n.insertAdjacentHTML("afterbegin",'\n                <div class="delete-btn form-admin-shop__image-delete">\n\t\t\t\t\t\t<svg\n\t\t\t\t\t\t\twidth="21"\n\t\t\t\t\t\t\theight="20"\n\t\t\t\t\t\t\tviewBox="0 0 21 20"\n\t\t\t\t\t\t\tfill="none"\n\t\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\td="M16.6504 3.57617L4.32812 15.8985"\n\t\t\t\t\t\t\t\tstroke="#130F26"\n\t\t\t\t\t\t\t\tstroke-width="2"\n\t\t\t\t\t\t\t\tstroke-linecap="round"\n\t\t\t\t\t\t\t\tstroke-linejoin="round"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\td="M16.6548 15.9074L4.32227 3.57227"\n\t\t\t\t\t\t\t\tstroke="#130F26"\n\t\t\t\t\t\t\t\tstroke-width="2"\n\t\t\t\t\t\t\t\tstroke-linecap="round"\n\t\t\t\t\t\t\t\tstroke-linejoin="round"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n                ')},n.readAsDataURL(e)})),setTimeout((function(){document.querySelectorAll(".form-admin-shop__image-delete").forEach((function(e){e.addEventListener("click",(function(){this.closest(".form-admin-shop__image-upload").remove()}))}))}),200)})),function(){if(document.querySelector("#map")){var e=function(e,n,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"../assets/images/icons/location.svg",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[20,30],c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[14,75],r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-3,-76],s=L.icon({iconUrl:i,iconSize:l,iconAnchor:c,popupAnchor:r}),a=L.marker([e,n],{icon:s}).addTo(t);o&&a.bindPopup(o)},t=L.map("map").setView([0,0],1);new L.gridLayer.googleMutant({maxZoom:18,type:"roadmap"}).addTo(t),t.locate({setView:!0,maxZoom:18}).on("locationfound",(function(t){L.icon({iconUrl:"../assets/images/icons/location.svg",iconSize:[20,30],iconAnchor:[14,75],popupAnchor:[-3,-76]}),e(t.latlng.lat,t.latlng.lng,"You are here!"),e(t.latlng.lat+.1,t.latlng.lng+.1,"You are here 2!")})).on("locationerror",(function(e){alert("Ошибка при определении местоположения: "+e.message)}))}}(),i=setInterval((function(){var e=document.querySelector("#__bs_notify__");e&&(e.remove(),clearInterval(i))}),0),function(){document.querySelectorAll(".filters-btn-open-close");var e=document.querySelector(".filters-btn__content-bottom"),t=document.querySelector(".open-hours-mob__checkbox-open"),n=document.querySelector(".open-hours-mob__checkbox-close"),o=(document.querySelector(".open-hours-mob__checkbox"),document.querySelector(".open-hours-mob__filter-item._open")),i=document.querySelector(".open-hours-mob__filter-item._close"),l=document.querySelector(".open-hours-mob__btn-apply");if(e){var c=function(t){var n=e.dataset.currentTag;e.classList.remove("_active");var i=document.querySelector('.filters-btn-open-close[data-day="'.concat(n,'"]')),l=o.classList.contains("_active");i.dataset.open=l?"Open":"Close",i.dataset.open=l?"Open":"Close",i.querySelector("span").textContent=l?"Open":"Close"},r=function(){t.checked=!0,n.checked=!1,o.classList.add("_active"),i.classList.remove("_active")},s=function(){n.checked=!0,t.checked=!1,i.classList.add("_active"),o.classList.remove("_active")},a=document.querySelector(".open-hours-mob__content");window.innerWidth<=768&&(a.addEventListener("click",(function(t){var n=t.target.closest(".filters-btn-open-close");if(n){e.dataset.currentTag=n.dataset.day,e.classList.add("_active");var o=n.dataset.open;"Open"===o&&r(),"Close"===o&&s()}})),l.addEventListener("click",c)),o.addEventListener("click",r),i.addEventListener("click",s),document.querySelector(".filters-btn__content-bottom").addEventListener("click",(function(e){e.target.closest(".filters-btn__content-bottom__content")||c()}))}}(),(l=document.querySelectorAll(".filters-btn-open-close")).length&&l.forEach((function(e){if(window.innerWidth>=768){var t=e.dataset.open,n=e.querySelector(".filters-btn__btn span"),o=e.querySelector(".filters-btn__active-open-close"),i=e.querySelector(".filters-btn__active-open-close");"Open"===t?e.nextElementSibling.classList.add("_active"):"Close"===t&&e.nextElementSibling.classList.remove("_active"),n.textContent=e.dataset.open,o.addEventListener("click",(function(){var t=e.dataset.open;if(i.parentElement.classList.remove("_active"),"Open"===t){e.dataset.open="Close",i.textContent="Open",e.nextElementSibling.classList.add("_active");var o=e.nextElementSibling,l=o.querySelector("#open-hours-from"),c=o.querySelector("#open-hours-to");l.classList.remove("_no-valid"),c.classList.remove("_no-valid")}else"Close"===t&&(e.dataset.open="Open",i.textContent="Close",e.nextElementSibling.classList.remove("_active"));n.textContent=e.dataset.open,e.nextElementSibling.classList.toggle("_active")}))}})),document.querySelector(".slider-about-us")&&new Swiper(".slider-about-us",{slidesPerView:4,spaceBetween:30,simulateTouch:!0,grabCursor:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:8}}}),document.querySelector(".slider-reviews")&&new Swiper(".slider-reviews",{slidesPerView:"auto",spaceBetween:24,simulateTouch:!0,grabCursor:!0,loop:!0,breakpoints:{320:{slidesPerView:"auto",spaceBetween:8},768:{slidesPerView:"auto",spaceBetween:8},1024:{slidesPerView:"auto",spaceBetween:8}}}),c=0,r=document.querySelector(".burger-menu-container"),s=function(){return window.pageYOffset||document.documentElement.scrollTop},a=function(){return r.classList.contains("hide")},window.addEventListener("scroll",(function(){s()>c&&!a()&&s()>800?r.classList.add("hide"):s()<c&&a()&&r.classList.remove("hide"),c=s()})),function(){var e=document.querySelectorAll(".categories__body._scroll");if(e.length){var t=function(e){e.preventDefault();var t=e.target.closest(".categories__item._scroll");if(t){var n=t.getAttribute("href");if(n){var o=document.querySelector(n);console.log(n),console.log(document.querySelector("#equipment")),o&&o.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}};e.forEach((function(e){e.addEventListener("click",t)}))}}(),(d=document.querySelectorAll(".languages__button")).length&&d.forEach((function(e){e.addEventListener("click",(function(){!function(e){e.nextElementSibling.classList.toggle("_active")}(e)}))})),function(){var e=document.querySelectorAll(".admin-shop__input._desc"),t=document.querySelectorAll(".admin-shop__input._mob"),n=document.querySelectorAll(".form-admin-shop__textarea._desc"),o=document.querySelectorAll(".form-admin-shop__textarea._mob"),i=document.querySelectorAll(".form-admin-shop__submit");i.length&&i.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),l(),setTimeout((function(){var e=document.querySelector("._no-valid");console.log(e),e||(window.innerWidth>=768?alert("Success!"):window.location.href="admin-open-hours-mob.html")}),100)}))}));var l=function(){window.innerWidth>=768&&e.forEach((function(e){e.classList.contains("admin-shop__input-hourses")||(e.value.trim()?e.classList.remove("_no-valid"):(e.nextElementSibling.textContent="Заполните пожалуйста поля",e.classList.add("_no-valid")))})),window.innerWidth<=768&&t.forEach((function(e){e.classList.contains("admin-shop__input-hourses")||(e.value.trim()?e.classList.remove("_no-valid"):(e.nextElementSibling.textContent="Заполните пожалуйста поля",e.classList.add("_no-valid")))}));var i=document.querySelectorAll(".form-admin-shop__hours-hours._active"),l=document.querySelectorAll(".form-admin-shop__hours-hours._active");window.innerWidth>=768&&i.length&&i.forEach((function(e){var t=e.querySelector("#open-hours-from"),n=e.querySelector("#open-hours-to");t.value.trim()?t.classList.remove("_no-valid"):(t.nextElementSibling.textContent="Укажите часы",t.classList.add("_no-valid")),n.value.trim()?n.classList.remove("_no-valid"):(n.nextElementSibling.textContent="Укажите часы",n.classList.add("_no-valid"))})),window.innerWidth<=768&&l.length&&l.forEach((function(e){var t=e.querySelector("#open-hours-from"),n=e.querySelector("#open-hours-to");t.value.trim()?t.classList.remove("_no-valid"):(t.nextElementSibling.textContent="Укажите часы",t.classList.add("_no-valid")),n.value.trim()?n.classList.remove("_no-valid"):(n.nextElementSibling.textContent="Укажите часы",n.classList.add("_no-valid"))})),window.innerWidth>=768&&n.forEach((function(e){e.value.trim()?e.nextElementSibling.classList.remove("_no-valid"):(e.nextElementSibling.textContent="Заполните пожалуйста поля",e.nextElementSibling.classList.add("_no-valid"))})),window.innerWidth<=768&&o.forEach((function(e){e.value.trim()?e.nextElementSibling.classList.remove("_no-valid"):(e.nextElementSibling.textContent="Заполните пожалуйста поля",e.nextElementSibling.classList.add("_no-valid"))}))};i.length&&(window.innerWidth<=768&&(t.forEach((function(e){e.addEventListener("input",l)})),o.forEach((function(e){e.addEventListener("input",l)}))),window.innerWidth>=768&&(e.forEach((function(e){e.addEventListener("input",l)})),n.forEach((function(e){e.addEventListener("input",l)}))))}(),function(){var e=document.querySelector(".auth__input-login"),t=document.querySelector(".auth__input-pass"),n=document.querySelector(".auth__input-pass2"),o=document.querySelector(".auth__submit");o&&o.addEventListener("click",(function(e){e.preventDefault(),i()}));var i=function(){e&&(e.value.trim()?e.classList.remove("_no-valid"):(e.nextElementSibling.textContent="Заполните пожалуйста поля",e.classList.add("_no-valid")),t.value.trim()?t.classList.remove("_no-valid"):(t.nextElementSibling.textContent="Заполните пожалуйста поля",t.classList.add("_no-valid")),n&&(n.value.trim()?n.classList.remove("_no-valid"):(n.nextElementSibling.textContent="Заполните пожалуйста поля",n.classList.add("_no-valid")))),n&&(t.value.trim()!==n.value.trim()?(t.classList.add("_no-valid"),n.classList.add("_no-valid"),n.nextElementSibling.textContent="Пароли должны совпадать",t.nextElementSibling.textContent="Пароли должны совпадать"):t.value&&n.value&&(t.classList.remove("_no-valid"),n.classList.remove("_no-valid")))};n&&n.addEventListener("input",i),e&&(e.addEventListener("input",i),t.addEventListener("input",i))}()}();