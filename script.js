const srv = document.getElementById("provider");
function pingDNS() {
  const start = Date.now();
  fetch(`${srv.value}?${start}`, {headers:{"user-agent":"ping"},cache: "no-cache"})
     .then(response => {
        const end = Date.now();
        const timeTaken = end - start - 30;
        //execution time can be different each devices
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