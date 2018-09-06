// https://ramdajs.com/docs/#allPass

const { curry, gte, compose, toLower, allPass, startsWith, endsWith, filter } = require('ramda')


// hasAtLeastNChars :: Number -> String -> Boolean
export const hasAtLeastNChars = curry((len, word) =>
  gte(word.length, len)
)


// goodWord :: String -> Boolean
export const goodWord = compose(
  allPass([
    startsWith('a'),
    hasAtLeastNChars(7),
    endsWith('n')
  ]),
  toLower
)


// filterGoodWords :: [String] -> [String]
export const filterGoodWords = filter(goodWord)
