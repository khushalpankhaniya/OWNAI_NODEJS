import { DataSource } from "typeorm"
import { User } from "./entities/User.js"
import dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host:  "localhost",
    port:  3306,
    username:  "root",
    password:  "",
    database:  "taskuser",
    synchronize: true,
    logging: false,
    entities: [User],   
})
