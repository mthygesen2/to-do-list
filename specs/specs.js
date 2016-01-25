describe("toDo", function(){
  it("It will create a new toDo item", function () {
    var testToDo = new toDo ("Walk the dog", "Morning", "Daily", "15 minutes");
    expect(testToDo.task).to.equal("Walk the dog");
    expect(testToDo.timeOfDay).to.equal("Morning");
    expect(testToDo.frequency).to.equal("Daily");
    expect(testToDo.timeLength).to.equal("15 minutes");
  });
  it("will creat a method to show details of task", function(){
    var testToDo = new toDo ("Walk the dog", "Morning", "Daily", "15 minutes");
    expect(testToDo.taskFrequency()).to.equal("Walk the dog, Daily")
  });
});
