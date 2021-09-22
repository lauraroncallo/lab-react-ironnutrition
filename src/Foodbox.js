import React from "react";
import "antd/dist/antd.css";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import App from "./App";

function FoodBox ({food, deleteButton}) {

    return(
        
        <Card
          title={food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={food.image} height={60} />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
         <Button onClick={() => deleteButton(food.name)}> Delete </Button>
        </Card>);
        
   
      
}


export default FoodBox;