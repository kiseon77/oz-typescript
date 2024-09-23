// console.log("Hello TypeScript")

// const nums : number[] = [];
// const a = 10 + nums[0]

// const somString = "typescript!"
// somString.endsWith("!")

// import { printName } from "./util";
// printName("typescript")

// 문자열
const a: string = "";
const b: string = "";
const c: string = ``;

let myName: string = "Steve";
let message: string = `Hello, ${myName}`;

myName.toLocaleUpperCase();
message = 123;

//숫자타입
let n: number = 100;
n = "100";
n.toUpperCase();

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity;
let minusinfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

//불리언
let isOpen: boolean = true;
let isCompoeted: boolean = false;

if (isOpen) console.log("hello we are open!");
if (!isCompoeted) console.log("job not complete");

// && || !
let isAvailable: boolean = isOpen && !isCompoeted;

//null
let user: string | null = null;
function login (userName:string) {user = userName}
function logout() {
  user = null;
}

login("Joey")
logout();

//any
let someValue: any;
someValue.toString()
someValue = false
someValue.toFixed()