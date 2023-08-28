import { useState } from "react";
import "./styles.css";

function FetchParameters() {
  const [getFetch, setFetch] = useState("");
  const [input, setInput] = useState("");
  async function asyncFetch() {
    const response = await fetch( 
      `https://api.chucknorris.io/jokes/random?category=${input}`
    );
    const data = await response.json();
    setFetch(data);
    console.log(data);
    setInput("");
  }

  function handleChange(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }
  return (
    <main className="main__app">
      <div className="info__container">
        <h1>Fetch API</h1>
        <p className="subtitle">Fetch jokes filtered by categories</p>
        <div className="input__container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" onChange={handleChange} className="info__input" placeholder="animal,career,celebrity,dev,explicit,fashion,food"/>
        </div>
        <div>
          <p className="info">
            <b>{getFetch.value}</b>
          </p>
          <button className="btnAsyncFetch" onClick={asyncFetch}>
            Fetch
          </button>
        </div>
      </div>
      {/* <div className="info__categories">
        <h3>Available categories</h3>
        <div className="categories__available">
            <p>animal</p>
            <p>career</p>
            <p>celebrity</p>
            <p>dev</p>
            <p>explicit</p>
            <p>fashion</p>
            <p>food</p>
            <p>history</p>
            <p>food</p>
        </div>
      </div> */}
    </main>
  );
}

export default FetchParameters;
