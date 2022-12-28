const sum = (a=5,b=10) => a + b

console.log(sum());
console.log(sum(5));
console.log(sum(10,5));


const game = {
    title: 'The last us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020}

const {title, gender, year} = game    

console.log(title);
console.log(gender);
console.log(year);


const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);


const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name, race} = animalFunction()
console.log(name);
console.log(race);


const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car
const [year1, year2, year3] = itv

console.log(name);
console.log(itv);
console.log(year1);
console.log(year2);
console.log(year3);


const pointsList = [32, 54, 21, 64, 75, 43]
const pointListCopy = [...pointsList]
console.log(pointListCopy)

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy}
console.log(toyCopy)

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const pointsListAnd2 = [...pointsList, ...pointsLis2]
console.log(pointsListAnd2)

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toyAndUpdate = {...toy, ...toyUpdate}
console.log(toyAndUpdate);

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors];
console.log(colorsCopy);
const colors1 = colorsCopy.splice(0,1)
console.log(colors1)
const colors2 = colors.splice(2,3);
console.log(colors2);
const colorsDef = [...colors1, ...colors2];
console.log(colorsDef)

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map((user) => {return user.name})
console.log(names)


const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const modifiedNames = users.map((user) => {
    if (user.name.slice(0,1) === 'a' || user.name.slice(0,1) === 'A') {
    return user.name = 'Anacleto'    
    } return user.name
})

console.log(modifiedNames)

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitedCities = cities.map((city) => {
if (city.isVisited) {
    return city.name + ' (Visitado)' 
} return city.name
})

console.log(visitedCities)


 
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const over18 = ages.filter((age) => age > 18) 
console.log(over18)
 
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages.filter((age) => age%2 === 0)
console.log(evenAges)

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersLeague = streamers.filter((streamer) => 
streamer.gameMorePlayed === 'League of Legends')
console.log(streamersLeague)

 
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersWithU = streamers.filter((streamer) => 
    streamer.name.includes('u'))
console.log(streamersWithU)


const streamersLegendUppercase = streamers.filter((streamer) => {
const legendFilter = streamer.gameMorePlayed.includes('Legends');
    if (legendFilter && streamer.age > 35) {
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return legendFilter
})

console.log(streamersLegendUppercase) 

 

