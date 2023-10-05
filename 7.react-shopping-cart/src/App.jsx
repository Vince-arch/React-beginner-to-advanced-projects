import { useState } from "react"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

function App () {
const [page, setPage] = useState('products')
  return(
  <>
  <NavBar setPage={setPage}/>
  {page === 'home' && <Home />}
  {page === 'products' && <Products/>}
  {page === 'about' && <About/>}
  </>
  
  )}

export default App