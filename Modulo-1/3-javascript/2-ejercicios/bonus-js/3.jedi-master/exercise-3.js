const places = [
    "Gondor", 
    "Mordor", 
    "Rivendel", 
    "La Comarca", 
    "Nümenor"
];

const divElement = document.querySelector('[data-function="printHere"]');

const getPlacesList = () => {

    for (let i = 0; i < places.length; i++) {
        const place = places[i]
    
    const ulElement = document.createElement('ul');
    divElement.append(ulElement);
    let liElement = document.createElement('li');
    ulElement.append(liElement);
    
    liElement.innerText = place}

}

getPlacesList()    
