let color = "0, 255, 0",
  secret,
  keySequence = [];

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
  }
});
