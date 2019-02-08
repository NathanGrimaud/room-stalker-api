export default function (influxDb) {
    return {
        get(){
            return influxDb
                .query(
                    'SELECT sum("value") FROM "measurement" WHERE time > now()-1h GROUP BY "room"'
                )
                .then((results)=> results.sort((a,b)=>a.sum < b.sum).map((results, index)=>{
                        const {time, sum, room} = results
                        return {
                            time, 
                            level: sum,
                            room,
                            rank: index+1
                        }
                    })
                )
            }
    }
}
