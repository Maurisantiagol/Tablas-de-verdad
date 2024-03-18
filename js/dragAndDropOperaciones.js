
const inputOperacion1 = document.getElementById('input-operacion1');
const inputOperacion2 = document.getElementById('input-operacion2');
const inputOperacion3 = document.getElementById('input-operacion3');
const inputOperacion4 = document.getElementById('input-operacion4');
const inputOperacion5 = document.getElementById('input-operacion5');
const inputOperacion6 = document.getElementById('input-operacion6');
const inputOperacion7 = document.getElementById('input-operacion7');
const inputOperacion8 = document.getElementById('input-operacion8');
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text/plain', event.target.textContent);
}

function drop(event) {
    event.preventDefault();
    const operacion = event.dataTransfer.getData('text/plain');
    if(operacion === '∨' || operacion === '∧' ||operacion === '→' ||operacion === '↔'){
    if (event.target === inputOperacion1) {
        inputOperacion1.value = operacion;
    } else if (event.target === inputOperacion2) {
        inputOperacion2.value = operacion;
    } else if (event.target === inputOperacion3) {
        inputOperacion3.value = operacion;
    } else if (event.target === inputOperacion4) {
        inputOperacion4.value = operacion;
    } else if (event.target === inputOperacion5) {
        inputOperacion5.value = operacion;
    } else if (event.target === inputOperacion6) {
        inputOperacion6.value = operacion;
    } else if (event.target === inputOperacion7) {
        inputOperacion7.value = operacion;
    }else if (event.target === inputOperacion8) {
        inputOperacion8.value = operacion;
    }
}
}

const operacions = document.querySelectorAll('.operacion');
operacions.forEach(operacion => {
    operacion.addEventListener('dragstart', drag);
});

inputOperacion1.addEventListener('drop', drop);
inputOperacion1.addEventListener('dragover', allowDrop);
inputOperacion2.addEventListener('drop', drop);
inputOperacion2.addEventListener('dragover', allowDrop);
inputOperacion3.addEventListener('drop', drop);
inputOperacion3.addEventListener('dragover', allowDrop);
inputOperacion4.addEventListener('drop', drop);
inputOperacion4.addEventListener('dragover', allowDrop);
inputOperacion5.addEventListener('drop', drop);
inputOperacion5.addEventListener('dragover', allowDrop);
inputOperacion6.addEventListener('drop', drop);
inputOperacion6.addEventListener('dragover', allowDrop);
inputOperacion7.addEventListener('drop', drop);
inputOperacion7.addEventListener('dragover', allowDrop);
inputOperacion8.addEventListener('drop', drop);
inputOperacion8.addEventListener('dragover', allowDrop);
