function toDo (task, timeOfDay, frequency, timeLength) {
  this.task = task;
  this.timeOfDay = timeOfDay;
  this.frequency = frequency;
  this.timeLength = timeLength;
};
toDo.prototype.taskFrequency = function(task, frequency) {
  return this.task + ", " + this.frequency;
};

$(document).ready(function(event) {

})
