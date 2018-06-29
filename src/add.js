// https://ramdajs.com/docs/#add

const { add, lift } = require('ramda')


// add2 :: Number -> Number
export const add2 = add(2)


// liftedAdd2 :: Number -> Number
export const liftedAdd2 = lift(add2)
