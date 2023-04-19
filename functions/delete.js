const fs = require('fs');
const data = fs.readFileSync('./data.json','utf-8');
const dataParseada = JSON.parse(data);


function borrar(){

}

module.exports={borrar}