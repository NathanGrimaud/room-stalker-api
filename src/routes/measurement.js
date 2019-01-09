
export default function (server, handlers) {

  server.route({
    method: 'POST',
    path: '/measurements/',
    options: {
      handler: handlers.postMeasurement,
      description: 'Post Measurement',
      notes: 'Say hello',
      tags: ['api'], // ADD THIS TAG
      validate: {}
    }
  })
  server.route({
    method: 'GET',
    path: '/hello/',
    options: {
      handler: handlers.hello,
      description: 'Post Measurement',
      notes: 'Say hello',
      tags: ['api'], // ADD THIS TAG
      validate: {}
    }
  })
  server.route({
    method: 'GET',
    path: '/measurements/',
    options: {
      handler: handlers.getMeasurements,
      description: 'Get Measurements',
      notes: 'Say hello',
      tags: ['api'], // ADD THIS TAG
      validate: {}
    }
  })
}
