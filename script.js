const srv = document.getElementById("provider");
function ping() {
  const start = Date.now();
  fetch(`${srv.value}?${start}`, {
      cache: "no-store"
    })
    .then(response => {
      const end = Date.now();
      const timeTaken = end - start - 20;
      const pingElement = document.getElementById('ping');
      pingElement.innerHTML = timeTaken;
    })
    .catch(error => {
      console.log(error);
    });
}
window.onload = function() {
  ping();
  setInterval(ping, 350);
};