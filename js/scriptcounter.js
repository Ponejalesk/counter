let valorcastcmd = 0;

document.getElementById('btnmenos').onclick = function(){
    valorcastcmd-=2;
    document.getElementById('valorcastcmd').innerText = valorcastcmd;
}
document.getElementById('btnmais').onclick = function(){
    valorcastcmd+=2;
    document.getElementById('valorcastcmd').innerText = valorcastcmd;
}

let valordanocmd = 0;

document.getElementById('btmenos').onclick = function(){
    valordanocmd-=1;
    document.getElementById('valordanocmd').innerText = valordanocmd;
}
document.getElementById('btmais').onclick = function(){
    valordanocmd+=1;
    document.getElementById('valordanocmd').innerText = valordanocmd;
}

let valorveneno = 0;

document.getElementById('bmenos').onclick = function(){
    valorveneno-=1;
    document.getElementById('valorveneno').innerText = valorveneno;
}
document.getElementById('bmais').onclick = function(){
    valorveneno+=1;
    document.getElementById('valorveneno').innerText = valorveneno;
}

let valorvida = 40;

document.getElementById('vmenos').onclick = function(){
    valorvida-=1;
    document.getElementById('valorvida').innerText = valorvida;
}
document.getElementById('vmais').onclick = function(){
    valorvida+=1;
    document.getElementById('valorvida').innerText = valorvida;
}

document.getElementById('reset').onclick = function(){
    valorcastcmd=0;
    document.getElementById('valorcastcmd').innerText = valorcastcmd;
    valordanocmd=0;
    document.getElementById('valordanocmd').innerText = valordanocmd;
    valorveneno=0;
    document.getElementById('valorveneno').innerText = valorveneno;
    valorvida=40;
    document.getElementById('valorvida').innerText = valorvida;
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
}