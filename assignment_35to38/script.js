// 1. Write a function that displays current date & time in your browser.

function current_date() {
    var d = new Date();
    document.writeln(`${d} <br><br>`);
};
current_date();

// 2. Write a function that takes first & last name and then it greets the user using his full name.

function greet() {
    var first_name = prompt("Enter your first name :");
    var last_name = prompt("Enter your last name :");
    var full_name = first_name.concat(" ", last_name);
    alert("Hello! ".concat(full_name));
};
greet();

// 3. Write a function that adds two numbers(input by user) and returns the sum of two numbers.

function sum() {
    var num1 = Number(prompt("Enter a number :"));
    var num2 = Number(prompt("Enter a number :"));
    var sum = num1 + num2;
    alert("Sum of these numbers is ".concat(sum));
    return sum;
};
sum();

// 4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation.Return and show the desired result in your browser.

function calculator(number1,number2,operator) {
    var result;

    if (operator == "+") {
        result = number1 + number2
    } else if (operator == "-") {
        result = number1 - number2
    } else if (operator == "*") {
        result = number1 * number2
    } else if (operator == "/") {
        result = number1 / number2
    } else if (operator == "%") {
        result = number1 % number2
    } else {
        result = `Enter valid operator.`;
    };
    document.writeln(`${number1} ${operator} ${number2} = ${result} <br><br>`);
    return result;
};
calculator(5, 9,"*");

// 5. Write a function that squares its argument.

function square(number) {
    square = number * number;
    document.writeln(`${number}^2 = ${square} <br><br>`);
    return square;
};
square(6);

// 6. Write a function that computes factorial of a number.

function factorial(number) {
    var factorial = number;
    for (var i = 2; i < number; i++) {
        factorial = factorial * i;
    };
    document.writeln(`The factorial of ${number} = ${factorial} <br><br>`);
    return factorial;
};
factorial(7);

// 7. Write a function that take start and end number as inputs & display counting in your browser.

function compl_count() {
    var start = Number(prompt("Enter a number (From where you want to start counting) :"));
    var end = Number(prompt("Enter a number (where you want to end counting) :"));
    for (var i = start; i <= end; i++) {
        document.writeln(`${i}<br>`);
    };
    document.writeln(`<br>`)
};
compl_count();

// 8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calc_hyp() {
    function calc_sq(number) {
        return number * number;
    };
    calc_sq();
    var base = Number(prompt("Enter a number (base for a right-angled triangle) : "));
    var per = Number(prompt("Enter a number (perpendicular for a right-angled triangle) : "));
    var sq_of_base = calc_sq(base);
    var sq_of_per = calc_sq(per);
    var sum_of_sqs = sq_of_base + sq_of_per;
    var hyp = Math.sqrt(sum_of_sqs);
    document.writeln(`The Hypotenuse = ${hyp} <br><br>`);
    return hyp;
};
calc_hyp();

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i.Arguments as value

function area(width , height) {
    var area = width * height;
    document.writeln(`The Area = ${area} <br><br>`);
    return area;
};
area(5, 6);

// ii.Arguments as variables

function area2(width2, height2) {
    var area2 = width2 * height2;
    document.writeln(`The Area = ${area2} <br><br>`);
    return area2;
};
area2(width2 = 4, height2 =  9);

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not ?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

function check_palindrome() {
    var user_str_palin = prompt("Enter a string (to check either it is palindrome or not) :");
    user_str_palin = user_str_palin.toLowerCase();
    var reversed_palin = "";
    for (var i = user_str_palin.length - 1; i >= 0; i--) {
        reversed_palin = reversed_palin.concat(user_str_palin[i]);
    };
    if (reversed_palin === user_str_palin) {
        alert("Your string is palindrome.");
    } else if (reversed_palin !== user_str_palin) {
        alert("Your string is not palindrome.");
    } else {
        alert("Enter a valid input");
    };
    return reversed_palin;
};
check_palindrome();

// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING: 'the quick brown fox'
// EXPECTED OUTPUT: 'The Quick Brown Fox'

function title_case(str) {
    let sent = str;
    let result = "";

    for (let i = 0; i < sent.length; i++) {
        if (i === 0 || sent[i - 1] === " ") {
            result += sent[i].toUpperCase();
        } else {
            result += sent[i];
        }
    }

    alert(result);
}
title_case("the quick brown fox");

// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING: 'Web Development Tutorial'
// EXPECTED OUTPUT: 'Development'

function longest_word(str2) {
    var sent2 = str2;
    var split_sent2 = sent2.split(" ");
    longest_word = split_sent2[0];
    for (var i = 0; i < split_sent2.length; i++) {
        if (split_sent2[i].length > longest_word.length ) {
            longest_word = split_sent2[i];
        };
    };
    document.writeln(`Longest word is '${longest_word}'. <br><br>`);
    
};
longest_word('Web Development Tutorial');

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'JSResourceS.com', 'o'

function letter_appear(str3, letter) {
    var sent3 = str3;
    sent3 = sent3.toLowerCase();
    var letter = letter;
    letter = letter.toLowerCase();
    var ltr_count = 0
    for (var i = 0; i < sent3.length; i++) {
        if (sent3[i] == letter) {
            ltr_count++;
        };
    };
    document.writeln(`Number of occurence of '${letter}' is ${ltr_count}. <br><br>`);
};
letter_appear("JSResourceS.com","O")

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Circumference of circle = 2πr

function calcCircumference() {
    var radius = 3;
    var circumference = 2 * 3.146 * radius;
    document.writeln(`The circumference is ${circumference}. <br><br>`);
};
calcCircumference();

// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Area of circle = πr2

function calcArea() {
    var radius = 3;
    var area = 3.146 * radius * radius;
    document.writeln(`The area is ${area}. <br><br>`);
};
calcArea();
