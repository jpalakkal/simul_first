$(document).ready(function () {



    var urlTwit = "https://twitrss.me/twitter_user_to_rss/?user=shankranga";
    var urlInsta = "https://websta.me/rss/n/texas0418";

    

    $("#twitterClick").click(function() {
        feednami.load(urlTwit, function(result) {
          if (result.error) {
            console.log(result.error);
          } else {
            var entries = result.feed.entries;
            for (var i = 0; i < 5; i++) {
              var twitterContainer = $("<div>");
              var entry = entries[i];
              twitterContainer.append($("<h3>" + entry.author + "<h3>"));
              twitterContainer.append($("<p>" + entry.title + "<p>"));
   
              $("#feeds-go-here").append(twitterContainer);
              console.log(twitterContainer);
              $(this).hide();
            }
          }
        });
      });

    
      $("#instaClick").click(function() {
        feednami.load(urlInsta, function(result) {
          if (result.error) {
            console.log(result.error);
          } else {
            var entries = result.feed.entries;
            for (var i = 0; i < 5; i++) {
              var instaContainer = $("<div>");
              var entry = entries[i];
              instaContainer.append($("<h3>" + entry.description + "<h3>"));
              instaContainer.append($("<p>" + entry.link + "<p>"));
   
              $("#feeds-go-here").append(instaContainer);
            }
          }
        });
      });

      
},  
function (errorObject) {
console.log("The read failed: " + errorObject.code);


	
});

