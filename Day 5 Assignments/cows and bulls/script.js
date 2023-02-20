var givenWord = "abac";

var score = {
    cows: 0,
    bulls: 0,
    guessWord: 0,
}

var scores = [];
function checkWord() {
    var userName = document.getElementById("guessWord").value;
    //console.log(userName);
    if (userName.length == 4) {
        document.getElementById("message").innerHTML = "";
        var result = cowsAndBulls(userName);
        console.log(result);
        document.getElementById("cows").innerHTML = result[0];
        document.getElementById("bulls").innerHTML = result[1];
        isWon(cows, bulls);
    }
    else {
        document.getElementById("message").innerHTML = "Give only 4 letter word";
    }
}

function isWon(cows, bulls) {
    if (cows == 4) {
        alert("you Won");
        document.getElementById("cows").innerHTML = 0;
        document.getElementById("bulls").innerHTML = 0;
        document.getElementById("history").innerHTML = "";
        document.getElementById("guessWord").value = "";    
    }
    else {
        document.getElementById("message").innerHTML = "Keep Guessing";
    }
    
}

function cowsAndBulls(userName) {
    cows =0;
    bulls = 0;
    var userArray = [];
    for (var i = 0; i < userName.length; i++) {
        userArray.push(userName.charAt(i));
        //console.log(userName.length);
    }
    //console.log(userArray);
    var givenArray = [];
    for (var i = 0; i < givenWord.length; i++) {
        givenArray.push(givenWord.charAt(i));
    }
    //console.log(cows);
    for (var i = 0; i < givenWord.length; i++) {
        if (userArray[i] == givenArray[i]) {
            cows++;
            userArray[i] = " ";
        }
        
    }
    /*console.log(userArray);*/
    for (var i = 0; i < givenWord.length; i++) {
        for (var j = 0; j < givenWord.length; j++) {
            if (i != j) {
                if (userArray[i] != " ") {
                    if (givenArray[i] == userArray[j]) {
                        bulls++;
                        userArray[i] = " ";
                        break;
                    }
                }
                
            }

        }
    }
    /*console.log(userArray);*/
    storeState(cows, bulls, userName);
    //console.log(cows + " " + bulls);
    show();
    return [cows, bulls];
}

function storeState(c,b,userName) {
    score = new Object();
    score.cows = c;
    score.bulls = b;
    score.guessWord = userName;
    scores.push(score);
}

function show() {
    var div = document.getElementById("history");
    var final = "<div> <span> <b>COWS</b>  </span>  <span>  <b>BULLS</b>  </span>  <span> <b>GUESS WORD</b>  </span>  </div> <hr>";
    for (var i = 0; i < scores.length; i++) {
        final = final + "<div>"+"<span>" + scores[i].cows + "</span>" + "<span>" + scores[i].bulls + "</span>" + "<span>" + scores[i].guessWord + "</span>"+"</div>";
    }
    div.innerHTML = final;
}