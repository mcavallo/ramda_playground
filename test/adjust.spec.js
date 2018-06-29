const { sensorVowels, sensorNameAtIndex } = require('../src/adjust')


const names = ['john', 'rebecca', 'michael', 'cynthia']


test('#sensorVowels', () => {
  expect(sensorVowels('*', 'hello'))
    .toEqual('h*ll*')
})


test('#sensorNameAtIndex', () => {
  expect(sensorNameAtIndex(1, '#', names))
    .toEqual(['john', 'r#b#cc#', 'michael', 'cynthia'])
})
