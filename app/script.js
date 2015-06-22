'use strict';

var adjective, verb, noun;

$(function() {
  $('#name').on('click', function() {
    $.get('/adjective', function(response) {
      adjective = response.word;
      $('#adjective').text(adjective);
    });
  });

  $('#name').on('click', function() {
    $.get('/verb', function(response) {
      verb = response.word;
      $('#verb').text(verb);
    });
  });

  $('#name').on('click', function() {
    $.get('/noun', function(response) {
      noun = response.word;
      $('#noun').text(noun);
    });
  });

  // add fuctionality to favorites button
  $('#fave-btn').on('click', function() {
    var favorite = adjective + ' ' + verb + ' ' + noun;
    var favePost;

    // don't post band name if there isn't a favorite yet
    // but do post response hint below
    if (favorite === 'undefined undefined undefined') {
      favorite = null;
      $.post('fave', favePost, function(response) {
        var faveRes = response.msg;
        $('#faveRes').text(faveRes);
      });
    }

    // if there's a favorite then post
    // and post response informing user of save
    else if (favorite) {
      $('#fave').text(favorite);
      favePost = {word: favorite};
      $.post('fave', favePost, function(response) {
        var faveRes = response.msg;
        $('#faveRes').text(faveRes);
      });
    }
  });

  $('#submitWords').on('submit', function(e) {
    e.preventDefault();
    var adjective = $('input[name=adjective]').val();
    var adjPost;
    if (adjective) {
      adjPost = {word: adjective};
      $.post('adjective', adjPost, function(response) {
        var adjectiveRes = response.msg;
        $('#adjectiveRes').text(adjectiveRes);
      });
    }
  });

  $('#submitWords').on('submit', function(e) {
    e.preventDefault();
    var verb = $('input[name=verb]').val();
    var verbPost;
    if (verb) {
      verbPost = {word: verb};
      $.post('verb', verbPost, function(response) {
        var verbRes = response.msg;
        $('#verbRes').text(verbRes);
      });
    }
  });

  $('#submitWords').on('submit', function(e) {
    e.preventDefault();
    var noun = $('input[name=noun]').val();
    var nounPost;
    if (noun) {
      nounPost = {word: noun};
      $.post('noun', nounPost, function(response) {
        var nounRes = response.msg;
        $('#nounRes').text(nounRes);
      });
    }
  });
});
