import { writeFile } from 'fs'
import {dirname } from 'path'

console.log(import.meta.url);
console.log(dirname(import.meta.url))

writeFile('hola-mundo.txt','Hola mundo', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Archivo creado exitosamente.');
});