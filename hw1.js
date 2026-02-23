
/*
  Name:Jacquelyn Vera
  Date Created: 2026-02=23
  Date Modified: 2026-02-23
  Purpose: JS Hw1
*/

const d= newDate();
let text = d.toLocalDateString();
document.getElementById("today").innerHTML = text;

let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;
    
    slider.oninput = function () {output.innerHTML = this.value;};