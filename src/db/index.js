import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const DbURI = process.env.DB_URI


async function connectDataBase() {
    try {
        const connectionInstance = await mongoose.connect(`${DbURI}/${DB_Name}`)
        console.log('DataBase Connected :db/index.js ' + `${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`DataBase Connection Failed :db/index.js ${error}`)
        process.exit(1)
    }
}

export default connectDataBase