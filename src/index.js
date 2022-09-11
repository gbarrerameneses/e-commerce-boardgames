import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar/NavBar.jsx'
// import App from './App';
import Home from './Home/Home.jsx'
import BoardGames from './BoardGames/BoardGames'
// import ItemDetail from './ItemDetail/ItemDetail.jsx'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer.jsx'
import Contact from '../src/Contact/Contac.jsx'
import Footer from './Footer/Footer.jsx'
import reportWebVitals from './reportWebVitals'
// import ItemListContainerCategory from './ItemListContainerCategory/ItemListContainerCategory.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/boardgames' element={<BoardGames />}/>
        {/* <Route path='/boardgames/:id' element={<ItemDetail />}/>  */}
        {/* <Route path='/boardgames/detail' element={<ItemDetailContainer />}/>  */}
        {/* <Route path='/boardgames/item' element={<ItemListContainerCategory />}/>  */}
        <Route path='/boardgames/item/:slug' element={<ItemDetailContainer />}/> 
        <Route path='/contact' element={<Contact />}/> 

        {/* <Route path='/' element={<App />}/>     */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
