
export default function (server, handlers) {
    server.route({
        method: 'GET',
        path: '/leaderboard/',
        options: {
            handler: handlers.getLeaderboard,
            description: 'Get leaderboard',
            notes: 'get leaderboard',
            tags: ['api'], // ADD THIS TAG
            validate: {}
        }
    })

    server.route({
        method: 'GET',
        path: '/sound/',
        options: {
            handler: handlers.getSound,
            description: 'Get sound',
            notes: 'get sound',
            tags: ['api'], // ADD THIS TAG
            validate: {}
        }
    })

    server.route({
        method: 'GET',
        path: '/presence/',
        options: {
            handler: handlers.getPresence,
            description: 'Get presence',
            notes: 'get presence',
            tags: ['api'], // ADD THIS TAG
            validate: {}
        }
    })
}
