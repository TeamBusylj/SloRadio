function getTime() {
  time = new Date().toLocaleTimeString();
  document.body.innerHTML = time;
}
setInterval(getTime, 10000);