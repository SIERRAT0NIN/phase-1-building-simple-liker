// Defining text characters for the empty and full hearts for you to use later.

// Your JavaScript code goes here!
mimicServerCall();
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";
const like = document.querySelector(".like-glyph");

function clickLike() {
  like.addEventListener("click", () => {
    if (like.textContent === EMPTY_HEART) {
      like.textContent = FULL_HEART;
    } else if (like.textContent === FULL_HEART) {
      like.textContent = EMPTY_HEART;
    }
  });
}

clickLike();

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

// If dataset.like exists, then run the handleLikeClick function. Same with the other buttons/datasets
// document.addEventListener("click", function (e) {
//   if (e.target.dataset.like) {
//     handleLikeClick(e.target.dataset.like);

//   } else if (e.target.dataset.reply) {
//     handleReplyClick(e.target.dataset.reply);
//   } else if (e.target.id === "tweet-btn") {
//     handleTweetBtnClick();
//   }
// });
// // Like button; tweetsData.filter(function(tweet))
// // tweet.uuid is equal to tweetId
// function handleLikeClick(tweetId) {
//   const targetTweetObj = tweetsData.filter(function (tweet) {
//     return tweet.uuid === tweetId;
//   })[0];

//   if (targetTweetObj.isLiked) {
//     targetTweetObj.likes--;
//   } else {
//     targetTweetObj.likes++;
//   }
//   //   I do not understand this
//   targetTweetObj.isLiked = !targetTweetObj.isLiked;
//   render();
// }
