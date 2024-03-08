//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km(0.21 € al km)
//va applicato uno sconto del 20 % per i minorenni
//va applicato uno sconto del 40 % per gli over 65.
//Stampate il prezzo finale del biglietto nella console del browser in forma “umana” 
//ovvero con massimo due cifre decimali, per indicare centesimi sul 
//(per questo sarà necessario cercare in documentazione come fare)
//BONUS
//provate a stampare il prezzo anche nella pagina html dentro ad un tag p
//Consigli:
//partite sempre analizzando il problema e scrivendo i commenti dei vari procedimenti che dovete svolgere
//ragionate sempre sul tipo di dato che vi arriva dall’utente: è una stringa o un numero ?
//    Stampare il risultato con due cifre decimali non vuol dire che dovete arrotondarlo quando fate i calcoli, 
//    ma solo quando lo stampate vanno lasciati i due decimali… ragionateci

console.log("Biglietto del treno");
const numeroChilometriPercorsi = prompt("Quanti chilometri vuoi percorrere?");
const stringConvertita = parseFloat(numeroChilometriPercorsi)
const etaPassegero = prompt("Quanti anni ha il passegero?");
const stringConvertita2 = parseInt(etaPassegero)
const prezzoInteroDelBiglietto = stringConvertita * 0.21;
const scontoMinorenne = prezzoInteroDelBiglietto * 0.2;
const prezzoMinorenne = prezzoInteroDelBiglietto - scontoMinorenne;
const scontoOverSessantacinque = prezzoInteroDelBiglietto * 0.4;
const prezzoOverSessantacinque = prezzoInteroDelBiglietto - scontoOverSessantacinque;
const numero = prezzoMinorenne;
const numeroArrotondato = (numero).toFixed(2); 
const numero2 = prezzoOverSessantacinque;
const numeroArrotondato2 = (numero).toFixed(2);
const numero3 = prezzoInteroDelBiglietto;
const numeroArrotondato3 = (numero).toFixed(2);
if (etaPassegero < 18) {
    console.log("Il prezzo del biglietto é di: ", numeroArrotondato)
} else if (etaPassegero > 65) {
    console.log("Il prezzo del biglietto è di: ", numeroArrotondato2)
} else {
    console.log("Il prezzo del biglietto è di: ", numeroArrotondato3)
}


