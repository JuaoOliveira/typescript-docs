//Boolean type
let isDone: boolean = false;

// Number type
let integer: number = 20;
let decimal: number = 6.66;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String type
let color: string = 'blue';
color = "red";

//Template Strings
let fullName: string = 'João Victor Oliveira';
let age: number = 19;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old this year.`;

//Arrays
let list = [1,2,3];
let list2: number[] = [1,2,3];
let list3: Array<number> = [1,2,3];

//Tuples
let iDontKnow: [string, number];
iDontKnow = ['Ben', 10];

//Enum
enum Color {Red=3, Green, Blue}
let c = Color.Green;
let colorName: string = Color[4];

console.log(colorName);

//Type Any
let notSure: any = 2;
notSure = "Joao";
// notSure: true;

//Type any as an object allows assign any value to him, including methods
notSure.exist();
notSure.notExist();

//Void type

function alertUser(): void {
    console.log("Warning!");
}

//Declaring variables of type void ALWAYS assgin "undefined" or "null"
let unusable: void = undefined;

//Null and undefined types
let u: undefined = undefined;
let n: null = null;

//Never type
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed!");
}
