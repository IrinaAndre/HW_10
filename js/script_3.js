const num = prompt('Please enter a whole number');

if (Number(num) > 0){
    if (num.toString().length == 1){
        alert(`The number ${num} is one-digit positive`);
    } else if (num.toString().length == 2){
        alert(`The number ${num} is two-digit positive`);
    } else if (num.toString().length == 3){
        alert(`The number ${num} is three-digit positive`);
    } else {
        alert(`The number ${num} is ambiguous positive`);
    }
} else if (Number(num) < 0){
    if (num.toString().length == 1){
        alert(`The number ${num} is one-digit negative`);
    } else if (num.toString().length == 2){
        alert(`The number ${num} is two-digit negative`);
    } else if (num.toString().length == 3){
        alert(`The number ${num} is three-digit negative`);
    } else {
        alert(`The number ${num} is ambiguous negative`);
    }
} else if (num === null){
    alert(`It's a pity that you changed your mind`);
} else {
    alert('You entered not a number, please try again');
}