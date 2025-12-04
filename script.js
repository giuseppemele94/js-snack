/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

/*const number1 = parseInt(prompt("Inserisci il primo numero:")); 
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
  
//Versione alternativa con Math 
/*
if(number1 === number2) {
  console.log("I numeri sono uguali. ");
}
else {
  const max = Math.max(number1, number2); 
  console.log("Maggiore:" + max); 
}
  */


/*JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 Il programma stampa la somma di tutti i numeri inseriti. 
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)*/

 let sum = 0; 
 
 //con ciclo for 
 for (let i = 0 ; i < 5; ++i ) {
  const number = parseInt(prompt("Inserisci il numero :")); 
  sum += number;
 }
 console.log("la somma dei numeri inseriti è :" ,sum); 



/*
//ciclo while 
 let counter = 0;
 let sum = 0; 
 while ( counter < 5 ) {
  const number = parseInt(prompt("Inserisci il numero :")); 
  sum+= number ; 
  ++counter; 
  
 }
 console.log("Somma :" , sum); 
  */