
const inputSimbolo1 = document.getElementById('input-simbolo1');
const inputSimbolo2 = document.getElementById('input-simbolo2');
const inputSimbolo3 = document.getElementById('input-simbolo3');
const inputSimbolo4 = document.getElementById('input-simbolo4');
const inputSimbolo5 = document.getElementById('input-simbolo5');
const inputSimbolo6 = document.getElementById('input-simbolo6');
const inputSimbolo7 = document.getElementById('input-simbolo7');
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text/plain', event.target.textContent);
}

function drop(event) {
    event.preventDefault();
    const symbol = event.dataTransfer.getData('text/plain');
    if(symbol === '_' || symbol === '¬' ){
    if (event.target === inputSimbolo1) {
        inputSimbolo1.value = symbol;
    } else if (event.target === inputSimbolo2) {
        inputSimbolo2.value = symbol;
    } else if (event.target === inputSimbolo3) {
        inputSimbolo3.value = symbol;
    } else if (event.target === inputSimbolo4) {
        inputSimbolo4.value = symbol;
    } else if (event.target === inputSimbolo5) {
        inputSimbolo5.value = symbol;
    } else if (event.target === inputSimbolo6) {
        inputSimbolo6.value = symbol;
    } else if (event.target === inputSimbolo7) {
        inputSimbolo7.value = symbol;
    }
}
}

const symbols = document.querySelectorAll('.symbol');
symbols.forEach(symbol => {
    symbol.addEventListener('dragstart', drag);
});

inputSimbolo1.addEventListener('drop', drop);
inputSimbolo1.addEventListener('dragover', allowDrop);
inputSimbolo2.addEventListener('drop', drop);
inputSimbolo2.addEventListener('dragover', allowDrop);
inputSimbolo3.addEventListener('drop', drop);
inputSimbolo3.addEventListener('dragover', allowDrop);
inputSimbolo4.addEventListener('drop', drop);
inputSimbolo4.addEventListener('dragover', allowDrop);
inputSimbolo5.addEventListener('drop', drop);
inputSimbolo5.addEventListener('dragover', allowDrop);
inputSimbolo6.addEventListener('drop', drop);
inputSimbolo6.addEventListener('dragover', allowDrop);
inputSimbolo7.addEventListener('drop', drop);
inputSimbolo7.addEventListener('dragover', allowDrop);
