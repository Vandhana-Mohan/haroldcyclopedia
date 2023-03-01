import React, { useState, useEffect } from "react";
/* Components */
import Search from "./components/common/Search";
import Admin from "./components/common/Admin";

import "./App.css";

const API_BASE = "https://dummyjson.com/";

function App() {
  const [value, setValue] = useState(false);
  const [base, setBase] = useState([]);
  useEffect(() => {
    function getAPI() {
      const url = `${API_BASE}/products/`;
      fetch(url)
        .then((result) => result.json())
        .then((data) => {
          console.log(data.products);
          setBase(data.products);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
    getAPI();
  }, []);

  return (
    <div className="bg-green-100">
      <h1 className="text-sky-500 dark:text-sky-400 text-lg font-medium">
        {" "}
        Haroldcyclopedia
      </h1>
      <div className="flex flex-row justify-between">
        <Search />
        <Admin
          isOn={value}
          onColor="#EF476F"
          handleToggle={() => setValue(!value)}
        />
      </div>
    </div>
  );
}

export default App;
