import "./styles.css";
import $ from "jquery";
import axios from "axios";
import { useState } from "react";

const FetchApi = () => {
  const [getFetch, setFetch] = useState("");
  // const [getAsyncFetch, setAsyncFetch] = useState("");
  // const [getJqueryFetch, setJqueryFetch] = useState("");
  // const [getAxiosFetch, setAxiosFetch] = useState("");
  // const [getXmlFetch, setXmlFetch] = useState("");
  // const [getAjaxFetch, setAjaxFetch] = useState("");

  function normalFetch() {
    fetch("https://random-data-api.com/api/v2/users")
      .then((response) => response.json())
      .then((data) => setFetch(data));
  }

  async function asyncFetch() {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const data = await response.json();
    setFetch(data);
    console.log(data);
  }

  async function axiosFetch() {
    const response = await axios.get(
      "https://random-data-api.com/api/v2/users"
    );
    const data = await response.data;
    setFetch(data);
    console.log(data);
  }

  function ajaxFetch() {
    $.ajax({
      url: "https://random-data-api.com/api/v2/users",
      dataType: "json",
      success: function (data) {
        console.log(data);
        setFetch(data);
      },
    });
  }

  function jqueryFetch() {
    $.get("https://random-data-api.com/api/v2/users", function (data) {
      setFetch(data);
      console.log(data);
    });
  }

  function xmlFetch() {
    let xhr = new XMLHttpRequest();
    let url = "https://random-data-api.com/api/v2/users";
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        console.log(response);
        setFetch(response);
      } else {
        console.log("Error en la petición. Código de estado: " + xhr.status);
      }
    };
    xhr.send();
  }

  return (
    <div>
      <div className="info__container">
        <h1>Fetch API</h1>
        <div>
          <p> <b>{getFetch.first_name}</b></p>
          <img src={getFetch.avatar} alt="" />
        </div>
      </div>
      <div className="btn__container">
        <button className="btnFetch" onClick={normalFetch}>
          Fetch
        </button>
        <button className="btnAsyncFetch" onClick={asyncFetch}>
          Async fetch
        </button>
        <button className="btnJquery" onClick={jqueryFetch}>
          Jquery
        </button>
        <button className="btnAxios" onClick={axiosFetch}>
          Axios
        </button>
        <button className="btnAjax" onClick={ajaxFetch}>
          Ajax
        </button>
        <button className="btnAxios" onClick={xmlFetch}>
          XMLHttpRequest
        </button>
      </div>
    </div>
  );
};

export default FetchApi;
