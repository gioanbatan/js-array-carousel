// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
// **BONUS 1:**
// Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
// **BONUS 2:**
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
// **Prima di partire a scrivere codice:**
// Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una **mezz'ora**, così da non perdere di vista il focus dell'esercizio.
// **Consigli del giorno:**
// 1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// 2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// 3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:


// DATA
// Array con i nomi file delle immagini jpg
const imgArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]
// Costante con il container delle immagini
const imgFileName = document.getElementById("img-container")
console.log(imgArray, imgFileName);



// ELABORTAZIONE DATI
// Ciclo for per la composizione del div con le immagini
for (let i = 0; i < imgArray.length; i++) {
    imgArrayPos = imgArray[i];
    console.log("imgArrayPos", imgArrayPos);
    // OUTPUT
    // SE non è la prima immagine creare l'elemento img con il file immagine
    if (i !== 0) {
        imgFileName.innerHTML += `<img class="ms_pic" src="img/${imgArrayPos}">`;
    } else {
        //SE è il primo file aggiungere la classe active per renderla visibile
        imgFileName.innerHTML += `<img class="ms_pic ms_active" src="img/${imgArrayPos}">`;
    }
}

// Bottoni Precedente e Prossimo
const prevPic = document.getElementById("prev-pic");
const nextPic = document.getElementById("next-pic");

const pics = document.getElementsByClassName("ms_pic");

// BONUS 2 Thumbnails
const thumbs = document.getElementsByClassName("ms_thumb");

let actualPic = 0;

thumbs[actualPic].classList.add("ms_active");

console.log("pics", pics, "actual", actualPic, "thumbs", thumbs);

// INPUT
prevPic.addEventListener("click", function() {
    console.log("prevPic");
    // ELABORAZIONE DATI
    // SE l'utente preme il bottone precedente
    // ALLORA all'immagine corrente viene tolta la classe active
    pics[actualPic].classList.remove("ms_active");
    // BONUS 2 la thumbnail attuale si oscura
    thumbs[actualPic].classList.remove("ms_active");

    // SE l'immagine corrente è la prima, immagine corrente diventa l'ultima
    if (actualPic < 1) {
        actualPic = imgArray.length - 1;
        console.log(actualPic)
    } else {
        // ALTIRMENTI l'iummagine corrente scala di 1
        actualPic--;
    }
    
    // OUTPUT
    // l'immagine successiva viene aggiunta la classe active
    pics[actualPic].classList.add("ms_active");
    // BONUS 2 la thumbnail attuale si attiva
    thumbs[actualPic].classList.add("ms_active");
})    

// INPUT
nextPic.addEventListener("click", function() {
    console.log("prevPic");
    // ELABORAZIONE DATI
    // SE l'utente preme il bottone successivo
    // ALLORA all'immagine corrente viene tolta la classe active
    pics[actualPic].classList.remove("ms_active");
    // BONUS 2 la thumbnail attuale si oscura
    thumbs[actualPic].classList.remove("ms_active");

    // SE l'immagine corrente è l'ultima, l'immagine corrente diventa la prima
    if (actualPic >= imgArray.length - 1) {
        actualPic = 0;
        console.log(actualPic)
    } else {
        // ALTIRMENTI l'iummagine corrente scala di 1
        actualPic++;
    }
    
    // OUTPUT
    // l'immagine successiva viene aggiunta la classe active
    pics[actualPic].classList.add("ms_active");
    // BONUS 2 la thumbnail attuale si oscura
    thumbs[actualPic].classList.add("ms_active");
})