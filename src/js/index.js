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
    removeWidth("timerbox");
    executeEvery(openPopup, uniformRandom(5000, 7000), false, "popup1");
    loadGibberish("gibberish", 50);
    for (id of ["start", "label", "title"]) {
      hide("timer" + id);
    }

    for (let i = 0; i < 200; i++) {
      for (_dom of [
        createImage(randomDogImage()),
        createMessage("You've been distracted!"),
        createMessage("is this the correct way to do it?"),
        createMessage("where the stop button?"),
        createAnchor(
          "click here to stop",
          "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "_blank"
        ),
        createMessage("Is this the right button"),
        createMessage("I don't know"),
        createMessage("I'm just a button"),
        createButton("click to stop"),
      ]) {
        randomPosition(_dom);
        addHtmlElement("main", _dom);
      }
    }
    addHtmlElement("main", createImage("src/img/doctor.png"));

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

    let realbutton = document.createElement("button");
    realbutton.innerText = "i'm the real button";
    realbutton.style.zIndex = 11;
    realbutton.id = "realbutton";
    randomPosition(realbutton);
    addHtmlElement("main", realbutton);

    realbutton.onclick = function () {
      stopTimer();
      movetocenter("timerbox");
      hide("main");
      setWidth("timerbox", "70%");
      let title = document.getElementById("timertitle");

      title.innerText = "Congrats, you've stopped the timer!";

      let label = document.getElementById("timerlabel");
      let linktonext = document.createElement("a");
      linktonext.innerText = "click here to go to the next page";
      linktonext.href = "part2.html";
      linktonext.target = "_blank";

      label.innerHTML = linktonext.outerHTML;

      for (id of ["label", "title"]) {
        show("timer" + id);
      }
    };
  }

  document.getElementById("timerstart").addEventListener("click", startTimer);
};
