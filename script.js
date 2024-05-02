let srv = document.getElementById('provider');
let params = new URLSearchParams(document.location.search);
const mean = params.get('m') || 100;
const intv = params.get('i') || 350;
function ping() {
  let start = Date.now();
  fetch(`${srv.value}?${start}`, {
      cache: "no-store"
    })
    .then(response => {
      const timeTaken = Date.now() - start - mean;
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
  setInterval(ping, intv);
  srv.addEventListener('change', function() {
    var sld = this.options[this.selectedIndex].id;
    window.location.hash = sld;
  });
};