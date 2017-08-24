for (var j = 0; j < 10; j++) {
	var number = Math.floor(Math.random() * 4) + 1;
	console.log(number);
}

var timer

var trivia = {

	time: 30,	
	correct: 0,
	incorrect: 0,
	timeOut: 0,
	//organize questions and answers in the object
	//A question string, four answer strings
	question: {
		one: {
			string: "In the Age of Ancients, four beings found the Souls of Lords within the great flame: Nito, first of the dead; The witch of Izalith; Gwyn, Lord of Sunlight; and...",
			answer: {
				one: {
					string: "The furtive pygmy",
					value: true
				},
				two: {
					string: "Seath the Scaleless",
					value: false
				},
				three: {
					string: "",
					value: false
				},
				four: {
					string: "Nor this",
					value: false
				}
			},
			gif: "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
		},
		two: {
			string: "What is an undead's favorite drink?",
			answer: {
				one: {
					string: "Green potion",
					value: false
				},
				two: {
					string: "Holy water",
					value: false
				},
				three: {
					string: "Estus flask",
					value: true
				},
				four: {
					string: "Jack Daniel's",
					value: false
				}
			},
			gif: "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
		},
		three: {
			string: "What message displays when you die?",
			answer: {
				one: {
					string: "Your Journey Ends",
					value: false
				},
				two: {
					string: "You Died",
					value: true
				},
				three: {
					string: "Game Over",
					value: false
				},
				four: {
					string: "Thanks Obama",
					value: false
				}
			},
			gif: "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
		},
		four: {
			string: "A sacred place in Lordran where chosen undead begin their journey",
			answer: {
				one: {
					string: "Firelink Shrine",
					value: true
				},
				two: {
					string: "Undead Asylum",
					value: false
				},
				three: {
					string: "Anor Londo",
					value: false
				},
				four: {
					string: "The Bed of Chaos",
					value: false
				}
			},
			gif: "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
		},
		five: {
			string: "What is the most effective strategy for defeating the Capra Demon?",
			answer: {
				one: {
					string: "Thrust wish a spear while blocking to protect yourself",
					value: false
				},
				two: {
					string: "Use magic or arrows from a distance",
					value: false
				},
				three: {
					string: "Parry and riposte his attacks",
					value: false
				},
				four: {
					string: "Use the stairs!",
					value: true
				}
			},
			gif: "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
		},
		six: {
			string: "Siegmeyer of Catarina dons armor bearing resemblance to what vegetable?",
			answer: {
				one: {
					string: "Potato",
					value: false
				},
				two: {
					string: "Carrot",
					value: false
				},
				three: {
					string: "Onion",
					value: true
				},
				four: {
					string: "Celery",
					value: false
				}
			},
			gif: "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
		},
		seven: {
			string: "The 'Giantdad' build uses what weapon",
			answer: {
				one: {
					string: "Chaos Zweihander",
					value: true
				},
				two: {
					string: "Giant's Halberd",
					value: false
				},
				three: {
					string: "Black Knight Greataxe",
					value: false
				},
				four: {
					string: "Occult Broken Straight Sword",
					value: false
				}
			},
			gif: "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
		},
		eight: {
			string: "The Iron Golem of Sen's Fortress can be defeated single-handedly by this summoned character",
			answer: {
				one: {
					string: "Guts, the Black Swordsman",
					value: false
				},
				two: {
					string: "Black Iron Tarkus",
					value: true
				},
				three: {
					string: "Solaire of Astora",
					value: false
				},
				four: {
					string: "Witch Beatrice",
					value: false
				}
			},
			gif: "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
		},
		nine: {
			string: "Guardians of Anor Londo, this infamous duo is the ultimate difficulty spike in Dark Souls",
			answer: {
				one: {
					string: "The Four Kings",
					value: false
				},
				two: {
					string: "The Bell Gargoyles",
					value: false
				},
				three: {
					string: "Dragonslayer Ornstein & Executioner Smough",
					value: true
				},
				four: {
					string: "Batman & Robin",
					value: false
				}
			},
			gif: "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
		},
		ten: {
			string: "The Moonlight Sword is a recurring weapon in From Software's games. How do you obtain it in Dark Souls?",
			answer: {
				one: {
					string: "Infuse the soul of Gwyndolin into a +10 greatsword",
					value: false
				},
				two: {
					string: "Sever Seath's tail",
					value: true
				},
				three: {
					string: "Complete Big Hat Logan's questline",
					value: false
				},
				four: {
					string: "Find it inside a mimic chest in the Duke's Archives",
					value: false
				}
			},
			gif: "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"
		}
	},

	//Method that starts the timer
	startTimer: function() {
		trivia.time = 30;
		$("#timer").text(trivia.time);
		timer = setInterval(trivia.countDown, 1000)
	},

	//Method that stops the timer
	stopTimer: function() {
		clearInterval(timer);
	},

	countDown: function() {
		trivia.time--;
		$("#timer").text(trivia.time);

		if (trivia.time === 0) {
			trivia.stopTimer();
			trivia.timeOver();
		}
	},

	startQuiz: function() {
		i = 0;
		this.correct;
		this.incorrect;
		this.timeOut;
		trivia.questionStart(questions[i]);
		$("#start").hide();
	},
	//Method that assigns questions and answers to html elements and writes them to the page
	questionStart: function(q) {
		$(".answer").show();
		$("#question").text(q.string);
		$("#answerOne").text(q.answer.one.string);
		$("#answerTwo").text(q.answer.two.string);
		$("#answerThree").text(q.answer.three.string);
		$("#answerFour").text(q.answer.four.string);

		$("#answerOne").attr("value", q.answer.one.value);
		$("#answerTwo").attr("value", q.answer.two.value);
		$("#answerThree").attr("value", q.answer.three.value);
		$("#answerFour").attr("value", q.answer.four.value);

		this.startTimer();

		// console.log($("#answerOne").attr("value"));
		// console.log($("#answerTwo").attr("value"));
		// console.log($("#answerThree").attr("value"));
		// console.log($("#answerFour").attr("value"));
	},

	rightAnswer: function() {
		this.correct++;
		$(".answer").hide();
		$("#question").html("Correct!");
		// $("#question").append("<img src='" + this.question.one.gif + "'>");
		this.nextQuestion();
		
	},

	wrongAnswer: function() {
		this.incorrect++;
		$(".answer").hide();
		$("#question").html("Wrong! The correct answer is:");
		$("[value='true']").contents().clone().appendTo($("#question"));
		// $("#question").append("<img src='" + this.question.one.gif + "'>");
		this.nextQuestion();
	},

	timeOver: function() {
		this.timeOut++;		
		$(".answer").hide();
		$("#question").html("Out of time! The correct answer is:");
		$("[value='true']").contents().clone().appendTo($("#question"));
		this.nextQuestion();
	},

	nextQuestion: function() {
		i++
		this.stopTimer();
		if (i < questions.length){
			setTimeout(function(){trivia.questionStart(questions[i])}, 5000);
		}
		else {
			setTimeout(function(){trivia.endQuiz()}, 5000);
		}
	},

	endQuiz: function() {
		$("#start").show()
		$("#question").text("All done! Here are your results:")
		$("#question").append("<p>Correct: " + this.correct + "</p>");
		$("#question").append("<p>Incorrect: " + this.incorrect + "</p>");
		$("#question").append("<p>Time-outs " + this.timeOut + "</p>");
	}
};

var tQ = trivia.question;
var questions = [tQ.one, tQ.two, tQ.three, tQ.four, tQ.five, tQ.six, tQ.seven, tQ.eight, tQ.nine, tQ.ten]


// console.log(trivia.question.one.string);
// console.log(trivia.question.one.answer.one.string + " is " + trivia.question.one.answer.one.value);
// console.log(trivia.question.one.answer.two.string + " is " + trivia.question.one.answer.two.value);
// console.log(trivia.question.one.answer.three.string + " is " + trivia.question.one.answer.three.value);
// console.log(trivia.question.one.answer.four.string + " is " + trivia.question.one.answer.four.value);

//When the page loads there will be only the header, and a start button. The header is one of the only static elements on the page

//Hitting the start button will begin the quiz. The page now displays a 30 second timer, the first question, and four answer choices.

$(".answer").hide();

$("#start").click(function() {
	trivia.startQuiz();
});

//Choosing the correct answer will stop the timer, and replace the question and answers with a correct answer message, and an animated gif
$(".answer").click(function() {
	// alert("click");
	console.log(this);
	console.log($(this).attr("value"));

	var check = $(this).attr("value");
	
	if (check === "true") {
		// console.log("correct");
		trivia.rightAnswer();
	}
	if (check === "false") {
		// console.log("nope");
		trivia.wrongAnswer();
	}
});
//Choosing the wrong answer stops the timer, displays an incorrect answer message with the correct answer, and an animated gif

//if the timer hits zero, the game displays a time out message along with the correct answer and an animated gif

//The game displays the next set of question and answers, and continues until there are no questions left.

//When the user finishes the quiz, the game will list the number of correct answers, incorrect answers, and time-outs. A button to reset the quiz will appear.