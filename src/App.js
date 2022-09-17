import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import {Cart} from './components/Cart';
import { CartProvider } from './context/CartContext';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


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
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;