import './App.css'
import Food from './components/Food';

function App() {
    const foods = [
    { name: 'pizza', calories: 1400, origin: 'Italia' },
    { name: 'hamburger', calories: 1000, origin: 'EEUU' },
    { name: 'fish and chips', calories: 600, origin: 'EEUU' },
    { name: 'salad', calories: 400, origin: 'Mediterráneo' },
  ];
  return (
    <div className="App">
      <ul>
    {foods.map((food) => (
    <Food name={food.name} calories={food.calories} origin={food.origin}/>
    )
    )}   
        </ul>       
    </div>
  )
}

export default App
