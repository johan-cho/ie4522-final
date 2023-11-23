function uniformRandom(min, max) {
  /**
   * Returns a random number between min and max
   * @param {number} min - the minimum value
   * @param {number} max - the maximum value
   * @returns {number} - a random number between min and max
   */

  if (min > max) {
    throw Error("min must be less than max");
  }
  return Math.random() * (max - min) + min;
}

function show(id) {
  /**
   * Shows an element
   * @param {string} id - the id of the element to show
   * @returns {void}
   */
  let element = document.getElementById(id);
  element.style.display = "block";
  element.style.visibility = "visible";
}

function hide(id) {
  /**
   * Hides an element
   * @param {string} id - the id of the element to hide
   * @returns {void}
   */
  let element = document.getElementById(id);
  element.style.visibility = "hidden";
  element.style.display = "none";
}

function formatTime(seconds) {
  /**
   * Formats a number of seconds into a string of the format HH:MM:SS
   * @param {number} seconds - the number of seconds
   * @returns {string} - a string of the format HH:MM:SS
   */
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    padTime(hours) + ":" + padTime(minutes) + ":" + padTime(remainingSeconds)
  );
}

// Function to add leading zero to single-digit numbers
function padTime(time) {
  /**
   * pads a single digit number with a leading zero
   * @param {number} time - a single digit number
   * @returns {string} - a string with a leading zero
   */
  return time < 10 ? "0" + time : time;
}

function executeEvery(func, interval, first = false, ...args) {
  /**
   * Executes a function every interval milliseconds
   * @param {function} func - the function to execute
   * @param {number} interval - the interval in milliseconds
   * @param {boolean} first - whether to execute the function immediately
   * @param  {...any} args - the arguments to pass to the function
   */
  if (first) {
    func(...args);
  }

  const intervalId = setInterval(() => {
    func(...args);
  }, interval);

  return intervalId;
}

function moveToBottomRight(id) {
  /**
   * Moves an element to the bottom right corner of the screen
   * @param {string} id - the id of the element to move
   * @returns {void}
   * @throws {Error} - if the element does not exist
   */
  let element = document.getElementById(id);

  if (element.classList.contains("center")) {
    element.classList.remove("center");
  }

  element.classList.add("bottom-right");
}

function movetocenter(id) {
  let element = document.getElementById(id);

  if (element.classList.contains("bottom-right")) {
    element.classList.remove("bottom-right");
  }

  element.classList.add("center");
}
function remove(id) {
  /**
   * Removes an element
   * @param {string} id - the id of the element to remove
   * @returns {void}
   */
  document.getElementById(id).remove();
}

function openPopup(id) {
  /**
   * Opens a popup
   * @param {string} id - the id of the popup to open
   * @returns {void}
   */
  let popup = document.getElementById(id);
  popup.style.display = "block";
  let span = popup.getElementsByClassName("close")[0];
  span.onclick = function () {
    popup.style.display = "none";
  };
}

function loadGibberish(id, repeat = 100) {
  /**
   * Loads the gibberish text
   * @param {string} id - the id of the element to load the text into
   * @param {number} repeat - the number of times to repeat the gibberish text
   * @returns {void}
   */

  const gibberish =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc faucibus apellentesque sit. Id donec ultrices tincidunt arcu non sodales neque sodales.";

  let text = document.getElementById(id);
  text.innerText = gibberish.repeat(repeat);
}

function randomPosition(htmlElement) {
  /**
   * Sets the position of an element to a random position on the screen
   * @param {HTMLElement} htmlElement - the element to set the position of
   * @returns {void}
   */
  htmlElement.style.position = "absolute";
  htmlElement.style.left =
    Math.round(uniformRandom(0, document.body.scrollWidth)) + "px";
  htmlElement.style.top =
    Math.round(
      uniformRandom(
        0,
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      )
    ) + "px";
}

function addHtmlElement(parentId, htmlElement) {
  /**
   * Adds an html element to the DOM
   * @param {string} parentId - the id of the parent element
   * @param {HTMLElement} htmlElement - the element to add
   * @returns {void}
   */
  document.getElementById(parentId).appendChild(htmlElement);
}

function randomDogImage(height = 200, width = 200) {
  /**
   * Returns a random dog image
   * @returns {string} - a random dog image
   */
  return (
    "https://placedog.net/" +
    Math.round(uniformRandom(0, 1000)) +
    "/" +
    height +
    "/" +
    width
  );
}

function maxHeight() {
  let pageHeight = 0;

  function findHighestNode(nodesList) {
    for (let i = nodesList.length - 1; i >= 0; i--) {
      if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
        var elHeight = Math.max(
          nodesList[i].scrollHeight,
          nodesList[i].clientHeight
        );
        pageHeight = Math.max(elHeight, pageHeight);
      }
      if (nodesList[i].childNodes.length)
        findHighestNode(nodesList[i].childNodes);
    }
  }

  findHighestNode(document.documentElement.childNodes);
  return pageHeight;
}

function createImage(src) {
  let img = document.createElement("img");
  img.src = src;
  img.title = "Image";
  return img;
}

function removeWidth(id) {
  document.getElementById(id).style.width = "auto";
}

function setWidth(id, width) {
  document.getElementById(id).style.width = width;
}

function createMessage(message) {
  let p = document.createElement("p");
  p.innerText = message;
  return p;
}

function createAnchor(message, href, target) {
  let a = document.createElement("a");
  a.innerText = message;
  a.href = href;
  a.target = target;
  return a;
}

function createButton(message, onclick) {
  let button = document.createElement("button");
  button.innerText = message;
  button.onclick = onclick;
  return button;
}
