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


const start = () => {
    changeHeader();
    window.setInterval(function () {
        if (time < 25 && study || breakTime < 10 && !study) {
            timeLeft();


        }
        else if (time === 25 && study) {
            document.getElementById("alarm").play();
            study = false;
            time = 0;
            changeHeader();
        }
        else if (!study && breakTime === 10) {
            document.getElementById("alarm").play();
            study = true;
            breakTime = 0;
            changeHeader()
        }


    }, 1000)
}