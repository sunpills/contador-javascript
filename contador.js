let contagem = 0;

document.getElementById("contador").innerText = contagem;
  
function increment() {
    contagem = contagem + 1;
    document.getElementById("contador").innerText = contagem;
}

function decrement() {
    contagem = contagem - 1;
    document.getElementById("contador").innerText = contagem;
}

function reset() {
    contagem = 0;
    document.getElementById("contador").innerText = contagem;
}