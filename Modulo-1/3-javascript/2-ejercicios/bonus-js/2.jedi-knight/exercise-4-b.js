const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  let text
  let characterToRemove

  function findArrayIndex(mainCharacters, text) {
      return mainCharacters.indexOf(text)
      }
  
  function removeItem(mainCharacters, text) {
    characterToRemove = findArrayIndex(mainCharacters, text)
    mainCharacters.splice(characterToRemove, 1)
    return mainCharacters
  };

  
  console.log(removeItem(mainCharacters, 'Rey'))
