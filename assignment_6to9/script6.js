// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

document.write(`<h1>Task 1</h1>`);
var num1 = Number(prompt("Enter a digit:"));
document.write(`The number you entered is ${num1}.`);
document.write(`<br>..............................................`);
document.write(`<br><br>`);
document.write(`<br>The value of ++number is : ${++num1}`);
document.write(`<br>Now the value of number is : ${num1}`);
document.write(`<br><br>`);
document.write(`<br>The value of number++ is : ${num1++}`);
document.write(`<br>Now the value of number is : ${num1}`);
document.write(`<br><br>`);
document.write(`<br>The value of --number is : ${--num1}`);
document.write(`<br>Now the value of number is : ${num1}`);
document.write(`<br><br>`);
document.write(`<br>The value of number-- is : ${num1--}`);
document.write(`<br>Now the value of number is : ${num1}`);


// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

document.write(`<h1>Task 2</h1>`);

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(`The value of "a" is ${a} and "b" is ${b}.`);
document.write(`<br>The Operation we want to perform is "--a - --b + ++b + b--".`);
document.write(`<h3>Step 1</h3>`);
document.write(` "--a", Now the value of a is 1`);
document.write(`<h3>Step 2</h3>`);
document.write(`"--a - --b", in this step 1(--a) - 0(--b) = 1 `);
document.write(`<h3>Step 3</h3>`);
document.write(`"--a - --b + ++b", in this step 1(--a) - 0(--b) + 1(++b) = 2 `);
document.write(`<h3>Step 4</h3>`);
document.write(`"--a - --b + ++b + b--", in this step 1(--a) - 0(--b) + 1(++b) + 1(b--) = 3 `);
document.write(`<h3>Result</h3>`);
document.write(`Then, the result become ${result}.`);

// 3. Write a program that takes input a name from user & greet the user.

var user_name = prompt("Enter Your Name :");
alert("Hello " + user_name);


// 5. Write a program to take input a number from user & display it’s multiplication table on your browser.If user
// does not enter a new number, multiplication table of 5 should be displayed by default.

document.write(`<h1>Task 5</h1>`);
var table_digit = +prompt("Enter a number which table you want:", 5)
document.write(`<h3>Table of ${table_digit}</h3>`);
document.write(`<br>${table_digit} * 1 = ${table_digit * 1}`);
document.write(`<br>${table_digit} * 2 = ${table_digit * 2}`);
document.write(`<br>${table_digit} * 3 = ${table_digit * 3}`);
document.write(`<br>${table_digit} * 4 = ${table_digit * 4}`);
document.write(`<br>${table_digit} * 5 = ${table_digit * 5}`);
document.write(`<br>${table_digit} * 6 = ${table_digit * 6}`);
document.write(`<br>${table_digit} * 7 = ${table_digit * 7}`);
document.write(`<br>${table_digit} * 8 = ${table_digit * 8}`);
document.write(`<br>${table_digit} * 9 = ${table_digit * 9}`);
document.write(`<br>${table_digit} * 10 = ${table_digit * 10}`);

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

document.write(`<h1>Task 6</h1>`);
var sub1 = prompt("Enter the name of your First Subject :");
var sub1_marks = Number(prompt("Enter your obtained marks in First Subject :"));
var sub2 = prompt("Enter the name of your Second Subject :");
var sub2_marks = Number(prompt("Enter your obtained marks in Second Subject :"));
var sub3 = prompt("Enter the name of your Third Subject :");
var sub3_marks = Number(prompt("Enter your obtained marks in Third Subject :"));
var total_marks = 100;
var grand_total = 300;
var obt_grand = sub1_marks + sub2_marks + sub3_marks;



document.write(` 
    <table>
    <tr>
     <td><b>Subject</b></td>
     <td><b>Total Marks</b></td>
     <td><b>Obtained Marks</b></td>
     <td><b>Percentage</b></td>
    </tr>
    <tr>
     <td>${sub1}</td>
     <td>${total_marks}</td>
     <td>${sub1_marks}</td>
     <td>${parseFloat(sub1_marks / total_marks * 100)}%</td>
    </tr>
    <tr>
     <td>${sub2}</td>
     <td>${total_marks}</td>
     <td>${sub2_marks}</td>
     <td>${parseFloat(sub2_marks / total_marks * 100)}%</td>
    </tr>
    <tr>
     <td>${sub3}</td>
     <td>${total_marks}</td>
     <td>${sub3_marks}</td>
     <td>${parseFloat(sub3_marks / total_marks * 100)}%</td>
    </tr>
    <tr>
     <td><b>Total</b></td>
     <td>${total_marks * 3}</td>
     <td>${sub1_marks + sub2_marks + sub3_marks}</td>
     <td>${parseFloat(obt_grand / grand_total * 100)}%</td>
    </tr>
    </table>
    `)

// console.table([sub1,sub2,sub3],[sub1_marks,sub2_marks,sub3_marks]);
