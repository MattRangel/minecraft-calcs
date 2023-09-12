function convertCoord() {
  var coord = document.getElementById("coords").value.split(',');
  var userN = document.getElementById("userName").value;
  var elev = document.getElementById("elevation").value;
  if (userN == "") {
    userN = "BigMatt333"
  }
  if (elev == "") {
    elev = "255"
  }
  document.getElementById("teleCommand").value = "/tp " + userN + " " + Math.ceil(coord[0]*100000) + " " + elev + " " + Math.ceil(coord[1]*100000);
}

function copyText() {
  var textToCopy = document.getElementById("teleCommand");
  textToCopy.select();
  textToCopy.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function OverworldNether(i){
  var textBoxes = ["oX","oZ","oXZ","nX","nZ","nXZ"];
  var uCoords = [0,0];
  if (textBoxes[i].length == 3) {
    uCoords = document.getElementById(textBoxes[i]).value.split(',');
    document.getElementById(textBoxes[i-2]).value = uCoords[0];
    document.getElementById(textBoxes[i-1]).value = uCoords[1];
  }
  else {
    if (textBoxes[i].includes("X")) {
      uCoords = document.getElementById(textBoxes[i+2]).value.split(',');
      uCoords[0] = document.getElementById(textBoxes[i]).value;
      document.getElementById(textBoxes[i+2]).value = uCoords;
    }
    else {
      uCoords = document.getElementById(textBoxes[i+1]).value.split(',');
      uCoords[1] = document.getElementById(textBoxes[i]).value;
      document.getElementById(textBoxes[i+1]).value = uCoords;
    }
  }
  if (i < 3) {
    uCoords = uCoords.map(x => Math.ceil(x / 8))
    document.getElementById(textBoxes[3]).value = uCoords[0];
    document.getElementById(textBoxes[4]).value = uCoords[1];
    document.getElementById(textBoxes[5]).value = uCoords;
  } 
  else {
    uCoords = uCoords.map(x => x * 8)
    document.getElementById(textBoxes[0]).value = uCoords[0];
    document.getElementById(textBoxes[1]).value = uCoords[1];
    document.getElementById(textBoxes[2]).value = uCoords;
  }
}

