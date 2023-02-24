let valorveneno = 0;

document.getElementById('bmenos').onclick = function(){
    valorveneno-=1;
    document.getElementById('valorveneno').innerText = valorveneno;
}
document.getElementById('bmais').onclick = function(){
    valorveneno+=1;
    document.getElementById('valorveneno').innerText = valorveneno;
}

let stdvalorvida = 20;

document.getElementById('stdvmenos').onclick = function(){
    stdvalorvida-=1;
    document.getElementById('stdvalorvida').innerText = stdvalorvida;
}
document.getElementById('stdvmais').onclick = function(){
    stdvalorvida+=1;
    document.getElementById('stdvalorvida').innerText = stdvalorvida;
}

document.getElementById('reset').onclick = function(){
    stdvalorvida=20;
    document.getElementById('stdvalorvida').innerText = stdvalorvida;
    valorveneno=0;
    document.getElementById('valorveneno').innerText = valorveneno;
}

let visualcolor = document.querySelector('.valorvida');

if(stdvalorvida > 19) {
    visualcolor.classList.add("danger");
} else {
    visualcolor.classList.remove("danger");
}