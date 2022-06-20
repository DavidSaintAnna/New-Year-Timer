let daysId = document.querySelector("#days");
let hoursId = document.querySelector("#hours");
let minId = document.querySelector("#mins");
let secondsId = document.querySelector("#seconds");

const newYears = "1 Jan 2023";
const timer = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const Totalseconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(Totalseconds / 3600 / 24);
  const hours = Math.floor(Totalseconds / 3600) % 24;
  const minutes = Math.floor(Totalseconds / 60) % 60;
  const seconds = Math.floor(Totalseconds) % 60;
  daysId.textContent = formartTime(days);
  hoursId.textContent = formartTime(hours);
  minId.textContent = formartTime(minutes);
  secondsId.textContent = formartTime(seconds);
  console.log(days, hours, minutes, seconds);
};

function formartTime(time) {
  return time < 10 ? `0${time}` : time;
}
timer();

setInterval(timer, 1000);
