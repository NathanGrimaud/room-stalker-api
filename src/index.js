
import server, { Swagger } from './server'
import Inert from 'inert'
import Vision from 'vision'
import testHandlers from './handlers/test'
import testRoutes from './routes/test'
import testModels from './models/test'
import testServices from './services/test'

server
.register([Inert, Vision, Swagger])
.then(() => server.start())
.then(() => {
  const services = testServices()
  const models = testModels()
  const handlers = testHandlers(models, services)
  testRoutes(server, handlers)
  console.log('Server started: {', server.info.uri, '}')
})
