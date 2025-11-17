const secretString = document.getElementById("secretString");

let color = "0, 255, 0",
  secret,
  keySequence = [],
  previousSecret,
  isStringShown = 0;

document.addEventListener("keypress", (e) => {
  keySequence.push(e.key);
  const keyString = keySequence.join("");

  if (keyString.match(/white/i) == "white") {
    secret = "white";
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
  }

  if (secret != previousSecret) {
    previousSecret = secret;
    if (!isStringShown) {
      isStringShown = 1;
      secretString.textContent = `You found the secret "${secret}!"`;
      secretString.style.display = "block";
      secretString.style.animation = "1.5s ease-out fade 3s forwards";
      setTimeout(() => {
        secretString.style.display = "none";
        secretString.style.animation = "none";
        isStringShown = 0;
      }, 4300);
    }
  }
});
