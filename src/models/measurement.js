export default function (influxDb) {
    return {
        create: function (measurement) {
            return influxDb.writePoints([
                {
                    measurement: 'measurement',
                    fields: {
                        value: measurement.value
                    },
                    tags: {
                        room: measurement.room,
                        captorName: measurement.captorName
                    },
                    timestamp: new Date(measurement.date)
                }
            ])
        },
        getMeasurements() {
            return influxDb
                .query(
                    'SELECT "value", "room", "captorName" FROM "measurement"'
                )
        }
    }
}
