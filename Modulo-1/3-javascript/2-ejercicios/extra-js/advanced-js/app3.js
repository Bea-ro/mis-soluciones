const streamers = [
    	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
    ];

const inputElement = document.querySelector('[data-function="toFilterStreamers"]')
const buttonElement = document.querySelector('[data-function="toShowFilterStreamers"]')

const handleFilter = (event) => {
const filteredStreamers = streamers.filter((streamer) => 
streamer.name.includes(inputElement.value))
console.log(filteredStreamers)}

buttonElement.addEventListener('click', handleFilter)

console.log(handleFilter())

