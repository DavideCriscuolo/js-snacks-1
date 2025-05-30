// Crea un array vuoto e chiedi per 6 volte allìutente di inserire un numero se è ddispari inseriscilo nell'array

let numbers = [];

for (let i = 1; i <= 6; i++) {
  let inputnumb = Number(prompt("Inserisci qualcosa:"));
  if (inputnumb != null && inputnumb % 2 != 0) {
    numbers.push(input);
  }
}
console.log(numbers);
