$(document).ready(function(){
  
  function getQuote(){
    
    var quotes = [
      "This ain't it.",
      "You're gonna want more of this",
      "Brunch Mafia"
    ];
    var author = ["Chief", "TacoBell Hot Sauce", "Peyton Thomas"];
    var rand = Math.floor((Math.random()*quotes.length));
    var randQuote = quotes[rand];
    var randAuthor= author[rand];
    
    $("#text").text(randQuote);
    $("#author").text(randAuthor);
  }
  
  $("#new-quote").on("click", function(){
    getQuote();
  });
  
});