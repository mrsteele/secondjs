const map = {}
map.millisecond = 1
map.second = map.millisecond * 1000
map.minute = map.second * 60
map.hour = map.minute * 60
map.day = map.hour * 24
map.week = map.day * 7

class Secondjs {
  constructor (seconds) {
    this.milliseconds = Math.round(seconds * map.second)
    return this
  }

  get seconds () {
    return Math.floor(this.milliseconds / map.second)
  }

  get minutes () {
    return Math.floor(this.milliseconds / map.minute)
  }

  get hours () {
    return Math.floor(this.milliseconds / map.hour)
  }

  get days () {
    return Math.floor(this.milliseconds / map.day)
  }

  get weeks () {
    return Math.floor(this.milliseconds / map.week)
  }

  pluralize (word, number) {
    return number === 1 ? word : `${word}s`
  }

  round (force = '') {
    // help em out
    if (force && force.slice(-1) !== 's') {
      force += 's'
    }
    if (force === 'weeks' || (!force && this.weeks > 0)) {
      return `${this.weeks} ${this.pluralize('week', this.weeks)}`
    } else if (force === 'days' || (!force && this.days > 0)) {
      return `${this.days} ${this.pluralize('day', this.days)}`
    } else if (force === 'hours' || (!force && this.hours > 0)) {
      return `${this.hours} ${this.pluralize('hour', this.hours)}`
    } else if (force === 'minutes' || (!force && this.minutes > 0)) {
      return `${this.minutes} ${this.pluralize('minute', this.minutes)}`
    } else if (force === 'milliseconds') {
      return `${this.milliseconds} ${this.pluralize('millisecond', this.milliseconds)}`
    } else {
      return `${this.seconds} ${this.pluralize('second', this.seconds)}`
    }
  }

  toString () {
    return `${this.seconds} ${this.pluralize('second', this.seconds)}`
  }
}

const main = (num = 0) => {
  return new Secondjs(num)
}

main.millisecondjs = (num = 0) => {
  return new Secondjs(num / map.second)
}

main.maps = map
module.exports = main
