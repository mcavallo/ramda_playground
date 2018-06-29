// https://ramdajs.com/docs/#addIndex

const { addIndex, map, lensIndex, set } = require('ramda')


// indexedMap :: ?
export const indexedMap = addIndex(map)


// mapIndexes :: a, Number -> Number
export const mapIndexes = (val, idx) => idx


// mapOrigWithZeroAtIndex :: a, Number, [a] -> [a]
export const mapOrigWithZeroAtIndex = (_, idx, orig) =>
  set(lensIndex(idx), 0, orig)
