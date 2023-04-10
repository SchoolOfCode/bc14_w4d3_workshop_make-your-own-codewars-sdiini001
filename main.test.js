//👉 Write your tests below here:
//👉 Write enough tests in [main.test.js](main.test.js) so that you can be reasonably assured that when your CodeWarrior tests their solution to your kata, if the tests pass, it works.


import { countVowel } from './main.js';
import {test , expect} from '@jest/globals';

const vowels = ['a', 'e', 'i', 'o', 'u'];

// // Checking if the function takes a non-vowel as an argument
// test('returns undefined when given a non-vowel', () => {
//     let actual = countVowel('rhythm');
//     let expected = 0;
//     expect(actual).toBe(expected);
//     });



// Checking if the function takes a number as an argument
test('returns undefined when given a number', () => {
    let actual = countVowel(5);
    let expected = undefined;
    expect(actual).toBe(expected);
    });

// Checking if the function takes a boolean as an argument
test('returns undefined when given a boolean', () => {
    let actual = countVowel(true);
    let expected = undefined;
    expect(actual).toBe(expected);
    });

// Checking if the function takes a null as an argument
test('returns undefined when given a null', () => {
    let actual = countVowel(null);
    let expected = undefined;
    expect(actual).toBe(expected);
    });

// Checking if the function takes a undefined as an argument
test('returns undefined when given a undefined', () => {
    let actual = countVowel(undefined);
    let expected = undefined;
    expect(actual).toBe(expected);
    });

// Checking if the function takes a array as an argument
test('returns undefined when given a array', () => {
    let actual = countVowel([1,2,3]);
    let expected = undefined;
    expect(actual).toBe(expected);
    });

// Checking if the function takes a object as an argument
test('returns undefined when given a object', () => {
    let actual = countVowel({name: 'sdiini'});
    let expected = undefined;
    expect(actual).toBe(expected);
    });

// Checking if the function takes a function as an argument
test('returns undefined when given a function', () => {
    let actual = countVowel(function(){}); // function(){}
    let expected = undefined;
    expect(actual).toBe(expected);
    });

// Checking if the function takes a symbol as an argument
test('returns undefined when given a symbol', () => {
    let actual = countVowel(Symbol('sdiini'));
    let expected = undefined;
    expect(actual).toBe(expected);
    });

// Checking if the function takes a NaN as an argument
test('returns undefined when given a NaN', () => {
    let actual = countVowel(NaN);
    let expected = undefined;
    expect(actual).toBe(expected);
    });

// // checking if the function is all lowercase
// test('checks that the function is all lowercase', () => {
//     let actual = countVowel('sdiini');
//     let expected = 3;
//     expect(actual).toBe(expected);
//     });

// // checking if the function is all uppercase
// test('checks that the function is all uppercase', () => {
//     let actual = countVowel('SDIINI');
//     let expected = 3;
//     expect(actual).toBe(expected);
//     });








//   test('checks that the function returns a number', () => {
//     let actual = typeof treasureHunt(5);
//     let expected = "number";
    
//     expect(actual).toBe(expected);
// });

// // make sure you have a test that includes a single vowel
// test ('countVowel', () => {
//     expect(countVowel('a')).toBe(1);
//     expect(countVowel('e')).toBe(1);
//     expect(countVowel('i')).toBe(1);
//     expect(countVowel('o')).toBe(1);
//     expect(countVowel('u')).toBe(1);
//     expect(countVowel('y')).toBe(0);
//     expect(countVowel('why')).toBe(0);

// });

// // make sure you have a test that includes multiple vowels

// test ('countVowel', () => {
//     expect(countVowel('aeiou')).toBe(5);
//     expect(countVowel('why')).toBe(0);

// });





// test ('countVowel', () => {
//     expect(countVowel('hello')).toBe(2);
//     expect(countVowel('hi')).toBe(1);
//     expect(countVowel('why')).toBe(0);
//     expect(countVowel('aeiou')).toBe(5);
//     expect(countVowel('why')).toBe(0);
//     expect(countVowel('why')).toBe(0);


// });
// // make sure you have a test also includes capital letters and other characters
// test ('countVowel', () => {
//     expect(countVowel('Hello')).toBe(2);
//     expect(countVowel('Hi')).toBe(1);
//     expect(countVowel('Why')).toBe(0);
//     expect(countVowel('AEIOU')).toBe(5);
//     expect(countVowel('Why')).toBe(0);
//     expect(countVowel('Why')).toBe(0);
    


// });

// // make sure you have a test that includes numbers
// test ('countVowel', () => {
//     expect(countVowel('Hello1')).toBe(2);
//     expect(countVowel('Hi2')).toBe(1);
//     expect(countVowel('Why3')).toBe(0);
//     expect(countVowel('AEIOU4')).toBe(5);
//     expect(countVowel('Why5')).toBe(0);
//     expect(countVowel('Why6')).toBe(0);



// });



// 👉 Run your tests in the terminal with `npm test` to make sure they pass.


// You can write out the solution code and run your tests yourself to make sure your tests are working properly 




