$(document).ready(function() {

var intervalId;
var number = 20;
var transitionNumber = 15;
var correctAnswers=0;
var incorrectAnswers=0;
var unanswered=0; 
var questionsRemaining = 10;


var q1 = {

	answers: ["<button id='answer1Button' type='button' class='btn btn-primary'>Super Mario, 1985</button>", "<button id='answer2Button' type='button' class='btn btn-primary'>Mario Bros, 1985</button>", "<button id='answer3Button' type='button' class='btn btn-primary'>Super Mario, 1983</button>", "<button id='answer4Button' type='button' class='btn btn-primary'>Mario Bros, 1983</button>"],
	question: "What was the name of the first Mario game and what year did it come out?",
	correctAnswerIndex: 3,
	wrongResponse: "That answer is incorrect! The first Mario game came out in 1983, titled Mario Bros. Super Mario Bros was released in 1985 as a sequel to Mario Bros.",
	correctResponse: "That answer is correct! The first Mario game came out in 1983, titled Mario Bros. Super Mario Bros was released in 1985 as a sequel to Mario Bros.",
	timesUpResponse: "Time is up! The first Mario game came out in 1983, titled Mario Bros. Super Mario Bros was released in 1985 as a sequel to Mario Bros.",


	getMusic: function() {

	      var audio = document.getElementById("audiotag");
	      audio.innerHTML = "";
	      var song = document.createElement("source");
	      
	      song.setAttribute('src', 'assets/audio/mario.mp3');
	      song.setAttribute('type', 'audio/ogg');
	      song.setAttribute('type', 'audio/mpeg');
	      audio.appendChild(song);
	      audio.load();
	      audio.play();
    
      },

	getGiphy: function() {

		$("#question").html("<iframe src='https://giphy.com/embed/vi2ciYHi5u0FO' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/vi2ciYHi5u0FO'></a></p>");
	}

};
var q2 = {

	answers: ["<button id='answer1Button' type='button' class='btn btn-primary'>Doctor Ivo 'Eggman' Robotnik</button>", "<button id='answer2Button' type='button' class='btn btn-primary'>Chaotix</button>", "<button id='answer3Button' type='button' class='btn btn-primary'>Metal Sonic</button>", "<button id='answer4Button' type='button' class='btn btn-primary'>Professor Gerald Robotnik</button>"],

	question: "Who was the main villian of the original Sonic the Hedgehog game?",
	correctAnswerIndex: 0,
	wrongResponse: 'That answer is incorrect! The main villian of Sonic the Hedgehog was Doctor Ivo "Eggman" Robotnik',
	correctResponse: 'That answer is correct! The main villian of Sonic the Hedgehog was Doctor Ivo "Eggman" Robotnik',
	timesUpResponse: 'Time is up! The main villian of Sonic the Hedgehog was Doctor Ivo "Eggman" Robotnik',



	getMusic: function() {

	      var audio = document.getElementById("audiotag");
	      audio.innerHTML = "";
	      var song = document.createElement("source");
	      
	      song.setAttribute('src', 'assets/audio/sonic.mp3');
	      song.setAttribute('type', 'audio/ogg');
	      song.setAttribute('type', 'audio/mpeg');
	      audio.appendChild(song);
	      audio.load();
	      audio.play();
    
      },

	getGiphy: function() {

		$("#question").html("<iframe src='https://giphy.com/embed/rIlz9XFngD09G' width='480' height='263' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/sonic-the-hedgehog-rIlz9XFngD09G'></a></p>");		
	}
};
var q3 = {

	answers: ["<button id='answer1Button' type='button' class='btn btn-primary'>Funky Kong</button>", "<button id='answer2Button' type='button' class='btn btn-primary'>Candy Kong</button>", "<button id='answer3Button' type='button' class='btn btn-primary'>Daddy Kong</button>", "<button id='answer4Button' type='button' class='btn btn-primary'>Wrinkly Kong</button>"],
	question: "Which of the following is NOT a member of the Donkey Kong family?",
	correctAnswerIndex: 2,
	wrongResponse: "That is incorrect! Daddy Kong was NOT a member of the Donkey Kong, he does not exist.",
	correctResponse: "That is correct! Daddy Kong was NOT a member of the Donkey Kong, he does not exist.",
	timesUpResponse: "Time is up! Daddy Kong was NOT a member of the Donkey Kong, he does not exist.",

	getMusic: function() {

	      var audio = document.getElementById("audiotag");
	      audio.innerHTML = "";
	      var song = document.createElement("source");
	      
	      song.setAttribute('src', 'assets/audio/donkeykong.mp3');
	      song.setAttribute('type', 'audio/ogg');
	      song.setAttribute('type', 'audio/mpeg');
	      audio.appendChild(song);
	      audio.load();
	      audio.play();
    
      },

	getGiphy: function() {

		$("#question").html("<iframe src='https://giphy.com/embed/dx3CzGXf8FmiQ' width='480' height='446' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>");		
	}
};
var q4 = {

	answers: ["<button id='answer1Button' type='button' class='btn btn-primary'>Gameboy Advance</button>", "<button id='answer2Button' type='button' class='btn btn-primary'>Nintendo64</button>", "<button id='answer3Button' type='button' class='btn btn-primary'>GameCube</button>", "<button id='answer4Button' type='button' class='btn btn-primary'>Wii</button>"],
	question: "What console was the The Legend of Zelda: Ocarina of Time Master Quest released on?",
	correctAnswerIndex: 2,
	wrongResponse: "That answer was incorrect! The The Legend of Zelda: Ocarina of Time Master Quest was released on the Nintendo GameGube as a remake of the The Legend of Zelda: Ocarina of Time from the Nintendo64!",
	correctResponse: "That answer was correct! The The Legend of Zelda: Ocarina of Time Master Quest was released on the Nintendo GameGube as a remake of the The Legend of Zelda: Ocarina of Time from the Nintendo64!",
	timesUpResponse: "Time is up! The The Legend of Zelda: Ocarina of Time Master Quest was released on the Nintendo GameGube as a remake of the The Legend of Zelda: Ocarina of Time from the Nintendo64!",


	getMusic: function() {

	      var audio = document.getElementById("audiotag");
	      audio.innerHTML = "";
	      var song = document.createElement("source");
	      
	      song.setAttribute('src', 'assets/audio/link.mp3');
	      song.setAttribute('type', 'audio/ogg');
	      song.setAttribute('type', 'audio/mpeg');
	      audio.appendChild(song);
	      audio.load();
	      audio.play();
    
      },

	getGiphy: function() {

		$("#question").html("<iframe src='https://giphy.com/embed/HDrjzCsIrMvII' width='480' height='240' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/link-super-smash-bros-legend-of-zelda-HDrjzCsIrMvII'></a></p>");
	}
};
var q5 = {

	answers: ["<button id='answer1Button' type='button' class='btn btn-primary'>Pokemon Diamond & Pearl</button>", "<button id='answer2Button' type='button' class='btn btn-primary'>Pokemon Red/Green/Blue</button>", "<button id='answer3Button' type='button' class='btn btn-primary'>Pokemon Ruby & Sapphire</button>", "<button id='answer4Button' type='button' class='btn btn-primary'>Pokemon Gold & Silver</button>"],
	question: "What Pokemon's best selling video video game?",
	correctAnswerIndex: 1,
	wrongResponse: "That answer was incorrect! Pokemon's bestselling game was its first generation game Pokemon Red/Green/Blue coming in at roughly $1.941 billion dollars in revenue! Their first generation games first released in 1996 and it did far better than any other game that they've sold!",
	correctResponse: "That answer was correct! Pokemon's bestselling game was its first generation game Pokemon Red/Green/Blue coming in at roughly $1.941 billion dollars in revenue! Their first generation games first released in 1996 and it did far better than any other game that they've sold!",
	timesUpResponse: "Time is up! Pokemon's bestselling game was its first generation game Pokemon Red/Green/Blue coming in at roughly $1.941 billion dollars in revenue! Their first generation games first released in 1996 and it did far better than any other game that they've sold!",


	getMusic: function() {

	      var audio = document.getElementById("audiotag");
	      audio.innerHTML = "";
	      var song = document.createElement("source");
	      
	      song.setAttribute('src', 'assets/audio/pikachu.mp3');
	      song.setAttribute('type', 'audio/ogg');
	      song.setAttribute('type', 'audio/mpeg');
	      audio.appendChild(song);
	      audio.load();
	      audio.play();
    
      },


	getGiphy: function() {

		$("#question").html("<iframe src='https://giphy.com/embed/13SqcuthpI2m1q' width='480' height='240' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/pokeball-jigglypuff-gengar-13SqcuthpI2m1q'></a></p>");		
	}
};
var q6 = {

	answers: ["<button id='answer1Button' type='button' class='btn btn-primary'>Sega</button>", "<button id='answer2Button' type='button' class='btn btn-primary'>Namco</button>", "<button id='answer3Button' type='button' class='btn btn-primary'>Atari</button>", "<button id='answer4Button' type='button' class='btn btn-primary'>Midway</button>"],
	question: "Which company published Galaga in America?",
	correctAnswerIndex: 3,
	wrongResponse: "That answer was incorrect! Galaga was developed and published by Namco in Japan, published by Midway in the U.S.",
	correctResponse: "That answer was correct! Galaga was developed and published by Namco in Japan, published by Midway in the U.S.",
	timesUpResponse: "Time is up! Galaga was developed and published by Namco in Japan, published by Midway in the U.S.",


	getMusic: function() {

	      var audio = document.getElementById("audiotag");
	      audio.innerHTML = "";
	      var song = document.createElement("source");
	      
	      song.setAttribute('src', 'assets/audio/galaga.mp3');
	      song.setAttribute('type', 'audio/ogg');
	      song.setAttribute('type', 'audio/mpeg');
	      audio.appendChild(song);
	      audio.load();
	      audio.play();
    
      },


	getGiphy: function() {

		$("#question").html("<iframe src='https://giphy.com/embed/1Yk70ig7ooQ9y' width='360' height='480' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/video-games-galaga-1Yk70ig7ooQ9y'></a></p>");		
	}
};
var q7 = {

	answers: ["<button id='answer1Button' type='button' class='btn btn-primary'>Falco Lombardi</button>", "<button id='answer2Button' type='button' class='btn btn-primary'>Peppy Hare</button>", "<button id='answer3Button' type='button' class='btn btn-primary'>Wolf O'Donnell</button>", "<button id='answer4Button' type='button' class='btn btn-primary'>Slippy Toad</button>"],
	question: "Which of the following Star Fox characters was NOT a member of Fox McCloud's team?",
	correctAnswerIndex: 2,
	wrongResponse: "That answer is incorrect! Wolf O'Donnell was NOT a member of Fox McCloud's team, in fact he was a primary villian.",
	correctResponse: "That answer is correct! Wolf O'Donnell was NOT a member of Fox McCloud's team, in fact he was a primary villian.",
	timesUpResponse: "Time is up! Wolf O'Donnell was NOT a member of Fox McCloud's team, in fact he was a primary villian.",


	getMusic: function() {

	      var audio = document.getElementById("audiotag");
	      audio.innerHTML = "";
	      var song = document.createElement("source");
	      
	      song.setAttribute('src', 'assets/audio/fox.mp3');
	      song.setAttribute('type', 'audio/ogg');
	      song.setAttribute('type', 'audio/mpeg');
	      audio.appendChild(song);
	      audio.load();
	      audio.play();
    
      },


	getGiphy: function() {

		$("#question").html("<iframe src='https://giphy.com/embed/r919d3tEtrxrW' width='480' height='414' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/fox-r919d3tEtrxrW'></a></p>");		
	}
};
var q8= {

	answers: ["<button id='answer1Button' type='button' class='btn btn-primary'>His sister, Tooty</button>", "<button id='answer2Button' type='button' class='btn btn-primary'>His bird, Kazooie</button>", "<button id='answer3Button' type='button' class='btn btn-primary'>Gruntilda</button>", "<button id='answer4Button' type='button' class='btn btn-primary'>Bottles, the mole</button>"],
	question: "In the game Banjo-Kazooie on Nintendo 64, who does Banjo have to save?",
	correctAnswerIndex: 0,
	wrongResponse: "That answer is incorrect! In the original Banjo-Kazooie game, Banjo and his bird companion, Kazooie, must save his sister Tooty who was kidnapped by a jealous witch named Gruntilda!",
	correctResponse: "That answer is correct! In the original Banjo-Kazooie game, Banjo and his bird companion, Kazooie, must save his sister Tooty who was kidnapped by a jealous witch named Gruntilda!",
	timesUpResponse: "Time is up! In the original Banjo-Kazooie game, Banjo and his bird companion, Kazooie, must save his sister Tooty who was kidnapped by a jealous witch named Gruntilda!",


	getMusic: function() {

	      var audio = document.getElementById("audiotag");
	      audio.innerHTML = "";
	      var song = document.createElement("source");
	      
	      song.setAttribute('src', 'assets/audio/banjo-kazooie.mp3');
	      song.setAttribute('type', 'audio/ogg');
	      song.setAttribute('type', 'audio/mpeg');
	      audio.appendChild(song);
	      audio.load();
	      audio.play();
    
      },

	getGiphy: function() {

		$("#question").html("<iframe src='https://giphy.com/embed/1fdSDBlT9M5Jm' width='480' height='359' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/game-nintendo-nostalgia-1fdSDBlT9M5Jm'></a></p>");
	}
};
var q9= {

	answers: ["<button id='answer1Button' type='button' class='btn btn-primary'>Pac-Attack</button>", "<button id='answer2Button' type='button' class='btn btn-primary'>Pac-In-Time</button>", "<button id='answer3Button' type='button' class='btn btn-primary'>Pac-Man: Adventures in Time</button>", "<button id='answer4Button' type='button' class='btn btn-primary'>Pac-Man World</button>"],
	question: "What was the name of the first 3D Pac-Man game?",
	correctAnswerIndex: 3,
	wrongResponse: "That answer is incorrect! The first 3D Pac-Man game was called Pac-Man World, developed and published in 1999 on PlayStation",
	correctResponse: "That answer is correct! The first 3D Pac-Man game was called Pac-Man World, developed and published in 1999 on PlayStation",
	timesUpResponse: "Time is up! The first 3D Pac-Man game was called Pac-Man World, developed and published in 1999 on PlayStation",
	

	getMusic: function() {

	      var audio = document.getElementById("audiotag");
	      audio.innerHTML = "";
	      var song = document.createElement("source");
	      
	      song.setAttribute('src', 'assets/audio/pacman.mp3');
	      song.setAttribute('type', 'audio/ogg');
	      song.setAttribute('type', 'audio/mpeg');
	      audio.appendChild(song);
	      audio.load();
	      audio.play();
    
      },	

	getGiphy: function() {

		$("#question").html("<iframe src='https://giphy.com/embed/hfrziBEPjaAec' width='480' height='268' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/hfrziBEPjaAec'></a></p>");
	}
};

var q10= {

	answers: ["<button id='answer1Button' type='button' class='btn btn-primary'>Kairi</button>", "<button id='answer2Button' type='button' class='btn btn-primary'>Riku</button>", "<button id='answer3Button' type='button' class='btn btn-primary'>Roxas</button>", "<button id='answer4Button' type='button' class='btn btn-primary'>Terra</button>"],
	question: "What is the name of the character that betrayed Sora, who was one of his close friends, in Kingdom Hearts?",
	correctAnswerIndex: 1,
	wrongResponse: "That answer is incorrect! Riku first appears a little jealous of Sora and Kairi before Destiny Islands was consumed by darkness. Riku decided to disappear into the darkness and later became an enemy of Sora!",
	correctResponse: "That answer is correct! Riku first appears a little jealous of Sora and Kairi before Destiny Islands was consumed by darkness. Riku decided to disappear into the darkness and later became an enemy of Sora!",	
	timesUpResponse: "Time is up! Riku first appears a little jealous of Sora and Kairi before Destiny Islands was consumed by darkness. Riku decided to disappear into the darkness and later became an enemy of Sora!",	


	getMusic: function() {

	      var audio = document.getElementById("audiotag");
	      audio.innerHTML = "";
	      var song = document.createElement("source");
	      
	      song.setAttribute('src', 'assets/audio/sora.mp3');
	      song.setAttribute('type', 'audio/ogg');
	      song.setAttribute('type', 'audio/mpeg');
	      audio.appendChild(song);
	      audio.load();
	      audio.play();
    
      },

	getGiphy: function() {

		$("#question").html("<iframe src='https://giphy.com/embed/vsYiggyuSRYDC' width='480' height='240' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/kingdom-hearts-vsYiggyuSRYDC'></a></p>");		
	}
};




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
var arrayOfQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var randomNum;

function generateRandomQuestion() {
	if(questionsRemaining===0){
		endGame();
		return;

	}else {
	randomNum = Math.floor(Math.random()*(arrayOfQuestions.length));
	var questionObject = arrayOfQuestions[randomNum];
	var randQuestion = questionObject.question;
	var randAnswer = questionObject.answers;
	questionObject.getMusic();
	getQuestion(randQuestion, randAnswer, questionObject.correctAnswerIndex);
	}
}



// TRANSITION SLIDES BEGIN HERE ***********************************************************************************************
function answerCorrectly() {
	correctAnswers++;
	questionsRemaining--;

	transitionNumber=15;

	emptyDivs();


	var questionObject = arrayOfQuestions[randomNum];
	questionObject.getGiphy();

	$("#timer").html(questionObject.correctResponse);
	clearInterval(intervalId);
	arrayOfQuestions.splice(randomNum, 1);
	intervalId = setInterval(transitionDecrement, 1000);

}

function answerWrong() {
	incorrectAnswers++;
	questionsRemaining--;



	transitionNumber=15;

	emptyDivs();


	var questionObject = arrayOfQuestions[randomNum];
	questionObject.getGiphy();


	$("#timer").html(questionObject.wrongResponse);
	clearInterval(intervalId);
	arrayOfQuestions.splice(randomNum, 1);
	intervalId = setInterval(transitionDecrement, 1000);


}

function outOfTime() {
	unanswered++;
	questionsRemaining--;




	transitionNumber=15;

	emptyDivs();


	var questionObject = arrayOfQuestions[randomNum];
	questionObject.getGiphy();

	$("#timer").html(questionObject.timesUpResponse);
	clearInterval(intervalId);
	arrayOfQuestions.splice(randomNum, 1);
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
// TRANSITION SLIDES END HERE ----------------------------------------------------------------------------------------------------------





function runTimer() {
	$("#triviaBody").html("");
	$("#triviaBody").append("<div id='timer'> Time Left: "+number+ " </div>");
	intervalId = setInterval(decrement, 1000);


	$("#triviaBody").append("<div id='question'>"+ "</div>");
	$("#triviaBody").append("<div id='answer1'>"+ "</div>");
	$("#triviaBody").append("<div id='answer2'>"+ "</div>");
	$("#triviaBody").append("<div id='answer3'>" + "</div>");
	$("#triviaBody").append("<div id='answer4'>" + "</div>");
}

function decrement() {

	number --;

	$("#timer").html("Time Left: " + number + "");



	if(number === 0) {
		stop();
		outOfTime();
	}


}



function transitionDecrement() {
	number = 20;
	transitionNumber --;


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
	number = 20;
	transitionNumber = 15;
	correctAnswers=0;
	incorrectAnswers=0;
	unanswered=0; 

	questionsRemaining = 10;
	arrayOfQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	randomNum = Math.floor(Math.random()*(arrayOfQuestions.length));

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

























});