const fsButton = document.getElementById("fsButton");

let color = "0, 255, 0",
  keySequence = [],
  fullscreen = 0;

document.addEventListener("keypress", (e) => {
  keySequence.push(e.key);
  const keyString = keySequence.join("");

  if (keyString.match(/white/i) == "white") {
    secret = "white";
    keySequence = [];
  } else if (keyString.match(/invert/i) == "invert") {
    secret = "invert";
    keySequence = [];
  }

  switch (e.key) {
    case "1":
      color = "255, 0, 0";
      break;

    case "2":
      color = "255, 127, 0";
      break;

    case "3":
      color = "255, 255, 0";
      break;

    case "4":
      color = "0, 255, 0";
      break;

    case "5":
      color = "0, 0, 255";
      break;

    case "6":
      color = "0, 255, 255";
      break;

    case "7":
      color = "255, 0, 255";
      break;

    case "8":
      color = "255, 255, 255";
      break;

    case "9":
      secret = "twin";
      break;

    case "0":
      secret = "";
      previousSecret = "";
      break;
  }
});

fsButton.addEventListener("click", () => {
  if (!fullscreen) {
    document.body.requestFullscreen();
    fullscreen = 1;
  } else {
    document.exitFullscreen();
    fullscreen = 0;
  }
});
