//.find() también podría ayudar para encontrar 'Aventura' .gender.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Odissey', genders: ['Plataforma'], score: 8.5},
    {name: 'Diablo III', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Shadow of the Colossus', genders: ['Aventura', 'El mejor videojuego'], score: 10},
]

const aventuraGames = videogames.filter((videogames) => {
    const genders = videogames.genders
    return genders.includes('Aventura')
})

console.log(aventuraGames)


const scoreAverage = videogames.reduce((acc, videogame) => 
acc + videogame.score, 0)/videogames.length

console.log(scoreAverage.toFixed(2))


const findAventuraGames = videogames.find((game) =>
game.genders.includes('Aventura'))

console.log(findAventuraGames)




