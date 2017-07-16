//$(document).ready(function() {
var intervalId;
var number = 5;
var transitionNumber = 5;
var correctAnswers;
var IncorrectAnswers;
var Unanswered; 

var randomNum = Math.floor(Math.random()*3) + 1;


var q1Answers = ["A", "B", "C", "D"];
var q1 = "What is the answer to number 1?";

var q2Answers = ["A", "B", "C", "D"];
var q2 = "What is the answer to number 2?";

var q3Answers = ["A", "B", "C", "D"];
var q3 = "What is the answer to number 3?";

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
	randomNum = Math.floor(Math.random()*3) + 1;
	var randQuestion = eval("q" + randomNum);
	var randAnswer = eval("q" + randomNum + "Answers");
	getQuestion(randQuestion, randAnswer, 0);

}



// TRANSITION SLIDES BEGIN HERE
function answerCorrectly() {
	
	transitionNumber=5;

	emptyDivs();




	$("#timer").html("You answered correctly!");
	clearInterval(intervalId);

	intervalId = setInterval(transitionDecrement, 1000);



}

function answerWrong() {

	transitionNumber=5;

	emptyDivs();




	$("#timer").html("You answered wrong!");
	clearInterval(intervalId);

	intervalId = setInterval(transitionDecrement, 1000);

}

function outOfTime() {

	transitionNumber=5;

	emptyDivs();



	$("#timer").html("You ran out of time!");
	clearInterval(intervalId);

	intervalId = setInterval(transitionDecrement, 1000);


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




function startGame() {

}
getQuestion(q1, q1Answers, 0);

//runTimer();

























//}