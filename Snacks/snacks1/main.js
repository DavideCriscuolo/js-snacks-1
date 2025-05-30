/* L 'utente inserisce due numeri in successione , con due prompt.

il software stampa il maggiore*/

let numb1 = Number(prompt("Inserisci il primo numero"));
console.log("il primo numero che hai scelto è", numb1);
let numb2 = Number(prompt("Inserisci il secondo numero"));
console.log("il secondo numero che hai scelto è", numb2);

if (numb1 > numb2) {
  console.log("il numero maggiore è", numb1);
} else if (numb2 > numb1) {
  console.log("il numero maggiore è", numb2);
} else {
  console.log("i numeri sono uguali");
}
