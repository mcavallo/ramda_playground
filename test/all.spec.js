const { isEven, areAllEven, atLeast10, areAllAtLeast10 } = require('../src/all')


const mixedNumbers = [5, 4, 3, 2, 1]
const evenNumbers = [20, 16, 8, 6, 2]
const moreMixedNumbers = [30, 26, 20, 15, 12]


test('#isEven', () => {
  expect(isEven(2))
    .toEqual(true)

  expect(isEven(7))
    .toEqual(false)
})


test('#areAllEven', () => {
  expect(areAllEven(evenNumbers))
    .toEqual(true)

  expect(areAllEven(mixedNumbers))
    .toEqual(false)
})


test('#atLeast10', () => {
  expect(atLeast10(11))
    .toEqual(true)

  expect(atLeast10(9))
    .toEqual(false)
})


test('#areAllAtLeast10', () => {
  expect(areAllAtLeast10(moreMixedNumbers))
    .toEqual(true)

  expect(areAllAtLeast10(mixedNumbers))
    .toEqual(false)
})
