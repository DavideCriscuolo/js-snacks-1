// Il software deve chiedere per 10 volte all'utente di inserire un numero.
// il programma stampa la somma di tutti i numeri inseriti

let numbers = [];

for (let i = 1; i <= 10; i++) {
  let input = Number(prompt("Inserisci qualcosa:"));
  if (input != null) {
    numbers.push(input);
  }
}
console.log(numbers);
let somma = 0;
for (let i = 0; i < numbers.length; i++) {
  somma += numbers[i];
}
console.log("Somma", somma);
