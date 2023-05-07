// add code to move shape up and down
button = document.getElementById("button");
start_move = false

button.onclick = function() {
  var elem1 = document.getElementById("rhom1");
  var elem2 = document.getElementById("rhom2");
  
  var id = setInterval(frame, 15);
  var pos = 0, left = false;
  x_distance = 50 // how many pixels to cover left and right

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
      elem1.style.left = 0 +'px';
      elem2.style.left = 0 +'px';
    }
  }
} 