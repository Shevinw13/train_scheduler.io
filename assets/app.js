
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
    var unTrainTime = $("#time-input").val().trim();
    var trainTime = moment().format(unTrainTime,"HH:mm"); 
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
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
})

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;
  console.log(trainName,trainDestination, trainTime, trainFrequency);


  $("#train-table").append(
    "<tr><td>"+ trainName +
    "</td><td>" + trainDestination +
    "</td><td>" + trainTime + 
    "</td><td>" + trainFrequency + "</tr></td>");

  $("#employee-table > tbody").append(newRow);
  
})



