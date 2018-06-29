const { indexedMap, mapIndexes, mapOrigWithZeroAtIndex } = require('../src/addIndex')


const numbers = [5, 4, 3, 2, 1]


test('#mapIndexes', () => {
  expect(mapIndexes(1, 2))
    .toEqual(2)
})


test('#mapOrigWithZeroAtIndex', () => {
  expect(mapOrigWithZeroAtIndex(1, 0, numbers))
    .toEqual([0, 4, 3, 2, 1])
})


test('accessing indexes', () => {
  expect(indexedMap(mapIndexes, numbers))
    .toEqual([0, 1, 2, 3, 4])
})


test('accessing original data', () => {
  expect(indexedMap(mapOrigWithZeroAtIndex, numbers))
    .toEqual([
      [0, 4, 3, 2, 1],
      [5, 0, 3, 2, 1],
      [5, 4, 0, 2, 1],
      [5, 4, 3, 0, 1],
      [5, 4, 3, 2, 0]
    ])
})
