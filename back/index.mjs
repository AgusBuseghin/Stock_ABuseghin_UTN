import express from 'express'
import { sequelize } from './config/db.mjs'
import dotenv from "dotenv"
import {Product} from "./models/productos.mjs"
import cors from "cors"

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
app.get('/', async (req, res) => {
    res.json({mensaje: "hola mundo"})
})

app.post('/', async (req, res) => {
    const body = req.body
    const product = new Product({
        name: body.name,
        price: Number(body.price),
        stock: Number(body.stock)
    })
    console.log(product)
    await product.save()
    res.json("Producto cargado")
})

app.put('/', async (req, res) => {
    res.json(req.query)
})

app.delete('/', async (req, res) => {
    res.json(req.query)
})

app.listen(4000, async () => {
    console.log("Servidor corriendo en el puerto 4000")
    sequelize.sync()
})