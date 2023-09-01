import axios from 'axios'
function ServerTest() {

    async function getInformation(){
        const response = await fetch('http://localhost:8080')
        const data = await response
        console.log(await data.text())
    }
  return (
    <button onClick={getInformation}>Get server information</button>
  )
}

export default ServerTest