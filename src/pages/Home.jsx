/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import ShowMeal from "../components/ShowMeal";



export default function Home() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const handle = (e) => {
    setSearch(e.target.value)
  }
  const showFood = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${search}`
      );
      const data = await res.json();
      console.log(data.meals)
      setData(data.meals)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    showFood();
  }, []);

  if (loading) {
  return <h2> loading.... </h2>
  }
  return (
    <div className="wrapper">
      <div className="searchBar">
        <input className="input-type" type="text" placeholder="search foods..." onChange={handle} /> 
        <button onClick={showFood} >Search</button>
      </div>
      <div>
        <ShowMeal data={data} />
      </div>
    </div>
  )
}

