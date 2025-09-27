export const Input=({type, name, placeholder, value, onChange})=>{

return(

<div className="flex flex-col gap-1 bg-blue-950">
    <label htmlFor={name}>{name}</label>
    <input className="bg-black text-white p-1 rounded border-[1px] border-slate-600 shadow focus:bg-pink-950 " type={type} name={name} id={name} placeholder={placeholder} title={name} value={value} onChange={onChange} />
</div>

)}
