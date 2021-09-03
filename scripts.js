var study = true
var time = 0;
var breakTime = 0;



const timeLeft = () => {
    let hook = document.getElementById("timer")
    if (study) {
        time += 1
        hook.innerHTML = 1500 - time
    }
    else {
        breakTime += 1
        hook.innerHTML = 600 - breakTime
    }

}
const changeHeader = () => {
    let hook = document.getElementById("header");
    study ? hook.innerHTML = "It's time to study be gone!" : hook.innerHTML = "It's break time go wild!"
}

const reset = () => {
    time = 0;
    breakTime = 0;
    study = true;
    changeHeader()
    document.getElementById("timer").innerHTML = 1500
    }


const start = () => {
    changeHeader();
    window.inter = setInterval(function () {
    if (time < 1500 && study || breakTime < 600 && !study) {
        timeLeft();


    }
    else if (time === 1500 && study) {
        document.getElementById("alarm").play();
        study = false;
        time = 0;
        changeHeader();
    }
    else if (!study && breakTime === 600) {
        document.getElementById("alarm").play();
        study = true;
        breakTime = 0;
        changeHeader()
    }


}, 1000)

}
const stop = () => {
    clearInterval(window.inter)
}