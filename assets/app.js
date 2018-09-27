   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyCTKc1pzsQ-KD1DIyZFh9zg2gq61xCkXRI",
    authDomain: "trainschedulershevin.firebaseapp.com",
    databaseURL: "https://trainschedulershevin.firebaseio.com",
    projectId: "trainschedulershevin",
    storageBucket: "trainschedulershevin.appspot.com",
    messagingSenderId: "120362319404"
  };
  firebase.initializeApp(config);
 var database = firebase.database();
  
  // 2. Button for adding trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainTime = moment($("#time-input").val().trim(), "HH:mm").format("X");
    var trainFrequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      time: trainTime,
      frequency: trainFrequency
    };
  
    // Uploads train data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);

    alert("Train successfully added");

  // Clears all of the text-boxes
  $("train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
})

var newRow = $("<tr>").append(
  $("<td>").text(trainName),
  $("<td>").text(trainDestination),
  $("<td>").text(trainTime),
  $("<td>").text(trainFrequency)
);

// Append the new row to the table
$("#train-table > tbody").append(newRow);


