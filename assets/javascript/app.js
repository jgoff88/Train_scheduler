    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCrIOgrcjI71FfxuZoze8n5B3wYZJFJmGk",
    authDomain: "train-schedule-maker.firebaseapp.com",
    databaseURL: "https://train-schedule-maker.firebaseio.com/",
    projectId: "train-schedule-maker",
    storageBucket: "train-schedule-maker.appspot.com",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  $("#add-train").on("click", function () {
    event.preventDefault();

      var trainName = $("#train-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var trainTime =  moment($("#start-input").val().trim(),).format("HHHH");
      //var frequency = $("#frequency-input").val().trim(); 
        // console.log(trainName);
        // console.log(destination);
        console.log(trainTime);
        // console.log(frequency); 
        database.ref().set({
            name: trainName,
            destinastion: destination,
            start: trainTime,
            rate: frequency
        });   
     var newTrain = {
        name: trainName,
        destinastion: destination,
        start: trainTime,
        rate: frequency
        };
        
          database.ref().push(newTrain);
});
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destinastion;
    var trainTime = childSnapshot.val().start;
    var frequency = childSnapshot.val().rate;
  
    // console.log(trainName);
    // console.log(destination);
    // console.log(trainTime);
    // console.log(frequency);
    var nextTrain = moment().format("H HH");
    console.log(nextTrain);
    var frequency = moment().diff(moment());
  

    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(trainTime),
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
});