// 1. Dada la función "printPersons" que recibe un array de objetos llamado "persons",
// y un string "property", completa la función para que recorra dicho array con un
// bucle e invoque un console.log con la propiedad "property" de cada objeto
const printPersons = (persons, property) => {
  for (i = 0; i < persons.length; i++) {
  console.log(persons [i]['property']);
}
  };
    

// 2. Crea la función addProperty para que reciba un objeto, una propiedad y valor nuevos,
// y un boolean. Si el boolean es true, que cree una copia de dicho objeto, añada la
// nueva propiedad + valor y lo retorne. Si el boolean es false, que retorne directamente
// el mismo objeto (misma referencia)
const obj = {key1:'value 1', key2: 'value2'}

const addProperty = (obj) => {
  let boolean = true
  if (boolean === true) {
  const objCopy = {newKey:'newValue'};
  const finalObj = Object.assign (objCopy, obj) 
  return finalObj;
}else if(boolean === false) {
return obj
}
};

console.log(addProperty(obj))


// 3. Crea la función getPeopleWeight para que reciba un array con [clave, valor,...]
// donde "clave" es el nombre de las personas y "valor" su peso en kg, y devuelva
// un objeto con solo las personas (clave) y su peso (valor) que tengan un peso
// par y por encima de 60kg.
// Example of array => peopleArr = ["Juan", 72, "Maria", 58, "Martin", 75, "Sofia", 62];
let peopleWeight = ['Juan', 23, 'Paco', 55,'Bea', 102];

const getPeopleWeight = (peopleWeight) => {
  const peopleOverSixtyKg = {};
    for (let i = 0; i < peopleWeight.length; i+=2) {
      
  if (peopleWeight[i+1] % 2 === 0 && peopleWeight[i+1] > 60) {
    const key = peopleWeight[i];
    const value = peopleWeight[i+1];

     peopleOverSixtyKg[key] = value;
  }}
return peopleOverSixtyKg;
};

console.log(getPeopleWeight(peopleWeight))


// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default {
  printPersons,
  addProperty,
  getPeopleWeight,
};
// ///////////////////////////////////////////////////////////////
