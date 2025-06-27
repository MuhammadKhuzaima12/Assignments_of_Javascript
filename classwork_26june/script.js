// 1. Write a function that takes an array of numbers and returns their sum.

function array_sum() {
    var num_arr = [];
    var sum = 0;
    for (var i = 0; i < 3; i++) {
        num_arr[i] = Number(prompt("Enter a number:"));
        sum = sum + num_arr[i]
    };
    alert(sum)
    return sum;
};
array_sum();

// 2. Write a function that reverses a string.

function reverse_string() {
    var user_str = prompt("Enter a string to get that in reverse order :");
    var reversed = "";
    for (var i = user_str.length - 1; i >= 0; i--) {
        reversed = reversed.concat(user_str[i]);
    };
    alert("Your string in reversed order is look like '" + reversed + "' .");
};
reverse_string();

// 3. Write a function that finds the largest number in an array.

function large_num() {
    var num_arr = [];
    for (var i = 0; i < 5; i++) {
        num_arr[i] = Number(prompt("Enter a number:"));
    };
    var largest = num_arr[0];
    for (var i = 0; i < num_arr.length; i++) {
        if (num_arr[i] > largest) {
            largest = num_arr[i];
        };
    };
    alert("The largest number is " + largest);
};
large_num();

// 4. Write a function that counts the number of vowels in a string.

function no_of_vowels() {
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
    alert(no_of_vowels);
};
no_of_vowels();

// 5. Write a function that removes duplicates from an array.

function duplicate_remove() {
    var number_array = [12, 4, 7, 24, 9, 54, 7, 12];
    var unique = [];
    for (var i = 0; i < number_array.length; i++) {
        if (unique.indexOf(number_array[i]) === -1) {
            unique.push(number_array[i]);
        }
    }
    alert(unique);
};
duplicate_remove();

// 6. Write a function that capitalizes the first letter of each word in a sentence.

function title_case() {
    let sent = "my name is khuzaima.";
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
title_case();