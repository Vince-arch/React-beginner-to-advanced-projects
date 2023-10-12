import items from "../data/items.json";
import Card from "../components/Card"

function Products (){
    return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  bg-slate-200">
        {items.map(item => (
            <div key={item.id} name='products-container' className="">
                <Card {...item}/>
            </div>

        ))}
    </div>
    </>
    )
}

export default Products