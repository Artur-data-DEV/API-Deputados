
import Menu from './components/Menu.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./Rotas";

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu />
        <Rotas />       
      </BrowserRouter>
    </>
  );
}

export default App;
