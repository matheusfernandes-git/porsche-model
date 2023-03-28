import { FaTimes } from "react-icons/fa"

export default function SideBar({ active }){
    
  const closeSidebar = () => {
    active(false)
  }

  return(
    <FaTimes onClick={closeSidebar}/>
  )
}

