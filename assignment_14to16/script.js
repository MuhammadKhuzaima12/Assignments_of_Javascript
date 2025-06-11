// 1. Declare an empty array using JS literal notation to store student names in future.

var student_array;


// 3. Declare and initialize a strings array.

var str_arr = ["Muhammad", "Khuzaima", "Arif"];

// 4. Declare and initialize a numbers array.

var num_arr = [12, 8, 5];

// 5. Declare and initialize a boolean array.

var bool_arr = [true, false, true];

// 6. Declare and initialize a mixed array.

var mix_arr = ["Muhammad", 45, true];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan
// (e.g.SSC, HSC, BCS, BS, BCOM, MS, M.Phil., PhD).Show the listed qualifications in your browser like:

document.write(`<h2>Task 7</h2>`);
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.write(`1) ${qualifications[0]}`);
document.write(`<br>2) ${qualifications[1]}`);
document.write(`<br>3) ${qualifications[2]}`);
document.write(`<br>4) ${qualifications[3]}`);
document.write(`<br>5) ${qualifications[4]}`);
document.write(`<br>6) ${qualifications[5]}`);
document.write(`<br>7) ${qualifications[6]}`);
document.write(`<br>8) ${qualifications[7]}`);

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

document.write(`<h2>Task 8</h2>`);
var stu_arr = ["Micheal", "John", "Tony"];
var stu_marks = [320, 230, 480];
var stu_percentage = [stu_marks[0] / 500 * 100, stu_marks[1] / 500 * 100, stu_marks[2] / 500 * 100];

document.write(`Score of ${stu_arr[0]} is ${stu_marks[0]}. Percentage: ${stu_percentage[0]}%`);
document.write(`<br>Score of ${stu_arr[1]} is ${stu_marks[1]}. Percentage: ${stu_percentage[1]}%`);
document.write(`<br>Score of ${stu_arr[2]} is ${stu_marks[2]}. Percentage: ${stu_percentage[2]}%`);

// 9. Initialize an array with color names.Display the array elements in your browser.

document.write(`<h2>Task 9</h2>`);
document.write(`<h3>Initialization</h3>`);
var colors = ["Red", "Orange", "Yellow"];
document.write(`Initialize an array named "colors".`);
document.write(`<br>[${colors}]`);

// a.Ask the user what color he / she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

document.write(`<h3>A</h3>`);
colors.unshift(prompt("Enter a color you want to add in the 'colors' array (at the start of the array) :"));
document.write(`After adding the color(s) at the start of "colors", which are input by user to .`);
document.write(`<br>[${colors}]`);

// b.Ask the user what color he / she wants to add to the end & add that color to the end of the array.Display the
// updated array in your browser.

document.write(`<h3>B</h3>`);
colors.push(prompt("Enter a color you want to add in the 'colors' array (at the end of the array) :"));
document.write(`After adding the color(s) at the end of "colors", which are input by user to .`);
document.write(`<br>[${colors}]`);

// c.Add two more color to the beginning of the array.Display the updated array in your browser.

document.write(`<h3>C</h3>`);
colors.unshift("Violet","Indigo");
document.write(`After adding two colors at the start of "colors".`);
document.write(`<br>[${colors}]`);

// d.Delete the first color in the array.Display the updated array in your browser.

document.write(`<h3>D</h3>`);
colors.shift();
document.write(`After removing the first color from the start of "colors".`);
document.write(`<br>[${colors}]`);

// e.Delete the last color in the array.Display the updated array in your browser.

document.write(`<h3>E</h3>`);
colors.pop();
document.write(`After removing the first color from the end of "colors".`);
document.write(`<br>[${colors}]`);

// f.Ask the user at which index he / she wants to add a color & color name.Then add the color to desired
// position / index. .Display the updated array in your browser.

document.write(`<h3>F</h3>`);
colors.splice(Number(prompt("Enter the index where you want to add a color :")),0,prompt("Enter the color you want to add :"));
document.write(`After adding the color user gave at the desired index of "colors".`);
document.write(`<br>[${colors}]`);

// g.Ask the user at which index he / she wants to delete color(s) & how many colors he / she wants to delete.
// Then remove the same number of color(s) from user - defined position / index. .Display the updated array in your browser.

document.write(`<h3>G</h3>`);
colors.splice(Number(prompt("Enter the index from where you want to delete colors :")), Number(prompt("Enter the number of colors you want to delete :")));
document.write(`After adding the color user gave at the desired index of "colors".`);
document.write(`<br>[${colors}]`);

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

document.write(`<h2>Task 10</h2>`);
var stu_scores = [320, 230, 480, 120];
document.write(`Scores of Students are [${stu_scores}].`);
document.write(`<br>Ordered Scores of Students are [${stu_scores.sort()}].`);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities array.

document.write(`<h2>Task 11</h2>`);
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var select_cities = cities.slice(2,4)
document.write(`Cities List :<br> [${cities}].`);
document.write(`<br><br>Selected Cities List :<br> [${select_cities}].`);

// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

document.write(`<h2>Task 12</h2>`);
var str_join_arr = ["This ", "is ", "my ", "cat."];
document.write(`Array :<br> [${str_join_arr}].`);
document.write(`<br><br>String :<br> ${str_join_arr.join(' ')}.`);

// 13. Create a new array.Store values one by one in such a way that you can access the values in the order in which they
// were stored. (FIFO - First In First Out)

document.write(`<h2>Task 13 (FIFO)</h2>`);
var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
document.write(`Devices :<br> [${devices}].`);
document.write(`<br>Out :<br> ${devices.shift()}.`);
document.write(`<br>Out :<br> ${devices.shift()}.`);
document.write(`<br>Out :<br> ${devices.shift()}.`);
document.write(`<br>Out :<br> ${devices.shift()}.`);

// 14. Create a new array.Store values one by one in such a way that you can access the values in reverse order.
// (Last In - First Out)

document.write(`<h2>Task 14 (LIFO)</h2>`);
var devices_2 = [];
devices_2.push("Keyboard");
devices_2.push("Mouse");
devices_2.push("Printer");
devices_2.push("Monitor");
document.write(`Devices :<br> [${devices_2}].`);
document.write(`<br>Out :<br> ${devices_2.pop()}.`);
document.write(`<br>Out :<br> ${devices_2.pop()}.`);
document.write(`<br>Out :<br> ${devices_2.pop()}.`);
document.write(`<br>Out :<br> ${devices_2.pop()}.`);

// 15. Write a program to store phone manufacturers(Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown / select menu in your browser using document.write() method:

document.write(`<h2>Task 15 (Dropdown)</h2>`);
var phn_mfn = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write(`<select>
                  <option>${phn_mfn[0]}</option> 
                  <option>${phn_mfn[1]}</option> 
                  <option>${phn_mfn[2]}</option> 
                  <option>${phn_mfn[3]}</option> 
                  <option>${phn_mfn[4]}</option> 
                  <option>${phn_mfn[5]}</option>
                </select> `);