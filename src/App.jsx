import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx" //poner la ruta completa
import ItemListContainer from "./Components/ItemList/ItemListContainer.jsx"

function App() {
  return ( 
    <>
      <div className="App">  
      <Navbar />
      <ItemListContainer title="Tienda oficial de Esenza"/>
      </div>
    </>
  );
}

export default App;



//npm start para ver la aplicacion en vivo
//npm i para hacer el node modules, si lo bajo de github.
