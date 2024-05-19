/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 

String: contiene generalmente testo. Viene inizializzata scrivendone il valore tra virgolette, apici o backtick.
Number: contiene numeri di tipo intero o decimale
Integer: contiene numeri interi
Float: contiene numeri interi e decimali
Boolean: contiene un valore logico, true o false
Array: contiene una lista di dati elementari, potenzialmente di tutti i tipi, anche altri array e oggetti. Si dichiara con parentesi quadre.
Oggetti: sono strutture dati contenenti coppie di chiave-valore. Sono utilizzabili per rappresentare entità reali di un'applicazione.
Null: valore nullo, una variabile dichiarata come null è vuota, ossia non ha nessun valore.
Undefined: valore non ancora definito, in attesa di essere specificato.

*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/*

L'oggetto JavaScript è un'entità autonoma che contiene proprietà e metodi. I metodi rappresentano delle funzioni, mentre le proprietà sono dei
 dati. All'interno degli oggetti i valori non sono ordinati e possono essere di qualsiasi tipo.

Un oggetto JavaScript è racchiuso da parentesi graffe {} e i suoi valori sono assegnati a parole chiave, dette chiavi, separate
dai valori che queste assumono tramite i due punti (:). Le coppie chiave-valore sono separate tra loro da virgola (,).
Tutte le parole chiave devono essere univoche all'interno dell'oggetto, mentre i loro valori possono non esserlo.
Le coppie chiave-valore di un oggetto rappresentano, in generale, quelle che sono dette proprietà dell'oggetto.

Ai metodi può essere obbligatorio dover passare dei valori affinchè essi vengano eseguiti quando richiamati, detti parametri (della funzione).
Alla fine della loro esecuzione, i metodi possono ritornare valori, oppure non ritornare nulla e limitarsi ad eseguire il codice che li costituisce.

Proprietà e metodi di un oggetto JavaScript sono accessibili con la notazione a punti in questo modo: oggetto.nomeProprietà o oggetto.nomeMetodo.

*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(12+20); /*dà 32*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x =12;
console.log(x); /*dà 12*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Lorenzo";
console.log(name); /*dà "Lorenzo"*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
difference = 4 - x;
console.log(difference); /*dà -8*/




/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1 ="john";
const name2 = "John";
console.log(name1===name2); /*dà falso*/

console.log (name1===name2.toLowerCase()); /*dà vero */