import Catalogo from "./assets/components/Catalogo";
import Login from "./assets/components/Login";
import Items from "./assets/components/Items";
// import {AxiosApi} from "./assets/Hooks/AxiosApi.js"
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      const algo = await axios
        .get("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => {
          console.log(res.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

        return algo

      // fetch().then((res) => res.json()).then((data) = data)
    }

    fetchData();
  }, []);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Uncanny Store!</h1>
      {/* {data.map((res) => {
        return <Items key={res.id} titulo={res.title} />;
      })} */}
    </div>
  );
}

export default App;
