import server, { Swagger } from './server'
import Inert from 'inert'
import Vision from 'vision'
import measurementHandlers from './handlers/measurement'
import measurementRoutes from './routes/measurement'
import measurementModels from './models/measurement'
import measurementServices from './services/measurement'
import { InfluxDB, FieldType } from 'influx'
const influx = new InfluxDB({
  host: 'localhost',
  database: 'roomStalker',
  schema: [{
    measurement: 'measurement',
    fields: {
      value: FieldType.INTEGER
    },
    tags: [
      'room',
      'captorName'
    ]
  }

  ]
})
server
  .register([Inert, Vision, Swagger])
  .then(() => server.start())
  .then(() => {
    const services = measurementServices()
    const models = measurementModels(influx)
    const handlers = measurementHandlers(models, services)
    measurementRoutes(server, handlers)
    console.log('Server started: {', server.info.uri, '}')
  }).catch(error => console.error(error))
