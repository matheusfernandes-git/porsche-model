import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import img from '../../assets/bannerHome.png'

export default function DeafultPage(){
    return(
        <div>
            <Banner src={img}/>
            <Outlet />
        </div>
    )
}