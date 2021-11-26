const firstNum = prompt('Please enter the first number');
const secondNum = prompt('Please enter the second number');
const thirdNum = prompt('Please enter the third number');

if ((+firstNum > +secondNum) && (+firstNum > +thirdNum)){
    alert(`The first number ${firstNum} is the largest`);
} else if ((+secondNum > +firstNum) && (+secondNum > +thirdNum)){
    alert(`The second number ${secondNum} is the largest`);
} else if ((+thirdNum > +firstNum) && (+thirdNum > +secondNum)){
    alert(`The third number ${thirdNum} is the largest`);
} else if ((+firstNum == +secondNum) && (+secondNum == +thirdNum)){
    alert(`You entered the same numbers`);
} else if ((firstNum === null) || (secondNum === null) || (thirdNum === null)){
    alert(`It's a pity that you changed your mind`);
} else {
    alert('You entered not a number, please try again');
}