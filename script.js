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
$("#hour-1 .description").val(JSON.parse(localStorage.getItem("hour-1")));
$("#hour-2 .description").val(JSON.parse(localStorage.getItem("hour-2")));
$("#hour-3 .description").val(JSON.parse(localStorage.getItem("hour-3")));
$("#hour-4 .description").val(JSON.parse(localStorage.getItem("hour-4")));
$("#hour-5 .description").val(JSON.parse(localStorage.getItem("hour-5")));
$("#hour-6 .description").val(JSON.parse(localStorage.getItem("hour-6")));
$("#hour-7 .description").val(JSON.parse(localStorage.getItem("hour-7")));
$("#hour-8 .description").val(JSON.parse(localStorage.getItem("hour-8")));
$("#hour-9 .description").val(JSON.parse(localStorage.getItem("hour-9")));
$("#hour-10 .description").val(JSON.parse(localStorage.getItem("hour-10")));
$("#hour-11 .description").val(JSON.parse(localStorage.getItem("hour-11")));
$("#hour-12 .description").val(JSON.parse(localStorage.getItem("hour-12")));
$("#hour-13 .description").val(JSON.parse(localStorage.getItem("hour-13")));
$("#hour-14 .description").val(JSON.parse(localStorage.getItem("hour-14")));
$("#hour-15 .description").val(JSON.parse(localStorage.getItem("hour-15")));
$("#hour-16 .description").val(JSON.parse(localStorage.getItem("hour-16")));
$("#hour-17 .description").val(JSON.parse(localStorage.getItem("hour-17")));
$("#hour-18 .description").val(JSON.parse(localStorage.getItem("hour-18")));
$("#hour-19 .description").val(JSON.parse(localStorage.getItem("hour-19")));
$("#hour-20 .description").val(JSON.parse(localStorage.getItem("hour-20")));
$("#hour-21 .description").val(JSON.parse(localStorage.getItem("hour-21")));
$("#hour-22 .description").val(JSON.parse(localStorage.getItem("hour-22")));
$("#hour-23 .description").val(JSON.parse(localStorage.getItem("hour-23")));