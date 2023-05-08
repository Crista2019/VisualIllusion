// function to create hex black and white shade from num
function rgbToHex(c) {
  const hex = Number(c).toString(16);
  return `#${hex}${hex}${hex}`;
}


// code to change color of rhombussies
var slider = document.getElementById("myRange");
var output = document.getElementById("color_slider");
output.innerHTML = rgbToHex(slider.value);

slider.oninput = function() {
  output.innerHTML = rgbToHex(slider.value);
  var plain_rhoms = [];
  var grad_rhoms = [];
  // get the elements of all rhombus shapes
  for (let i = 1; i <= 4; i+=2) {
    // only uniformly set shade for left rhoms
    plain_rhoms.push(document.getElementById("rhom" + i))
  }
  // get elements for gradient rhoms
  for (let i = 2; i <= 4; i+=2) {
    // only uniformly set shade for left rhoms
    grad_rhoms.push(document.getElementById("rhom" + i))
  }
  for (let i = 0; i < 2; i++) {
    color = rgbToHex(this.value);
    plain_rhoms[i].style.background = color;
    grad_rhoms[i].style.background = 'linear-gradient('+color+', white)'
  }
}


// code to move shape up and down
go_button = document.getElementById("move");
start_move = false

go_button.onclick = function() {
  var elems = [];
  // get the elements of all rhombus shapes
  for (let i = 1; i <= 4; i++) {
    elems.push(document.getElementById("rhom" + i))
  }

  var id = setInterval(frame, 50); // speed up or slow down
  var pos = 0, up = false;
  x_distance = 30 // how many pixels to cover left and right

  start_move = !start_move

  function frame() {

    // i can't remember if the shapes are supposed to go up/down or left/right or by how much
    if (start_move) {
      if (pos < x_distance && !up) {
        pos++;
        if (pos === x_distance) up = true;
        for (let i = 0; i < 4; i++) {
          elems[i].style.top = pos + 'px';
        }
      }
      else {
        pos--;
        if (pos <= 0) up = false;
        for (let i = 0; i < 4; i++) {
          elems[i].style.top = pos + 'px';
        }
      }
    } else {
      pos = 0, left = false;
      for (let i = 0; i < 4; i++) {
        elems[i].style.top = 0 + 'px';
      }
    }
  }
} 