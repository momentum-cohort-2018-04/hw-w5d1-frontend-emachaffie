// import results from 'superagent'

const PRECISION = 3
const EXPONENT = (10 ** PRECISION)

export class Money {
  constructor (amount, currencyCode) {
    const decimalAsStr = amount.toString().split('.')[1]
    if (decimalAsStr && decimalAsStr.length > PRECISION) {
      throw new Error('Maximum money precision is ' + PRECISION)
    }

    this._amount = amount * EXPONENT
    this.currencyCode = currencyCode
  }

  getAmount () {
    return this._amount / EXPONENT
  }

  plus (other) {
    this.checkCurrencyCodes(other)
    return new Money((this._amount + other._amount) / EXPONENT, this.currencyCode)
  }

  minus (other) {
    this.checkCurrencyCodes(other)
    return new Money((this._amount - other._amount) / EXPONENT, this.currencyCode)
  }

  times (number) {
    return new Money((this._amount * number) / EXPONENT, this.currencyCode)
  }

  checkCurrencyCodes (other) {
    if (this.currencyCode !== other.currencyCode) {
      throw new Error('Currency codes do not match')
    }
  }
}

export class Bank {
  constructor (rates) {
    this.rates = rates
  }

  exchange (money, currencyCode) {
    if (money.currencyCode === currencyCode) {
      return new Money(money.getAmount(), currencyCode)
    }
  }

  exchangeToUSD (money, currencyCode) {
    var rateUsed = this.rates.findIndex(function (rate) {
      return rate.abbr === currencyCode
    })
    rateUsed * (this.amout.getAmount()) = 
    console.log(rateUsed)
  }
  // else {
  // let rateInUSDollars = rateUsed(currencyCode)
  // console.log(rateInUSDollars)
  // var rateUsed = rates.find(function (rate) {
  //   return currencyCode === rate.abbr
  // })
  // let rateInUSDollars = currencyCode.rateUsed()
  // console.log(rateInUSDollars)

  // way to grab rate.inUSD of the same object
  // }

  // if
  //   (rates.includes(money.currencyCode == true) {
  //     return
  //   }
  //   var targetObject = function findCurrencyCodeObject (currencyCodeIn) {
  //     return currencyCodeIn
  //   }
  //   // var targetObject = this.rates.indexOf('money.currencyCode')
  // console.log(targetObject)
  // var rateInDollars = targetObject.rateInUSD * money.getAmount()
  // return new Money(rateInDollars, 'USD')
  // Get array index by abbr., multiply rate in USD by getAmount, return that number as amount, then 'USD'
  // Can't use findIndex and this, as findIndex returns index number... Can use one or the other...
}
