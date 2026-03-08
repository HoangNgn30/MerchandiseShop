import './App.css'
import Header from './components/Header'
import Home from './Pages/Home/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} exact={true} element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
