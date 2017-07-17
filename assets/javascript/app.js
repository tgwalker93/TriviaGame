$(document).ready(function() {
var intervalId;
var number = 5;
var transitionNumber = 5;
var correctAnswers=0;
var incorrectAnswers=0;
var unanswered=0; 

var questionsRemaining = 10;


var q1 = {

	answers: ["Super Mario, 1985", "Mario Bros, 1985", "Super Mario, 1983", "Mario Bros, 1983"],
	question: "What was the name of the first Mario game and what year did it come out?",
	correctAnswerIndex: 3,
	wrongResponse: "That answer is incorrect! The first Mario game came out in 1983, titled Mario Bros. Super Mario Bros was released in 1985 as a sequel to Mario Bros.",
	correctResponse: "That answer is correct! The first Mario game came out in 1983, titled Mario Bros. Super Mario Bros was released in 1985 as a sequel to Mario Bros.",
	timesUpResponse: "Time is up! The first Mario game came out in 1983, titled Mario Bros. Super Mario Bros was released in 1985 as a sequel to Mario Bros.",

	//you win giphy and you lose giphy
};
var q2 = {

	answers: ['Doctor Ivo "Eggman" Robotnik', "Chaotix", "Metal Sonic", "Professor Gerald Robotnik"],
	question: "Who was the main villian of the original Sonic the Hedgehog game?",
	correctAnswerIndex: 0,
	wrongResponse: 'That answer is incorrect! The main villian of Sonic the Hedgehog was Doctor Ivo "Eggman" Robotnik',
	correctResponse: 'That answer is incorrect! The main villian of Sonic the Hedgehog was Doctor Ivo "Eggman" Robotnik',
	timesUpResponse: 'Time is up! The main villian of Sonic the Hedgehog was Doctor Ivo "Eggman" Robotnik',

	//you win giphy and you lose giphy
};
var q3 = {

	answers: ["Funky Kong", "Candy Kong", "Daddy Kong", "Wrinkly Kong"],
	question: "Which of the following is NOT a member of the Donkey Kong family?",
	correctAnswerIndex: 2,
	wrongResponse: "That is incorrect! Daddy Kong was NOT a member of the Donkey Kong, he does not exist.",
	correctResponse: "That is correct! Daddy Kong was NOT a member of the Donkey Kong, he does not exist.",
	timesUpResponse: "Time is up! Daddy Kong was NOT a member of the Donkey Kong, he does not exist.",

	//you win giphy and you lose giphy
};
var q4 = {

	answers: ["Gameboy Advance", "Nintendo64", "GameCube", "Wii"],
	question: "What console was the The Legend of Zelda: Ocarina of Time Master Quest released on?",
	correctAnswerIndex: 2,
	wrongResponse: "That answer was incorrect! The The Legend of Zelda: Ocarina of Time Master Quest was released on the Nintendo GameGube as a remake of the The Legend of Zelda: Ocarina of Time from the Nintendo64!",
	correctResponse: "That answer was correct! The The Legend of Zelda: Ocarina of Time Master Quest was released on the Nintendo GameGube as a remake of the The Legend of Zelda: Ocarina of Time from the Nintendo64!",
	timesUpResponse: "Time is up! The The Legend of Zelda: Ocarina of Time Master Quest was released on the Nintendo GameGube as a remake of the The Legend of Zelda: Ocarina of Time from the Nintendo64!",
	
	//you win giphy and you lose giphy
};
var q5 = {

	answers: ["Pokemon Diamond & Pearl", "Pokemon Red/Green/Blue", "Pokemon Ruby & Sapphire", "Pokemon Gold & Silver"],
	question: "What Pokemon's best selling video video game?",
	correctAnswerIndex: 1,
	wrongResponse: "That answer was incorrect! Pokemon's bestselling game was it's first generation game Pokemon Red/Green/Blue coming in at roughly $1.941 billion dollars in revenue! Their first generation games first released in 1996 and it did far better than any other game that they've sold!",
	correctResponse: "That answer was correct! Pokemon's bestselling game was it's first generation game Pokemon Red/Green/Blue coming in at roughly $1.941 billion dollars in revenue! Their first generation games first released in 1996 and it did far better than any other game that they've sold!",
	timesUpResponse: "Time is up! Pokemon's bestselling game was it's first generation game Pokemon Red/Green/Blue coming in at roughly $1.941 billion dollars in revenue! Their first generation games first released in 1996 and it did far better than any other game that they've sold!",

	//you win giphy and you lose giphy
};
var q6 = {

	answers: ["Sega", "Namco", "Atari", "Midway"],
	question: "Which company developed and published Galaga in America?",
	correctAnswerIndex: 3,
	wrongResponse: "That answer was incorrect! Galaga was developed and published by Namco in Japan, and developed and published by Midway in the U.S.",
	correctResponse: "That answer was correct! Galaga was developed and published by Namco in Japan, and developed and published by Midway in the U.S.",
	timesUpResponse: "Time is up! Galaga was developed and published by Namco in Japan, and developed and published by Midway in the U.S.",

	//you win giphy and you lose giphy
};
var q7 = {

	answers: ["Falco Lombardi", "Peppy Hare", "Wolf O'Donnell", "Slippy Toad"],
	question: "Which of the following Star Fox characters was NOT a member of Fox McCloud's team?",
	correctAnswerIndex: 2,
	wrongResponse: "That answer is incorrect! Wolf O'Donnell was NOT a member of Fox McCloud's team, in fact he was a primary villian.",
	correctResponse: "That answer is correct! Wolf O'Donnell was NOT a member of Fox McCloud's team, in fact he was a primary villian.",
	timesUpResponse: "Time is up! Wolf O'Donnell was NOT a member of Fox McCloud's team, in fact he was a primary villian.",

	//you win giphy and you lose giphy
};
var q8= {

	answers: ["His sister, Tooty", "His bird, Kazooie", "Gruntilda", "Bottles, the mole"],
	question: "In the game Banjo-Kazooie on Nintendo 64, who does Banjo have to save?",
	correctAnswerIndex: 0,
	wrongResponse: "That answer is incorrect! In the original Banjo-Kazooie game, Banjo and his bird companion, Kazooie, must save his sister Tooty who was kidnapped by a jealous witch named Gruntilda!",
	correctResponse: "That answer is correct! In the original Banjo-Kazooie game, Banjo and his bird companion, Kazooie, must save his sister Tooty who was kidnapped by a jealous witch named Gruntilda!",
	timesUpResponse: "Time is up! In the original Banjo-Kazooie game, Banjo and his bird companion, Kazooie, must save his sister Tooty who was kidnapped by a jealous witch named Gruntilda!",

	//you win giphy and you lose giphy
};
var q9= {

	answers: ["Pac-Attack", "Pac-In-Time", "Pac-Man: Adventures in Time", "Pac-Man World"],
	question: "What was the name of the first 3D Pac-Man game?",
	correctAnswerIndex: 3,
	wrongResponse: "That answer is incorrect! The first 3D Pac-Man game was called Pac-Man World, developed and published in 1999 on PlayStation",
	correctResponse: "That answer is correct! The first 3D Pac-Man game was called Pac-Man World, developed and published in 1999 on PlayStation",
	timesUpResponse: "Time is up! The first 3D Pac-Man game was called Pac-Man World, developed and published in 1999 on PlayStation",
	
	//you win giphy and you lose giphy
};

var q10= {

	answers: ["Kairi", "Riku", "Roxas", "Terra"],
	question: "What is the name of the character that betrayed Sora, who was one of his close friends, in Kingdom Hearts?",
	correctAnswerIndex: 1,
	wrongResponse: "That answer is incorrect! Riku first appears a little jealous of Sora and Kairi before Destiny Islands was consumed by darkness and Riku decided to dissapear into the darkness and later became an enemy of Sora!",
	correctResponse: "That answer is correct! Riku first appears a little jealous of Sora and Kairi before Destiny Islands was consumed by darkness and Riku decided to dissapear into the darkness and later became an enemy of Sora!",	
	timesUpResponse: "Time is up! Riku first appears a little jealous of Sora and Kairi before Destiny Islands was consumed by darkness and Riku decided to dissapear into the darkness and later became an enemy of Sora!",	

	//you win giphy and you lose giphy
};



var arrayOfQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];



var randomNum;

// = Math.floor(Math.random()*(arrayOfQuestions.length-1)) + 1;


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
	randomNum = Math.floor(Math.random()*(arrayOfQuestions.length));
	var questionObject = arrayOfQuestions[randomNum];
	var randQuestion = questionObject.question;
	var randAnswer = questionObject.answers;
	getQuestion(randQuestion, randAnswer, questionObject.correctAnswerIndex);
}



// TRANSITION SLIDES BEGIN HERE ***********************************************************************************************
function answerCorrectly() {
	correctAnswers++;
	questionsRemaining--;


	if(questionsRemaining===0){
		endGame();
		return;

	}else {

	transitionNumber=5;

	emptyDivs();


	var questionObject = arrayOfQuestions[randomNum];

	$("#timer").html(questionObject.correctResponse);
	clearInterval(intervalId);
	arrayOfQuestions.splice(randomNum, 1);
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


	var questionObject = arrayOfQuestions[randomNum];

	$("#timer").html(questionObject.wrongResponse);
	clearInterval(intervalId);
	arrayOfQuestions.splice(randomNum, 1);
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


	var questionObject = arrayOfQuestions[randomNum];
	$("#timer").html(questionObject.timesUpResponse);
	clearInterval(intervalId);
	arrayOfQuestions.splice(randomNum, 1);
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
// TRANSITION SLIDES END HERE ----------------------------------------------------------------------------------------------------------





function runTimer() {
	$("#triviaBody").html("");
	$("#triviaBody").append("<div id='timer'> <h2> Time Left: "+number+ "</h2> </div>");
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

	var playAgain = $("<button id='restartButton' type='button' class='btn btn-primary'>Play Again</button>");
	$("#triviaBody").append(playAgain);

	$("#restartButton").on("click",function(){
	number = 5;
	transitionNumber = 5;
	correctAnswers=0;
	incorrectAnswers=0;
	unanswered=0; 

	questionsRemaining = 10;
	arrayOfQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	randomNum = Math.floor(Math.random()*(arrayOfQuestions.length));
	timesUpCheck = false;

	generateRandomQuestion();

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

























});