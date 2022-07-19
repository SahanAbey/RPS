let objects = ["Rock", "Paper", "Scissor"];

function rock() {
  document.getElementById("rock-btn").onclick = function () {
    let position = Math.floor(Math.random() * 3 + 1);
    document.getElementById("guess-obj").src = "Images/rock.png";

    if (position == 1) {
      document.getElementById("comp-guess").src = "Images/rock.png";
      document.getElementById("res").innerHTML = "Tied";
    } else if (position == 2) {
      document.getElementById("comp-guess").src = "Images/paper.png";
      document.getElementById("res").innerHTML = "You Lost";
    } else if (position == 3) {
      document.getElementById("comp-guess").src = "Images/scissor.png";
      document.getElementById("res").innerHTML = "You Won";
    }
  };
}
function paper() {
  document.getElementById("paper-btn").onclick = function () {
    let position = Math.floor(Math.random() * 3 + 1);
    document.getElementById("guess-obj").src = "Images/paper.png";

    if (position == 1) {
      document.getElementById("comp-guess").src = "Images/rock.png";
      document.getElementById("res").innerHTML = "You won";
    } else if (position == 2) {
      document.getElementById("comp-guess").src = "Images/paper.png";
      document.getElementById("res").innerHTML = "Tied";
    } else if (position == 3) {
      document.getElementById("comp-guess").src = "Images/scissor.png";
      document.getElementById("res").innerHTML = "You Lost";
    }
  };
}
function scissor() {
  document.getElementById("scissor-btn").onclick = function () {
    let position = Math.floor(Math.random() * 3 + 1);
    document.getElementById("guess-obj").src = "Images/scissor.png";

    if (position == 1) {
      document.getElementById("comp-guess").src = "Images/rock.png";
      document.getElementById("res").innerHTML = "You lost";
    } else if (position == 2) {
      document.getElementById("comp-guess").src = "Images/paper.png";
      document.getElementById("res").innerHTML = "You won";
    } else if (position == 3) {
      document.getElementById("comp-guess").src = "Images/scissor.png";
      document.getElementById("res").innerHTML = "Tieds";
    }
  };
}
