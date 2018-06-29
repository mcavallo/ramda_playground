// https://ramdajs.com/docs/#adjust

const { adjust, replace, curry } = require('ramda')


// sensorVowels :: String -> String -> String
export const sensorVowels = curry((token, subject) =>
  replace(/[aeiou]+/g, token, subject)
)


// sensorNameAtIndex :: Number -> String -> Array String -> Array String
export const sensorNameAtIndex = curry((idx, token, subject) =>
  adjust(sensorVowels(token), idx, subject)
)
