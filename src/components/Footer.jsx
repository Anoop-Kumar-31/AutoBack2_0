import React from "react";
import image from "../images/MAIN LOGO WANDB2.png"
import './Sabka.css'
export default function Footer(){
    return(
        <div className="footer">
            <div style={{width:'40vw',height:'55vh',display:'flex'}}>
                <img src={image} style={{width:'100%',height:'100%',borderRadius:'5px'}}/>
            </div>
            <div className="footRight">
                <h1>Support:</h1>
                <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/96/iconmonstr-gmail-2.png" alt=""/>
                <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/96/iconmonstr-reddit-2.png" alt=""/>
                <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/96/iconmonstr-instagram-12.png" alt=""/>
                <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2013/96/iconmonstr-youtube-7.png" alt=""/>
                <h1 style={{fontSize:'3vh'}}>We provide the Solutions of your Questions!</h1>
                <h1 style={{fontSize:'3vh',marginTop:'19vh'}}>Autoback Pvt. Ltd</h1>
            </div>
        </div>
    );
}