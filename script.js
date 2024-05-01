let srv = document.getElementById('provider');
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
  if (!window.location.hash) {
    window.location.hash = 'cloudflare';
  }
  let slc = document.getElementById(window.location.hash.substring(1));
  if (slc) {
    slc.selected = true;
  }
  ping();
  setInterval(ping, 350);
  srv.addEventListener('change', function() {
    var sld = this.options[this.selectedIndex].id;
    window.location.hash = sld;
  });
};