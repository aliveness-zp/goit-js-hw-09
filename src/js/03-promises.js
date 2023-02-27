import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', createPromises);

function createPromises(e) {
  e.preventDefault();

  let delay = Number(form.delay.value);
  let step = Number(form.step.value);
  let amount = Number(form.amount.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// const form = {
//   startBtn: document.querySelector('[type="submit"]'),
//   formEl: document.querySelector('form'),
//   delay: document.querySelector('[name="delay"]'),
//   step: document.querySelector('[name="step"]'),
//   amount: document.querySelector('[name="amount"]'),
// };

// form.startBtn.addEventListener('click', createPromises);
// form.formEl.addEventListener('input', getInputData);

// let delay = 0;
// let step = 0;
// let amount = 0;

// function getInputData(e) {
//   delay = Number(form.delay.value);
//   step = Number(form.step.value);
//   amount = Number(form.amount.value);

//   return { delay, step, amount };
// }

// function createPromises(e) {
//   e.preventDefault();

//   const { delay, step, amount } = getInputData(e);

//   for (let i = 0; i < amount; i++) {
//     createSinglePromise(i + 1, delay + step * i)
//       .then(({ position, delay }) => {
//         console.log(`Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`Rejected promise ${position} in ${delay}ms`);
//       });
//   }
// }

// function createSinglePromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }
