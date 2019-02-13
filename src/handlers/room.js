export default function (models, services) {
    return {
        getLeaderboard(){
            return models.getLeaderboard().then((results) => {
                return results
            }).then((results) => results.sort((a, b) => a.sum < b.sum).map((results, index) => {
                const { time, sum, room } = results
                return {
                    time,
                    level: sum,
                    room,
                    rank: index + 1
                }
            }))
        },
        getSound(){
            return models.getSound()
                .then(rooms =>
                    rooms.map(({ time, last, room }) => ({
                        time,
                        level: last,
                        room
                    }))
                )
        },
        getPresence(){
            return models.getDistance()
                .then(rooms => 
                    rooms.map(({time,last,room}) => ({
                        time,
                        presence : last < 60,
                        room
                    }))
                )
        },
    }
}
