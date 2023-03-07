function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  document.getElementById("hours").textContent = padZero(hours);
  document.getElementById("minutes").textContent = padZero(minutes);
  document.getElementById("seconds").textContent = padZero(seconds);
}

function padZero(number) {
  return number < 10 ? "0" + number : number;
}

updateTime();
setInterval(updateTime, 1000);
