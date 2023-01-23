// const users = [
//   {
//     name: "Alberto",
//     favoritesSounds: {
//       waves: { format: "mp3", volume: 50 },
//       rain: { format: "ogg", volume: 60 },
//       firecamp: { format: "mp3", volume: 80 },
//     },
//   },
//   {
//     name: "Antonio",
//     favoritesSounds: {
//       waves: { format: "mp3", volume: 30 },
//       shower: { format: "ogg", volume: 55 },
//       train: { format: "mp3", volume: 60 },
//     },
//   },
//   {
//     name: "Pedro",
//     favoritesSounds: {
//       shower: { format: "mp3", volume: 50 },
//       train: { format: "ogg", volume: 60 },
//       firecamp: { format: "mp3", volume: 80 },
//     },
//   },
//   {
//     name: "Cristina",
//     favoritesSounds: {
//       waves: { format: "mp3", volume: 67 },
//       wind: { format: "ogg", volume: 35 },
//       firecamp: { format: "mp3", volume: 60 },
//     },
//   },
// ];



// let newArray = []

// const getAverageVolume = () => {
//         let totalVolume = 0
//         let averageVolume = 0
    
//       for (let user of users) {
//         console.log(user)
//         const sounds = user.favoritesSounds
//         console.log(sounds)
//         const soundProps = Object.values(sounds)
//         console.log(soundProps)
//         for (let soundProp of soundProps) {
//           console.log(soundProp)
//           const volumes = soundProp.volume
//          console.log(volumes)
//          newArray.push(volumes)
//         totalVolume += volumes
                                
//         }      
//         }
//         console.log(newArray)
//         return totalVolume/newArray.length
 
//       }
      

// console.log(getAverageVolume())

// //Ejemplo for in para sacar nombres:
// for (let user of users) {
//     for (let sound in user.favoritesSounds) {
// console.log(sound)}}


const CV = {
  hero: {
    name: "Beatriz",
    surname: "Rodríguez Maya",
    city: "Madrid",
    email: "b_a_ro@hotmail.com",
    birthDate: "11/09/1982",
    phone: "(+34) 123456789",
    image: "../assets/Foto Bea.PNG",
    gitHub: "https://github.com/Bea-ro",
    aboutMe: [
      {
        info: "Programming beginer with wide experience in Marketing",
      },
    ],
  },
  education: [
    {
      name: "Full Stack Developer Rock{theCode}",
      date: "2023",
      where: "ThePower Business School",
    },
    {
      name: "Master MBA + Digital Marketing",
      date: "2021",
      where: "ThePower Business School",
    },
    {
      name: "Licenciatura en Publicidad y Relaciones Públicas",
      date: "2005",
      where: "Universidad Complutense de Madrid",
    },
  ],
  experience: [
    {
      name: "Communication Manager",
      date: "May 2018 – October 2022",
      where: "Fundación Síndrome de Down de Madrid",
      description:
        "Manage the Comunication Strategy align with Foundation Stategic Plan. Ensure compliance of the Foundation purpose and reputation safeguard. Social media community manager and website administration.",
    },
    {
      name: "Marketing Product Manager",
      date: "Jan 2012 – May 2018",
      where: "Estée Lauder Companies",
      description:
        "Distribution and pricing strategy ensuring rentability. Forecasting and stock control. Results, consummer insights, competitors and sector trends analysis to identify growth opportinities. Visual Merchandising and promotional campaings implementation.",
    },
    {
      name: "Sales and arketing Assistant",
      date: "Jun 2005 – Dec 2011",
      where: "Estée Lauder Companies",
      description:
        "Sales Report to local and EMEA Managers. Product distribution to Iberia retailers. Continuous product line-up update. Retail Managers and Manager Retail Operations support. Store openings coordination and stores manteinance supervision",
    },
  ],
  languages: {
    language: "English",
    title: "Grado Superior Escuela Oficial de Idiomas, equivalente a Proficiency",
    date: "2003",
  },
  habilities: [
    "Analitycs",
    "Teamwork",
    "Adaptability",
  ],
  };





