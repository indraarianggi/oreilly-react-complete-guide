/**
 * Primitive Types
 */
let username: string = "Lorem Ipsum";

let age: number = 20;
age = 25;

let isStudent: boolean = true;
isStudent = false;

/**
 * Array
 */
let hobbies: string[] = ["coding", "reading", "cycling"];

/**
 * Object
 */

let person: { name: string; age: number } = { name: "Lorem Ipsum", age: 20 };

let people: { name: string; age: number }[] = [
  { name: "Lorem", age: 20 },
  { name: "Ipsum", age: 20 },
];

/**
 * Type Inference
 */
let country = "Indonesia";
// country = 62 // => error

/**
 * Union Types
 */
let course: string | number = "React - The Complete Guide";
course = 1;

/**
 * Type Aliases
 */
type TPerson = {
  name: string;
  age: number;
};

let person1: TPerson = { name: "Lorem", age: 20 };
let people1: TPerson[] = [person];

/**
 * Functions & Types
 */
function add(a: number, b: number): number {
  return a + b;
}

function print(value: any): void {
  console.log(value);
}

/**
 * Generics
 */
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(["b", "c", "d"], "a");
