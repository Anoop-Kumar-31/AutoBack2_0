import React from "react";
import image from "../images/Printed LOGO2Break.png";
import data from "../data/PropertiesData"
export default function Properties(){
    return(
        [<div style={{overflow:'hidden'}}>
            <img src={image} style={{width:'98.9vw',height:'95vh',transform:'translate(0,25vh)',background:'none'}} className="separator"/>
            <div style={{marginLeft:'50vw',width:'40vw'}}>
                <h1 style={{textWrap:'nowrap', fontSize:'3vw'}}>Things we provide?</h1>
                <h2 style={{textWrap:'nowrap', fontSize:'1.5vw'}}>Here is the Description!</h2>
                <p>At autoback, we specialize in providing cutting-edge face identification and recognition services. Our advanced model meticulously records and analyzes facial expressions 24/7, creating comprehensive data logs for each identified individual. Whether for security, analysis, or personalization, our solution offers unparalleled accuracy and reliability.
                </p>
            </div>
        </div>,
        <div id="props">
            <h1 style={{fontSize:'5vw'}}>Services an <b style={{fontWeight:'bolder',textDecoration:'underline'}}>User</b> can Access</h1>
            <br/>
            <br/>
            <br/>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                {data.map((item,id)=>{
                    return(
                        id%2==0?(
                            <div style={{display:'flex',width:'80%',justifyContent:'center',alignItems:'center'}}>
                                <div className="PropsPhoto lefty">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="PhotoText" style={{textAlign:'start'}}>
                                    <h1 style={{fontSize:'3vw',lineHeight:'5vh'}}>{item.head}</h1>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ):(
                            <div style={{display:'flex',width:'80%',justifyContent:'center',alignItems:'center',padding:'0 5vw'}}>
                                <div className="PhotoText" style={{textAlign:'end'}}>
                                    <h1 style={{fontSize:'3vw',lineHeight:'5vh'}}>{item.head}</h1>
                                    <p>{item.text}</p>
                                </div>
                                <div className="PropsPhoto righty" >
                                    <img src={item.image} alt=""/>
                                </div>
                            </div>
                        )
                    )
                    })
                }
            </div>
            
        </div>
        ]
    );
}