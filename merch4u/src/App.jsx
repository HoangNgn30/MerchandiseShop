import './App.css'
import Header from './components/Header'
import ProductListing from './Pages/ProductListing'
import Home from './Pages/Home/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ProductDetails from './Pages/ProductDetails'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} exact={true} element={<Home/>}></Route>
        <Route path={"/productListing"} exact={true} element={<ProductListing/>}></Route>
        <Route path={"/product/:id"} exact={true} element={<ProductDetails/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
