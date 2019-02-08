export default function (models, services) {
    return {
       getRooms(){
           return models.get().then((results)=>{
               return results
           })
       }
    }
}
