import React, { useState, useEffect } from "react";
import Search from "./components/common/Search"
import "./App.css";

const API_BASE = "https://dummyjson.com/";

function App() {
  const [base, setBase] = useState([]);
  useEffect(() => {
    function getAPI() {
      const url = `${API_BASE}/products/`;
      fetch(url)
        .then((result) => result.json())
        .then((data) => {
          console.log(data.products)
          setBase(data.products);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
    getAPI();
  }, []);

  return (
    <div className="App">
      <h1 className="text-sky-500 dark:text-sky-400 text-lg font-medium">
        {" "}
        Haroldcyclopedia
      </h1>
      <p className="text-3xl font-bold underline md:flex bg-red-100 rounded-xl p-8">
        here
      </p>
      <button className="text-sky-500 dark:text-sky-400 text-lg">Submit</button>
      <Search />
    </div>
  );
}

export default App;