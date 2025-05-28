// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 19;
alert(`I am  ${age}  years old.`);

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.Show his / her number of visits on your web page.For example: “You have visited this site N times”.

var visit_count = localStorage.getItem('visit_count');
visit_count++;
localStorage.setItem("visit_count", visit_count);
alert(`You have visited this site ${visit_count} times.`);

// 3. Declare a variable called birthYear & assign to it your birth year.Show the following message in your browser:

var birth_year = 2005;
document.write(`My birth year is ${birth_year}.<br>Data type of my declared variable is ${typeof (birth_year)}.`);

// 4. A visitor visits an online clothing store www.xyzClothing.com.Write a script to store in variables the following information:
// a.Visitor’s name
// b.Product title
// c.Quantity i.e.how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T - shirt(s) on XYZ Clothing store”.

var visitor_name = "John Doe";
var product_title = "T-shirt";
var quantity = 5;

document.write(`<br><br><b>${visitor_name}</b> ordered <b>${quantity} ${product_title}</b>(s) on XYZ Clothing store.`);
