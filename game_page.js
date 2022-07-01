number1_name = localStorage.getItem("number1");
number2_name = localStorage.getItem("number2");

number1_score = 0;
number2_score = 0;

document.getElementById("number1_name").innerHTML = number1_name + " : ";
document.getElementById("number2_name").innerHTML = number2_name + " : ";

document.getElementById("number1_score").innerHTML = number1_score;
document.getElementById("number2_score").innerHTML = number2_score;

document.getElementById("number_question").innerHTML = "Question Turn - " + number1_name;
document.getElementById("number_answer").innerHTML = "Answer Turn - " + number2_name;

function send(){
    number1 = document.getElementById("number1_name").value;
    number2 = document.getElementById("number2_name").value;
    actual_answer = parseInt(number1_name) * parseInt(number2_name);

    number_question ="<h4>" + number1_name + " X "+ number2_name +"</h4>";
    input_box = "<br>Answer : <input type='text id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = number_question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_name").value = "";
    document.getElementById("number2_name").value = "";
    
}

question_turn = "number1_name";
answer_turn = "number2_name";

function check(){
get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer)
{
    if(answer_turn == "number1_name")
    {
        update_number1_name = number1_score +1;
        document.getElementById("number1_score").innerHTML = update_number1_score;
    }
    else
    {
        update_number2_score = number2_score +1;
        document.getElementById("number2_score").innerHTML = update_number2_score;
    }

    if(question_turn == "number1_name")
    {
        question_turn = "number2_name"
        document.getElementById("player_question").innerHTML = ""
    }
}
}
