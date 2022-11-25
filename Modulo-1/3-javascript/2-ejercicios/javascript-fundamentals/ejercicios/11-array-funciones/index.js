// 1. Crea la función "getNewArray" que reciba un  array de frutas, y
// un string con otra fruta nueva, y luego retorne otro array igual (pero con
// otra referencia) pero habiéndole añadido en la primera posición la fruta nueva.
const fruits = ['pera', 'manzana', 'naranja']

function getNewArray(fruits) {
    const fruitsNew = fruits.slice();
    fruitsNew.unshift('plátano');
    return fruitsNew
}


// 2. Crea la función "modifyOriginalArray" que reciba un array de números o strings,
// le elimine la primera y la última posición y lo retorne (misma referencia)

const names = ["pepe", "paco", "benito"];

function modifyOriginalArray(names) {
    names.shift();
    names.pop();
    return names; 
}

// --EXTRA-- Dado el array "colors", crea la función "getColors" que reciba un número
// como parámetro, cree una copia, y añada el color "black" en la última posición de
// dicha copia si el número es par, o añada el color "white" en la primera posición
// si es impar, y luego retorne dicho array

const colors = ["blue", "red", "gray"];

function getColors(i) {
    const colorsCopy = colors.slice();
if ( i % 2 === 0) {
    colorsCopy.push('black') 
}
else {
    colorsCopy.unshift('white') 
}
    return colorsCopy
}


// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default { getNewArray, modifyOriginalArray, colors, getColors };
// ///////////////////////////////////////////////////////////////
