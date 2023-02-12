const getData = () => {
  fetch("https://api.disneyapi.dev/characters")
    .then((res) => res.json())
    .then((response) => {
      printData(response.data)
    });
};

const printData = (characters) => {
const body = document.querySelector("body");
characters.map((character) => {
const characterTeamplate = `
<div>
      <h1>${character.name}</h1>
      <img src="${character.imageUrl}" alt="${character.name}" />       
      </div>
      `;

  body.innerHTML += characterTeamplate
});
};

getData();
