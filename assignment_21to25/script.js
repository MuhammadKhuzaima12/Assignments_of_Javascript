// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
// titled fullName.Greet the user using his full name.

// var first_name = prompt("Enter your first name :");
// var last_name = prompt("Enter your last name :");
// var full_name = first_name + " " + last_name;
// alert("Hello! " + full_name);

// 2. Write a program to take a user input about his favorite mobile phone model.Find and display the length of user
// input in your browser

// var user_fav_mob = prompt("Enter your favourite mobile :");
// console.log("The length of user's favourite mobile is " + user_fav_mob.length + ".");

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// console.log("The index of letter “n” in the word “Pakistani” is " + word.indexOf("n") + ".");

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var word2 = "Hello World";
// console.log("The last index of letter “l” in the word “Hello World” is " + word2.indexOf("l",5) + ".");

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// console.log("The character at 3rd index in the word “Pakistani” is “" + word.charAt(3) + "”.");

// 6. Repeat Q1 using string concat() method.

// var first_name = prompt("Enter your first name :");
// var last_name = prompt("Enter your last name :");
// var full_name = first_name.concat(" ",last_name);
// alert("Hello! " + full_name);

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var place = "Hyderabad";
// var last_phrase = place.slice(5, 9);
// var place2 = "Islam".concat(last_phrase);
// document.writeln(place);
// document.writeln("<br>",place2);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends.They play cricket and football together.”;

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var alter_msg = ""
// for (var i = 0; i < message.length; i++) {
//     if (message.slice(i,i+3) == "and") {
//         alter_msg += "&"
//         i = i + 2;
//     } else {
//         alter_msg += message[i]
//     }
// };
// console.log(alter_msg);

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var value_str = "472";
// var value_int = 472;
// document.writeln("Value :" + value_str);
// document.writeln("<br>Type :" + typeof(value_str));
// document.writeln("<br>Value :" + value_int);
// document.writeln("<br>Type :" + typeof(value_int));

// 10. Write a program that takes user input.Convert and show the input in capital letters.

// var user_str = prompt("Enter a string in lowercase :");
// var user_str_UC = user_str.toUpperCase();
// alert("Your string in upper-case is look like '" + user_str_UC + "'.");

// 11. Write a program that takes user input.Convert and show the input in title case.

// var user_str2 = prompt("Enter a name in lowercase :");
// var user_str2_sl = user_str2.slice(1,user_str2.length)
// var user_str2_TC = user_str2[0].toUpperCase()+user_str2_sl;
// alert("Your string in title-case is look like '" + user_str2_TC + "'.");

// 12. Write a program that converts the variable num to string.
// var num = 35.36; Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var num_in_str = num.toString();
// var num_in_str = num_in_str.split('.').join('');
// alert(num_in_str);

// 13. Write a program to take user input and store username in a variable.If the username contains any special symbol
// among[@ . , !], prompt the user to enter a valid username.

// Note:
// ASCII code of! is 33
// ASCII code of, is 44
// ASCII code of.is 46
// ASCII code of @is 64

// var username = prompt("Enter your username:");
// for (var i = 0; i < username.length; i++) {
//     if (username.charCodeAt(i) == 33 || 44 || 46 || 64) {
//         alert("Enter a valid username");
//         break;
//     }
// }

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an
// array.After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search.Whether the user enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

// var sweets = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user_ask = prompt("Welcome to ABC Bakery. What do you want Sir/Ma'am?");
// user_ask = user_ask.toLowerCase();
// var flag = false;
// for (i = 0; i < sweets.length; i++) {
//     if (user_ask == sweets[i]) {
//         alert(sweets[i] + " is available at index " + i + " in our bakery.");
//         flag = true;
//     };
// };
// if (!flag) {
//     alert("We are sorry, " + user_ask + " is not available in our Bakery.")
// };

// 15. Write a program to take password as an input from user.The password must qualify these requirements:
// a.It should contain alphabets and numbers
// b.It should not start with a number
// c.It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a - z, A - Z & 0 - 9, refer to ASCII table at the end of this document.

// var user_password = prompt(`
//     Create your password:
//     a.It should contain alphabets and numbers.
//     b.It should not start with a number.
//     c.It must at least 6 characters long`);

// // for a
// var flag_a = false;
// for (var i = 0; i < array.length; i++) {
//     if (user_password.includes(user_password.charCodeAt(i))) {
        
//     } else {
        
//     }
// }

// // for b
// var flag_b = true;
// if (user_password.charCodeAt(0) <= 48 && user_password.charCodeAt(0) >=57) {
//     flag_b = false
// };

// // for c
// var flag_c = false;
// if (user_password.length >= 6) {
//     flag_c = true;
// }

// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”; Display the elements of array in your browser.

// var university = "University of Karachi";
// var uni_arr = university.split("");
// console.log(uni_arr);
// for (var i = 0; i < uni_arr.length; i++) {
//     document.writeln(`${uni_arr[i]}<br>`)
// };

// 17. Write a program to display the last character of a user input.

// var user_input = prompt("Enter any thing:");
// document.writeln(user_input[user_input.length - 1]);

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var sentence = "The quick brown fox jumps over the lazy dog";
// sentence = sentence.toLowerCase();
// var count_of_the = 0
// for (var i = 0; i < sentence.length; i++) {
//     if (sentence.slice(i,i+3) == "the") {
//         count_of_the++;
//     }
// };
// console.log("No. of 'the' is:" + count_of_the);

