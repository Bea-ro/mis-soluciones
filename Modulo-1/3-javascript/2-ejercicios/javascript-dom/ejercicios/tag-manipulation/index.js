// 1. Cambia el contenido del elemento h1 contenido en el div con id "title-container" para que contenga "The Power Title".
// 🚨 No uses element.innerText, en su lugar usa element.innerHTML, ya que el engine de test no lo soporta. 🚨

const title = document.querySelector('h1');
title.innerHTML = 'The Power Title'

// Ahora añade un elemento "p" dentro del elemento con id "title-container" que tenga como texto "Agregando tags al DOM!"
const titleContainer = document.querySelector('#title-container')
const pElement = document.createElement('p');
titleContainer.append(pElement);
pElement.innerHTML = 'Agregando tags al DOM!';

// //////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Busca la lista con id "list" en el DOM y añade dinámicamente 5 elementos "li" en su interior.
// Los elementos li deben tener la clase "li-element".
const list = document.querySelectorAll('#list');
for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    li.className = 'li-element'
    list.append(li);
}

// //////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Busca el botón con id "aggregator" y añádele un evento de forma que, cada vez que se clicke, un elemento
// de tipo "span" será introducido en el elemento con id "span-container" de tipo "div" que ya existe en el HTML.
// Los span deben contener el texto "He sido creado con JS".
// 🚨 No uses element.innerText, en su lugar usa element.innerHTML, ya que el engine de test no lo soporta. 🚨
const aggregator = document.querySelector('#aggregator');
const spanContainer = document.querySelector('#span-container');

const onButtonClicked = () => {
    const span = document.createElement('span');
    span.innerHTML = 'He sido creado con JS'
    spanContainer.append(span)
    aggregator.innerHTML = 'He sido creado con JS'
}

const buttomElement = document.querySelector('button');
buttomElement.addEventListener('click', onButtonClicked);
