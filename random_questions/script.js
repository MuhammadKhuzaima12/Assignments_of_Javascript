var inputs = [];
for (var i = 1; i <= 10; i++) {
    inputs[ i - 1] = prompt("Enter a number");
};
for (var j = 0; j < 10; j++){
    if (inputs[j] % 2 == 0) {
        document.write(`${inputs[j]} is even.<br>`);
    } else {
        document.write(`${inputs[j]} is odd.<br>`);
    }
};
