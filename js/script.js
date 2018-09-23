

function tema1() {
  document.styleSheets.item(1).disabled = false;
  document.styleSheets.item(2).disabled = true;
}


function tema2() {
  document.styleSheets.item(1).disabled = true;
  document.styleSheets.item(2).disabled = false;
}

tema1();


window.onload = function() {
  var barra = document.createElement("div");
  barra.style.backgroundColor = "black";
  barra.style.color = "white";
  barra.style.textAlign = "center";
  
  var button1 = document.createElement("button");
  button1.innerText = "Tema 1";
  button1.onclick = tema1;
  button1.style.border = "0";
  button1.style.fontSize = "18px";
  button1.style.backgroundColor = "white";
  button1.style.color = "black";
  button1.style.fontWeight = "bold";
  button1.style.padding = "4px 20px";
  button1.style.margin = "4px 20px";
  button1.style.cursor = "pointer";
  
  var button2 = document.createElement("button");
  button2.innerText = "Tema 2";
  button2.onclick = tema2;
  button2.style.border = "0";
  button2.style.fontSize = "18px";
  button2.style.backgroundColor = "white";
  button2.style.color = "black";
  button2.style.fontWeight = "bold";
  button2.style.padding = "4px 20px";
  button2.style.margin = "4px 20px";
  button2.style.cursor = "pointer";
  
  barra.appendChild(button1);
  barra.appendChild(button2);
  
  document.body.insertBefore(barra, document.body.firstChild);
  
}


