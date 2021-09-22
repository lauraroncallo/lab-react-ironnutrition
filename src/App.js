import logo from './logo.svg';
import './App.css';
import foodsJSON from "./foods.json";
import {useState} from "react";
import Foodbox from "./Foodbox";
import AddFoodForm from './AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  
  const addFoodForm =(newFood) => {
    setFoods([...foods,newFood]);
  };
  
const deleteFood = (name) => {
setFoods(foods.filter((food) =>food.name !== name));
};


  

  return ( <div className="App">
  {foods.map((food)=> {
  return (
  <div>
  <Foodbox food={food} deleteButton={deleteFood} />
  {/* <button onClick={() => deleteFood(food.name)}>Delete</button> */}

  </div>
  );
  })}
  <AddFoodForm addFoodFunction={addFoodForm} /> 
  </div>
  

  
  );
}

export default App;
