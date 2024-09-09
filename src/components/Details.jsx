/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useParams } from "react-router";



export default function Details() {
  const { idMeal } = useParams();
  const [details, setDetails] = useState();

  console.log(idMeal)

  const getDetails = async() => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await res.json();
      console.log(data.meals[0]);
      setDetails(data.meals[0]);
     
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getDetails();
 },[])
 
  return (
    <div>
      {details  ? (
        <div>
          <img src= {details.strMealThumb} />
          <h3>{details.strMeal}</h3>
        </div>
      ) : (
        <h2>no data found</h2>
      )}
    </div>
  );
}
