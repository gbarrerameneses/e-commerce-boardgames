import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartClase from './components/CartClase';
import { OrderStatus } from './components/OrderStatus';
// import Footer from './components/Footer';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={ <ItemListContainer />} />
          <Route exact path='/category/:categoryID' element={<ItemListContainer/>} />
          <Route exact path='/detail/:detailID' element={<ItemDetailContainer/>} />
          <Route exact path='/cart' element={<Cart/>} /> 
          <Route exact path='/order-status' element={<OrderStatus/>} /> 
          <Route exact path='/cart-clase' element={<CartClase/>} /> 
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;