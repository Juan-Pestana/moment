var moment = require('moment')

let date = new Date(2021, 1, 20, 23, 30)
console.log(date)

moment.locale('es')
let hoy = moment(date).format('HH:mm')

console.log(hoy)
