$(document).ready(function () {

var randID = function(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$.ajax({
    type: "GET",
    url: "http://www.setgetgo.com/randomword/get.php?len=8",
    dataType: "jsonp",
    jsonpCallback: "randomWord",
    success: function(data) {
      var randDiv = randID(0,8);
      var cells = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
      var displayCell = '#'+cells[randDiv];
    $(displayCell).addClass("target").html(data.Word);
   }
 })

$(".cell").click(function(){
  var randDiv = randID(0,8);
  var cells = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var displayCell = '#'+cells[randDiv];
    $.ajax({
        type: "GET",
        url: "http://www.setgetgo.com/randomword/get.php?len=8",
        dataType: "jsonp",
        jsonpCallback: "randomWord",
        success: function(data) {
         $(".cell").empty();
         $(displayCell).addClass("target").html(data.Word);
        }
    });
    var soundPop = function() {
        var audioPop = document.getElementById("pop");
        audioPop.play();
    }
      soundPop();
});



})
