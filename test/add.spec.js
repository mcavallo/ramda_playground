const { add2, liftedAdd2 } = require('../src/add')


const numbers = [5, 4, 3, 2, 1]


test('#add2', () => {
  expect(add2(2))
    .toEqual(4)
})


test('#liftedAdd2', () => {
  expect(liftedAdd2(numbers))
    .toEqual([7, 6, 5, 4, 3])
})
