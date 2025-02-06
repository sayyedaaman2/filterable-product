import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({products}){
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return(
        <div className="bg-slate-300 p-5 rounded-xl w-xl">
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}/>
            <ProductTable products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
            />
        </div>
    )
}