import AboutMe from "./pagess/AboutMe/AboutMe";
import HomePage from "./pagess/homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>    
      <Routes>
          <Route path="/" element={<HomePage/>}></Route> 
          <Route path="/sobremim" element={<AboutMe/>}/>
          <Route path="*" element={<div>Página não encontrada</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}