import Catalogo from "./assets/components/Catalogo";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import HeaderLogged from "./assets/components/HeaderLogged";
import { useAxios } from "./assets/Hooks/useAxios";
function SubApp() {
  
  const {data} = useAxios("https://fakestoreapi.com/products");

    return (
            <>
             <Header/>
             <Hero/>
             <Catalogo data={data}/>
             </>
           );
}

export default SubApp