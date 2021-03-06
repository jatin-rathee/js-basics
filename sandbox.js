
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


/* ---------------- Functions vs Methods ------------- */

const name = 'shaun';

// functions

const greetings = () => 'hello';
let resultOne = greetings();

// methods

let resultTwo = name.toUpperCase();    
console.log(resultTwo);


/* ---------------- Foreach Method & Callback function ------------- */

// callback function - function when passed as argument in function then it is calles callback function
const myFunc = (callbackFunc) => {
    // do something 
    let value = 50;
    callbackFunc(value);
};

myFunc((a) => console.log(a));

// Foreach Method

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

// people.forEach(person => console.log(person));
people.forEach(logPerson);

// Callback functions in action

const ul = document.querySelector('.people');

people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html = ``;

people.forEach((person) => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;


/* ---------------- Objects ------------- */

let user = {
    name: 'crystal',
    age: 30,
    email: ' crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & chees rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['email']);

user['name'] = 'chun-li';
console.log(user.name);

console.log(typeof user);

// FUNCTIONS INSIDE OBJECT

user = {
    name: 'crystal',
    age: 30,
    email: ' crystal@thenetninja.co.uk',
    location: 'berlin',
    // blogs: ['why mac & chees rules', '10 things to make with marmite'],
    blogs: [{ title: 'why mac & chees rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }],

    // method in object
    login() {
        console.log('the user logged in '); 
    },
    logBlogs() {
        // can't use a arrow function because 'this' in arrow function is window object not parent object
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(function(blog) {
            console.log(blog.title, blog.likes);
        })
    }
};

user.login();
user.logBlogs();



/* ---------------- Objects in Array ------------- */


const blogs = [
    { title: 'why mac & chees rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
];

console.log(blogs);


/* ---------------- Math Object ------------- */


console.log(Math);
console.log(Math.PI);
console.log(Math.E);

let Area = 7.7;

console.log(Math.round(Area));
console.log(Math.floor(Area));
console.log(Math.ceil(Area));
console.log(Math.trunc(Area));  // removes decimals

// random numbers

const random = Math.random();   // returns a random number b/w 0 and 1

console.log(random);
console.log(Math.round(random * 100));  // gives a random number b/w 1 and 100