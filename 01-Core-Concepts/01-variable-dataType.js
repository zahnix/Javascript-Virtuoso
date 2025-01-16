//VARIABLES

//Function Scope
//Can be re-declared and updated.
//Hoisted to the top of their scope.
var lastName = 'Messi';
lastName = 'Ronaldo';
console.log(lastName);

//Block Scope
//Can be updated but not re-declared within the same scope. 
//Not hoisted to the top of their scope.
let age = 25;
age = 30;
console.log(age);

//Block Scope
//Cannot be updated or re-declared and must be initialized during declaration.
const PI = 3.14;
// PI = 3.14159; // Error: Assignment to constant variable.
console.log(PI); // Output: 3.14

//DATA TYPES