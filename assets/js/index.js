// ================================================================= Variables and Data types =================================================================

// Declare a variable using var
var x = 5;

// Declare a variable using let
let y = "Hello";

// Declare a variable using const
const z = true;

console.log(`X = ${x}, Y= ${y}, Z = ${z}`);


// ================================================================= Data Types =================================================================
let a = 42; // number
let b = "Hello, world!"; // string
let c = true; // boolean
let d; // undefined
let e = null; // null
let personObject = {
    username: 'fahad',
    password: '1122',
    email: 'cto@fastechsystem.co',
    websiteLink: 'https://www.fahadshahzad.com'
}
console.log(`a = ${a}, b= ${b}, c = ${c}, d = ${d}, e = ${e}, personobject = ${JSON.stringify(personObject)}`);

const personList = [
    {
        username: 'fahad',
        password: '12',
        email: 'cto@fastechsystem.co',
        websiteLink: 'https://www.fahadshahzad.com'
    },
    {
        username: 'noor',
        password: '1122',
        email: 'noor@fastechsystem.co',
        websiteLink: 'https://www.fahadshahzad.com'
    },
    {
        username: 'ali',
        password: '1122',
        email: 'ali@fastechsystem.co',
        websiteLink: 'https://www.fahadshahzad.com'
    },
    {
        username: 'mujtaba',
        password: '1122',
        email: 'mujtaba@fastechsystem.co',
        websiteLink: 'https://www.fahadshahzad.com'
    }
]

console.log(personList)

// ================================================================= Control Flow Statements =================================================================
if(a>45){
    console.log('A is greater than 40')
}else{
    for (let i = 0; i < personList.length; i++) {
        if(personList[i].password.length<3){
            console.log(`Week Object ${JSON.stringify(personList[i])}`)
        }
    }
}

// ================================================================= Functions =================================================================
// Simple functions
function addNumbers(number1, number2){
    return number1+number2;
}

const addedResult = addNumbers(11, 12)
console.log(addedResult)

const addNumbers2 = (number1, number2) => {
    return number1+number2;
}

const addedResult2 = addNumbers2(1, 2)
console.log(addedResult2)
