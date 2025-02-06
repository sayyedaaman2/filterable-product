export default function ProductCategoryRow({category}){
    return(
        <tr className="">
            <th colSpan="2" className="border border-slate-500 p-3">
                {category}
            </th>
        </tr>
    )
}