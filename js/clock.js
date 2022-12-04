const clockTitle = document.getElementById("clock");
const ampmDiv = document.getElementById("ampm");
const secondDiv = document.getElementById("second");
const dateDiv = document.getElementById("date");

const DAY_UNIT = 1000 * 60 * 60 * 24;
const HOUR_UNIT = 1000 * 60 * 60;
const MINUTE_UNIT = 1000 * 60;
const SECOND_UNIT = 1000;
const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const timeUntilChristmasEve = () => {
  const now = new Date();
  console.log(now.toLocaleString());
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  clockTitle.innerText = `${hours}:${minutes}`;
  secondDiv.innerText = `${seconds}`;
  ampmDiv.innerText = `${ampm}`;
  dateDiv.innerText = `${year}년 ${month}월 ${date}일 ${WEEKDAY[day]}`;
};

setInterval(timeUntilChristmasEve, 1000);
