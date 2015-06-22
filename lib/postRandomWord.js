'use strict'

//add word to random word
module.exports = function postRandomWord (word, object) {
  //if the word doesn't exist already

  //if the word does exist
  if (object.hasOwnProperty(word)) {
    return {msg: "Thanks for trying, but we have that word!"};
  } else {
    object[word] = true;
    return {msg: "Thanks for submitting your word: " + word + '!'};
  }
  //check if the word exists
  // if the word doesn't exist, add it as a property to that obj
  //  and send a msg back thanking them for word
  // if the word does exist, then send a nice msg back
};
