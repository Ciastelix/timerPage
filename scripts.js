var study = true
var time = 0;
var breakTime = 0;


const timeLeft = () => {
    let hook = document.getElementById("timer")
    if (study) {
        time += 1
        hook.innerHTML = time
    }
    else {
        breakTime += 1
        hook.innerHTML = breakTime
    }

}
// var ina = setInterval(timeLeft, 1000)
const changeHeader = () => {
    let hook = document.getElementById("header");
    study ? hook.innerHTML = "It's time to study be gone!" : hook.innerHTML = "It's break time go wild!"
}


const start = () => {
    changeHeader();
    window.setInterval(function () {
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