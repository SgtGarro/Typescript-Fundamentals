# Typescript Fundamentals

Typescript is a superset or extension of the JavaScript language, offering better project development. Being a strongly typed language, this allows us to achieve a product development with the least amount of bugs possible.

## Types
For good practice, we must write the types in lowercase for these cases.

`✅Correct way:` <code>number | string | boolean | ...</code>

`❌Incorrect way:` <code>Number | String | Boolean | ...</code>
1. [Numbers](src/04-numbers.ts) 
```ts
let myVariable: number = 0;
```
2. [Booleans](src/05-booleans.ts)
```ts
let myVariable: boolean = true;
```
3. [Strings](src/06-strings.ts)
```ts
let myVariable: string = 'Hello world!';
```
4. [Anys](src/08-anys.ts)
```ts
let myVariable: any = "Doesn't matter what value you enter";
```
---
## Union Type
* [Using Union Types](src/09-union-types.ts)

As its name says, it is about the union of types so that our variables allow not only one type of data, but also those specified.
```ts
let myVariable: string | number; // It can be a string or number
myVariable = 'Hello world!';
myVariable = 12345;
```
---
## Alias Type
* [Using `type`](src/10-alias.ts)

We can group types with an alias using `type`. For these cases, to declare we must use pascalcase.
```ts
type MyType = number | string | boolean;
let myVariable: MyType = 'Hello world!'; // It can be a number, string or boolean
myVariable = true;
```
Likewise, we can specify which values ​​are the only ones that can be accepted.
```ts
type Sizes = 'S' | 'M' | 'L' | 'XL';
let myVariable: Sizes = 'S';
```
---
## Function Type
* [Using Function Type](src/13-return-functions.ts)

Functions can also work under strict typing, specifying the value that it should return.
```ts
const myRandom = (): number => {
  return Math.random();
}; //It returns a number
```
---
## Objects as Types
* [Using Object as Type](src/15-objs.ts)

We can specify the values ​​that our keys should contain in the object, which works as a type.
```ts
type MyObjectType = {
  key1: number,
  key2: string,
  key3: boolean
}

const rta: MyObjectType = {
  key1: 15,
  key2: 'A string',
  key3: true
}
```
Also, we can give our type (object) that keys can be optional by adding a `?`.
```ts
type MyObjectType = {
  key1: number,
  key2?: string, // Optional
  key3?: boolean // Optional
}

const rta: MyObjectType = {
  key1: 15
}
```
