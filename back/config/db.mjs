import {Sequelize} from "sequelize"
export const sequelize = new Sequelize("Stock_UTN", "root", "VectorLord", {
    host: "localhost",
    dialect: "mysql",
    logging: false
})