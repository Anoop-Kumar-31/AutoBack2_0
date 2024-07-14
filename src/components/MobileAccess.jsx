import React from 'react';
import image from '../images/Mobile ACCESS2.png';
import image2 from '../images/App LOGO.png'
import './Sabka.css';
export default function MobileAccess() {
    return (
        <div style={{transform:'translate(0,15vh)'}}>
            <div id="mob" style={{display:'flex',flexDirection:'row', padding:'2vh 8vw'}}>
                <div>
                    <img id="mobile" src={image} style={{height:'53vh',width:'40vw',borderRadius:'3vw'}}/>
                </div>
                <div style={{marginLeft:'4vw',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <h1 style={{lineHeight:'1vh',fontSize:'3vw'}}>Become One of Our Users!</h1>
                    <p>Access your account from <b>Anywhere</b> with our Mobile Application. Enjoy enhanced privileges upon opting for our <b>Premium</b> subscription.<br/><br/><b>Download</b> the app now and get started!</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'center',marginBottom:'0',paddingBottom:'0',height:'7vh'}}>
                <img src={image2} style={{height:'200%',transform:'translate(0,-3.5vh)'}}/>&nbsp;
                <p style={{transform:'translate(0,-15px)'}}>&nbsp;&nbsp;Download it on: &nbsp;&nbsp;&nbsp;</p>
                <img src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" alt="" /> &nbsp;
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png" alt="" />
            </div>
        </div>
    );
}