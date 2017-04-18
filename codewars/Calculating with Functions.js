/**
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
 */

function zero() {
    return number(arguments, 0)
}

function one() {
    return number(arguments, 1) }

function two() {
    return number(arguments, 2) }

function three() {
    return number(arguments, 3) }

function four() {
    return number(arguments, 4) }

function five() {
    return number(arguments, 5) }

function six() {
    return number(arguments, 6) }

function seven() {
    return number(arguments, 7) }

function eight() {
    return number(arguments, 8) }

function nine() {
    return number(arguments, 9) }


function existsArguments(arguments) {
    return arguments.length;
}

function number() {
    var num = [].slice.call(arguments, -1),
        fn = [].shift.call(arguments);
    if (!existsArguments(arguments)) return num;
    return fn.apply(null, num);
}

function plus() {
    var num1 = arguments[0];
    return function(v) {
        return num1 + v;
    }
}

function minus() {
    var num1 = arguments[0];
    return function(v) {
        return v - num1;
    }
}

function times() {
    var num1 = arguments[0];
    return function(v) {
        return v * num1;
    }
}

function dividedBy() {
    var num1 = arguments[0];
    return function(v) {
        return v / num1;
    }
}
