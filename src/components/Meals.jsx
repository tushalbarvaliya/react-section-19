import React, { useEffect, useState } from "react";

const Meals = () => {
  const [loaddedMeals, setLoaddedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        return;
      }
      const meals = await response.json();
      setLoaddedMeals(meals);
    }
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {
        // map function to load data
        loaddedMeals.map((meals) => {
          return <li key={meals.id}>{meals.name}</li>;
        })
      }
    </ul>
  );
};

export default Meals;
