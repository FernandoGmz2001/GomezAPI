import "./styles.css";
import { ToastContainer,toast } from "react-toastify";


function MultipleRequests() {

  function showMessage() {
    toast.success('Request correct!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
  }

  function handleFetch() {
    fetch("https://random-data-api.com/api/v2/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
    showMessage();
  }

  async function handleAsyncFetch() {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const data = await response.json();
    console.log(data);
    return data;
  }

  function handleXML() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://random-data-api.com/api/v2/users", true);
    request.setRequestHeader("Content-Type", "text/xml");
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        var response = JSON.parse(request.responseText);
        console.log(response);
      }
    };
    request.send();
  }
  return (
    <>
      <h1 className="request__title">Peticiones diferentes</h1>
      <div className="request__container">
        <button className="btn --btnBlue" onClick={handleFetch}>
          Fetch
        </button>
        <button className="btn --btnGreen" onClick={handleAsyncFetch}>
          Fetch async
        </button>
        <button className="btn --btnOrange" onClick={handleXML}>
          HTTP request
        </button>
        <button className="btn --btnPurple" onClick={showMessage}>Axios</button>
        <button className="btn --btnGray">Jquery</button>
        <ToastContainer />
      </div>
    </>
  );
}

export default MultipleRequests;
