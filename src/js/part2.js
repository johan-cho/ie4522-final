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

  let realbutton = document.createElement("button");
  realbutton.innerText = "Stop the timer";
  realbutton.id = "realbutton";
  addHtmlElement("main", realbutton);

  realbutton.onclick = function () {
    stopTimer();
    hide("main");
    setWidth("timerbox", "70%");
    movetocenter("timerbox");

    let title = document.getElementById("timertitle");
    title.innerText = "Congrats, you've stopped the timer!";
    let label = document.getElementById("timerlabel");
    label.innerText = null;
    for (id of ["start", "label", "title"]) {
      show("timer" + id);
    }

    let timerstart = document.getElementById("timerstart");
    timerstart.style.display = null;
    timerstart.innerText = "Return to page";
    timerstart.onclick = function () {
      show("main");
      hide("timerbox");
      hide("realbutton");
    };
  };
};
