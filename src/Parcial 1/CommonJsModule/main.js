const btnClick = document.querySelector('.btnClick')
const sayHello = require('../NpmPackage/SayHelloNpm/index.js')

btnClick.addEventListener('click',()=>{
    sayHello.sayHelloFerGmz()
})