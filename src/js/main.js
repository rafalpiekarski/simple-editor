"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

// form handling

// 1. Pobieram inputa
const message = document.querySelector('.form__message--js');
const save = document.querySelector('.form__button--save-js');
const load = document.querySelector('.form__button--load-js');

console.log(message);

// 2. wartość zapisuję do Local Storage po kliknięciu na przycisk
save.addEventListener('click', (e) => {
  //blokuje domyslne wyslanie formularza, ktore ciagle przeladowuje strone
  e.preventDefault();
  localStorage.setItem('message', message.value);
});

//3. Wartość pobieram z Local Storage po kliknięciu na przycisk
load.addEventListener('click', (e) => {
  e.preventDefault();
  message.value = localStorage.getItem('message');
});