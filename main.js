// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const err = "Random server error. Try again.";
const success = "Pretend remote server notified of action!";
const heart = document.querySelectorAll("span.like-glyph");
const heartArr = Array.from(heart);
heartArr.forEach((elem) => {
  elem.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        updateDomSuccess(elem)
      })
      .catch((error) => {
        updateDomError(elem);
        console.log(error);
      });
  });
});
function updateDomError(elem) {
  elem.textContent = EMPTY_HEART;
  const modal = document.querySelector("div#modal");
  modal.className = "";
  setTimeout(() => {
    modal.className = "hidden";
  }, 3000);
}
function updateDomSuccess(elem) {
  elem.textContent = FULL_HEART;
  console.log('hello')
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
