
export default function(server, handlers) {

  server.route({
    method: 'GET',
    path: '/hello/',
    options: {
      handler: handlers.hello,
      description: 'Hello',
      notes: 'Say hello',
      tags: ['api'], // ADD THIS TAG
      validate: { }
    }
  })
}
