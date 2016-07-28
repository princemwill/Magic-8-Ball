


function fortune(){
    //randomly pick a phrase
    //and display it
    var answer = document.getElementById('answer')
       

    var randomAnswers = [
        'Maybe, but is it worth it?',
        'The answer is within you. Be still and listen.',
        "Want is the source of all suffering!",
        "You mad or nah?..",
        "Uhhhhhh.....nah!",
        'Yes! Now share the wealth!',
        "Maybe, but with great power, comes great responsibilty!"];


    answer.innerHTML = randomAnswers[2];
    
}