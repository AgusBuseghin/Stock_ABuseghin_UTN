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
    }
},
{
    sequelize,
    modelName: "Product",
    tableName: "products"
})