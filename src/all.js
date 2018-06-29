// https://ramdajs.com/docs/#all

const { all, gte, __ } = require('ramda')


// isEven :: Number -> Boolean
export const isEven = x => x % 2 === 0


// areAllEven :: [Number] -> Boolean
export const areAllEven = all(isEven)


// atLeast5 :: Number -> Boolean
export const atLeast10 = gte(__, 10)


// areAllEven :: [Number] -> Boolean
export const areAllAtLeast10 = all(atLeast10)
