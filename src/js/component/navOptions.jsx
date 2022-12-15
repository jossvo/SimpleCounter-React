import React,{ useState } from "react";
import reactDom from "react-dom";

//style
var stylingObject = {
    nav:{
        backgroundColor:"black", 
        paddingTop:"1%",
        paddingBottom:"1%",
        paddingLeft:"2%",
        display:"flex",
        justifyContent:"center",
        alignItems: 'center',
        height:"10%"
    },
    navMain: {
        color: "white",
        fontSize:"1em"
    }
};

//timer variables
var time=0;
var globalTimer="";
var compareTimer=0;
const timer =()=> globalTimer=setInterval(tick, 1000);

//timer logic
const tick=()=>{
    if(time===compareTimer&&compareTimer>0){
        alert("Set time has ended");
        time=-1;
        compareTimer=0;
    }else{
        time+=1;
        var hours = Math.floor(time / 3600);
        var minutes = Math.floor(time / 60);  
        var seconds = time % 60;
    }
    const element=<div  style={{alignItems:"center",fontSize:"8vw"}}>
        <div id="timerContainer" className="container-fluid"style={{display:"flex",alignItems: "center",
    justifyContent: "center"}}>
            <div className="time">{hours<=9?"0":""}{hours}</div>
            :
            <div className="time">{minutes<=9?"0":""}{minutes}</div>
            :
            <div className="time">{seconds<=9?"0":""}{seconds}</div>
        </div>
    </div>
    reactDom.render(element, document.querySelector("#timer"));
}
window.onload=()=>timer();

//export of navbar & timer
const NavOption = ()=>{
    //timer useState() variable
    const [timerState,setTimerState] = useState("running")
    const changeState=()=> {if(timerState==="running"){
        setTimerState("pause");
        clearInterval(globalTimer);
    }else{
        setTimerState("running")
        timer()
    }};

    //set timer useState() control variable
    const [timerSet,setTimerSet] = useState("false");
    var timeritems =(  
        ["hrs","min","sec"].map( (time,index )=>{
            return(
                <div className="input-group" key={index} style={{width:"10%",marginRight:"1%"}}>
                    <span className="input-group-text">{time}</span>
                    <input id={time+"-input"} type="number" defaultValue={0} min={0} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
            )
        })
    );

    //Start configured timer 
    const startConfigTimer=()=>{
        var hrInput = document.getElementById("hrs-input").value;
        var minInput = document.querySelector("#min-input").value;
        var secInput = document.querySelector("#sec-input").value;
        time=-1;
        compareTimer =  parseInt(hrInput)*3600+parseInt(minInput)*60+parseInt(secInput);
        setTimerSet("false")//hide set timer options
    };

    var timerSetButton = <button type="button" className="btn btn-light" onClick={startConfigTimer}>Start timer</button>;

    //return React component
    return (
        <div>
            <nav className="navbar container-fluid" style={stylingObject.nav}>
                <i className="fa-solid fa-rotate"onClick={()=>time=-1}></i>
                <i className={timerState=="running"?"fa-solid fa-circle-pause":"fa-solid fa-circle-play"} onClick={changeState}></i>
                <i className="fa-solid fa-clock" 
                onClick={()=>timerSet==="false"?setTimerSet("true"):setTimerSet("false")}></i>
                {timerSet==="true"?timeritems:""}
                {timerSet==="true"?timerSetButton:""}
            </nav>
            <div id="timer" style={{color:"white"}}></div>
        </div>
    )
        
};

export default NavOption;
