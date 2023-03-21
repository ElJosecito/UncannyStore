import Catalogo from "./assets/components/Catalogo";
import Login from "./assets/components/Login";
import Items from "./assets/components/Items";
import { useAxios } from "./assets/Hooks/useAxios";

function App() {

  const {data} = useAxios("https://fakestoreapi.com/products")
  
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Uncanny Store!</h1>
      <Catalogo data={data}/>
    </div>
  );
}

export default App;
