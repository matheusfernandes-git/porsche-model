import AboutMe from "./pagess/AboutMe/AboutMe";
import HomePage from "./pagess/homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import DeafultPage from "./Components/DefaultPage/DefaultPage";
import Post from "./pagess/Post/Post";
import Error404 from "./pagess/Error404/Error404";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>   

      <Routes>
          <Route path='/' element={<DeafultPage/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/sobremim" element={<AboutMe/>}/>
            <Route path="posts/:id" element={<Post/>}/>
          </Route>

          <Route path="*" element={<Error404/>}></Route>
      </Routes>

      <Footer/> 
    </BrowserRouter>
  )
}