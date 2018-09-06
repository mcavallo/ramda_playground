const { hasAtLeastNChars, goodWord, filterGoodWords } = require('../src/allPass')


test('#hasAtLeastNChars', () => {
  expect(hasAtLeastNChars(1, 'a'))
    .toEqual(true)

  expect(hasAtLeastNChars(1, 'ab'))
    .toEqual(true)

  expect(hasAtLeastNChars(5, 'abc'))
    .toEqual(false)
})


test('#goodWord', () => {
  expect(goodWord('redemption'))
    .toEqual(false)

  expect(goodWord('addon'))
    .toEqual(false)

  expect(goodWord('adoption'))
    .toEqual(true)
})


test('#filterGoodWords', () => {
  const words = [
    'action',
    'addition',
    'education',
    'admin',
    'adaption',
    'advantages',
    'abjuration'
  ]

  expect(filterGoodWords(words))
    .toEqual([
      'addition',
      'adaption',
      'abjuration'
    ])
})
