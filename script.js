/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const number1 = parseInt(prompt("Inserisci il primo numero:")); 
const number2 = parseInt(prompt("Inserisci il secondo numero:")); 


if(number1 > number2) {
console.log("Il maggiore è :" +number1);
}
else if(number2 > number1) {
  console.log("Il maggiore è : "+number2); 
} 
else {
  console.log("i numeri sono uguali "); 
}
  
/*
if(number1 === number2) {
  console.log("I numeri sono uguali. ");
}
else {
  const max = Math.max(number1, number2); 
  console.log("Maggiore:" + max); 
}
  */