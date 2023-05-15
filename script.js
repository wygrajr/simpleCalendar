$(document).ready(function() {
  var dateNow=dayjs();

$("#currentDay").text(dateNow.format("dddd, MMMM D"));
});

var hourNow=dayjs().hour();

$(".time-block").each(function(){
  $(this).removeClass("past present future");

  var currentHour=parseInt($(this).attr("id").split('-')[1]);//<-- splits the ID at - and converts it to an array.

  if (hourNow>currentHour){
    $(this).addClass("past");
  } else if (hourNow<currentHour){
    $(this).addClass("future");
  } else {
    $(this).addClass("present")
  }
});
