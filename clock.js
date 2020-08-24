const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");


function getLiveTime () {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init () {
    getLiveTime();
}

init(); 