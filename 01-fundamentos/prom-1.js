const time = 800;
const add = (number) =>
  new Promise((resolve, reject) => {
    const result = number + 1;
    if (result > 7) reject("Number is very high");
    const timeOut = setTimeout(() => {
      resolve(result);
      console.log(result);
      clearTimeout(timeOut);
    }, time);
  });
add(5).then(add).then(add).catch(console.error);
