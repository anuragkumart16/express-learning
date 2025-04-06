import { app } from "./apps.js";
import connectDataBase from "./db/index.js";


connectDataBase()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log('Server Started Sucessfully :src/index.js')
            console.log(`http://localhost:${process.env.PORT || 8000}`)
        })
    }).catch(err => {
        console.log(`${err} `+`Some error occured :src/index.js`)
    })