const addInTime = ({ time = 500, number = 0, shouldFail = false }) =>
  new Promise((resolve, reject) => {
    const result = number + 1;
    const timeOut = setTimeout(() => {
      shouldFail ? reject(`Number ${result} not resolved.`) : resolve(result);
      clearTimeout(timeOut);
    }, time);
  });
const promises = [
  addInTime({ time: 500, number: 5 }),
  addInTime({ time: 4000, number: 8 }),
  "Hello world!",
  addInTime({ time: 5000, number: 9 }),
  1,
  function () {},
];
Promise.all(promises).then(console.log).catch(console.error);
