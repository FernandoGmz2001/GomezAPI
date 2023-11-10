import yaml from 'yaml';
import fs from 'fs';

const archivoALeer = fs.readFileSync('archivo.yaml', 'utf8');
const valorArea = yaml.parse(archivoALeer);
console.log(valorArea);