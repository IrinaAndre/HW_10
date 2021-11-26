const firstSide = prompt('Enter the length of the first side');
const secondSide = prompt('Enter the length of the second side');
const thirdSide = prompt('Enter the length of the third side');

if ((Number(firstSide) + Number(secondSide)) > Number(thirdSide) ||
(Number(firstSide) + Number(thirdSide)) > Number(secondSide) ||
(Number(secondSide) + Number(thirdSide)) > Number(firstSide)){
    alert('The triangle can exist');
} else if ((firstNum == secondNum) && (secondNum == thirdNum)){
    alert(`You entered the same numbers`);
} else if ((firstSide === null) || (secondSide === null) || (thirdSide === null)){
    alert(`It's a pity that you changed your mind`);
} else {
    alert('You entered not a number, please try again');
}