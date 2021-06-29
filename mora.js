const rock = 1;
const paper = 2;
const scissors = 3;

let computer_mora = Math.trunc(Math.random() * 3) + 1;

var img1 = document.getElementById("question-mark");

document.querySelector(".button_rock").addEventListener("click", function () {
  let computer_mora = Math.trunc(Math.random() * 3) + 1;
  if (computer_mora == 1) {
    img1.src = "C:/Users/djgoc/Desktop/web/img/rock.jpg";
    document.querySelector("#player-result").textContent = "Tie😒";
  } else if (computer_mora == 2) {
    img1.src = "C:/Users/djgoc/Desktop/web/img/paper.jpg";
    document.querySelector("#player-result").textContent = "Lose🙄";
  } else if (computer_mora == 3) {
    document.querySelector("#player-result").textContent = "Win😁";
    img1.src = "C:/Users/djgoc/Desktop/web/img/scissors.jpg";
  }
});

document.querySelector(".button_paper").addEventListener("click", function () {
  let computer_mora = Math.trunc(Math.random() * 3) + 1;
  if (computer_mora == 1) {
    img1.src = "C:/Users/djgoc/Desktop/web/img/rock.jpg";
    document.querySelector("#player-result").textContent = "Tie😒";
  } else if (computer_mora == 2) {
    img1.src = "C:/Users/djgoc/Desktop/web/img/paper.jpg";
    document.querySelector("#player-result").textContent = "Lose🙄";
  } else if (computer_mora == 3) {
    img1.src = "C:/Users/djgoc/Desktop/web/img/scissors.jpg";
    document.querySelector("#player-result").textContent = "Win😁";
  }
});

document
  .querySelector(".button_scissors")
  .addEventListener("click", function () {
    let computer_mora = Math.trunc(Math.random() * 3) + 1;
    if (computer_mora == 1) {
      img1.src = "C:/Users/djgoc/Desktop/web/img/rock.jpg";
      document.querySelector("#player-result").textContent = "Tie😒";
    } else if (computer_mora == 2) {
      img1.src = "C:/Users/djgoc/Desktop/web/img/paper.jpg";
      document.querySelector("#player-result").textContent = "Lose🙄";
    } else if (computer_mora == 3) {
      img1.src = "C:/Users/djgoc/Desktop/web/img/scissors.jpg";
      document.querySelector("#player-result").textContent = "Win😁";
    }
  });
