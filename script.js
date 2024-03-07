const srv = document.getElementById("provider");
function pingDNS() {
  const start = Date.now();
  fetch(`${srv.value}?${start}`, {
      cache: "no-cache"
    })
    .then(response => {
      const end = Date.now();
      const timeTaken = end - start - 30;
      const pingElement = document.getElementById('ping');
      pingElement.innerHTML = timeTaken;
    })
    .catch(error => {
      console.log(error);
    });
}
window.onload = function() {
  pingDNS();
  setInterval(pingDNS, 350);
};