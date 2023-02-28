import React, {useState, useEffect} from 'react';

import './App.css';

const API_BASE = ""

function App() {
  const [base, setBase] = useState([]);
  useEffect(() => {
  function getAPI(){
    const url = `${API_BASE}`
    fetch(url)
    .then((results) => results.json())
    .then((data) => {
      console.log(data)
      setBase(data.products)
    })
    .catch((error) => console.log(error));
  }
  getAPI()
}, [])
  
  return (
    <div className="App">
      <h1 className="text-sky-500 dark:text-sky-400 text-lg font-medium"> Haroldcyclopedia</h1>
      <p className="text-3xl font-bold underline md:flex bg-red-100 rounded-xl p-8">here</p>
      <button className="text-sky-500 dark:text-sky-400 text-lg">Submit</button>
      <Search />
    </div>
  );
}

export default App;


/* 

article_id - random

article_name
article_subject (react / html / css)
article_type (pdf / youtube / book / kindle) */

/* tailwind */

/* header svg, main - together */

/* Nav Bar - vandhana */

/* Footer - Keeanu */