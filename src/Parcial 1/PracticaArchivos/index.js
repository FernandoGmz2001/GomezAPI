import { writeFile } from 'fs';
import { join, dirname } from 'path';

console.log(dirname(import.meta.url));
writeFile(join(dirname(import.meta.url), 'archivo.txt'), 'Hola mundo', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
});