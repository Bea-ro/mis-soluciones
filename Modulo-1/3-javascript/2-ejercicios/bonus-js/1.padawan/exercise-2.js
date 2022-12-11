const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const healthyFood = []

for (i=0; i < foodSchedule.length; i++) {
    const food = foodSchedule[i]
    const fruit = fruits[i]
    if (food.isVegan === true) {
        healthyFood.push(food.name)

    }
    else if (food.isVegan === false) {
        healthyFood.push(fruit)
    }
    }


console.log(healthyFood)


