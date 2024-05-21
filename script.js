const display=document.getElementById("display");
let timer=null;
let starttime=0;
let elpsedTime=0;
let isrunnig=false;

function start(){
    if (!isrunnig){
        starttime=Date.now()-elpsedTime;
        timer=setInterval(update,10);
        isrunnig=true;

    }

}

function stop(){
    if(isrunnig){
        clearInterval(timer);
        isrunnig=false;
    }
}

function reset(){
    clearInterval(timer);
    starttime=0;
    elpsedTime=0;
    isrunnig=false;
    display.textContent="00:00:00:00";
}

function update(){
    const currentTime=Date.now();
    elpsedTime=currentTime-starttime;
     let hours=Math.floor(elpsedTime/(1000*60*60));
     let minutes=Math.floor(elpsedTime/(1000*60)%60);
     let seconds=Math.floor(elpsedTime/1000%60);
     let milliseconds= Math.floor(elpsedTime%1000/10);

    hours=String(hours).padStart(2,"0");  
    minutes=String(minutes).padStart(2,"0");   
    seconds=String(seconds).padStart(2,"0");   
    milliseconds=String(milliseconds).padStart(2,"0");      

     display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;

}