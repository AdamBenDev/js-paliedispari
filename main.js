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
  console.log(parola + "e' palindroma");
} else {
  console.log(parola + "non e' palindroma");
}
