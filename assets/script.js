// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDate = dayjs();
$("#currentDay").text(currentDate.format("MMM D, YYYY, h:mm:ss"));

$(function Schdeuler() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn").on("click", function () {
    //buttons functionality
    console.log("Button Clicked!");
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id")
 
    localStorage.setItem(time, task); // userinput is stored in local storage
    localStorage.getItem(time, task);
  });
  var currentHour  = dayjs().hour();

  function updateTime() {
    $('.time-block').each(function () {
    var blockhour = parseInt($(this).attr('id').split("-")[1]);
    if(blockhour < currentHour){
      $(this).addClass('past');
    } else if (blockhour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
  }
  updateTime();


  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));




  //save textarea input as a varaible
  //save time in div into varaible use both to save to local storage
  //grab time block ID
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // function renderToDoItem() {
  //   var userInput = $("#userInput");
  //   userInput.textContent = userInput;
  //   localStorage.setItem("To do: ", userInput);
  //   renderToDoItem();
  // }

  // TODO: Add code to display the current date in the header of the page.
  return;
});
