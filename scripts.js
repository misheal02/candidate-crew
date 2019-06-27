var currentQuestion = 2; //


/* 
	name: startQuiz
	desc: Removes all elements that are not needed after the
		   start of the quiz. 

	returns: none
*/
function startQuiz() {
        document.getElementById("lore_brief").className = "invisible";
        document.getElementById("question-1").className = "question";
        var startBtn = document.getElementById('startQuizBtn');
        startBtn.parentNode.removeChild(startBtn);
    }
	
	
	
/* 
	name: getNumberOfQuestions
	desc: Used to dynamically get the  amount of questions 
		  that have been created on the HTML page. 
    parameters: none
    returns: totalQuestions
*/
function getNumberOfQuestions() {
        //QuerySelectorAll has better browser support in exchange for being slightly slower than gEBCN. 
        var totalQuestions = document.querySelectorAll('#quiz-questions .question').length;
        return totalQuestions;
    }
	
	

/* 
	name: nextQuestion
	desc: The primary tool for users to control their quiz position and 
		  executes functions in a way that promotes separation of interests.
    parameters: none
    returns: none
*/
function nextQuestion() {
        hideQuestion(currentQuestion);
        hideAnswerButton();
        showQuestion(currentQuestion);
        currentQuestion++;
    }
	

	
function setAnswerButton() {
        
        document.getElementById("confirm_answer").className = "";
    }





function hideAnswerButton() {
        document.getElementById("confirm_answer").className = "invisible";
    }	

function hideQuestion(id) {
        var totalQuestions = getNumberOfQuestions();
        for (var i = 1; i <= totalQuestions; i++) {
            if (i !== id) {
                document.getElementById("question-" + i).className = "question invisible";
            }
        }
    }


function showQuestion(id) {
        var totalQuestions = getNumberOfQuestions();
        if (id <= totalQuestions) {
            document.getElementById("question-" + id).className = "question";
        } else {
			setEndingSentence() //begins the end screen process if id is above total question
        }
    }



/* 
	name: getEndingSentence
	desc: Handles calculations and provides the necessary information for 
		  the quiz sentence genernation process to work. 
    returns: content
*/
function getEndingSentence() {
    var quizRadio = document.getElementsByName("rq");
	var content = ''; //It's easier to handle if we simply merge all sentences into a string
    for (var i = 0; i < quizRadio.length; i++) {
        if (quizRadio[i].checked) {
            content += quizRadio[i].getAttribute("data-endingsentence"); //these are the attributes used to generate quiz answers
        }
    }
	return content;
}



/* 
	name: setEndingSentence
	desc: Collects information and outputs it to the HTML page.
    parameters: none
    returns: none
*/
function setEndingSentence() {
	var personalityResults = getEndingSentence();
    document.getElementById("results_screen").className = "";
	document.getElementById("generated_text").innerHTML = personalityResults; 

} 
