let password = prompt("Pick a number between 1 and 10")

//If they type two, alert they may enter
//If they type higher than two, alert they may not enter
//If they type one, alert they may not enter

if (password == "2"){
    alert("You may enter")
    alert("Congratulations.")
} else if(password == "1"){
    alert("You are too low")
} else{
    alert("You are too high")
}

alert("Thank you for guessing.")