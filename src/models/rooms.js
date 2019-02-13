export default function (influxDb) {
    return {
        getLeaderboard() {
            return influxDb
                .query(
                    `SELECT sum("value") FROM (
                        select "value" FROM "measurement" 
                        WHERE time > now()-1m AND "captorName"='sound' 
                        GROUP BY "room" ORDER BY time DESC LIMIT 5 
                    )  GROUP BY "room" ORDER BY time DESC LIMIT 5`
                )

        },
        getSound(){
            return influxDb
                .query(
                    `SELECT mean("value") FROM (
                        select "value" FROM "measurement" 
                        WHERE time > now()-5s AND "captorName"='sound' 
                        GROUP BY "room" ORDER BY time DESC LIMIT 5 
                    )  GROUP BY "room" ORDER BY time DESC LIMIT 5`
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
