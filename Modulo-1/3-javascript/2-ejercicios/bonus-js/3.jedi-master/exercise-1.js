const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

let divElement = document.querySelector('div')


const getAlbumList = () => {

    for (let i = 0; i < albums.length; i++) {
        const album = albums[i]
    
    const ulElement = document.createElement('ul');
    divElement.append(ulElement);
    let liElement = document.createElement('li');
    ulElement.append(liElement);
    
    liElement.innerText = album}
    }
    
    getAlbumList()
    

