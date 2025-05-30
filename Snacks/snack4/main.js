// Crea un array vuoto e chiedi per 6 volte allìutente di inserire un numero se è ddispari inseriscilo nell'array

// let numbers = [];

// for (let i = 1; i <= 6; i++) {
//   let inputnumb = Number(prompt("Inserisci qualcosa:"));
//   if (inputnumb != null && inputnumb % 2 != 0) {
//     numbers.push(inputnumb);
//   }
// }
// console.log(numbers);

let N = [];

for (let i = 1; i <= 10; i++) {
  let numberInput = Number(prompt("Inserisci un numero"));
  {
    if (numberInput >= 0) {
      let cubo = numberInput ** 3;
      N.push(cubo);
    } else {
      console.log("Inserisci un numero positivo");
    }
  }
}
console.log(N);
