import "./HomePage.css"
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";
import { BsFillCalendarRangeFill } from "react-icons/bs";
function LeftBox()
{
    return (
        <>
        <div className="main-dic">
            <div className="pic-box">
            <img className="pic" src="https://art-template.ru/vcard4/assets/images/my-avatar.png" alt="" />
            </div>
            <h3 className="about-title">Nitish Roy</h3>
           <div className="position-main">
            <div className="position">Full Stack Developer</div>
           </div>
           </div>
           <div className="devider"></div>
           <div className="icons-box">
            <div className="icon-box">
                <div className="icon">
                    <MdOutlineMail  size={15}/>
                </div>
                <div>
                    <div className="icon-title">EMAIL</div>
                    <div className="icon-dec">Nitishr833@gmail.com</div>
                </div>
            </div>
            <div className="icon-box">
                <div className="icon">
                    <BiPhoneCall  size={15}/>
                </div>
                <div>
                    <div className="icon-title">PHONE</div>
                    <div className="icon-dec">+91 7033161175</div>
                </div>
            </div>
            <div className="icon-box">
                <div className="icon">
                    <BsFillCalendarRangeFill  size={15}/>
                </div>
                <div>
                    <div className="icon-title">BIRTHDAY</div>
                    <div className="icon-dec">August 12, 2002</div>
                </div>
            </div>
            <div className="icon-box">
                <div className="icon">
                    <MdLocationOn  size={15}/>
                </div>
                <div>
                    <div className="icon-title">LOCATION</div>
                    <div className="icon-dec">Gaya,Bihar,823003</div>
                </div>
            </div>
            <div className="devider"></div>
            <div className="social">
                <a href="" className="icon-boxs"> <AiOutlineInstagram  size={15}/></a>
                <a href="" className="icon-boxs"> <AiOutlineLinkedin  size={15}/></a>
                <a href="" className="icon-boxs"> <AiOutlineGithub  size={15}/></a>
                <a href="" className="icon-boxs"> <VscFilePdf  size={15}/></a>
            </div>
           </div>
        </>
    )
}

export default LeftBox;