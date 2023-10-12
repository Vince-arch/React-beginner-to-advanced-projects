import { useState } from "react"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/products";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Cart from "./components/Cart";
import ShoppingCart from "./components/ShoppingCart";


function App () {
const [page, setPage] = useState('products')
  return(
  <>
  <ShoppingCartProvider>
  <NavBar setPage={setPage}/>
  {page === 'home' && <Home />}
  {page === 'products' && <Products/>}
  {page === 'about' && <About/>}
  </ShoppingCartProvider>
 
  </>
  )}

export default App