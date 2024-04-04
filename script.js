const countDownElement = document.getElementById("Count-Down");
const resetValueElement = document.querySelector(".resetValue");

let startCount = 0;

let intervalId;

// function to start timer

const startTimer = () => {
    intervalId = setInterval (() => {
        countDownElement.innerText = startCount++ ;
    }, 1000);
};

// function to stop timer

const stopTimer = () => {
    clearInterval(intervalId);
}

// function to reset timer

const resetTimer = () => {
    startCount = 0 ;
    countDownElement.innerText = 0 ;
    clearInterval(intervalId);
}

// function to show stop time

const showStopValue = () => {
    const newPara = document.createElement("p");

    if(startCount==0){
        newPara.innerText = `The stop time is ${startCount}` ;
    }
    else newPara.innerText = `The stop time is ${startCount - 1}` ;
    resetValueElement.append(newPara);
}

// function to clear log

const clearTimeValue = () =>{
    resetValueElement.innerHTML = "";
}

// Event listeners
document.querySelector(".start_btn").addEventListener("click", startTimer);

document.querySelector(".stop_btn").addEventListener("click", stopTimer);

document.querySelector(".reset_btn").addEventListener("click", resetTimer);

document.querySelector(".time_btn").addEventListener("click", showStopValue);

document.querySelector(".clear_btn").addEventListener("click", clearTimeValue);
