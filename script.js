$(document).ready(function () {

var randID = function(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$(".cell").click(function(){
  var randDiv = randID(0,8);
  var cells = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var displayCell = '"#'+cells[randDiv]+'"'; //get a random ID in the "#ID" format
    $.ajax({
        type: "GET",
        url: "http://www.setgetgo.com/randomword/get.php?len=8",
        dataType: "jsonp",
        jsonpCallback: "randomWord",
        success: function(data) {
         $(displayCell).html(data.Word); // why doesn't it work?
        }
    });
});


})
