let nomeUtente = prompt("Inserisci il tuo nome"); //string
let cognomeUtente = prompt("Inserisci il tuo cognome"); //string
let colorePreferito = prompt("Inserisci il tuo colore preferito"); //string

let randomNumber = parseInt(Math.random() * 100);

console.log(`${nomeUtente}${cognomeUtente}${colorePreferito}${randomNumber}`);