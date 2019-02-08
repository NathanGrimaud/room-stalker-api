import Hapi from 'hapi'
import HapiSwagger from 'hapi-swagger'
import Package from '../package.json'

const config = {
  api: {
    host: '0.0.0.0',
    port: 3000
  }
}

const server = new Hapi.Server({
  host: config.api.host,
  port: config.api.port,
  routes: { cors: { origin: ['*'] } }
})

const swaggerOptions = {
  title: 'Test API Documentation',
  info: {
    version: Package.version
  }
}
export const Swagger = {
  plugin: HapiSwagger,
  options: swaggerOptions
}

export default server
