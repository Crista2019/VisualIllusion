// code to change width of rhombussies
var slider = document.getElementById("myRange");
var output = document.getElementById("width_display");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  var elem1 = document.getElementById("rhom1");
  var elem2 = document.getElementById("rhom2");
  elem1.style.width = this.value + 'px';
  elem2.style.width = this.value + 'px';
}

// code to move shape up and down
button = document.getElementById("button");
start_move = false

button.onclick = function() {
  var elem1 = document.getElementById("rhom1");
  var elem2 = document.getElementById("rhom2");

  var id = setInterval(frame, 50); // speed up or slow down
  var pos = 0, left = false;
  x_distance = 30 // how many pixels to cover left and right

  start_move = !start_move

  function frame() {

    if (start_move) {
      if (pos < x_distance && !left) {
        pos++;
        if (pos === x_distance) left = true;
        elem1.style.left = pos + 'px';
        elem2.style.left = pos + 'px';
      }
      else {
        pos--;
        if (pos <= 0) left = false;
        elem1.style.left = pos + 'px';
        elem2.style.left = pos + 'px';
      }
    } else {
      pos = 0, left = false;
      elem1.style.left = 0 + 'px';
      elem2.style.left = 0 + 'px';
    }
  }
} 