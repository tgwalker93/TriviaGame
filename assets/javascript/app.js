//$(document).ready(function() {
var intervalId;
var number = 5;
var transitionNumber = 5;
var correctAnswers=0;
var incorrectAnswers=0;
var unanswered=0; 

var questionsRemaining = 2;


var q1 = {

	answers: ["A", "B", "C", "D"],
	question: "What is the answer to number 1?",
	correctAnswerIndex: 0,
	//you win giphy and you lose giphy
};
var q2 = {

	answers: ["A", "B", "C", "D"],
	question: "What is the answer to number 2?",
	correctAnswerIndex: 0,
	//you win giphy and you lose giphy
};
// var q3 = {

// 	q1Answers: ["A", "B", "C", "D"],
// 	q1Question: "What is the answer to number 3?",
// 	//you win giphy and you lose giphy
// };
// var q4 = {

// 	q1Answers: ["A", "B", "C", "D"],
// 	q1Question: "What is the answer to number 4?",
// 	//you win giphy and you lose giphy
// };


var arrayOfQuestions = [q1, q2];

// var q1Answers = ["A", "B", "C", "D"];
// var q1 = "What is the answer to number 1?";

// var q2Answers = ["A", "B", "C", "D"];
// var q2 = "What is the answer to number 2?";

// var q3Answers = ["A", "B", "C", "D"];
// var q3 = "What is the answer to number 3?";

var randomNum = Math.floor(Math.random()*(arrayOfQuestions.length-1)) + 1;


var timesUpCheck = false;


//var triviaQuestions = {
function getQuestion(question, answers, correctAnswerIndex) {

	runTimer();
	$("#question").html(question);

	$("#answer1").html(answers[0]);
	$("#answer1").on("click",function(){
		console.log("You chose A!");
		if(correctAnswerIndex === 0){
			$("div").off("click");
			answerCorrectly();
			return;
		}else {
			$("div").off("click");
			answerWrong();
			return;
		}

	});


	$("#answer2").html(answers[1]);
	$("#answer2").on("click",function(){
		console.log("You chose B!");
		if(correctAnswerIndex === 1){
			$("div").off("click");
			answerCorrectly();
			return;

		}else {
			$("div").off("click");
			answerWrong();
			return;
		}
	});


	$("#answer3").html(answers[2]);
	$("#answer3").on("click",function(){
		console.log("You chose C!");
		if(correctAnswerIndex === 2){
			$("div").off("click");
			answerCorrectly();
			return;

		}else {
			$("div").off("click");
			answerWrong();
			return;
		}
	});


	$("#answer4").html(answers[3]);
	$("#answer4").on("click",function(){
		console.log("You chose D!");
		if(correctAnswerIndex === 3){
			$("div").off("click");
			answerCorrectly();
			return;

		}else {
			$("div").off("click");
			answerWrong();
			return;
		}
	});




		
	}
//};

function generateRandomQuestion() {
	randomNum = Math.floor(Math.random()*(arrayOfQuestions.length-1));
	var questionObject = arrayOfQuestions[randomNum];
	arrayOfQuestions.splice(randomNum, 1);
	var randQuestion = questionObject.question
	var randAnswer = questionObject.answers
	getQuestion(randQuestion, randAnswer, questionObject.correctAnswerIndex);
}



// TRANSITION SLIDES BEGIN HERE
function answerCorrectly() {
	correctAnswers++;
	questionsRemaining--;


	if(questionsRemaining===0){
		endGame();
		return;

	}else {

	transitionNumber=5;

	emptyDivs();




	$("#timer").html("You answered correctly!");
	clearInterval(intervalId);

	intervalId = setInterval(transitionDecrement, 1000);

}

}

function answerWrong() {
	incorrectAnswers++;
	questionsRemaining--;
	if(questionsRemaining===0){
		endGame();
	}else {


	transitionNumber=5;

	emptyDivs();




	$("#timer").html("You answered wrong!");
	clearInterval(intervalId);

	intervalId = setInterval(transitionDecrement, 1000);

		}

}

function outOfTime() {
	unanswered++;
	questionsRemaining--;
	if(questionsRemaining===0){
		endGame();
	}else {




	transitionNumber=5;

	emptyDivs();



	$("#timer").html("You ran out of time!");
	clearInterval(intervalId);

	intervalId = setInterval(transitionDecrement, 1000);
}

}

function emptyDivs(){
	$("#timer").html("");
	$("#question").html("");
  
	$("#answer1").html("");

	 $("#answer2").html("");

     $("#answer3").html("");

	$("#answer4").html("");

}
// TRANSITION SLIDES END HERE





function runTimer() {
	$("#triviaBody").html("");
	$("#triviaBody").append("<div id='timer'>"+ "</div>");
	intervalId = setInterval(decrement, 1000);


	$("#triviaBody").append("<div id='question'>"+ "</div>");
	$("#triviaBody").append("<div id='answer1'>"+ "</div>");
	$("#triviaBody").append("<div id='answer2'>"+ "</div>");
	$("#triviaBody").append("<div id='answer3'>" + "</div>");
	$("#triviaBody").append("<div id='answer4'>" + "</div>");
	//$("#timer").html("<h2> Time Left: " + number + "</h2>");
}

function decrement() {

	number --;

	$("#timer").html("<h2> Time Left: " + number + "</h2>");



	if(number === 0) {
		stop();

		timesUpCheck = true;
		outOfTime();
	}


}



function transitionDecrement() {
	number = 5;
	transitionNumber --;


	//$("#timer").append(transitionNumber);
	if(transitionNumber === 0) {
	stop();

	generateRandomQuestion();

	}

}

function stop() {

	clearInterval(intervalId);
}



function endGame(){
	clearInterval(intervalId);
	emptyDivs();

	$("#timer").html("Game Over! Here's how you did: " 
		+ "<br>Correct Answers: " + correctAnswers 
		+ "<br>Incorrect Answers: " + incorrectAnswers
		+ "<br>Unanswered: "  + unanswered );

	var playAgain = $("<button id='restartButton' type='button' class='btn btn-primary'>playAgain</button>");
	$("#triviaBody").append(playAgain);

	$("#restartButton").on("click",function(){
	number = 5;
	transitionNumber = 5;
	correctAnswers=0;
	incorrectAnswers=0;
	unanswered=0; 

	questionsRemaining = 2;

	randomNum = randomNum = Math.floor(Math.random()*(arrayOfQuestions.length-1)) + 1;
	 timesUpCheck = false;

	getQuestion(q1, q1Answers, 0);

	});
	




}
function startGame() {
	console.log(arrayOfQuestions[0]);
	var start = $("<button id='startButton' type='button' class='btn btn-primary'>Start</button>");
	$("#triviaBody").append(start);

	$("#startButton").on("click",function(){
		generateRandomQuestion();

	});
	

}
startGame();
//getQuestion(q1, q1Answers, 0);
//runTimer();

























//}