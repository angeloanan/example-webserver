const fastify = require('fastify')({ logger: true })

fastify.get('/', (req, res) => {
  res.status(200)
  res.send('I am alive!')
})

fastify.get('/:key/:value', (req, res) => {
  const returnBody = {}
  returnBody[req.params.key] = req.params.value

  res.status(200)
  res.send(returnBody)
})

// Run the server!
fastify.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server listening on ${fastify.server.address().port}`)
})