// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const age = 26;
console.log(age);
//TODO: ADD redeclarable variable
var name ='Kamau';
var name ='John';
console.log(name);

//TODO: ADD re-assignable but not redeclarable variable
let color ='blue';
color ='yellow';
console.log(color);

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const apartments = 4;
console.log(apartments);

//TODO: Create a redeclarable variable with a boolean value
var myBoolean = true;
var myBoolean = false;
console.log(myBoolean);

//TODO: Create a re-assignable variable with a string value
let county ='Nairobi';
county = 'Mombasa';
console.log(county);



// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
const FirstName = 'Erick';
const lastName = 'Gichuki';

 const fullName = FirstName + '' + lastName;
console.log(fullName);

//TODO: Interpolate string (`${}`)
const welcomeMessage = `Hi Welcome to our platform, ${fullName}!`;
console.log(fullName);

//TODO: Convert to uppercase
const ourWelcomeMessage = welcomeMessage.toUpperCase();
console.log(ourWelcomeMessage);

//TODO: Convert to lowercase
const theOurWelcomeMessage = ourWelcomeMessage.toLowerCase();
console.log(theOurWelcomeMessage);

//TODO: Index a specific character
const welcome ="Welcome to Moringa!";
const index =welcome[5];
console.log(index);

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
const x = 4;
const y = 6;
console.log(x ===y);


//TODO: strict inequality
const bananas = 10;
const oranges = 16;
console.log(bananas !== oranges);

//TODO: equality
const w = 30;
const z = "30";
console.log(w == z);

//TODO: inequality
const cars = 12;
const motorBikes = "12";
console.log(cars != motorBikes);

//TODO: greater than
const t = 5;
const s =6;
console.log(t > s);

//TODO: less than
const u =10;
const f =11;
console.log(u < f);

//TODO: greater or equal to
const bikes =50;
const lorries = 100;
console.log(bikes >= lorries);

//TODO: less or equal to
const tractors = 23;
const caterpillars = 43;
console.log(tractors <= caterpillars);


// 5.0 CONTROL FLOW
// TODO: if-else statement
const years = 70;

let isOld, canWork, canPlay, canEat;

if(years >= 65){
isOld = true;
canWork = false;
canPlay = false;
canEat = true;
}else if (years < 50){
    isOld = false;
    canWork = true;
    canPlay = true;
    canEat = true;
}
console.log(isOld);

console.log(canEat);

console.log(canPlay);

console.log(canWork);

//TODO: switch-case
const order = 'mozarella';

let ingredients;

switch (order){
    case 'cookies':
        ingredients = 'milk, water';
        break;
        case 'pilau':
            ingredients = 'rice, cumin, pepper, cinnamon, cloves';
            break;
            case 'ugali':
            ingredients = 'flour, water';
            break;
            default:
                console.log("Sorry, we don't have that on the menu for now.");
                break;
}

console.log(ingredients);





