/*L'utente inserisce due parole in successione, con due prompt.

il software stampa prima la parola più corta, poi quella più lunga
*/

let word1 = prompt("Scrivi la prima parola");
let word2 = prompt("Scrivi la seconda parola");

if (word1.length > word2.length) {
  console.log(word2, "è la parola piu corta");
} else if (word1.length > word2.length) {
  console.log(word1, "è la parola piu lunga");
} else {
  console.log("le parole hanno la stessa lunghezza");
}
