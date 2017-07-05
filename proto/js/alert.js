
function AlertIt(name) {
    if (name == 'quiz') {
    var answer = confirm ("This quiz has not been opened yet");
        if (answer)
            window.location="quiz-col.shtml";
    } else if (name == 'lecture'){
        var answer = confirm ("This lecture has not been opened yet");
        if (answer)
            window.location="lecture-col.shtml";
    }
    };

