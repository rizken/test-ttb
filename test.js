// Primitive data types

const str1 = "hej";
const str2 = "hej";

Object.is(str1, str2);

const num1 = 1;
const num2 = 1;

Object.is(num1, num2);

const bool1 = true;
const bool2 = true;

Object.is(bool1, bool2);

const sym1 = Symbol("hej");
const sym2 = Symbol("hej");

Object.is(sym1, sym2);

const obj1 = { str1 };
const obj2 = { str2 };

Object.is(obj1, obj2);

const obj3 = { str1 };
const obj4 = { str1 };

// Object.is(obj3, obj4);

Object.is(obj3.str1, obj4.str1);

Object.is({}, {});

let arr1 = ["hej", "då"];
const arr2 = ["hej", "då"];

arr1 = arr2;

Object.is(arr1, arr2);

Object.is(0, true);

Object.is(1, true);

Object.is(0, false);

Object.is(NaN, NaN);

Object.is(undefined, undefined);

Object.is(null, null);
Object.is(Infinity, Infinity);

// // Case = notifications e.g.

const notEmptyArray = ["hej", "då"];

notEmptyArray.length && true; //=

notEmptyArray.length ? true : null; //=

notEmptyArray.length ?? true; //=

const emptyArray = [];

emptyArray.length && true; //=

emptyArray.length ? true : null; //=

emptyArray.length ?? true; //=

emptyArray.length || true; //=

notEmptyArray || true; //=

// const hide = "göm!";
// const show = "visa!";

const lol = 0 && obj2;

lol;

const hejEller = -1 || "hej";

hejEller;

Object.is(-0, 0); //=

NaN && true; //=
null && true; //=
0 && true; //=
true && 0; //=
false && true; //=
true && ""; //=
undefined && true; //=

NaN ? true : null; //=

// // FP
