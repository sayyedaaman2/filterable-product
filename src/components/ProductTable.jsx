import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({products,filterText,inStockOnly}){
    const rows = [];
    let lastCategory = null;
   products.forEach((product)=>{
    if(
        product.name.toLowerCase().indexOf(
            filterText.toLowerCase()
        ) === -1
    ){
        return;
    }
    if(inStockOnly && !product.stocked){
        return;
    }
    if(product.category !== lastCategory){
        rows.push(
            <ProductCategoryRow
            category={product.category}
            key={product.category}/>
        )
    }
    rows.push(
        <ProductRow product={product}key={product.name}/>
    )
    lastCategory = product.category;
   })
    return(
        <table className=" table-auto border-collapse w-full  ">
            <thead className="text-left  ">
                <tr className=" ">
        <th className="border border-slate-500 p-3">Name</th>
        <th className="border border-slate-500 p-3">Price</th>
                </tr>
            </thead>
            <tbody className="">
                {rows}
            </tbody>
        </table>
    )
}