import './FetchExpress.css'

function FetchExpress() {
  async function getResponse() {
    const response = await fetch("http://localhost:8080/")
    const data = await response.json()

    console.log(data)
    
  }
  return (
    <div>
        <form action="http://localhost:8080/alumnos/" method='GET' className="fetch__form">
            <input type="text" name="id" /> 
            {/* <input type="text" name="ApellidoPaterno" id="firstName" />
            <input type="text" name="ApellidoMaterno" id="lastName" />
            <input type="text" name="Edad" id="age" /> */}
            <button type="submit">Enviar</button>
        </form>
      <button onClick={getResponse}>Get Express response</button>
    </div>
  );
}

export default FetchExpress;
