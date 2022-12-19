const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];



let newArray = []

const getAverageVolume = () => {
        let totalVolume = 0
        let averageVolume = 0
    
      for (let user of users) {
        console.log(user)
        const sounds = user.favoritesSounds
        console.log(sounds)
        const soundProps = Object.values(sounds)
        console.log(soundProps)
        for (let soundProp of soundProps) {
          console.log(soundProp)
          const volumes = soundProp.volume
         console.log(volumes)
         newArray.push(volumes)
        totalVolume += volumes
                                
        }      
        }
        console.log(newArray)
        return totalVolume/newArray.length
 
      }
      

console.log(getAverageVolume())

//Ejemplo for in para sacar nombres:
for (let user of users) {
    for (let sound in user.favoritesSounds) {
console.log(sound)}}







