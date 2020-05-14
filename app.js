
function OrologioBello() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
  
    let time = h + ":" + m + ":" + s;
    document.getElementById("Orologio").innerText = time;
    document.getElementById("Orologio").textContent = time;
  
    //h= 19; manual h test
  }
  
  function Check() {
    let date = new Date();
    let h = date.getHours();
  
    if (h < 12) {
      alert("Buongiorno");
    } else if (h > 12 && h < 18) {
      alert("Buon Pormeriggio");
    } else if (h > 18) {
      alert("Buona Sera");
    }
  }
  