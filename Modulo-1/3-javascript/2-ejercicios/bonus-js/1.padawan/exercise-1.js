 const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

const usersOverAge = [];
const usersUnderAge = [];

  for (let i=0; i < users.length; i++) {
    const user = users[i]
     if (user.years >= 18) {
     usersOverAge.push(user.name);
     };
    
  }

  for (let i=0; i < users.length; i++) {
    const user = users[i];
      if (user.years < 18) {
        usersUnderAge.push(user.name);
        };
   
  }

console.log(`Usuarios mayores de edad: ` + usersOverAge)
console.log(`Usuarios menores de edad: ` + usersUnderAge)