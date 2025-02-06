export default function ProductRow({product}){
    const name = product.stocked ? product.name : <span style={{color : 'red'}}>{product.name}</span>

    return (
        <tr className=" ">
        <td className="border border-slate-500 p-3">{name}</td>
        <td className="border border-slate-500 p-3">{product.price}</td>
        </tr>
    )
}