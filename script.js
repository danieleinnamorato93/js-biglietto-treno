
/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

//Check collegamento JS
console.log ('JS OK')

// Preparazione :Recupero l'elemento di interesse nel DOM
const resultElement = document.getElementById ('result');
console.log('resultElement');

let totalPrice 

//Raccolta dati: chiedo il numero di km da percorrere e l'tà del passeggero
const age = parseInt(prompt ('Quanti anni hai?'));
console.log ('age') ;
const kmsTr =  parseInt(prompt ('Quantikilometri vuoi percorrere?'));
console.log ('kmsTr') ;

//Elaboazione Dati: costo biglietto al km / sconto in base all'età / fix decimali in eccesso

let ticketPrice = 0.21 * kmsTr;
console.log ('ticketPrice');

if (age < 18) {
   ( ticketPrice * 0.20) / 100;
} else if (age > 65) {
    ( ticketPrice * 0.40) / 100;
};
console.log ('ticketPricescontati')

totalPrice = ticketPrice.toFixed(2);
console.log ('totalprice')

//Output: appare in pagina
console.log(`Il prezzo del biglietto è: € ${totalPrice}`);

resultElement.innerHTML = `Il prezzo del biglietto è: <strong> ${totalPrice}</strong>` ;


