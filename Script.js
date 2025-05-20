function setMessage(text) {
  document.getElementById("message-box").innerText = text;
}

function getKeys(event) {
  if (event.key === "1") {
    document.getElementById("python-btn").click();
  } else if (event.key === "2") {
    document.getElementById("js-btn").click();
  } else if (event.key === "3") {
    document.getElementById("surprise-btn").click();
  } else if (event.key === "5") {
    document.getElementById("home-btn").click();
  }
}

// Helper to hide all games
function hideAllGames() {
  document.getElementById("python-game").classList.add("hidden");
  document.getElementById("js-game").classList.add("hidden");
  document.getElementById("surprise-game").classList.add("hidden");
}

// Bind buttons
document.getElementById("python-btn").addEventListener("click", function() {
  setMessage("Launching Python Game!");
  hideAllGames();
  document.getElementById("python-game").classList.remove("hidden");
   document.getElementById("home-btn").classList.remove("hidden"); // show Home button
});

document.getElementById("js-btn").addEventListener("click", function() {
  setMessage("Launching JavaScript Game!");
  hideAllGames();
  document.getElementById("js-game").classList.remove("hidden");
   document.getElementById("home-btn").classList.remove("hidden"); // show Home button
});

document.getElementById("surprise-btn").addEventListener("click", function() {
  setMessage("Launching a Surprise!");
  hideAllGames();
  document.getElementById("surprise-game").classList.remove("hidden");
   document.getElementById("home-btn").classList.remove("hidden"); // show Home button
});

function showHome() {
  setMessage("Press 1, 2, or 3 to start something cool!");
  hideAllGames();
  document.getElementById("home-btn").classList.add("hidden");
}

// When Home button is clicked
document.getElementById("home-btn").addEventListener("click", showHome);

// Detect key presses
document.addEventListener("keydown", getKeys);
