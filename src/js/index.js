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
    remove("startBtn");
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    seconds = 0;
    document.getElementById("timer").innerText = formatTime(seconds);
  }

  // Event listeners for buttons
  document.getElementById("startBtn").addEventListener("click", startTimer);
  document.getElementById("stopBtn").addEventListener("click", stopTimer);
  document.getElementById("resetBtn").addEventListener("click", resetTimer);
};

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
