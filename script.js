$(document).ready(function () {

var randomWord = function(){
    $.ajax({
        type: "GET",
        url: "http://www.setgetgo.com/randomword/get.php?len=8",
        dataType: "jsonp",
        jsonpCallback: "randomWord",
        success: function(data) {
        $("#one").html(data["Word"]);
        }
    });
}

randomWord();


})
