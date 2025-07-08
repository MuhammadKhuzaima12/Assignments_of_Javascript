// 1. Write a program that displays current date and time in your browser.

var date = new Date();
document.writeln(`${date} <br><br>`);

// 2. Write a program that alerts the current month in words. For example December.

var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var cur_month = date.getMonth();
cur_month = months[cur_month];
document.writeln(`${cur_month} <br><br>`);

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var days = ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
var cur_day = date.getDay();
cur_day = days[cur_day];
document.writeln(`Today is ${cur_day}. <br><br>`);

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

if (cur_day == 6 || 0) {
    document.writeln(`It's Fun Day. <br><br>`);
};

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var cur_date = date.getDate();
if (cur_date <= 15) {
    document.writeln(`First fifteen days of the month. <br><br>`)
} else {
    document.writeln(`Last fifteen days of the month. <br><br>`)
};

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

var ms_till_now = date.getTime();
var mins_till_now = ms_till_now / 60000;
document.writeln(`Current Date : ${date}. <br><br>`);
document.writeln(`Ellapsed milliseconds since January 1, 1970 : ${ms_till_now}. <br><br>`);
document.writeln(`Ellapsed minutes since January 1, 1970 : ${mins_till_now}. <br><br>`);

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var cur_time = date.getHours();
if (cur_time <= 11) {
    document.writeln(`It's AM. <br><br>`);
} else {
    document.writeln(`It's PM. <br><br>`);
};

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var previous_date = new Date("Dec 31, 2020");
document.writeln(`Previous Date : ${previous_date}. <br><br>`);

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan ?
// Note : 1st Ramadan was on June 18, 2015

var ramadan_2015 = new Date("June 18, 2015");
var ms_cur_date = date.getTime();
var ms_ramadan_2015 = ramadan_2015.getTime();
var diff_in_ms = ms_cur_date - ms_ramadan_2015;
var diff = Math.floor(diff_in_ms / (1000 * 60 * 60 * 24));
document.writeln(`${diff} days have passed since 1st Ramadan, 2015. <br><br>`);

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var beg_of_2015 = new Date("Jan 1, 2015");
var ref_date = new Date("Dec 5, 2015");
var ms_beg_of_2015 = beg_of_2015.getTime();
var ms_ref_date = ref_date.getTime();
var diff_in_ms = ms_ref_date - ms_beg_of_2015;
var diff_in_s = Math.floor(diff_in_ms / 1000);
document.writeln(`On reference date ${ref_date}, ${diff_in_s} seconds had passed since beginning of 2015. <br><br>`);

// 11. Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var bef_1_hour = new Date();
bef_1_hour.setHours(1);
document.writeln(`Current Date : ${date}. <br><br>`);
document.writeln(`1 hour ago, ${bef_1_hour}. <br><br>`);

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back ?

var bef_100_year = new Date();
bef_100_year.setFullYear(date.getFullYear() - 100);
document.writeln(`Current Date : ${date}. <br><br>`);
document.writeln(`100 years ago, ${bef_100_year}. <br><br>`);

// 13. Write a program to ask the user about his age.Calculate and show his birth year in your browser.

var user_age = Number(prompt("Enter your age :"));
var user_birth_year = new Date();
user_birth_year.setFullYear(date.getFullYear() - user_age);
user_birth_year = user_birth_year.getFullYear();
document.writeln(`Your Age : ${user_age}. <br><br>`);
document.writeln(`Your Birth Year : ${user_birth_year}. <br><br>`);

// 14. Write a program to generate your K - Electric bill in your browser.All the amounts should be rounded off to 2 decimal places.Display the following fields:
// a.Customer Name
// b.Current Month
// c.Number of units
// d.Charges per unit
// e.Net Amount Payable(within Due Date)
// f.Late Payment Surcharge
// g.Gross Amount Payable(after Due Date)
// Where,
// Net Amount Payable(within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable(after Due Date) = Net Amount + Late Payment Surcharge

var cus_name = "ABC Customer";
var no_of_units = 410;
var chrg_per_units = 16;
var net_amt = no_of_units * chrg_per_units;
var late_chrg = 350;
var grs_amt = net_amt + late_chrg;
document.writeln(`<h1>K-Electric Bill</h1><br>`);
document.writeln(`Customer Name : ${cus_name}. <br>`);
document.writeln(`Month : ${cur_month}. <br>`);
document.writeln(`Number of units : ${no_of_units}. <br>`);
document.writeln(`Charges per unit : ${chrg_per_units}. <br><br>`);
document.writeln(`Net Amount Payable(within Due Date) : ${net_amt}. <br>`);
document.writeln(`Late Payment Surcharge : ${late_chrg}. <br>`);
document.writeln(`Gross Amount Payable(after Due Date) : ${grs_amt}. <br>`);