import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx" //poner la ruta completa

function App() {
  return ( //se puede devolver 1 componente solo por elemento, que contenga todo el resto. Se puede usar fragment <></>.
    <>
      <div className="App">  
      <Navbar nombreDeLaTienda="Esenza" subtitulo="Perfumería"
      />
      </div>
    </>
  );
}

export default App;



//npm start para ver la aplicacion en vivo
//npm i para hacer el node modules, si lo bajo de github.
