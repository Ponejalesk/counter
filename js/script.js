let contadorcmd = document.getElementById("contadorcmd");
function incrementar() {
    contadorcmd.innerText = parseInt(contadorcmd.innerText) +1;
}
function decrementar() {
    contadorcmd.innerText = parseInt(contadorcmd.innerText) -1;
}

let contadorpoison = document.getElementById("contadorpoison");
function incrementarr() {
    contadorpoison.innerText = parseInt(contadorpoison.innerText) +1;
}
function decrementarr() {
    contadorpoison.innerText = parseInt(contadorpoison.innerText) -1;
}

let contadorvida = document.getElementById("contadorvida");
function incrementarrr() {
    contadorvida.innerText = parseInt(contadorvida.innerText) +1;
}
function decrementarrr() {
    contadorvida.innerText = parseInt(contadorvida.innerText) -1;
}

function zerar() {
    contadorpoison.innerText = "0"
    contadorcmd.innerText = "0"
    contadorvida.innerText = "40"
}

function resetar() {
    contadorpoison.innerText = "0"
    contadorvida.innerText = "20"
}