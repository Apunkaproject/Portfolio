import AboutUs from "../aboutus/about";
import MusicPlayer from "../musci_player/Music_player";

function RightBox()
{
    return (<>
       <div className="right-main">
        <AboutUs/>

       <MusicPlayer/>
       </div>

    </>)
}

export default RightBox;