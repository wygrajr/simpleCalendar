//Add Date at top of Scheduler
$(document).ready(function() {
  var dateNow=dayjs();

$("#currentDay").text(dateNow.format("dddd, MMMM D"));
});

//Scheduler recognizes what time of day it is
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

//local storage of data inputed by user
$(".saveBtn").on("click",function(){
  var userInput=$(this).siblings(".description").val();
  var timeBlock=$(this).parent().attr("id");

  localStorage.setItem(timeBlock, JSON.stringify(userInput))
});

$("#hour-0 .description").val(JSON.parse(localStorage.getItem("hour-0")));