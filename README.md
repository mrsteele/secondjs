# secondjs

A simple second conversion utility. It takes an `Number` (seconds) and allows you to convert that to minutes, hours, days, weeks and milliseconds.

### Install

installation is simple using npm.

```
npm i secondjs --save
```

### Usage

##### Basic example

If you would like to get started quickly, use the following as an example:

```js
const secondjs = require('secondjs')

// get the individual minutes since some other time
const seconds = 12345
console.log(`Minutes: ${secondjs(seconds).minutes}`)

// Outputs: Minutes: 205
```

##### Advanced example

A simple API is provided by example:

```js
const secondjs = require('secondjs')

const seconds = 10000000
const test = secondjs(seconds)

console.log(`seconds: ${seconds}`)
console.log(`minutes: ${test.minutes}`)
console.log(`hours: ${test.hours}`)
console.log(`days: ${test.days}`)
console.log(`weeks: ${test.weeks}`)
console.log(`round: ${test.round()}`)
console.log(`string: ${test}`)
console.log(`It has been ${secondjs(process.uptime()).round()} since this process started!`)

/* Outputs:
seconds: 10000000
minutes: 166666
hours: 2777
days: 115
weeks: 16
round: 16 weeks
*/
```

##### Round

The *round* feature will use the largest time-value available by default.

```js
const secondjs = require('secondjs')
console.log(secondjs(10000).round())
// Outputs: 2 hours
```

You can also pass in an override and make sure the value conforms to a specific measurement:

```js
const secondjs = require('secondjs')
console.log(secondjs(10000).round('minutes'))
// Outputs: 166 minutes
```
The following are arguments are approved:
* milliseconds
* seconds
* minutes
* hours
* days
* weeks

##### Milliseconds

We also support converting milliseconds:

```js
const { millisecondjs } = require('secondjs')
console.log(`${millisecondjs(Date.now())} since 1 January 1970 00:00:00 UTC`)
// Output (will vary): 1510677893 seconds since 1 January 1970 00:00:00 UTC
```

### To do

Since this is still in "early-access" I wanted to make clear some goals:

* [ ] Add support for months
  * Currently do not support this as it is non static (28-31 days)
* [ ] Add support for years
  * Same as month support
* [ ] Optimize speed and memory
  * Mainly supporting the caching of values.

### License

MIT
