import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function NavBar () {
    return(
        <>
        <div name="nav" className="bg-slate-400 flex m-1/2">
            <ul name="routes" className=" ">
                <li className=" m-5">Home</li> 
                <li className=" m-5">Products</li>
                <li className=" m-5">About</li>      
            </ul>
            <div name="cart" className=" flex justify-between p-5">
            <ShoppingCartOutlinedIcon />
            </div>
        </div>
        </>
    
    )}

export default NavBar