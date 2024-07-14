import React,{useState} from "react";
import image from "../images/paperworks.png"
import image2 from '../images/MAINLOGONOBG.png'
import './Sabka.css'
export default function AboutAutoBack(){
    const [toggle,setToggle] = useState(false);
    return(
        [
        <div style={{zIndex:toggle?'2':'-1'}} className="signupWindow">
            {toggle && <div className="signup-form">
                <div>
                    <img style={{backgroundColor:'transparent',height:'40vh'}}src={image2}/>
                </div>
                <hr style={{borderColor:'lightGrey',height:'100%',}}/>
                <div>
                    <h1>SignUp</h1>
                    <input type="text" placeholder="Name"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button className="signupin" onClick={()=>{setToggle(!toggle)}}>SignUp</button>
                </div>
            </div>}
        </div>,
        <div className="container" style={{marginTop:'1vh'}}>
            <div className="left">
                <h1>AutoBack</h1>
                <h2>The Future of Automation</h2>
                <p >Ah, behold our marvelous services! We've conjured up a revolutionary system that automates reviews based on people's expressions. It's like having a mind-reading genie in a digital bottle. So go ahead, sit back, and let the machines do the thinking. <b>What could possibly go wrong?</b>
                </p>
                <button className="signup" onClick={()=>{setToggle(!toggle)}}>SignUp</button>
            </div>
            <div className="right">
                <div className="potrait">
                    <img src={image} alt="AutoBack"></img>
                </div>
            </div>
        </div>
        ]
    );
}