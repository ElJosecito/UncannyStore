import { Routes, Route } from "react-router-dom";
import SubApp from "./SubApp";
import Login from "./assets/components/Login";

function App() {
  return(
    <Routes>
      <Route path="/" element={<SubApp/>}/>
      <Route path="login" element={<Login/>}/>
    </Routes>
  )
  
}

export default App;
