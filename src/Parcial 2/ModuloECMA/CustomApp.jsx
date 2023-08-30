import { sayHelloFerGmz } from "say-hello-fer-gmz";
// import { sayHelloCommonJs } from "../NpmPackage/SayHelloNpm";

function CustomApp() {
  return (
    <div>
      <h3>Esta es una app</h3>
      <button onClick={sayHelloFerGmz}>
        Click</button>
    </div>
  );  
}

export default CustomApp;
