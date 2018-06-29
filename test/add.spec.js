const { add2, liftedAdd2 } = require('../src/add')


const numbers = [5, 4, 3, 2, 1]


test('curried add', () => {
  expect(add2(2))
    .toEqual(4)
})


test('mapped add', () => {
  expect(liftedAdd2(numbers))
    .toEqual([7, 6, 5, 4, 3])
})
