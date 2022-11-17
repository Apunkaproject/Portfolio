import MusicPlayer from "../musci_player/Music_player";
import "./HomePage.css";
import LeftBox from "./LeftBox";
import MenuBar from "./menu";
import RightBox from "./RightBox";
function Homepage()
{
    return (
        <>
           <div className="main-box">
            <div className="left-box">
                <LeftBox/>
            </div>
            <div className="right-box">
                {/* <MenuBar/> */}
                <RightBox/>
               
            </div>
           </div>

           <div className="music-player">
            
           </div>
        </>
    )
}

export default Homepage;