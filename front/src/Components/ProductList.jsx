import {useState, useEffect} from "react"


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

<div>ProductList</div>

)}

export default ProductList