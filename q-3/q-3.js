// in the folder timer, you have html and css code of this question. you just have to write the js code for this.
// we have three buttons in here: (stop, reset and start)
// The timer should start when you click the "start" button.
// When the "stop" button is clicked, the timer should stop working,
// and when the reset button is clicked, the timer should be reset.
// * hint: you can use setinterval.


const timeEle = document.querySelector('.time');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let sec = 0;
let min = 0;
let h = 0;
let intervalId;

function startFunc(){

    intervalId = setInterval(()=>{
        sec++;
        if(sec>59) {
            sec = 0;
            min++;
        }
        if(min>59) {
            min = 0;
            sec = 0;
            h++;
        }
        let Hour = String(h)
        let Second = String(sec)
        let Min = String(min)
        if(sec<10) Second = '0' + Second
        if(min<10) Min = '0' + Min
        if(h<10) Hour = '0' + Hour
        timeEle.innerText = Hour + ':' + Min + ':' + Second;

    }, 1000)
    
}

function stopFunc(){
    clearInterval(intervalId);
}

function resetFunc(){
    sec = 0;
    min = 0;
    h = 0;
    timeEle.innerText = '00:00:00'
}

startBtn.addEventListener('click', startFunc)
stopBtn.addEventListener('click', stopFunc)
resetBtn.addEventListener('click', resetFunc)




