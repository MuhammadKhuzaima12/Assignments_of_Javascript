// 1. Write a program that take two numbers & add them in a new variable.Show the result in your browser.

var num1 = +prompt("Enter your First Number for Arithmetic Operations :");
var num2 = +prompt("Enter your Second Number for Arithmetic Operations :");
var sum = num1 + num2;

document.write(`<h1>Task 1</h1>`);
document.write(`Sum of ${num1} and ${num2} is ${sum}.`)

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var subtract = num1 - num2;
var multiply = num1 * num2;
var division = parseFloat(num1 / num2);
var modulus = num1%num2;

document.write(`<h1>Task 2</h1>`);
document.write(`Subtraction of ${num2} from ${num1} is ${subtract}.`)
document.write(`<br>Multiplication of ${num1} and ${num2} is ${multiply}.`)
document.write(`<br>Division of ${num1} by ${num2} is ${division}.`)
document.write(`<br>Remainder of ${num1} divide by ${num2} is ${modulus}.`)

// 3. Do the following using JS Mathematic Expressions
//    a.Declare a variable.
//    b.Show the value of variable in your browser like “Value after variable declaration is: ??”.
//    c.Initialize the variable with some number.
//    d.Show the value of variable in your browser like “Initial value: 5”.
//    e.Increment the variable.
//    f.Show the value of variable in your browser like “Value after increment is: 6”.
//    g.Add 7 to the variable.
//    h.Show the value of variable in your browser like “Value after addition is: 13”.
//    i.Decrement the variable.
//    j.Show the value of variable in your browser like “Value after decrement is: 12”.
//    k.Show the remainder after dividing the variable’s value by 3.
//    l.Output : “The remainder is: 0”.
  
document.write(`<h1>Task 3</h1>`);
var number;
document.write(`Value after variable declaration is ${number}`);
number = 5;
document.write(`<br>Initial value: ${number}`);
number++;
document.write(`<br>Value after increment is: ${number}`);
number = number + 7;
document.write(`<br>Value after addition is: ${number} `);
number--;
document.write(`<br>Value after decrement is: ${number}`);
num_divideby_3 = number % 3;
document.write(`<br>The remainder is: ${num_divideby_3}`);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

document.write(`<h1>Task 4</h1>`);
var ticket_cost = 600;
var no_of_tickets = 5;
document.write(`Total cost to buy ${no_of_tickets} tickets to a movie is ${ticket_cost * no_of_tickets} PKR.`);

// 5. Write a script to display multiplication table of any number in your browser.

document.write(`<h1>Task 5</h1>`);
var table_digit = +prompt("Enter a number which table you want:", 2)
document.write(`<h3>Table of ${table_digit}</h3>`);
document.write(`<br>${table_digit} * 1 = ${table_digit*1}`);
document.write(`<br>${table_digit} * 2 = ${table_digit*2}`);
document.write(`<br>${table_digit} * 3 = ${table_digit*3}`);
document.write(`<br>${table_digit} * 4 = ${table_digit*4}`);
document.write(`<br>${table_digit} * 5 = ${table_digit*5}`);
document.write(`<br>${table_digit} * 6 = ${table_digit*6}`);
document.write(`<br>${table_digit} * 7 = ${table_digit*7}`);
document.write(`<br>${table_digit} * 8 = ${table_digit*8}`);
document.write(`<br>${table_digit} * 9 = ${table_digit*9}`);
document.write(`<br>${table_digit} * 10 = ${table_digit * 10}`);

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a.Store a Celsius temperature into a variable.
// b.Convert it to Fahrenheit & output “NNoC is NNoF”.
// c.Now store a Fahrenheit temperature into a variable.
// d.Convert it to Celsius & output “NNoF is NNoC”.

// Conversion Fornmulae
// C = (F-32)*5/9
// F = (C*9/5)+32

document.write(`<h1>Task 6</h1>`);
var degree_sym = `\u00B0`;
var celsius_temp = 25;
var fahrenheit_temp = 70;
document.write(`${celsius_temp}${degree_sym}C is ${(celsius_temp*9/5)+32}.`);
document.write(`<br>${fahrenheit_temp}${degree_sym}C is ${(fahrenheit_temp - 32) * 5 / 9}.`);

// 7. Write a program to implement checkout process of a shopping cart system for an e - commerce website.Storethe following in variables
// a.Price of item 1
// b.Price of item 2
// c.Ordered quantity of item 1
// d.Ordered Quantity of item 2
// e.Shipping charges

// Compute the total cost & show the receipt in your browser.

document.write(`<h1>Task 7</h1>`);

var item1_p = 650;
var item1_q = 3;
var item2_p = 100;
var item2_q = 7;
var ship_charge = 100;
var total_cost = (item1_p * item1_q) + (item2_p * item2_q) + ship_charge;
document.write(`<h2>Shopping Cart</h2>`);
document.write(`Price of item 1 is ${item1_p}.`);
document.write(`<br>Quantity of item 1 is ${item1_q}.`);
document.write(`<br>Price of item 2 is ${item2_p}.`);
document.write(`<br>Quantity of item 2 is ${item2_q}.`);
document.write(`<br>Shipping Charges are ${ship_charge}. `);
document.write(`<br><br>Total cost of your order is ${total_cost}. `);

// 8. Store total marks & marks obtained by a student in 2 variables.Compute the percentage & show the result in your browser

document.write(`<h1>Task 8</h1>`);

var total_marks = 980;
var obt_marks = 804;
var percentage = parseFloat((obt_marks / total_marks) * 100);
document.write(`<h2>Mark Sheet</h2>`);
document.write(`Total Marks:${total_marks}.`);
document.write(`<br>Marks Obtained:${obt_marks}.`);
document.write(`<br>Percentage:${percentage}%.`);


// 9. Assume we have 10 US dollars & 25 Saudi Riyals.Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write(`<h1>Task 9</h1>`);

var us_dollar = 104.80;
var saudi_riyal = 28;
var us_dollar_q = 10;
var saudi_riyal_q = 25;

document.write(`<h2>Currency in PKR</h2>`);
document.write(`Total Currency in PKR:${us_dollar * us_dollar_q + saudi_riyal * saudi_riyal_q}`);


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a.Add 5
// b.Multiply by 10
// c.Divide the result by 2
// Perform all calculations in a single expression

document.write(`<h1>Task 10</h1>`);

var num3 = 3;
document.write(`After adding 5 then multiplying to 10 and then dividing by 2, the stored digit become ${((num3 + 5) * 10) / 2}.`);


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
//     a.Store the current year in a variable.
//     b.Store their birth year in a variable.
//     c.Calculate their 2 possible ages based on the stored values.

document.write(`<h1>Task 11</h1>`);

var birth_year = +prompt("Enter Your Birth Year:");
var current_year = 2025;

document.write(`<h2>Age Calculator</h2>`);
document.write(`Birth Year:${birth_year}`);
document.write(`<br>Current Year:${current_year}`);
document.write(`<br>Your Age is:${current_year - birth_year}`);

// 12. The Geometrizer: Calculate properties of a circle.
//     a.Store a radius into a variable.
//     b.Calculate the circumference based on the radius, and output “The circumference is NN”.
//     (Hint: Circumference of a circle = 2 π r, π = 3.142)
//     c.Calculate the area based on the radius, and output “The
//     area is NN”.(Hint: Area of a circle = π r2, π = 3.142)

document.write(`<h1>Task 12</h1>`);

var radius = 20;
var pie = 3.142;
var circumference = 2 * pie * radius;
var area = pie * (radius * radius);

document.write(`<h2>The Geometrizer</h2>`);
document.write(`Radius of a circle is:${radius}`);
document.write(`<br>The circumference is:${circumference}`);
document.write(`<br>The area is:${area}`);

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is ? Wonder no more.
//         a.Store your favorite snack into a variable
//         b.Store your current age into a variable.
//         c.Store a maximum age into a variable.
//         d.Store an estimated amount per day(as a number).
//         e.Calculate how many would you eat total for the rest of your life.

document.write(`<h1>Task 13</h1>`);

var fav_snack = "Sooper";
var myCurrentAge = 19;
var maxAge = 70;
var perdayAmount = 2;
var rest_life = maxAge - myCurrentAge;
var year = 365;

document.write(`<h2>The LifeTime Supply Calculator</h2>`);
document.write(`Favourite Snack: ${fav_snack}`);
document.write(`<br>Current Age: ${myCurrentAge}`);
document.write(`<br>Estimated Maximum Age: ${maxAge}`);
document.write(`<br>Amount of snack per day: ${perdayAmount}`);
document.write(`<br>You will need ${perdayAmount * rest_life * year} ${fav_snack} to last you until the ripe old age of ${maxAge}.`);
