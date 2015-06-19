"use strict";

$(function() {
  $("#name").on("click", function() {
    $.get("/adjective", function(response) {
      var adjective = response.word;
      $("#adjective").text(adjective);
    });
  });

  $("#name").on("click", function() {
    $.get("/verb", function(response) {
      var verb = response.word;
      $("#verb").text(verb);
    });
  });

  $("#name").on("click", function() {
      $.get("/noun", function(response) {
        var noun = response.word;
        $("#noun").text(noun);
      });
    });

  $("#submitWords").on("submit", function(e) {
    e.preventDefault();
    var adjective = $("input[name=adjective]").val();
    var adjPost;
    //good practice to add if so it doesn't use server w/o
    //text entered/submitted
    if (adjective) {
      adjPost = {word: adjective};
      $.post("adjective", adjPost, function(response) {
        var adjectiveRes = response.msg;
        $("#adjectiveRes").text(adjectiveRes);
      });
    }
  });

  $("#submitWords").on("submit", function(e) {
    e.preventDefault();
    var verb = $("input[name=verb]").val();
    var verbPost;
    //good practice to add if so it doesn't use server w/o
    //text entered/submitted
    if (verb) {
      verbPost = {word: verb};
      $.post("verb", verbPost, function(response) {
        var verbRes = response.msg;
        $("#verbRes").text(verbRes);
      });
    }
  });

  $("#submitWords").on("submit", function(e) {
    e.preventDefault();
    var noun = $("input[name=noun]").val();
    var nounPost;
    //good practice to add if so it doesn't use server w/o
    //text entered/submitted
    if (noun) {
      nounPost = {word: noun};
      $.post("noun", nounPost, function(response) {
        var nounRes = response.msg;
        $("#nounRes").text(nounRes);
      });
    }
  });

});
