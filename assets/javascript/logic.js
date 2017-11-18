if (typeof config === 'undefined') {
  console.log('undefined firebase')
}

firebase.initializeApp(config);

var database = firebase.database();

$("#addTrainBttn").on("click", function(event) {
	event.preventDefault();

	
})