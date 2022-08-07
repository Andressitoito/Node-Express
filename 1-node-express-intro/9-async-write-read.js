const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
 try {
  const first = await readFile('./content/first.txt')
  const second = await readFile('./content/subfolder/second.txt')
  await(writeFile('./content/result-ind-grenade.txt', `THIS ES AWESOMEEEEE : ${first} ${second}`))
  console.log(first, second)
 } catch (err) {
  console.log(err)
 }
}

start()

