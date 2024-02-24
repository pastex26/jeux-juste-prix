var number = 0;
var input = document.getElementById("reponse");

function randomize() {
    document.getElementById("restartIndic").innerHTML = "indiquez votre reponse et presser <em><strong>Go";
    return number = Math.floor(Math.random() * 100);
}

document.getElementById("restartBtn").onclick = function restart() {
    document.getElementById("indice").innerHTML = "Entrer une reponse.";
    document.getElementById("reponse").value = "";
    return randomize();
}

function game() {

    if (document.getElementById("reponse").value === "") {
        return document.getElementById("indice").innerHTML = "Entrer une reponse";
    } else if (document.getElementById("reponse").value > number) {
        document.getElementById("reponse").value = "";
        return document.getElementById("indice").innerHTML = "La reponse est plus petite";
    } else if (document.getElementById("reponse").value < number) {
        document.getElementById("reponse").value = "";
        return document.getElementById("indice").innerHTML = "La reponse est plus grande";
    } else {
        document.getElementById("restartIndic").innerHTML = "cliquer sur <em><strong>restart</em></strong> pour recommencer";
        return document.getElementById("indice").innerHTML = "bonne reponse";
    }
}

window.onload = randomize();


input.addEventListener("keypress", () => {
    if (event.key === "Enter") {
        game();
    }
})

document.getElementById("btn").onclick = function click() {
    game();
}