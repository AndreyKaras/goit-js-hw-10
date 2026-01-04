import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import '../css/snackbar.css';

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(delay => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        // timeout: 0,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: 'Illegal operation',
        position: 'topRight',
        iconUrl: 'img/bi_x-octagon (1).svg',
        // timeout: 0,
      });
    });
});
