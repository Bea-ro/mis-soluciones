// incluir el input debajo del planeta y encima de los personajes listados.
const body = document.querySelector('body')
let charactersList = []
let idPlanet = 0


fetch('http://localhost:3000/planets')
.then((response) => response.json())
.then((planets) => {
   
const planetTemplate = `
    ${planets.map((planet) => {
      return `
      <div class="planet-card">
      <img src="${planet.image}" alt="${planet.name}">
      <p class="planet-name">${planet.name}</p>
      <p>Id: ${planet.id}</p>
      </div>
      `
      }).join(' ')
    }
    `
let idPlanet = planets.map((planet) => planet.id)
body.innerHTML += planetTemplate;

const planetCards = document.querySelectorAll('.planet-card');
planetCards.forEach((planetCard) => {
  planetCard.addEventListener('click', () => {
    charactersList = []
    getCharacters(idPlanet)
})
})


const getCharacters = async () => {
    await fetch(`http://localhost:3000/characters/?id=${idPlanet}`)
    .then((response) => response.json())
    .then((characters) => {
      charactersList = [...charactersList, ...characters];
      console.log('1', charactersList)})
      mapData(charactersList)
  }
  
  const mapData = (characters) => {
  const mappedData = characters.map((character) => ({
      name: character.name,
      avatar: character.avatar, 
      id: character.id,
      idPlanet: character.idPlanet
    }))
    console.log('2', mappedData)
    printData(mappedData)
  }
  
  const printData = (characters) => {
      planetCard.innerHTML = ""
    
      for (const character of characters) {
      const figure = document.createElement('figure')
      figure.innerHTML = `
        <img src=${character.avatar} alt=${character.name} />
        <h1>${character.name}</h1>
          <p>${character.id}</p>
      `
      planetCard.appendChild(figure)
    }
  }})




    
