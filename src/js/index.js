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
    loadGibberish("gibberish", 50);
    for (id of ["start", "label", "title"]) {
      hide("timer" + id);
    }

    for (let i = 0; i < 250; i++) {
      let message = document.createElement("p");
      let message_2 = document.createElement("p");
      let message_3 = document.createElement("p");
      let message_4 = document.createElement("a");
      let fakebutton = document.createElement("button");

      message.innerText = "You've been distracted!";
      message_2.innerText = "is this the correct way to do it?";
      message_3.innerText = "where the stop button?";
      message_4.innerText = "click here to stop";
      message_4.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      message_4.target = "_blank";
      fakebutton.innerText = "click to stop";
      fakebutton.style.zIndex = 10;
      fakebutton.id = "fakebutton" + i;

      for (_dom of [
        createImage(randomDogImage()),
        message,
        message_2,
        message_3,
        message_4,
        fakebutton,
      ]) {
        randomPosition(_dom);
        addHtmlElement("main", _dom);
      }
    }
    addHtmlElement("main", createImage("/src/img/doctor.png"));

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
      let title = document.getElementById("timertitle");

      title.innerText = "Congrats, you've stopped the timer!";

      let label = document.getElementById("timerlabel");
      let linktonext = document.createElement("a");
      linktonext.innerText = "click here to go to the next page";
      linktonext.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      linktonext.target = "_blank";

      label.innerHTML = linktonext.outerHTML;

      for (id of ["label", "title"]) {
        show("timer" + id);
      }
    };
  }

  document.getElementById("timerstart").addEventListener("click", startTimer);
};
