import {useState, useEffect} from "react"
import {Container} from "./Container.jsx"


const ProductList=()=>{
    const [list, setList] = useState([])
    useEffect(()=> {
        async function loadProducts(){
            try{
                const req = await fetch("http://localhost:4000")
                const res = await req.json()
                console.log(res)
            } catch {
                console.log("Error")
            }
        }
        loadProducts()
    })

return(

<div className="bg-black h-[715px] text-white">ProductList</div>

)}

export default ProductList