// 1. Write a program to take “city” name as input from user.
// If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var user_city = prompt("Enter you City Name :");

if (user_city == "Karachi" || user_city == "karachi") {
    alert("Welcome to City of Lights")
} else if (user_city == "Lahore" || user_city == "lahore") {
    alert("Welcome to City of Gardens")
} else if (user_city == "Islamabad" || user_city == "islamabad") {
    alert("Welcome to The Green City")
} else if (user_city == "Peshawar" || user_city == "peshawar") {
    alert("Welcome to City of the Frontier")
} else if (user_city == "Quetta" || user_city == "quetta") {
    alert("Welcome to Fruit Garden of Pakistan")
} else if (user_city == "Multan" || user_city == "multan") {
    alert("Welcome to City of Saints")
} else {
    alert("Welcome to " + user_city)
};


// 2. Write a program to take “gender” as input from user.
// If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma’am.

var user_gender = prompt("Enter your Gender :");
if (user_gender == "Male" || user_gender == "male") {
    alert("Good Morning Sir")
} else if (user_gender == "Female" || user_gender == "female") {
    alert("Good Morning Ma'am")
} else {
    alert("Good Morning!")
};

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var traffic_light = prompt("Enter the Traffic Light color :");
if (traffic_light == "Red" || traffic_light == "red") {
    alert("You must stop.")
} else if (traffic_light == "Yellow" || traffic_light == "yellow") {
    alert("Ready to go.")
} else if (traffic_light == "Green" || traffic_light == "green") {
    alert("You can move now.")
} else {
    alert("Enter a correct color!")
};


// 4. Write a program to take input remaining fuel in car(in litres) from user.If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”.

var left_fuel = parseFloat(prompt("Enter your Remaining Fuel (in litres) :"));
if (left_fuel < 0.25) {
    alert("Please refill the fuel in your car")
};

// 5. Run this script, & check whether alert message would be displayed or not.Record the outputs.
    
// a.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c.
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e.
if(true){
    alert("True");
}
if (false) {
    alert("False");
}

// f.
if("car" < "cat"){
    alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three subjects & total marks.Compute & show the resulting
// percentage on your page.Take percentage & compute grade as per following table:
// Show the total marks, marks obtained, percentage, grade & remarks like:


document.write(`<h1>Task 6</h1>`);
var total_marks = 300;
var sub1_marks = Number(prompt("Enter your obtained marks in First Subject :"));
var sub2_marks = Number(prompt("Enter your obtained marks in First Subject :"));
var sub3_marks = Number(prompt("Enter your obtained marks in First Subject :"));
var obt_marks = sub1_marks + sub2_marks + sub3_marks;
var percentage = obt_marks / total_marks * 100;

document.write(`<h3>Mark Sheet</h3>`);
document.write(`<br><b>Total Marks</b> : ${total_marks}`);
document.write(`<br><b>Marks Obtained</b> : ${obt_marks}`);
document.write(`<br><b>Percentage</b> : ${percentage}`);
if (percentage >= 80) {
    document.write(`<br><b>Grade</b> : A-One`);
    document.write(`<br><b>Remarks</b> : Excellent`);
} else if (percentage >= 70) {
    document.write(`<br><b>Grade</b> : A`);
    document.write(`<br><b>Remarks</b> : Good`);
} else if (percentage >= 60) {
    document.write(`<br><b>Grade</b> : B`);
    document.write(`<br><b>Remarks</b> : You need to improve`);
} else {
    document.write(`<br><b>Grade</b> : Fail`);
    document.write(`<br><b>Remarks</b> : Sorry`);
}

// 7. Guess game: Store a secret number(ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a.If user guesses the same number, show “Bingo! Correct answer”.
// b.If the guessed number + 1 is the secret number, show “Close enough to the correct answer”.

var secret_num = 6;
var user_num = Number(prompt("Guess Our Secret Number :"));
if (user_num === secret_num) {
    alert("Bingo! Correct answer");
} else if ( secret_num ===((user_num + 1) || (user_num - 1))) {
    alert("Close enough to the correct answer")
} else {
    alert("You are far away to our secret number.")
};

// 8. Write a program to check whether the given number is divisible by 3.
// Show the message to the user if the number is divisible by 3.

var user_num2 = Number(prompt("Enter a number :"))
if (user_num2 % 3 == 0) {
    alert("Your number is divisible by 3");
} else {
    alert("Your number is not divisible by 3");
};

// 9. Write a program that checks whether the given input is an even number or an odd number.

var user_num3 = Number(prompt("Enter a number (to check that number is even or odd) :"));
if (user_num3 % 2 == 0) {
    alert("Your number is Even.");
} else {
    alert("Your number is Odd");
};

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a.T > 40 then “It is too hot outside.”
// b.T > 30 then “The Weather today is Normal.”
// c.T > 20 then “Today’s Weather is cool.”
// d.T > 10 then “OMG! Today’s weather is so Cool.”

var temp = prompt("Enter Temperature :");
if (temp > 40) {
    alert("It is too hot outside.")
} else if (temp > 30) {
    alert("The Weather today is Normal.")
} else if (temp > 20) {
    alert("Today’s Weather is cool.")
} else {
    alert("OMG! Today’s weather is so Cool.")
};

// 11. Write a program to create a calculator for +, -,*, / & % using if statements.Take the following input:
// a.First number
// b.Second number
// c.Operation(+, -, *, /, %)
// Compute & show the calculated result to user.

var first_num = Number(prompt("Enter 1st number (to do an arithmetic operation) :"));
var second_num = Number(prompt("Enter 2nd number (to do an arithmetic operation) :"));
var operator = prompt("Enter operator (to do an arithmetic operation) :");

if (operator == "+") {
    alert(`${first_num + second_num}`);
} else if (operator == "-") {
    alert(`${first_num - second_num}`);
} else if (operator == "*") {
    alert(`${first_num * second_num}`);
} else if (operator == "/") {
    alert(`${first_num / second_num}`);
} else if (operator == "%") {
    alert(`${first_num % second_num}`);
} else {
    alert(`Enter valid operator.`);
};