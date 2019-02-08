
export default function (server, handlers) {
    server.route({
        method: 'GET',
        path: '/rooms/',
        options: {
            handler: handlers.getRooms,
            description: 'Get rooms',
            notes: 'get rooms',
            tags: ['api'], // ADD THIS TAG
            validate: {}
        }
    })
}
