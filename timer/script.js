const newYear = "1 Jan 2023";

function countDown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const miliseconds = newYearDate - currentDate;
  //console.log(miliseconds);

  const second = miliseconds / 1000;

  const day = Math.floor(second / (60 * 60 * 24));
  days.innerHTML = formatTime(day);

  // console.log(days);

  let remSec = Math.floor(second % (60 * 60 * 24));
  // console.log(remSec);

  const hour = Math.floor(remSec / (60 * 60));
  hours.innerHTML = formatTime(hour);
  // console.log(hours);

  remSec = Math.floor(remSec % (60 * 60));
  //console.log(remSec);

  const min = Math.floor(remSec / 60);
  mins.innerHTML = formatTime(min);
  // console.log(min);

  remSec = Math.floor(remSec % 60);
  // console.log(remSec);
  seconds.innerHTML = formatTime(remSec);
  console.log(remSec);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);
