/* globals test, expect */

import {Money, Bank} from './script.js'

// Given a Money object and the same currency code as that money, it should return the same amount of money.

test('returns same amount of money for same currency code', () => {
  const sameMoney = new Money(1, 'USD')
  const sameCurrencyCode = ('USD')
  const bank = new Bank([])
  const samevalue = bank.exchange(sameMoney, sameCurrencyCode)
  expect(samevalue).toEqual(new Money(1, 'USD'))
})

test('Given a Money object and the currency code of USD, it should return the correct amount of money in USD.', () => {
  const bank = new Bank([{'abbr': 'NLN', 'name': 'Narnia Lion', 'rateInUSD': 2.62}])
  const NLNin = new Money(80, 'NLN')
  const outputToUSD = bank.exchangeToUSD(NLNin, 'USD')
  expect(outputToUSD).toEqual(new Money(209.60, 'USD'))
})
