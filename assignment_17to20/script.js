// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

var multi_arr = [[], [], []];

// 2. Declare and initialize a multidimensional array representing the following matrix:

document.write(`<h2>Task 2</h2>`);
var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
document.write(`${matrix[0]}`);
document.write(`<br>${matrix[1]}`);
document.write(`<br>${matrix[2]}`);

// 3. Write a program to print numeric counting from 1 to 10.

document.write(`<h2>Task 3</h2>`);
var i;
for (i = 1; i < 11; i++){
    document.write(`${i}<br>`);
};

// 4. Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.

document.write(`<h2>Task 4</h2>`);
var tbl_num = Number(prompt("Enter a number you want it's table:"));
var tbl_mlts = Number(prompt("How many multiples of that number you want? Enter:"));

for (i = 1; i <= tbl_mlts; i++){
    document.write(`${tbl_num} * ${i} = ${tbl_num*i}<br>`);
};

// 5. Write a program to print items of the following array using for loop:
// fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write(`<h2>Task 5</h2>`);
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (i = 0; i < fruits.length; i++) {
     document.write(`${fruits[i]}<br>`);
};
for (i = 0; i < fruits.length; i++) {
     document.write(`Element at index ${i} is ${fruits[i]}.<br>`);
};

// 6. Generate the following series in your browser.See example output.

document.write(`<h2>Task 6</h2>`);

// a.Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write(`<h3>Counting:</h3>`);
for (i = 1; i < 16; i++) {
    document.write(` ${i}`);
    if (i === 15) {
        break;
    };
     document.write(`,`);
};

// b.Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

document.write(`<h3>Reverse Counting:</h3>`);
for (i = 10; i > 0 ; i--) {
    document.write(` ${i}`);
    if (i === 1) {
        break;
    };
    document.write(`,`);
};

// c.Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write(`<h3>Even :</h3>`);
for (i = 0; i <= 20; i++) {
    if (i%2==0) {
        document.write(` ${i}`);
        if (i === 20) {
            break;
        };
        document.write(`,`);
    };
};

// d.Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write(`<h3>Odd :</h3>`);
for (i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        document.write(` ${i}`);
        if (i === 19) {
            break;
        };
        document.write(`,`);
    };
};

// e.Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write(`<h3>Series :</h3>`);
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(` ${i}k`);
        if (i === 20) {
            break;
        };
        document.write(`,`);
    };
};

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.

// document.write(`<h2>Task 7</h2>`);
var sweets = ["cake", "apple pie", "cookie", "chips", "patties"];
var user_ask = prompt("Welcome to ABC Bakery. What do you want Sir/Ma'am?");
var flag = false;
for (i = 0; i < sweets.length; i++) {
    if (user_ask == sweets[i]) {
        alert(sweets[i] + " is available at index " + i + " in our bakery.");
        flag = true;
    };
};
if (!flag) {
    alert("We are sorry, " + user_ask + " is not available in our Bakery.")
};

// 8. Write a program to identify the largest number in the given array.
//     A = [24, 53, 78, 91, 12].

document.write(`<h2>Task 8</h2>`);
var large_num = [24, 53, 78, 91, 12];
for (i = 0; i < large_num.length; i++) {
    for (var j = 0; j < large_num.length; j++) {
        if (large_num[i] > large_num[j]) {
            var largest = large_num[i];
            console.log(largest);
        };
    };
};
document.write(`Array items:[${large_num}]<br>`);
document.write(`The Largest Number is ${largest}<br>`);

// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

document.write(`<h2>Task 9</h2>`);
var small_num = [24, 53, 78, 91, 12];
for (i = 0; i < small_num.length; i++) {
    for (var j = 0; j < small_num.length; j++) {
        if (small_num[i] < small_num[j]) {
            var smallest = small_num[i];
            console.log(smallest);
        };
    };
};
document.write(`Array items:[${small_num}]<br>`);
document.write(`The Smallest Number is ${smallest}<br>`);

// 10. Write a program to print multiples of 5 ranging 1 to 100.

document.write(`<h2>Task 10</h2>`);
for (i = 1;i*5 <= 100 ; i++) {
    document.write(`${i*5},`)
};