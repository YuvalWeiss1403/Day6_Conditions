// Write a function that takes in a number and returns true if the number is even,
// and false if the number is odd.
 function even(number){
    if(number%2==0){
        return true;
    }
    else{
        return false;
    }
}

even(12);

// Write a function named greaterNum that:
// takes 3 arguments, all numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, 
//and log the output to make sure it works (e.g. "The greater number of 5 , 15 , 10 is 15.").
function greaterNum(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }else if(num2>num1 && num2>num3){
        return num2
    }else{
        return num3;
    }
}

console.log("the greater number of 4,7,2 is: " +greaterNum(4,7,2));
console.log("the greater number of 9,17,3 is: " +greaterNum(9,17,3));


// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to
// returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(languageCode){
    if(languageCode === "es"){
        return ("¡Hola Mundo!");
    }else if(languageCode==="de"){
        return ("Hallo Welt!");
    }
    else if(languageCode=="en"){
        return ("Hello, World");
    }
    else{
        return ("Sorry, i don't know this language");
    }
}

helloWorld("en");
helloWorld("es");
helloWorld("de");

 
// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// (A for: 90-100, B for: 80-89, C for: 70-79, D for: 60-69, F for 59 or lower)  
// Call that function for a few different scores and make sure it works.

function assignGrade(numberScore){
    if(numberScore>=90){
        return "A";
    }else if(numberScore<=89 && numberScore >=80){
        return "B";
    }else if(numberScore<=79 && numberScore >=70){
        return "C";
    }else if(numberScore<=69 && numberScore >=60){
        return "D";
    }else if(numberScore<=59){
        return "f";
    }
}

console.log("Your grade is: " + assignGrade(97)); //A
console.log("Your grade is: " + assignGrade(64)); //D
console.log("Your grade is: " + assignGrade(82)); //B
console.log("Your grade is: " + assignGrade(45)); //F

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralize(noun, number){
    if(number>1){
        return (number +" "+ noun + "s");
    }else if(number == 1){
        return (number +" "+noun );
    }else{
        return ("Zero animals");
    }
}

console.log("You have: "+ pluralize("Dog",1));
console.log("You have: "+ pluralize("Cat",2));
console.log("You have: "+ pluralize("horse",0));


// Using logical operators, write an expression that represents the following statement: 
//"I would like an ice cream with strawberry and chocolate, or stracciatella, or an ice cream 
//of any flavor but caramel." 
// Flavors: strawberry, chocolate, stracciatella, caramel.
//     (the expression will look like: a && b || c || b &&d …)
//      Put the expression in a comment as it’s not valid code

//My answer:
//(strawberry && chocolate || stracciatella && !caramel )



// Write a function that uses “prompt” asking the user to write their name,
// use “document.write” to print “Hello, __(name)__, Welcome!”, 
//if there is no name inputted print the text “Hello friend, Welcome!”. 
//Try to do this exercise in two different ways.

function greeting(){
    let name = prompt("please enter your name: ");
    if(name!=null){
    document.write(`Hello, ${name} , Welcome!`);
    }else{
        document.write(`Hello Friend , Welcome!`);

    }
}

greeting();

//  Write a function that takes in a number and prints a message based on the following conditions: 
// If the number is positive and odd, print "Positive and odd"
//If the number is positive and even, print "Positive and even"
//  If the number is negative and odd, print "Negative and odd"
// If the number is negative and even, print "Negative and even"
//  If the number is zero, print "Zero"

function messageToUser(number){
    if(number>0 && number%2==1){
        console.log("Positive and odd");
    }
    if(number>0 && number%2==0){
        console.log("Positive and even");
    }
    if(number<0 && number%2==1){
        console.log("Negative and odd");
    }
    if(number<0 && number%2==0){
        console.log("Negative and even");
    }
    if(number==0){
        console.log("Zero");
    }
}

messageToUser(9);
messageToUser(-3);
messageToUser(0);


//Write a function that takes in a number and returns true if the number is prime
//(a number that is divisible only by itself and 1), and false if it is not.



// Write a function `calculator()` thats get 3 arguments : num1,num2,operand (“+”,”-”,”/”,”%”,”*”) and return
// the answer of the equation. 
// for example:
// console.log(calculator(2, 3, "+")); // Output: 5
// console.log(calculator(2, 3, "-")); // Output: -1
// console.log(calculator(2, 3, "/")); // Output: 0.6666666666666666
// console.log(calculator(2, 0, "/")); // Output: "Cannot divide by zero"
// console.log(calculator(2, 3, "^")); // Output: "Invalid operator"

function calculator(num1,num2,operand){
    if(p=operand === "+")
    {
        return(num1+num2);
    }
    else if(p=operand === "-")
    {
        return(num1-num2);
    }
    else if(p=operand === "/")
    {
        if(num2==0){
            return ("Cannot divide by zero");
        }
        else{
            return(num1/num2);
        }
    }
    else if(p=operand === "%")
    {
        return(num1%num2);
    }
    else if(p=operand === "*")
    {
        return(num1*num2);
    }
    else{
        return ("Invalid operator");
    }
}

console.log(calculator(2, 3, "+")); 
console.log(calculator(2, 3, "-")); 
console.log(calculator(2, 3, "/")); 
console.log(calculator(2, 0, "/")); 
console.log(calculator(2, 3, "^")); 


// Write a JavaScript function called isLeapYear that takes a number representing a year and returns a boolean
// value indicating whether or not the year is a leap year. A leap year is a year that is divisible by 4, 
// but not divisible by 100 unless it is also divisible by 400.
// For example, the year 2000 is a leap year because it is divisible by 4 and by 400, but the year 1900 is not
// a leap year because it is divisible by 4 and by 100, but not by 400. Try to not use “else” statement.

function isLeapYear(year){
    if(year%4==0){
        if(year%100==0 && year%400==0){
            return true;
        }
        if(year%100!=0){
            return true;
        }
    }
    return false;
}

// Write a JavaScript function called getMax that takes three numbers as arguments and returns the maximum of the three numbers.
// For example, if the numbers are 5, 10, and 3, the function should return 10.

function getMax(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }else if(num2>num1 && num2>num3){
        return num2
    }else{
        return num3;
    }
}

// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

function sortThreeNumber(num1,num2,num3){
    let max = getMax(num1,num2,num3);
    let middle;
    let min;
    if(max==num1 ){
        if(num2>num3){
            middle=num2;
            min=num3;
        }
        else{
            middle=num3;
            min=num2;
        }
    }
    if(max==num2 ){
        if(num1>num3){
            middle=num1;
            min=num3;
        }
        else{
            middle=num3;
            min=num1;
        }
    }
    if(max==num3 ){
        if(num2>num1){
            middle=num2;
            min=num1;
        }
        else{
            middle=num1;
            min=num2;
        }
    }
    alert(`${max}, ${middle}, ${min}`);
}

sortThreeNumber(0,-1,4);


// Write conditional expressions to satisfy the safety rules.
// Use the variables defined from the table above to satisfy the rules listed below.
// crewStatus
// If the value is true, print "Crew Ready"
// Else print "Crew Not Ready"
// computerStatusCode
// If the value is 200, print "Please stand by. Computer is rebooting."
// Else if the value is 400, print "Success! Computer online."
// Else print "ALERT: Computer offline!"
// shuttleSpeed
// If the value is > 17500, print "ALERT: Escape velocity reached!"
// Else if the value is < 8000, print "ALERT: Cannot maintain orbit!"
// Else print "Stable speed”


function satisfySafetyRules(crewStatus,computerStatusCode,shuttleSpeed){
    if(crewStatus){
        console.log("Crew Ready");
    }
    else{
        console.log("Crew Not Ready");
    }
    if(computerStatusCode==200){
        console.log("Please stand by. Computer is rebooting.");
    }else if(computerStatusCode==400){
        console.log("Success! Computer online.");
    }else{
        console.log("ALERT: Computer offline!");
    }
    if(shuttleSpeed>17500){
        console.log("ALERT: Escape velocity reached!");
    }else if(shuttleSpeed<8000){
        console.log("ALERT: Cannot maintain orbit!");
    }else{
        console.log("Stable speed");
    }

}




// Write a function that takes in a string and prints a message based on the following conditions
// If the string is "red", print "Red is the color of danger"
// If the string is "orange", print "Orange is the color of caution"
// If the string is "yellow", print "Yellow is the color of sunshine"
//  If the string is "green", print "Green is the color of nature"
//  If the string is "blue", print "Blue is the color of the sky"
// If the string is "purple", print "Purple is the color of royalty"
// If the string is none of the above, print "Invalid color"


function colorsAlert(color){
    switch(color){
        case "red":
            console.log("Red is the color of danger");
            break;
        case "orange":
            console.log("Orange is the color of caution");  
            break;
        case "yellow":
            console.log("Yellow is the color of sunshine");    
            break;
        case "green":
            console.log("Green is the color of nature"); 
            break;
        case "blue":
            console.log("Blue is the color of the sky");
            break;
        case "purple":
            console.log("Purple is the color of royalty");
            break
        default:
            console.log("Invalid color");
    }
}

colorsAlert("orange");
colorsAlert("pink");