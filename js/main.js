

function myFunctionMenu() {
    let myLinks = document.getElementById("mylinks");
    
    if (myLinks.style.display === "flex") {
      myLinks.style.display = "none";      
    } else {
      myLinks.style.display = "flex";
    }
  }

  function deskRange(id) {
    let infoDesk = "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=50,width=480,height=600";
    let deskInfo = "";

    switch(id) {
      case 1:
        deskInfo = "Retro Desk 850  35 6";
        myWindow = window.open(("desk.html"), deskInfo, infoDesk);
        break;
      case 2:
        deskInfo = "Doble Desk 1250 80 12";
        myWindow = window.open(("desk.html"), deskInfo, infoDesk);
        break;
      case 3:
        deskInfo = "Darks Desk 650  40 8";
        myWindow = window.open(("desk.html"), deskInfo, infoDesk);
        break;
      case 4:
        deskInfo = "Corne Desk 750  60 12";
        myWindow = window.open(("desk.html"), deskInfo, infoDesk);
        break;
      case 5:
        deskInfo = "Homes Desk 450  25 6";
        myWindow = window.open(("desk.html"), deskInfo, infoDesk);
        break;
      case 6:
        deskInfo = "Offic Desk 250  78 19";
        myWindow = window.open(("desk.html"), deskInfo, infoDesk);
        break;
      default:
    }
  }

function checkStatusDesk() {
  let deskInfo = window.name;
  let deskName = deskInfo.slice(0, 10);
  let deskPrice = deskInfo.slice(11,15);
  let deskSize = deskInfo.slice(16,18);
  let deskPacks = deskInfo.slice(18);

  document.title = deskName;
  let objectTitle = document.getElementById("card-title");
  let objectPrice = document.getElementById("card-price");
  let objectImg = document.getElementById("card-img");
  let objectSize = document.getElementById("card-size");

  objectPrice.innerHTML = deskPrice + " Euros"
  objectTitle.innerHTML = deskName;
  objectImg.src = ("pics/" + deskName + ".png");
  objectSize.innerHTML = deskSize + " Kg" + deskPacks + " Packages"
}
