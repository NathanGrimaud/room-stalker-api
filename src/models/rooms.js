export default function (influxDb) {
    return {
        getLeaderboard() {
            return influxDb
                .query(
                    `SELECT sum("value") FROM "measurement" 
                WHERE time > now()-1m AND "captorName"='sound' 
                GROUP BY "room"`
                )

        },
        getSound(){
            return influxDb
                .query(
                    `SELECT mean("value") FROM "measurement" 
                WHERE time > now()-5s AND "captorName"='sound' 
                GROUP BY "room"`
                )
              
        },
        getDistance(){
            return influxDb
                .query(
                    `SELECT last("value") FROM "measurement" 
                WHERE time > now()-2m AND "captorName"='distance' 
                GROUP BY "room"`
                )
        }
    }
}
