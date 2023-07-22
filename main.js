// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal')

hideModal()

function hideModal() {
  modal.className = "hidden"
}

const allHearts = document.getElementsByClassName('like-glyph')

for (let heart of allHearts) {
  heart.addEventListener("click", clickHeart)
}

function clickHeart(e) {
  const heart = e.target
  mimicServerCall()
    .then( () => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART 
        heart.className = "activated-heart"
      } else {
        heart.innerText = EMPTY_HEART
        heart.className = ""
      }
    })
    .catch( (err) => {
      modal.className = ""
      modal.innerText = err
      setTimeout(hideModal, 3000)
    })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
