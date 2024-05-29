// FizzBuzz

let num = parseFloat(prompt("Dame el número "))

const fizzBuzz = (num) => {

    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    }
    else if (num % 5 === 0) {
        return "buzz";
    }
    else if (num % 3 === 0) {
        return "fizz" ;
    }
}

let res = fizzBuzz(num);
alert(res)