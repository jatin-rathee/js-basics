
/* ---------------- STRINGS ------------- */

console.log('Hello, World!');

let email = '0123456789';

let result = email.lastIndexOf('5');

// slice(from, till) => doesn't return 5
result = email.slice(2, 5);

// substr(from, count)
result = email.substr(2, 5);

// replaces first occurance
result = email.replace('0', 'A');

console.log(result); 

/* ---------------- NUMBERS ------------- */

let pass = 'p@ss';

if(pass.length >= 8 || pass.includes('@') && pass.length >=5) console.log("strong pass");
 
const scores = [10,20,30,40,80,90,100,50,60,70];

for (let i = 0; i < scores.length; i++) {
    if(scores[i] === 10) {
        continue;
    }

    console.log('your score: ', scores[i]);
    if(scores[i] === 100) {
        console.log("Done");
        break;
    }
}

/* ---------------- FUNCTIONS ------------- */

// function declaration
greet();  // but this will work because js will Hoist the function to top of the file
function greet() {
    console.log('hello there');
}

// function expression

// speak(); // this can't be done
const speak = function() {
    console.log('Good Day !');
};  // needs to add a semi-colon

greet();
speak();

/* ---------------- Arguments & Parameters ------------- */

// const say = function(name, time) {
//     console.log(`good ${time} ${name}`);
// }

// say('jatin', 'noon');

// default value for function

const say = function(name = 'jatin', time = 'night') {
    console.log(`good ${time} ${name}`);
}

say();
say('luigi','morning');
say('luigi');

/* ---------------- Arrow functions ------------- */

// const calcArea = radius => 3.14 * radius**2;

const calcArea = (radius) => { // can even remoce () if one argument
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log('area is:' , area);

// const greeting = () => 'Hello, world';

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;  
//     }
//     return total;
// }