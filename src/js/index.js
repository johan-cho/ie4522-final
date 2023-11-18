// Initialize the timer and button event listeners after the page is fully loaded
window.onload = function () {
  let seconds = 0;
  let timerInterval;

  function startTimer() {
    timerInterval = setInterval(function () {
      document.getElementById("timer").innerText = formatTime(seconds);
      seconds++;
    }, 1000);

    show("main");
    moveToBottomRight("timerbox");
    executeEvery(openPopup, uniformRandom(5000, 7000), false, "popup1");

    for (id of ["start", "label", "title"]) {
      remove("timer" + id);
    }
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    seconds = 0;
    document.getElementById("timer").innerText = formatTime(seconds);
  }

  // Event listeners for buttons
  document.getElementById("timerstart").addEventListener("click", startTimer);
  // document.getElementById("stopBtn").addEventListener("click", stopTimer);
  // document.getElementById("resetBtn").addEventListener("click", resetTimer);
};

function uniformRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function show(id) {
  if (document.getElementById(id).style.visibility == "visible") {
    document.getElementById(id).style.visibility = "hidden";
  }
  document.getElementById(id).style.visibility = "visible";
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    padTime(hours) + ":" + padTime(minutes) + ":" + padTime(remainingSeconds)
  );
}

// Function to add leading zero to single-digit numbers
function padTime(time) {
  return time < 10 ? "0" + time : time;
}

function executeEvery(func, interval, first = false, ...args) {
  if (first) {
    func(...args);
  }

  const intervalId = setInterval(() => {
    func(...args);
  }, interval);

  return intervalId;
}

function moveToBottomRight(id) {
  let element = document.getElementById(id);
  element.classList.add("bottom-right");
}

function hide(id) {
  document.getElementById(id).style.visibility = "hidden";
}

function remove(id) {
  document.getElementById(id).remove();
}

function openPopup(id) {
  let popup = document.getElementById(id);
  popup.style.display = "block";
  let span = popup.getElementsByClassName("close")[0];
  span.onclick = function () {
    popup.style.display = "none";
  };
}
