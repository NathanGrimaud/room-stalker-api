import server, { Swagger } from './server'
import Inert from 'inert'
import Vision from 'vision'
import measurementHandlers from './handlers/measurement'
import measurementRoutes from './routes/measurement'
import measurementModels from './models/measurement'
import measurementServices from './services/measurement'

import roomsHandlers from './handlers/room'
import roomsRoutes from './routes/rooms'
import roomsModels from './models/rooms'
import roomsServices from './services/rooms'

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
    const services = { measurement: measurementServices(), rooms: roomsServices()}
    const models = {measurement: measurementModels(influx),rooms: roomsModels(influx) }
    measurementRoutes(server, measurementHandlers(models.measurement, services.measurement))
    roomsRoutes(server,roomsHandlers(models.rooms, services.rooms))
    console.log('Server started: {', server.info.uri, '}')
  }).catch(error => console.error(error))
