// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

alert("!! Fill the input to know what you entered !!");
var character = prompt("Enter a Number/Capital Letter/Small Letter :");
var ascii_code = character.charCodeAt();

if (ascii_code >= 65 && ascii_code <= 90 ) {
    alert("You entered a Capital Letter.")
} else if (ascii_code >= 97 && ascii_code <= 122) {
    alert("You entered a Small Letter.")
} else if (ascii_code >= 48 && ascii_code <= 57) {
    alert("You entered a Number.")
} else {
    alert("Invalid Character!")
};

// 2. Write a JavaScript program that accept two integers and
// display the larger.Also show if the two integers are equal.

alert("!! Fill the input to know which number is larger than the other !!");
var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));

if (num1 > num2) {
    alert(`${num1} is greater than ${num2}`)
} else if (num1 < num2) {
    alert(`${num2} is greater than ${num1}`)
} else if( num1 == num2) {
    alert(`${num1} is equal to ${num2}`)
} else {
    alert("Invalid input")
};

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

alert("!! Fill the input to know what you entered !!");
var number = prompt("Enter a Number (Positive/Negative/Zero) :");


if (number > 0 ) {
    alert("You entered a Positive Number.")
} else if (number < 0) {
    alert("You entered a Negative Number.")
} else if (number == 0 ) {
    alert("You entered Zero.")
} else {
    alert("Invalid Character!")
};

// 4. Write a program that takes a character(i.e.string of length 1) and returns true if it is a vowel, false otherwise

alert("!! Fill the input to know that you've entered a vowel or consonant !!");
var check_vowel = prompt("Enter a Letter :");
var lower_Case = check_vowel.toLowerCase();

if (lower_Case == 'a' || 'e' || 'i' || 'o' || 'u') {
    alert("You entered a vowel.")
} else {
    alert("You entered a consonant.")
};

// 5. Write a program that
// a.Store correct password in a JS variable.
// b.Asks user to enter his / her password
// c.Validate the two passwords:

// i.Check if user has entered password.If not, then give message “ Please enter your password”

// ii.Check if both passwords are same.If they are same, show message “Correct! The password you entered matches the original password”.Show
// “Incorrect password” otherwise.

alert("!! Fill the input to store your password and verify it !!");
var password = prompt("Create your Password");
var check_password = prompt("Verify Your Password");
if (check_password == '') {
    alert("Please enter your password");
    check_password = prompt("Verify Your Password");
    if (check_password === password) {
        alert("Correct! The password you entered matches the original password")
    } else {
        alert("Incorrect password")
    };
} else if (check_password === password) {
    alert("Correct! The password you entered matches the original password")
} else {
    alert("Incorrect password")
};

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// else
//     greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
};

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if statements

alert("!! Write the time in 24 Hour format and get it in 12 Hour format !!");
var time = Number(prompt("Enter the present time in 24 Hour Format :"));
var am_pm;
if ((time >= 1 && time <=11) || time === 24) {
    am_pm = "am";
} else {
    am_pm = "pm";
};

if (time >= 13 && time <= 24) {
    alert(`The time you entered in "12 Hour Format is" ${time - 12}${am_pm}`);
} else if (time >= 1 && time <= 12) {
    alert(`The time you entered in "12 Hour Format is" ${time}${am_pm}`);
} else {
    alert("Invalid Input");
};

if (time >= 1 && time <= 11) {
    alert("Good Morning");
} else if (time >= 12 && time <= 16) {
    alert("Good Afternoon");
} else if (time >= 17 && time <= 20) {
    alert("Good Evening");
} else if (time >= 21 && time <= 24) {
    alert("Good Night");
} else {
    alert("Invalid Input");
};