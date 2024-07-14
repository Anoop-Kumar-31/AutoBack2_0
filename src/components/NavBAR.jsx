import React, { useState, useEffect } from "react"; // Import React and useEffect together
import image from "../images/SelectedL.png";
import "./Sabka.css";

export default function NavBAR() {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const button = document.querySelector("button");
            button.style.opacity = window.innerWidth <= 940 ? "1" : "0";
        };
        window.addEventListener("resize", handleResize);
        handleResize(); 

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav style={{ height: isExpanded ? "fit-content" : "90px" }}>
            <img src={image} className="logo" style={{ height: "90px" }} alt="logo" />
            <button onClick={() => setIsExpanded(!isExpanded)}  > {isExpanded ? 
                    <div style={{ backgroundColor:'#363636', width:'30px 10px'}}>
                        <div className="bar1" style={{ height:'3px', backgroundColor:'white', transform:'rotate(45deg) translate(5px,5px)'}}>&nbsp;</div>
                        <div className="bar2" style={{ height:'3px', backgroundColor:'white', opacity:'0'}}>&nbsp;</div>
                        <div className="bar3" style={{ height:'3px', backgroundColor:'white',transform:'rotate(-46deg) translate(6.5px,-6.4px)'}}>&nbsp;</div>
                    </div>
                :
                    <div style={{ backgroundColor:'#363636', width:'30px 10px'}}>
                        <div className="bar1" style={{ height:'3px', backgroundColor:'white' }}>&nbsp;</div>
                        <div className="bar2" style={{ height:'3px', backgroundColor:'white'}}>&nbsp;</div>
                        <div className="bar3" style={{ height:'3px', backgroundColor:'white'}}>&nbsp;</div>
                    </div>
                } </button>
            <div>
                <ul className="ThreedButt">
                    <li>Home</li>
                    <li>About</li>
                    <li>Feature</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
}
