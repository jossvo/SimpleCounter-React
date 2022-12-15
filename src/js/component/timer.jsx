import React from "react";
import reactDom from "react-dom";
var sec = -1;
var decasec = 0;
var min=0;
var decamin = 0;
var hr=0;
var decahr=0;
/*
window.onload=()=>{
    timer()
}

//start/continue timer
  
function tick() {
    if(sec>8){
        sec=-1;
        if(decasec>4){
            decasec=-1;
            if(min>8){
                min=-1;
                decamin+=1;
                if(decamin>5){
                    decamin=0;
                    if(hr>8){
                        hr=-1;
                        decahr+=1;
                    }
                    hr+=1;
                }
            }
            min+=1;
        }
        decasec+=1;
    }
    sec +=1;
    const element = (
    <h2 style={{fontSize:"10em"}}> {decahr}{hr}:{decamin}{min}:{decasec}{sec} </h2>
    );
    reactDom.render(element, document.querySelector("#timerTest"));
}

var globalTimer=""
const timer =()=> globalTimer=setInterval(tick, 1000);
const resetTimerValues= ()=>{
    sec = -1;
    decasec = 0;
    min=0;
    decamin = 0;
    hr=0;
    decahr=0;
}
//reset timer
window.resetTimer = function resetTimer(){
    clearInterval(globalTimer)
    resetTimerValues()
    timer()
};

//pause timer
window.pauseTimer = function pauseTimer(){
    clearInterval(globalTimer)
};
//start timer
window.startTimer = function startTimer(){
    timer()
};

//set timer

const Timer=()=>{
    return <div id="timerTest" style={{color:"white",textAlign:"center"}}></div>
};

export default Timer;
*/