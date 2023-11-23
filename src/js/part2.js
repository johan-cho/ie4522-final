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
    removeWidth("timerbox");
    moveToBottomRight("timerbox");
    for (id of ["start", "label", "title"]) {
      hide("timer" + id);
    }
  }

  function stopTimer() {
    /**
     * Stops the timer
     * @returns {void}
     */
    clearInterval(timerInterval);
  }

  function resetTimer() {
    /**
     * Resets the timer
     * @returns {void}
     */
    seconds = 0;
    document.getElementById("timer").innerText = formatTime(seconds);
  }
  document.getElementById("timerstart").addEventListener("click", startTimer);
  document.getElementById("timerstop").onclick = function () {
    stopTimer();
    hide("main");
    setWidth("timerbox", "70%");
    let title = document.getElementById("timertitle");
    title.innerText = "Congrats, you've stopped the timer!";
    let label = document.getElementById("timerlabel");
    label.innerText = "Press this button to see the rest of the page.";
    for (id of ["start", "label", "title"]) {
      show("timer" + id);
    }
    let timerstart = document.getElementById("timerstart");

    timerstart.innerText = "Restart the timer";
    timerstart.onclick = function () {
      show("main");
      hide("timerbox");
    };
  };
};
