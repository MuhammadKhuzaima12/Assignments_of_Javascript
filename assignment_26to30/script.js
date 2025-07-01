// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a.number
// b.round off value of the number
// c.floor value of the number
// d.ceil value of the number

var user_num = Number(prompt("Enter a positive number:"));
document.writeln(`number :${user_num}<br>`);
document.writeln(`round off value :${Math.round(user_num)}<br>`);
document.writeln(`floor value :${Math.floor(user_num)}<br>`);
document.writeln(`ceil value :${Math.ceil(user_num)}`);

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a.number
// b.round off value of the number
// c.floor value of the number
// d.ceil value of the number

var user_num2 = Number(prompt("Enter a negative number:"));
document.writeln(`number :${user_num}<br>`);
document.writeln(`round off value :${Math.round(user_num)}<br>`);
document.writeln(`floor value :${Math.floor(user_num)}<br>`);
document.writeln(`ceil value :${Math.ceil(user_num)}`);

// 3. Write a program that displays the absolute value of a number.
// E.g.absolute value of - 4 is 4 & absolute value of 5 is 5

var user_num3 = Number(prompt("Enter a digit(positive/negative):"));
alert(`The absolute value of "${user_num3}" is "${Math.abs(user_num3)}".`);

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

var rndm_dice_num = Math.floor(Math.random() * 6 + 1);
document.writeln("<br>" + rndm_dice_num);
var rndm_dice_num = Math.floor(Math.random() * 6 + 1);
document.writeln("<br>" + rndm_dice_num);

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var coin_side = Math.floor(Math.random() * 2);
if (coin_side == 0) {
    document.writeln(`Random Coin Value : Head`)
} else if (coin_side == 1) {
    document.writeln(`"<br>" + Random Coin Value : Tail`)
} else {
    document.writeln(`"<br>" + Something went wrong!`)
};

// 6. Write a program that shows a random number between 1 and 100 in your browser.

var rndm_num = Math.floor(Math.random() * 100 + 1);
document.writeln(`"<br>" + Random number between 1 and 100 : ${rndm_num}`);

// 7. Write a program that asks the user about his weight.Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//

// 8. Write a program that stores a random secret number from 1 to 10 in a variable.Ask the user to input a number
// between 1 and 10. If the user input equals the secret number, congratulate the user.

var rndm_sec_num = Math.floor(Math.random() * 10 + 1); 
var user_num4 = Number(prompt("Enter a number(1-10):"));
if (user_num4 >= 1 && user_num4 <= 10) {
    if (user_num4 === rndm_sec_num) {
        alert("Congrats! You guess the secret number.");
    } else {
        alert("Sorry! You didn't guess the secret number.");
    }
} else {
    alert("Enter a number between 1 - 10!");
}
console.log(rndm_sec_num);
console.log(user_num4);
