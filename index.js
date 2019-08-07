//Exercise 10
var card1 = parseInt(prompt("Pick a card! 1-13"));
var card2 = parseInt(prompt("Pick another card!"));
var card3 = parseInt(prompt("Pick a third card!"));

if ((card1 + card2 + card3) === 21)
{
    alert("BLACKJACK!")
}
else if ((card1 + card2 + card3) > 21)
{
    alert("BUST!")
}
else if ((card1 + card2 + card3) < 21)
{
    alert("The sum is: " + (card1 + card2 + card3));
}


//Exercise 11
var userGrade = parseInt(prompt("Enter your grade."));
if (userGrade >= 90 && userGrade <= 100)
{
    alert("Your grade is A")
}
else if (userGrade >= 80 && userGrade <= 89)
{
    alert("Your grade is B")
}
else if (userGrade >= 70 && userGrade <= 79)
{
    alert("Your grade is C")
}
else if (userGrade >= 60 && userGrade <= 69)
{
    alert("Your grade is D")
}
else if (userGrade >= 0 && userGrade <= 59)
{
    alert("Your grade is F")
}
else
{
    alert("ERROR")
}


//Exercise 12
var userAge = parseInt(prompt("Please enter your age."));
if (userAge >= 0 && userAge <= 125)
{
    alert("REAL AGE")
}
else
{
    alert("NOT REAL AGE!!!")
}