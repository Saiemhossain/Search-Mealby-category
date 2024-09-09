/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ShowMeal({data}) {
  return (
    <div>
      {data && data.length > 0 ? (
        <div className="show-meal">
          {data.map(item => (
            <div key={item.idMeal}>
              <img src={item.strMealThumb} />
              <h2> {item.strMeal} </h2>
              <Link to={`/${item.idMeal}`}>
                {' '}
                <button> View More </button>{' '}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h2>no data found</h2>
      )}
    </div>
  );
}
