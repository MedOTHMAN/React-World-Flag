import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag")
        .then((res) => setData(res.data));

  }, [])

  return (
    <div className="countries">
        <ul className="countries-list">
            {data.map((el)=>(
                <Card country={el} key={el.name} />  
            )
            )
            }
        </ul>

    </div>
  );
};

export default Countries;
