export default function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}){
    return(
        <form className=" flex justify-between items-center gap-5 mb-4">
            <input className="flex-1 bg-slate-50 px-3 py-4 rounded-md " type="text" placeholder="Search..."
                value={filterText}
                onChange={(e)=> onFilterTextChange(e.target.value)}
            />
            <label className="flex  justify-center items-center gap-3">
                <input className="h-4 w-4" type="checkbox"
                checked={inStockOnly}
                onChange={(e)=> onInStockOnlyChange(e.target.checked)}
                />
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}