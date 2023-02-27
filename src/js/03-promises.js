// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

const form = document.querySelector('.form');

form.addEventListener('submit', createPromise);

let delay = Number(form.delay.value);
let step = Number(form.step.value);
let amount = Number(form.amount.value);

function createPromise(e) {
  e.preventDefault();
  console.log('555');

  for (let i = 0; i < amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        //
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

// form.startBtn.addEventListener('submit', createPromise);
// form.formEl.addEventListener('input', getInputData);

// let delay = 0;
// let step = 0;
// let amount = 0;

// function getInputData(e) {
//   delay = Number(form.delay.value);
//   step = Number(form.step.value);
//   amount = Number(form.amount.value);
//   console.log({ delay, step, amount });

//   return { delay, step, amount };
// }

// console.log({ delay, step, amount });

// // console.log(amount);

// function createPromise(e) {
//   e.preventDefault();

//   const { delay, step, amount } = getInputData(e);
//   console.log(5555);

//   for (let i = 0; i < Number(amount.value); i += 1) {
//     createPromise(i + 1, Number(delay.value) + Number(step.value) * i)
//       .then(({ position, delay }) => {
//         console.log(`Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`Rejected promise ${position} in ${delay}ms`);
//       });
//   }
// }

// console.log();

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve(`Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject(`Rejected promise ${position} in ${delay}ms`);
//       }
//     }, 2000);
//   });
// }

// createPromise(2, 500)
//   .then(({ position, delay }) => {
//     console.log(`Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log('333');
//   });
