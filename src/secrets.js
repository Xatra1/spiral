const secretString = document.getElementById("secretString");

let secret,
  previousSecret,
  isStringShown = 0;

setInterval(() => {
  if (secret != previousSecret) {
    previousSecret = secret;
    if (!isStringShown) {
      isStringShown = 1;
      secretString.textContent =
        `You found the secret "${secret}"! Use the 0 key to turn it off.`;
      secretString.style.display = "block";
      secretString.style.animation = "1.5s ease-out fade 3s forwards";
      setTimeout(() => {
        secretString.style.display = "none";
        secretString.style.animation = "none";
        isStringShown = 0;
      }, 4300);
    }
  }

  if (secret == "invert") {
    fsButton.style.setProperty("color", "black", "important");
    fsButton.style.border = "1px solid black";
  } else {
    fsButton.style.color = "";
    fsButton.style.border = "1px solid white";
  }
}, 1000 / 60);
