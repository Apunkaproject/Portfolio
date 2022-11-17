import "./about.css";
import { BiPhoneCall } from "react-icons/bi";
import { FaFirefoxBrowser } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { SiMaterialdesignicons } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";

function AboutUs() {
    return (
        <>
            <h3>About Me</h3>
            <div className="divider"></div>
            <p className="about-des">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
            
            <h4>What I'm Doing</h4>
            <div className="mainbox">
                <div className="work-main">
                    <div className="work">
                        <FaFirefoxBrowser size={30}/>
                        <div>
                        <h4 className="work-title">Web Developer</h4>
                        <p className="work-des">i have best knowledge of react,htlm,css and javaScript so i can make a website</p>
                        </div>
                    </div>
                    <div className="work">
                        <AiFillAndroid size={30}/>
                        <div>
                        <h4 className="work-title">App Developer</h4>
                        <p className="work-des">I know dart and flutter so i can make cross platform app using flutter and dart</p>
                        </div>
                    </div>
                </div>
                <div className="work-main">

                    <div className="work">
                        <SiMaterialdesignicons size={30}/>
                        <div>
                        <h4 className="work-title">Graphic/UI/UX designer</h4>
                        <p className="work-des">I have best know in photoshop,coreldraw,Indesign,Figma etc</p>
                        </div>
                    </div>
                    <div className="work">
                        <AiFillYoutube size={30}/>
                        <div>
                        <h4 className="work-title">Youtuber</h4>
                        <p className="work-des">I am a Part-time youtube there i am teaching coding and share knowledge about coding </p>
                        </div>
                    </div>
                </div>
            </div>
        <div>
            {/* <h4>Testimonials</h4> */}
            {/* <div className="testimonial-main">
                <div className="test-main">
                    <div className="test-pic">
                        <img src="https://art-template.ru/vcard4/assets/images/avatar-1.png" alt="" width={40}/>
                    </div>
                    <div>
                    <div className="test-title">
                        Nitish Kumar
                    </div>
                    <div className="test-des">Ricardo was hired to create a corporate<br></br>identity. We were very pleased with the</div>
                    </div>
                </div>
                <div className="test-main">
                    <div className="test-pic">
                        <img src="https://art-template.ru/vcard4/assets/images/avatar-1.png" alt="" width={40}/>
                    </div>
                    <div>
                    <div className="test-title">
                        Nitish Kumar
                    </div>
                    <div className="test-des">Ricardo was hired to create a corporate<br></br>identity. We were very pleased with the</div>
                    </div>
                </div>
                <div className="test-main">
                    <div className="test-pic">
                        <img src="https://art-template.ru/vcard4/assets/images/avatar-1.png" alt="" width={40}/>
                    </div>
                    <div>
                    <div className="test-title">
                        Nitish Kumar
                    </div>
                    <div className="test-des">Ricardo was hired to create a corporate<br></br>identity. We were very pleased with the</div>
                    </div>
                </div>
                <div className="test-main">
                    <div className="test-pic">
                        <img src="https://art-template.ru/vcard4/assets/images/avatar-1.png" alt="" width={40}/>
                    </div>
                    <div>
                    <div className="test-title">
                        Nitish Kumar
                    </div>
                    <div className="test-des">Ricardo was hired to create a corporate<br></br>identity. We were very pleased with the</div>
                    </div>
                </div>
            </div> */}
        </div>
        <br></br>
            <h4>My Skills </h4>
            <div className="Skills">
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">HTML/CSS</p>
                </div>
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">JavaScript</p>
                </div>
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">Java</p>
                </div>
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">C Language</p>
                </div>
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">Python</p>
                </div>
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">Arduino</p>
                </div>
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">IOT Knowledge</p>
                </div>
            </div>
            <div className="Skills">
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">Dart/Flutter</p>
                </div>
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">React Js</p>
                </div>
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">.Net / C# / Rest API</p>
                </div>
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">Dart/Flutter</p>
                </div>
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">Figma/Graphic</p>
                </div>
                <div className="Skill-box">
                <div className="icon-boxss" ></div>
                <p className="skill_name">etc</p>
                </div>
               
            </div>
        </>
    )
}
export default AboutUs;