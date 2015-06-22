'use strict';

module.exports = function postFavorite(word, object) {
  if (object.hasOwnProperty(word)) {
    return {msg: 'Press GET BAND NAME first!'};
  } else {
    object[word] = true;
    return {msg: 'Current favorite: ' + word};
  }
};
