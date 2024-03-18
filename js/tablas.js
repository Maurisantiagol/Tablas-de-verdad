//Simbolos para propocisiones _,¬
//Simbolos para operaciones →,↔,∧,∨
// let primerafila = ["p", "q", "r", "s", "(" + valorSimbolo1 + "p" + valorOperacion1 + valorSimbolo2 + "q)", "(" + valorSimbolo3 + "r" + valorOperacion3 + valorSimbolo4 + "s)", "(" + valorSimbolo1 + "p" + valorOperacion1 + valorSimbolo2 + "q)" + valorOperacion2 + "(" + valorSimbolo3 + "r" + valorOperacion3 + valorSimbolo4 + "s)"];
// let segundafila = ["p", "q", "s", "(p" + valorOperacion4 + valorSimbolo5 + "q)", "[(p" + valorOperacion4 + valorSimbolo5 + "q)" + valorOperacion5 + "s]", "(s" + valorOperacion8 + valorSimbolo7 + "q)", "[" + valorSimbolo6 + "p" + valorOperacion7 + "(s" + valorOperacion8 + valorSimbolo7 + "q)]", "[[(p" + valorOperacion4 + valorSimbolo5 + "q)" + valorOperacion5 + "s]" + valorOperacion6 + "[" + valorSimbolo6 + "p" + valorOperacion7 + "(s" + valorOperacion8 + valorSimbolo7 + "q)]]"];
const p1 = [true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false];
const q1 = [true, true, true, true, false, false, false, false, true, true, true, true, false, false, false, false];
const r1 = [true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false];
const s1 = [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false];
const p2 = [true, true, true, true, false, false, false, false];
const q2 = [true, true, false, false, true, true, false, false];
const s2 = [true, false, true, false, true, false, true, false];
let signoP1, signoOperacionPQ1, signoq1, signoOperacionPrincipal1, signoR1, signOperacionRS1, signoS1;
let signoOperacionPQ2, signoq2, signoOperacionPQS2, signoOperacionPrincipal2, signoP2, signoOperacionPSQ2, signoOperacionSQ2, signoQ;
function convertirA_VF(bool) {
        if (bool==true) {
            return 'V';
        } else {
            return 'F';
        }
    
}
function conjuncion(p, q) {
    return (p == true && q == true);
}
function disyuncion(p, q) {
    return (p == true || q == true);
}
function negacion(p) {
    return (p == false)
}
//p→q = !p||q

function condicional(p, q) {
    return (disyuncion(negacion(p), q))
}
function dobleCondicional(p, q) {
    return (conjuncion(disyuncion(negacion(p), q), disyuncion(negacion(q), p)))
}
function selectorSimbolo(propocision1, simbolo) {
    switch (simbolo) {
        case '_':
            // Realiza la acción específica para el operador _
            return propocision1;
            break;
        case '¬':
            // Realiza la acción específica para el operador ¬
            return negacion(propocision1);
            break;
        default:
            console.log('Operador no reconocido. Introduce uno válido: _, ¬');
    }
}
function selectorOperacion(propocision1, propocision2, operador) {
    switch (operador) {
        case '→':
            // Realiza la acción específica para el operador →
            return condicional(propocision1, propocision2);
            break;
        case '↔':
            // Realiza la acción específica para el operador ↔
            return dobleCondicional(propocision1, propocision2);
            break;
        case '∧':
            // Realiza la acción específica para el operador ∧
            return conjuncion(propocision1, propocision2)
            break;
        case '∨':
            // Realiza la acción específica para el operador ∨
            return disyuncion(propocision1, propocision2);
            break;
        default:
            console.log('Operador no reconocido. Introduce uno válido: →, ↔, ∧ o ∨');
    }

}
function op1Tabla1(signoP, signoOperacionPQ, signoq) {
    //operacion (_p _ _q)
    let resultado = [];
    for (let i = 0; i < p1.length; i++) {

        let pSimbolo = selectorSimbolo(p1[i], signoP);
        let qSimbolo = selectorSimbolo(q1[i], signoq);
        resultado.push(selectorOperacion(pSimbolo, qSimbolo, signoOperacionPQ));
    }
    return resultado;
}
function op2Tabla1(signor, signoOperacionRS, signos) {
    //operación (_r _ _s)
    let resultado = [];
    for (let i = 0; i < r1.length; i++) {

        let rSimbolo = selectorSimbolo(r1[i], signor);
        let sSimbolo = selectorSimbolo(s1[i], signos);
        resultado.push(selectorOperacion(rSimbolo, sSimbolo, signoOperacionRS));
    }
    return resultado;
}
function op3Tabla1(resultadoPQ, resultadoRS, signoOperacionPrincipal) {
    //operacion (_p _ _q) _(_r _ _s)
    let resultado = [];
    for (let i = 0; i < p1.length; i++) {
        resultado.push(selectorOperacion(resultadoPQ[i], resultadoRS[i], signoOperacionPrincipal));
    }
    return resultado;

}
function ejecutarTabla1(simboloP, operacionPQ, simboloQ, simboloPrincipal, simboloR, operacionRS, simboloS) {
    return op3Tabla1(op1Tabla1(simboloP, operacionPQ, simboloQ), op2Tabla1(simboloR, operacionRS, simboloS), simboloPrincipal);
}



function op1Tabla2(operadorPQ, signoQ) {
    //operacion (p _ _q)
    let resultado = [];
    for (let i = 0; i < p2.length; i++) {

        let qSimbolo = selectorSimbolo(q2[i], signoQ);
        resultado.push(selectorOperacion(p2[i], qSimbolo, operadorPQ));
    }
    return resultado;
}
function op2Tabla2(resultadoPQ, operadorPQS) {
    //operacion [(p _ _q) _ s]
    let resultado = [];
    for (let i = 0; i < p2.length; i++) {
        resultado.push(selectorOperacion(resultadoPQ[i], s2[i], operadorPQS));
    }
    return resultado;
} function op3Tabla2(operadorSQ, signoQ) {
    //operacion (s _ _q)
    let resultado = [];
    for (let i = 0; i < p2.length; i++) {

        let qSimbolo = selectorSimbolo(q2[i], signoQ);
        resultado.push(selectorOperacion(s2[i], qSimbolo, operadorSQ));
    }
    return resultado;
} function op4Tabla2(signoP, operacionPSQ, resultadoSQ) {
    //operacion [_ p _ (s _ _q) ]
    let resultado = [];
    for (let i = 0; i < p2.length; i++) {
        let pSimbolo = selectorSimbolo(p2[i], signoP);
        resultado.push(selectorOperacion(pSimbolo, resultadoSQ[i], operacionPSQ));
    }
    return resultado;
} function op5Tabla2(resultadoPQS, resultadoPSQ, operacionPQSPRS) {
    //operacion [(p _ _q) _ s] _ [_ p_(r _ _s)]
    let resultado = [];
    for (let i = 0; i < p2.length; i++) {
        resultado.push(selectorOperacion(resultadoPQS[i], resultadoPSQ[i], operacionPQSPRS));
    }
    return resultado;
}
function ejecutarTabla2(simboloPQ, simboloQ, simboloPQS, simboloPQSPSQ, simboloP, simboloPSQ, simboloSQ, simboloQ2) {
    return op5Tabla2(op2Tabla2(op1Tabla2(simboloPQ, simboloQ), simboloPQS), op4Tabla2(simboloP, simboloPSQ, op3Tabla2(simboloSQ, simboloQ2)), simboloPQSPSQ);
}
function llenarTabla(){
    let theader1=document.getElementById('theader1');
    let theader2=document.getElementById('theader2');
    let theader3=document.getElementById('theader3');
    let theader4=document.getElementById('theader4');
    let theader5=document.getElementById('theader5');
    let theader6=document.getElementById('theader6');
    let theader7=document.getElementById('theader7');
    let theader8=document.getElementById('theader8');



    let valorSimbolo1 = document.querySelector('#input-simbolo1').value;
    let valorSimbolo2 = document.querySelector('#input-simbolo2').value;
    let valorSimbolo3 = document.querySelector('#input-simbolo3').value;
    let valorSimbolo4 = document.querySelector('#input-simbolo4').value;
    let valorSimbolo5 = document.querySelector('#input-simbolo5').value;
    let valorSimbolo6 = document.querySelector('#input-simbolo6').value;
    let valorSimbolo7 = document.querySelector('#input-simbolo7').value;
    let valorOperacion1 = document.querySelector('#input-operacion1').value;
    let valorOperacion2 = document.querySelector('#input-operacion2').value;
    let valorOperacion3 = document.querySelector('#input-operacion3').value;
    let valorOperacion4 = document.querySelector('#input-operacion4').value;
    let valorOperacion5 = document.querySelector('#input-operacion5').value;
    let valorOperacion6 = document.querySelector('#input-operacion6').value;
    let valorOperacion7 = document.querySelector('#input-operacion7').value;
    let valorOperacion8 = document.querySelector('#input-operacion8').value;
    let resultadosFinal1 = ejecutarTabla1(valorSimbolo1, valorOperacion1, valorSimbolo2, valorOperacion2, valorSimbolo3, valorOperacion3, valorSimbolo4);
    let resultadosFinal2 = ejecutarTabla2(valorOperacion4, valorSimbolo5, valorOperacion5, valorOperacion6, valorSimbolo6, valorOperacion7, valorOperacion8, valorSimbolo7);
    let resultadosOperacion1t1 = op1Tabla1(valorSimbolo1, valorOperacion1, valorSimbolo2);
    let resultadosOperacion2t1 = op2Tabla1(valorSimbolo3, valorOperacion3, valorSimbolo4);
    let resultadosOperacion1t2 = op1Tabla2(valorOperacion4, valorSimbolo5);
    let resultadosOperacion2t2 = op2Tabla2(resultadosOperacion1t2,valorOperacion5);
    let resultadosOperacion3t2 = op3Tabla2(valorOperacion8, valorSimbolo7);
    let resultadosOperacion4t2 = op4Tabla2(valorSimbolo6,valorOperacion7,resultadosOperacion3t2 );

// , , , , ];
theader1.textContent = "(" + valorSimbolo1 + "p" + valorOperacion1 + valorSimbolo2 + "q)";
    theader2.textContent =  "(" + valorSimbolo3 + "r" + valorOperacion3 + valorSimbolo4 + "s)";
    theader3.textContent = "(" + valorSimbolo1 + "p" + valorOperacion1 + valorSimbolo2 + "q)" + valorOperacion2 + "(" + valorSimbolo3 + "r" + valorOperacion3 + valorSimbolo4 + "s)";
    theader4.textContent = "(p" + valorOperacion4 + valorSimbolo5 + "q)";
    theader5.textContent = "[(p" + valorOperacion4 + valorSimbolo5 + "q)" + valorOperacion5 + "s]";
    theader6.textContent = "(s" + valorOperacion8 + valorSimbolo7 + "q)";
    theader7.textContent = "[" + valorSimbolo6 + "p" + valorOperacion7 + "(s" + valorOperacion8 + valorSimbolo7 + "q)]";
    theader8.textContent = "[(p" + valorOperacion4 + valorSimbolo5 + "q)" + valorOperacion5 + "s]" + valorOperacion6 + "[" + valorSimbolo6 + "p" + valorOperacion7 + "(s" + valorOperacion8 + valorSimbolo7 + "q)]";











const cuerpoTabla = document.querySelector('#tbody1');

cuerpoTabla.innerHTML = '';

for (let i = 0; i < p1.length; i++) {
    const fila = document.createElement('tr');
    const primeraCelda1 = document.createElement('td');
    const primeraCelda2 = document.createElement('td');
    const primeraCelda3 = document.createElement('td');
    const primeraCelda4 = document.createElement('td');
    const primeraCelda5 = document.createElement('td');
    const primeraCelda6 = document.createElement('td');
    const primeraCelda7 = document.createElement('td');

    primeraCelda1.textContent = convertirA_VF(p1[i]);
    primeraCelda2.textContent = convertirA_VF(q1[i]);
    primeraCelda3.textContent = convertirA_VF(r1[i]);
    primeraCelda4.textContent = convertirA_VF(s1[i]);
    primeraCelda5.textContent = convertirA_VF(resultadosOperacion1t1[i]);
    primeraCelda6.textContent = convertirA_VF(resultadosOperacion2t1[i]);
    primeraCelda7.textContent = convertirA_VF(resultadosFinal1[i]);

    fila.appendChild(primeraCelda1);
    fila.appendChild(primeraCelda2);
    fila.appendChild(primeraCelda3);
    fila.appendChild(primeraCelda4);
    fila.appendChild(primeraCelda5);
    fila.appendChild(primeraCelda6);
    fila.appendChild(primeraCelda7);

    cuerpoTabla.appendChild(fila);

}
    
const cuerpoTabla2 = document.querySelector('#tbody2');

cuerpoTabla2.innerHTML = '';

for (let i = 0; i < p2.length; i++) {
const fila = document.createElement('tr');
const celda1 = document.createElement('td');
const celda2 = document.createElement('td');
const celda3 = document.createElement('td');
const celda4 = document.createElement('td');
const celda5 = document.createElement('td');
const celda6 = document.createElement('td');
const celda7 = document.createElement('td');
const celda8 = document.createElement('td');

celda1.textContent = convertirA_VF(p2[i]);
celda2.textContent = convertirA_VF(q2[i]);
celda3.textContent = convertirA_VF(s2[i]);
celda4.textContent = convertirA_VF(resultadosOperacion1t2[i]);
celda5.textContent = convertirA_VF(resultadosOperacion2t2[i]);
celda6.textContent = convertirA_VF(resultadosOperacion3t2[i]);
celda7.textContent = convertirA_VF(resultadosOperacion4t2[i]);
celda8.textContent = convertirA_VF(resultadosFinal2[i]);

fila.appendChild(celda1);
fila.appendChild(celda2);
fila.appendChild(celda3);
fila.appendChild(celda4);
fila.appendChild(celda5);
fila.appendChild(celda6);
fila.appendChild(celda7);
fila.appendChild(celda8);

cuerpoTabla2.appendChild(fila);
}}