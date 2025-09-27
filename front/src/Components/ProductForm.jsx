import {Input} from "./Input.jsx"
import {useState} from "react"

const ProductForm=()=>{
const [name, setName] = useState("")
const [price, setPrice] = useState("")
const [stock, setStock] = useState("")

async function handleSubmit(e){
    e.preventDefault()
    try{
        const config = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                price: price,
                stock: stock
            })
        }
        const url= "http://localhost:4000/"
        const req = await fetch (url, config)
        const res = await req.json()
        console.log(res)
        alert("producto cargado")
    } catch(e){
        console.log(e.message)
        alert("error al cargar el producto")
    }
}

return(
    <div className="mt-5 p-5 flex flex-col gap-5 justify-center items-center bg-slate-900 min-h-[100vh]">
        <h2 className="text-2xl font-bold ">Producto</h2>
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <Input type="text" name="Nombre_Producto" placeholder="Ingrese el producto" value={name} onChange={(e) => {setName(e.target.value)}} />
        <Input type="number" name="Precio" placeholder="Ingrese el precio" value={price} onChange={(e) => {setPrice(e.target.value)}} />
        <Input type="number" name="Cantidad" placeholder="Ingrese la cantidad" value={stock} onChange={(e) => {setStock(e.target.value)}} />
        <button className="p-2 border-[1px] rounded bg-black text-white font-black hover:bg-slate-700 mt-5">Cargar</button>
    </form>
    </div>

)}

export default ProductForm