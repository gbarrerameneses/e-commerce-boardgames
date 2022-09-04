import './App.css';
import NavBar from './NavBar/NavBar.jsx'
import Footer from './Footer/Footer.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx'
import {ItemContainer} from './ItemContainer/ItemContainer.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
        <ItemListContainer />
        <ItemContainer/>
      <Footer/>
    </div>
  );
}

export default App;
