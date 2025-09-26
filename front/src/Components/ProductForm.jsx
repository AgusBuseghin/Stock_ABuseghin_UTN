const ProductForm=()=>{
async function handleSubmit(e){
    e.preventDefault()
    console.log("Cargando producto")
}

return(

    <form onSubmit={handleSubmit}>
        <button className="p-2 rounded bg-slate-950 text-white font-bold hover:bg-red-950">Enviar</button>
    </form>

)}

export default ProductForm