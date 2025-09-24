import { DataTypes, Model } from "sequelize"
import { sequelize } from "../config/db.mjs"

export class Product extends Model {}

Product.init({
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        index: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    },  
},
{
    sequelize,
    modelName: "Product",
    tableName: "products"
})

// import {DataTypes} from "sequelize"
// import {sequelize} from "../config/db.mjs"

// export const Productos = sequelize.define("productos", {
//     id: {
//         type: DataTypes.INTEGER,
//         unique: true,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//     },
//     name: {
//         type: DataTypes.STRING(50),
//         allowNull: false,
//     },
//     price: {
//         type: DataTypes.FLOAT,
//         allowNull: false,
//     },
//     stock: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     created_at: {
//         type: DataTypes.DATE,
//         allowNull: false,
//     },
//     updated_at:{
//         type: DataTypes.DATE,
//         allowNull: true,
//     }
// })