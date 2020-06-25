import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// Promises
// consume APIs that return promise

const chargeCard = () =>
  new Promise((resolve, reject) => {
    // reject('Fail!')
    // card is valid
    if (true) {
      return resolve(true);
    }
    return resolve(false);
  });

// then runs when the promise is resolved and yields the value
// can chain another .then
// const chargeCC = (ccNumber) => {
//   chargeCard(ccNumber)
//     .then(val => {
//     console.log(val)
//     })
//     .catch(err => {
//       console.log(err)
//     });
// }

const getUser = user => `I am a ${user}`;

// Async-Await syntax (next version of Promise - uses under the hood)
// as long as what you are returning is a promise, can use
// need Babel to transform (not supported everywhere)
// use try...catch to provide the means to catch the error

const chargeCC = async ccNumber => {
  // standard function - don't need to await
  const user = getUser();
  try {
    const res = await chargeCard(ccNumber);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// chargeCC is called - returns a promise;
// console.log then returns the awaited value

console.log(chargeCC("3453463463"));
