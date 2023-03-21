import Catalogo from "./assets/components/Catalogo";
import Login from "./assets/components/Login";
import Items from "./assets/components/Items";
// import {AxiosApi} from "./assets/Hooks/AxiosApi.js"
import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData =() => {
      Axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setData(res.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }

    fetchData();
  }, []);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Uncanny Store!</h1>
      <Catalogo data={data}/>
    </div>
  );
}

export default App;
