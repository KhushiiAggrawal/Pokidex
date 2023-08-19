
import React, { useEffect, useState } from "react";

function App() {
  const url="https://pokeapi.co/api/v2/pokemon/"
  const url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) =>{
         setData(d.results);
          console.log("d",d)
      })
  }
  useEffect(() => {
    fetchInfo();

  }, []);
  console.log("data",data)
  return (
    <div className="wrapper">
        {
          data.map((dataObj, index) => {
            let url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`;
          return (
            <div 
            className='card' key={index}
            >
            <img src={url} />
              <p style={{ fontSize: 20, color: 'white ' }}>{dataObj.name}</p>
            </div>
          );
        })}
      </div>
  );
}

export default App;
