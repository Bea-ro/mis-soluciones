let obj = {
    name: 'John',
    age: 30
  };
  

  let showPerson = function (datos) {
    console.log(`${datos} Name: ${this.name}, Age: ${this.age}`);
  }.call(obj, 'Datos: ');
  
