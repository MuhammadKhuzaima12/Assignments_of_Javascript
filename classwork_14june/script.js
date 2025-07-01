// 1. Create a program that asks for the user's birth year using `prompt()`, then calculates and alerts their age.

var user_birthyear = Number(prompt("Enter your birth year :"));
var user_age = 2025 - user_birthyear;
alert("Your age is " + user_age);

// 2. Use `prompt()` to get 5 numbers from the user, store them in an array, and then calculate and log the average using a loop.

var num_arr = [];
var sum = 0;
for (var i = 0; i < 3; i++) {
    num_arr[i] = Number(prompt("Enter a number:"));
    sum = sum + num_arr[i]
};
console.log(sum);
var average = sum / num_arr.length;
console.log(average);

// 3. Declare an array of 10 numbers.Use a loop to print only the numbers that are divisible by 3.

var is_div_by3 = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
var div_by3 = [];
var no_div_by3 = 0;
for (var i = 0; i < is_div_by3.length; i++) {
    if (is_div_by3[i] % 3 == 0) {
        div_by3.push(is_div_by3[i]);
        no_div_by3++;
    };
};
document.writeln(`${div_by3}`);
document.writeln(`<br>${no_div_by3}`);

// 4. Write a `for` loop to calculate the factorial of a number entered by the user.

var user_num = Number(prompt("Enter a number to know it's factorial :"));
var factorial = user_num;
for (var i = 2; i < user_num; i++) {
    factorial = factorial * i;
};
alert("The factorial of " + user_num + " is " + factorial + ".");

// 5. Create a program that uses `prompt()` to accept a string from the user and prints the string **in reverse ** using a loop.

var user_str = prompt("Enter a string to get that in reverse order :");
var reversed = "";
for (var i = user_str.length - 1; i >= 0; i--) {
    reversed = reversed.concat(user_str[i]);
};
alert("Your string in reversed order is look like '" + reversed + "' .");

// 6.How many times a specific letter appears in a given string.Use this in a prompt - based program.

var user_string = prompt("Enter a string:");
var spec_char = prompt("Enter a character to know it's number :");
var no_spec_char = 0;
for (var i = 0; i < user_string.length; i++) {
    if (user_string[i] == spec_char) {
        no_spec_char++;
    };
};
alert("There is " + no_spec_char + " '" + spec_char.toUpperCase() + "' in that string.");

// 7. Ask the user to enter five names(one by one using`prompt()`), store them in an array, then sort the array and display it using`console.log()`.

var user_names = [];
for (var i = 0; i < 5; i++) {
   user_names[i] = prompt("Enter a name :")
};
user_names.sort();
console.log(user_names);


// 8. Use `console.log()` to display a multiplication table(1 to 10) of a number entered by the user via`prompt()`.

var user_number = Number(prompt("Enter a number :"));
for (var i = 1; i < 11; i++) {
    console.log(user_number*i);
};

// 9. Write a program that asks the user for a sentence and checks how many vowels it contains.Output the count using`console.log()`.

var vowels = ["a", "e", "i", "o", "u"];
var user_sent = prompt("Enter a sentence and I will tell you the number of vowels in it :");
var no_of_vowels = 0;
for (var i = 0; i < user_sent.length; i++) {
    user_sent_char = user_sent[i].toLowerCase();
    for (var j = 0; j < vowels.length; j++) {
        if (user_sent_char == vowels[j]) {
            no_of_vowels++;
        };
    };
};
console.log(no_of_vowels);


// 10. Create two arrays: one with product names and one with prices.Display each product with its corresponding price using a loop.

var products = ["Apple", "Samsung", "Realme", "Vivo", "1+"];
var prices = ["100k", "70k", "45k", "35k", "80k"];
for (var i = 0; i < products.length; i++) {
    for (var j = i; j == i; j++) {
        document.writeln(`${products[i]} : ${prices[j]}<br>`);
    };
};

// 11. Ask the user to enter a temperature in Celsius and convert it to Fahrenheit using the formula:
//     `F = (C × 9/5) + 32`, and display the result with `alert()`.

var temp_C = Number(prompt("Enter a temperature in Celcius :"));
var temp_F = (temp_C * 9 / 5) + 32;
alert("The Temperature you entered in Celcius (" + temp_C + "\u00B0C) is converted to Fahrenheit which is (" + temp_F + "\u00B0F).");

// 12. Write a script to check whether a given string is a palindrome(e.g., “madam” or “racecar”).

var user_str_palin = prompt("Enter a string to get that in reverse order :");
var reversed_palin = "";
for (var i = user_str.length - 1; i >= 0; i--) {
    reversed = reversed.concat(user_str[i]);
};
if (reversed_palin === user_str_palin) {
    alert("Your string is palindrome.");
} else {
    alert("Your string is not palindrome.");
};

// 13. Ask the user for a number and determine if it is ** prime ** or not.Show the result using`alert()`.

var num_prime = Number(prompt("Enter a number to know if it is either prime or composite :"));
var is_prime = true;
for (var i = 2; i < num_prime; i++) {
    if (num_prime % i == 0) {
        is_prime = false;
        break;
    }
}
if (is_prime) {
    alert("Your number is prime.")
} else {
    alert("Your number is composite.")
}


// 14. Create an array of 10 random numbers between 1 and 100. Use a loop to find the largest number in the array.

var nums = [65, 48, 97, 21, 34, 99, 37, 54, 10, 9];
var largest = nums[0];
for (var i = 0; i < nums.length; i++){
    if (nums[i] > largest) {
        largest = nums[i];
    };
};
console.log("The largest number is " + largest);

// 15. Write a program to simulate a simple calculator.Ask the user for two numbers and an operation(+, −, ×, ÷), and then perform and display the result.

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
} else {
    alert(`Enter valid operator.`);
};

// 16.Loop through an array of numbers and create a new array with only the numbers greater than 50. Use a `for` loop and `push()` method.

var numbers = [47, 98, 56, 76, 21, 34, 68, 8, 96, 72, 39, 16, 48, 54, 31];
var nums_greater50 = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        nums_greater50.push(numbers[i]);
    };
};
console.log(nums_greater50);
