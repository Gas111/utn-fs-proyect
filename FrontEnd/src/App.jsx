import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Aboutus from './pages/Aboutus'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Index from './pages/Index'
import Products from './pages/Products'
import Service from './pages/Service'

function App() {
  return (
    <div className="App">
  
        <Header />
        <Routes>
          <Route path="/" exact element={<Index />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
          <Route path="/aboutus" exact element={<Aboutus />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
          <Route path="/products" exact element={<Products />}></Route>
          <Route path="/service" exact element={<Service />}></Route>
        </Routes>

        <Footer />
  
    </div>
  )
}

export default App
