var questions_array = [
    {question: "What color are strawberries?",
    option1: "(a) red",
    option2: "(b) blue",
    answer: "option1"},
    {question: "What color are bananas?",
    option1: "(a) purple",
    option2: "(b) yellow",
    answer: "option2"},
    {question: "What color are apples?",
    option1: "(a) red/green",
    option2: "(b) orange",
    answer: "option1"},
    {question: "What color are oranges?",
    option1: "(a) orange",
    option2: "(b) pink",
    answer: "option1"}
];
var score; //number of correct answers
var button_clicked; //answer chosen
var next_question; //go to next question

//show the first question
function startGame(){
    score = 0;
    next_question = 0;
    document.getElementById("questions_placeholder").innerHTML = questions_array[ next_question ].question;
    document.getElementById("option1").innerHTML = questions_array[ next_question ].option1;
    document.getElementById("option2").innerHTML = questions_array[ next_question ].option2;
    document.getElementById("user_score").style.display="none";
    document.getElementById("restart").style.display = "none";
}

//determine if answer clicked is correct or incorrect
function isCorrect(btn){
    button_clicked = btn.id;
    if( questions_array[ next_question ].answer == btn.id ){
        //alert("correct!");
        document.getElementById(btn.id).style.backgroundColor = "green";
        document.getElementById(btn.id).style.color = "white";
        score++;
    }
    else{
        //alert("WRONG");
        document.getElementById(btn.id).style.backgroundColor = "red";
        document.getElementById(btn.id).style.color = "white";
    }
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
}

//get the next question or end the game
function nextQuestion(btn){
    next_question++;
    //check to make sure an answer is chosen before going to the next question
    if(button_clicked == null){ 
        alert("Please choose an answer");
        next_question--;
    }
    else {
        if( next_question < questions_array.length ){
            document.getElementById(button_clicked).style.backgroundColor = "white";
            document.getElementById(button_clicked).style.color = "black";
            document.getElementById("questions_placeholder").innerHTML = questions_array[ next_question ].question;
            document.getElementById("option1").innerHTML = questions_array[ next_question ].option1;
            document.getElementById("option2").innerHTML = questions_array[ next_question ].option2;
        }
        else{
            document.getElementById("questions_placeholder").innerHTML = "Thank you for playing :)";
            document.getElementById("option1").style.display = "none";
            document.getElementById("option2").style.display = "none";  
            document.getElementById("user_score").style.display = "initial";
            document.getElementById("user_score").innerHTML = "Your score: " + score + "/" + questions_array.length;
            document.getElementById("next").style.display = "none";
            document.getElementById("restart").style.display = "initial";
        }
        button_clicked = null;
        document.getElementById("option1").disabled = false;
        document.getElementById("option2").disabled = false;
    }
}

function restart(){
    document.getElementById("option1").style.display = "initial";
    document.getElementById("option1").style.backgroundColor = "white";
    document.getElementById("option1").style.color = "black";

    document.getElementById("option2").style.display = "initial"; 
    document.getElementById("option2").style.backgroundColor = "white";  
    document.getElementById("option2").style.color = "black";   
    
    document.getElementById("user_score").style.display = "none";
    document.getElementById("next").style.display = "initial";
    document.getElementById("restart").style.display = "none";
    //alert("RESTART");
    startGame();
}