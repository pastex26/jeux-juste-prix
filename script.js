const tips = document.querySelector("#tipsText");
const input = document.querySelector("#input");
const coup = document.querySelector("#coupText");
const historicText = document.querySelector("#historic");
const restartButton = document.querySelector("#restart");
const reponseButton = document.querySelector("#reponse");
const debug = document.querySelector("#debug");
const winReponse = document.querySelector("#winReponse");

const higherQuote = ["Le nombre est plus petit", "Plus petit que ca Jean-Pierre", "Encore plus petit", "C'est plus petit... incapable...", "Plus petit, comme ton QI"]
const lowerQuote = ["Le nombre est plus grand", "Plus grand que ca mon grand", "Pluuuuus haut nom d'un chien", "Toujours plus haut!!", "Plus grand, c'est si dur a comprendre?"]
const winQuote = ["Oh, bravo pour avoir réussi du premier coup ! Qui aurait cru que même une horloge cassée pouvait donner l'heure juste une fois ?",
"Félicitations pour ton succès au deuxième coup ! Apparemment, même une poule aveugle peut trouver un grain de maïs de temps en temps.",
"Eh bien, regarde qui a réussi en seulement 3 coups ! Apparemment, même les miracles ont leur limite de patience.",
"Oh, moins de 5 coups pour réussir ? Apparemment, même la chance elle-même ne peut résister à ton charme irrésistible.",
"Oh, félicitations pour avoir réussi en moins de 10 coups ! Tu sais, c'est tout à fait impressionnant... pour quelqu'un qui aspire juste à être dans la moyenne.",
"Plus de 7 coups ? C'est sûr que la patience est une vertu, mais là, tu as atteint un niveau olympique de patience... ou juste de médiocrité, au choix.",
"Bravo pour avoir réussi en plus de 10 coups ! On dirait que même un escargot aurait pu faire mieux en traînant sa coquille. Mais bon, il faut de tout pour faire un monde, même les performances pitoyables.",
"Eh bien, félicitations pour ta façon innovante de réussir : demander la réponse !"
]

let random;
let coupCount = 0;
let historic = [];
let quoteCountHigh = 0;
let quoteCountLow = 0;


window.onload = function randomize() {
    random = Math.floor(Math.random() * 100);
    // debug.innerText = random;
}

input.addEventListener("keypress", () => {
    if(event.key === "Enter") {
        game();
    }
})

function game() {
    historicFunction();
    if (input.value > random) {
        coupFunction();
        return higher();
    } else if (input.value < random) {
        coupFunction();
        return lower();
    } else {
        coupFunction();
        return win();
    }
}

function historicFunction() {
    if(input.value !== "") {
        historic.push(input.value);
        historicText.innerText = "Historique: " +  historic;
        if (historic.length > 10) {
            historic.shift();
        }
    }
}

function coupFunction() {
    coupCount++;
    coup.innerHTML = "Nombre de coups: " + "<strong>" + coupCount + "</strong>";
}

function higher() {
    input.value = "";
    tips.innerText = higherQuote[quoteCountHigh];
    quoteCountHigh++;
    if (quoteCountHigh > higherQuote.length - 1) {
        quoteCountHigh = 0;
    }
}

function lower() {
    input.value = "";
    tips.innerText = lowerQuote[quoteCountLow];
    quoteCountLow++;
    if (quoteCountLow > lowerQuote.length - 1) {
        quoteCountLow = 0;
    }
    
}

function win() {
    winScreen();
    if (coupCount === 1) {
        return tips.innerText = winQuote[0];
    } else if (coupCount === 2){
        return tips.innerText = winQuote[1];
    } else if (coupCount === 3){
        return tips.innerText = winQuote[2];
    } else if (coupCount < 5) {
        return tips.innerText = winQuote[3];
    } else if (coupCount < 7) {
        return tips.innerText = winQuote[4];
    } else if (coupCount >= 10) {
        return tips.innerText = winQuote[6];
    } else if (coupCount > 7) {
        return tips.innerText = winQuote[5];
    }
}

function winScreen() {
    input.type = "hidden";
    winReponse.innerText = "Le nombre est " + random;
}

function showReponseFunction() {
    winScreen();
    tips.innerText = winQuote[7];
}

function restart() {
    input.type = "number";
    winReponse.innerText = "";
    coupCount = 0;
    coup.innerText = "Nombre de coups:";
    historic = [];
    historicText.innerText = "Historique:"
    quoteCountHigh = 0;
    quoteCountLow = 0;
    random = Math.floor(Math.random() * 100);
    // debug.innerText = random;
    tips.innerHTML = "Pourquoi pas <strong>50</strong> pour commencer ?";
    input.value = "";
}

restartButton.onclick = restart;
reponseButton.onclick = showReponseFunction;