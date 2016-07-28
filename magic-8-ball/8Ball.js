/// <reference path="Scripts/jquery-3.1.0.js" />


var randomAnswers = [
       'Maybe, but is it worth it?',
       'The answer is within you. Be still and listen.',
       "Want is the source of all suffering!",
       "You mad or nah?..",
       "Uhhhhhh.....nah!",
       'Yes! Now share the wealth!',
       "Maybe, but with great power, comes great responsibilty!"
]; //0-6 indexes


function fortune(){
    //randomly pick a phrase
    //and display it
    var answer = document.getElementById('answer')
  

    var randomNumber = Math.floor(Math.random() * randomAnswers.length);

    answer.innerHTML = randomAnswers[randomNumber];
    
}