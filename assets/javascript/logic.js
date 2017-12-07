// Console log it when firebase is failed.
if (typeof config === 'undefined') {
  console.log('undefined firebase')
}

// Initialize the firebase from config.js.
firebase.initializeApp(config);

var database = firebase.database();

// Grab the input. 
$("#addTrainBttn").on("click", function() {
  var trainName = $("#trainNameInput").val().trim();
  var trainDestination = $("#destinationInput").val().trim();
  var firstTrainTime = $("#firstTrainTime").val().trim();
  var trainFrequnecy = $("#frequency").val().trim();

// Hold the data temporary by using objects.
// Firebase objects are "LEFT" and variables in JavaScript are "RIGHT".
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    firstTrain: firstTrainTime,
    frequency: trainFrequnecy
  }

// Push the data into the firebase.
database.ref().push(newTrain);

console.log("Train was successfully added");

// Empty the form input sections.
$("#trainNameInput").val("");
$("#destinationInput").val("");
$("#firstTrainTime").val("");
$("#frequency").val("");
 
// After finishing all works within the "onclick" event, function will be stopped.
// Or, I can expect the same result by using "event.preventDefault()"
// Or, "event.returnValue = false"
// Or, "event.stopPropagation()" ...
return false
});


database.ref().on("child_added", function (childSnapshot, preventChildKey) {
  console.log(childSnapshot.val());

  var displayName = childSnapshot.val().name;
  var displayDest = childSnapshot.val().destination;
  var displayFreq = childSnapshot.val().frequency;
  var displayFirstTrain = childSnapshot.val().firstTrain;
  var displayTime = displayFirstTrain.split(":");
  var trainTime = moment().hours(displayTime[0]).minutes(displayTime[1]);
  var maxTime = moment.max(moment(), trainTime);
})








