import { sayHelloFerGmz } from "say-hello-fer-gmz";

async function asyncHello() {
  const sayHelloCommonJs  = await import ("say-hello-fer-gmz");
  sayHelloCommonJs.sayHelloFerGmz();
} 

function CustomApp() {
  return (
    <div>
      <h3>Esta es una app</h3>
      <button onClick={sayHelloFerGmz}>Click</button>
      <button
        onClick={asyncHello}>
        Click asincrono
      </button>
    </div>
  );
}

export default CustomApp;
