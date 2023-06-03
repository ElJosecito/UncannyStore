import Catalogo from "./assets/components/Catalogo";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import HeaderLogged from "./assets/components/HeaderLogged";
import { useState, useEffect } from "react";
import { useAxios } from "./assets/Hooks/useAxios";

function App() {

  let [boolean,Boolean] = useState([])

  useEffect(() => {
    Boolean(true)
  }, [])
  
  const {data} = useAxios("https://fakestoreapi.com/products");
  if(boolean){
    return (
      <>
      <HeaderLogged/>
      <Hero/>
      <Catalogo data={data}/>
      </>
    );
  }else{
    return (
      <>
      <Header/>
      <Hero/>
      <Catalogo data={data}/>
      </>
    );
  }
  
}

export default App;
