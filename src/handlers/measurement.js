import { InfluxDB } from 'influx';
import { join } from 'path';

export default function (models, services) {
  return {
    postMeasurement(request, h) {
      const { measurement } = request.payload;
      return models.create(measurement)
        .then(() => 'coucou')
        .catch(error => {
          console.error(error)
          return 'ERROR'
        })
    },
    hello() {
      return 'Nique ta race'
    },
    getMeasurements(request, h) {
      return models.getMeasurements()
        .catch(error => {
          console.error(error)
          return 'ERROR GET MEASUREMENTS'
        })
    }
  }
}
