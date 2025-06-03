// Create grade calculator

// 90 - 99 % --> A - 0ne
// 80 - 89 % --> A
// 70 - 79 % --> B +
// 60 - 69 -- > B
// 50 - 59-- > C
// Below 50 % --> Fail


var user_grade = parseFloat(prompt("Enter Your Grade :"));

if (user_grade >= 90) {
    document.write("Congratulations! You Got A-1 Grade.");
}
else if (user_grade >= 80) {
    document.write("Congratulations! You Got A Grade.");
}
else if (user_grade >= 70) {
    document.write("Keep it up! You Got B+ Grade.");
}
else if (user_grade >= 50) {
    document.write("You should to be focused! You Got C Grade.");
}
else {
    document.write("You Are Fail!");
};