var date = moment();
var eDisplayCurrentDay = document.getElementById("currentDay");
eDisplayCurrentDay.innerHTML = date.format('dddd, MMMM Mo')

$( document ).ready(function() {

    $(".saveBtn").on("click", function() {
        
        var descText = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");
  
        localStorage.setItem(hour, descText);
    });

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));

    function checkTime() {
        var currentTime = moment().hours();
    
         $(".row").each(function() {
          var hourRow = $(this).attr("id");
          
          hourRow = parseInt(hourRow);
          if (hourRow < currentTime) {
            $(this).addClass("past");
          }
          else if (hourRow === currentTime) {
            $(this).addClass("present");
          }
          else {
            $(this).addClass("future");
          }
        })
      }
    
      checkTime();
    
      var checkTimeRunner = setInterval(checkTime, 60000);
    
    });