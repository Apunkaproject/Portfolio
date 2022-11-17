import "./HomePage.css"
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";
import { BsFillCalendarRangeFill } from "react-icons/bs";
function MenuBar() {
    return (<>
     <div className="menu-box">
        <a href="" className="menu">About</a>
        <a href="" className="menu">Resume</a>
        <a href="" className="menu">Portfolio</a>
        <a href="" className="menu">Blog</a>
        <a href="" className="menu">Contact</a>
     </div>
    </>)
}

export default MenuBar;