const secondjs = require('.')

const seconds = 1000
const test = secondjs(seconds)

console.log('raw')
console.log(test)
console.log()
console.log(`seconds: ${test.seconds}`)
console.log(`minutes: ${test.minutes}`)
console.log(`hours: ${test.hours}`)
console.log(`days: ${test.days}`)
console.log(`weeks: ${test.weeks}`)
console.log(`round: ${test.round('minutes')}`)
console.log(`string: ${test}`)

console.log(`Something magical happened ${secondjs(process.uptime()).round()} ago!`)

console.log(`${secondjs.millisecondjs(Date.now())} since 1 January 1970 00:00:00 UTC`)
console.log(`This should be 2 seconds ${secondjs.millisecondjs(2000)}`)

console.log(secondjs.maps)
