function toDo (task, timeOfDay, frequency, timeLength) {
  this.task = task;
  this.timeOfDay = timeOfDay;
  this.frequency = frequency;
  this.timeLength = timeLength;
};
toDo.prototype.taskFrequency = function() {
  return this.task + ", " + this.frequency;
};

$(document).ready(function() {
  $("form#new-toDo").submit(function(event){
    event.preventDefault();

    var inputTask = $("#new-task").val();
    var inputTime = $("#new-timeOfDay").val();
    var inputFrequency = $("#new-frequency").val();
    var inputLength = $("#new-timeLength").val();
    var newToDo = new toDo(inputTask, inputTime, inputFrequency, inputLength);

    $("ol#list").append("<li><span class='onList'>" + newToDo.taskFrequency() + ", " + newToDo.timeOfDay +", "+ newToDo.timeLength + "</span>");
      $(".onList").dblclick(function(){

      });

    $("input").val("");

  });
});
