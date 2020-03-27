# The Odin Project - Calculator

At this project, we are going to make a functioning calculator,
I'm sure this can be used even later for my statistics use as well.

1. ~~Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.~~

    1. add
    2. subtract
    3. multiply
    4. divide

2. ~~Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.~~

3. ~~Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.~~

    1. Do not worry about wiring up the JS just yet.
    2. There should also be a display for the calculator, go ahead and fill it with some dummy numbers so you can get it looking right.
    3. Add a “clear” button.

4. ~~Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.~~

5. ~~Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.~~

    1. You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.

    2. This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

6. Gotchas: watch out for and fix these bugs if they show up in your code:

    ~~1. Users should be able to string together several operations and get the right answer: 12 + 7 - 5 * 3 etc. The behavior we’re looking for should be something like this https://www.online-calculator.com/.~~

    2. You should round answers with long decimals so that they don’t overflow the screen.

    3. Pressing = before entering all of the numbers or an operator could cause problems!

    4. Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”

    5. Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!

7. EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

8. EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons.

9. EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.

10. EXTRA CREDIT: Add keyboard support!

VARIABLES:

    displayValue = Storing the display value
    currentNumber = It's going to store each numbers before adding to the numbers
    numberList = Where I store all the numbers for operation
    operatorList = where I store all the operators for operation

FUNCTIONS:

    breakDownNumbersOperators: It's going to break down the display Value, number to numberList, operator to operatorList
# These are the things I will ask once it finishes... Keep it updated throughout the project!

### What did you learn from this project?

- Javascript always uses pass-by-value, however, when the data type is not one
of the argument is not a primitive type then the value passed is actually the
memory location(pass-by-reference). 5 primitive types(strings, numbers, booleans
, null, and undefined). Here's the [link](https://medium.com/@TK_CodeBear/javascript-arrays-pass-by-value-and-thinking-about-memory-fffb7b0bf43) for explanation

- [How to do decimal maths in javascript](https://www.youtube.com/watch?v=wETgMr6QMIE)

- [javascript module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)


### What did you do to solve the problem?



<!-- Where to start??? -->
<!-- START FROM 6.2 -->
<!--
How will you handle decimals in this calculator?

If you find decimals....(isInteger, isFloat)
use Big library

-->
