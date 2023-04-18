const fs = require ( 'fs');
const { json } = require('stream/consumers');
const data = fs.readFileSync('./data.json', 'utf-8');
const dataPaseada = JSON.parse(data)
function list (data){
    return dataPaseada.map((tarea)=>tarea.titulo)
}
console.log(dataPaseada)
module.exports=list 