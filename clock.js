const clockContainer = document.querySelector(".clockTarget"),
    dayContainer = document.querySelector(".dayTarget"),
    clockTitle = clockContainer.querySelector("h1"),
    todayTitle = dayContainer.querySelector("h2"),
    clockTitle2 = clockContainer.querySelector("h4"),
    clockTitle3 = clockContainer.querySelector("h3");


function getDay() {
    const date= new Date();
    const years = date.getFullYear();
    const month = date.getMonth()+1;
    const days = date.getDate();
    const week = date.getDay();
    todayTitle.innerText = (`${years}년 ${month}월 ${days}일 ${week}요일`);
}

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    const seconds = date.getSeconds();
    const apm = hours > 12 ? 'PM' : 'AM';
    clockTitle2.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;
    clockTitle3.innerText = `${apm}`;
}

function init() {
    getDay();
    getTime();
    setInterval(getTime,1000);
}

init();