/*Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma*/


let parola = prompt("Inserisci una parola");

//!VERIFICHIAMO SE LA PAROLA E' PALINDROMA

function isPalindroma(parola) {
  //*inverto la parola
  let parolaInvertita = parola.split("").reverse().join("");

  //*verifico se e' uguale alla parola originale
  return parola === parolaInvertita;
}

//!VERIFICO SE LA PAROLA E' PALINDROMA
if (isPalindroma(parola)) {
  console.log(parola + " e' palindroma");
} else {
  console.log(parola + " non e' palindroma");
}


//?PARI E DISPARI


/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/

let sceltaUtente = prompt("Scegli pari o dispari");
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));


//*genera un numero da random da 1 a 5 

function numeroCasuale(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min );
}

let numeroComputer = numeroCasuale(1,5);