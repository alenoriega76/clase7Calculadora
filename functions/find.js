const fs = require('fs')
const list = require('./list')
const data = fs.readFileSync('./data.json', 'utf-8')
const dataParseada= JSON.parse(data)

function find (param){
    const titulos= list();
    return titulos.includes(param);
}
console.log(find(" Pintar",))

module.exports={find}