// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
//  se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con difficoltà 2=> da 1 a 50


function getRandomNumber() {
  return +(1+(Math.floor((Math.random()*max))));
}

function genNum(){
  lista = [];
  var numero;

  while (lista.length < 16){
    numero = getRandomNumber();
    if (lista.includes(numero) == false){
      lista.push(numero);
    }
  }
  console.log(lista);
}

var scelta = 0;
scelta = prompt("Scegli difficoltà: .0 --> da 1 a 100  .1 --> da 1 a 80  .2 --> da 1 a 50  (default diff. 0)");

var max = 0;
if (scelta == 0) {
  max = 100;
} else if (scelta == 1){
  max = 80;
} else if (scelta == 2) {
  max = 50;
}

genNum()

var trovato = false;
var j = 0;
var num_utente;
var punteggio = 0;

while ((j < (max-16)) && (trovato == false)) {
  num_utente = +(prompt('Inserisci un numero'))
  punteggio++;

  if (lista.includes(num_utente)) {
    trovato = true;
    punteggio--;
  }

  j++;
}

console.log('Difficoltà: ' + scelta);
console.log('Punteggio: ' + punteggio);
alert('Hai perso');
