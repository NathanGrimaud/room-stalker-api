import server, { Swagger } from './server'
import Inert from 'inert'
import Vision from 'vision'
import measurementHandlers from './handlers/measurement'
import measurementRoutes from './routes/measurement'
import measurementModels from './models/measurement'
import measurementServices from './services/measurement'

server
  .register([Inert, Vision, Swagger])
  .then(() => server.start())
  .then(() => {
    const services = measurementServices()
    const models = measurementModels()
    const handlers = measurementHandlers(models, services)
    measurementRoutes(server, handlers)
    console.log('Server started: {', server.info.uri, '}')
  })
