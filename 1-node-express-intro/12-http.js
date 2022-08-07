const http = require('http')

const server = http.createServer((req, res) => {
 console.log(req.url)
 if (req.url === '/') {
  res.write('Welcome to our home page')
 }
 if (req.url === '/about') {
  res.write('Here is our short history')
 }
 res.write(
  `
  <h1>Opps</h1>
  <p>We cant find the page</p>
  `
 )
})

server.listen(5000)