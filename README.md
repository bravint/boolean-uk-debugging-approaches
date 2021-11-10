# Debugging Approaches

> All great debuggers are great programmers, but not all programmers are great debuggers.

## Objectives

* Define two different approaches to debugging
* Get visibility using `console.log()`
* Use a methodical approach to get visibility on a complex program

## Introduction

Debugging literally means 'removing bugs'. The name comes from a story about the computing pioneer Grace Hopper, who once tracked down a problem to a literal bug, taping it to her report for good measure:

![Image of a moth attached to a bug log](https://i.imgur.com/bs71qW0.png)

You can see from the above page that Hopper was following a methodical process.

## Exercise 1

Debug this:

```js
const sayHi = (name) => "Hi, ${name}!"

// expected output:
//
// > sayHi("Ed")
// => "Hi, Ed!"

//BT
//const sayHi = (name) => `Hi, ${name}!`;
//sayHi ('ed');

```

```
>
>>
>>>
>>>>
>>>>>
>>>>>>
>>>>>>>
>>>>>>>>
>>>>>>>>>
>>>>>>>>>>
>>>>>>>>>>>
>>>>>>>>>>>>
>>>>>>>>>>>>>
>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>
>>>>>>>>>>>>>
>>>>>>>>>>>>
>>>>>>>>>>>
>>>>>>>>>>
>>>>>>>>>
>>>>>>>>
>>>>>>>
>>>>>>
>>>>>
>>>>
>>>
>>
>
```

## Exercise 2

Look at this, and see if you can debug this in 30seconds:

```js
const encode = (string, key) => {
  return string.split('').map(char => {
    let number = (parseInt(charSet[char]) + key) % 99
    return number.padStart(2, '0')
  }).join('')
}

console.log(encode('Hi, Booleaners!', 4))
})

// Expected console output => '391482053320201710061910232458'
```


## Interlude: Debugging mindsets

Exercise 1 probably felt easier than exercise 2...

Cognitive overload causes difficulty when debugging because you try to evaluate expressions and keep too many values in your head.

Many bugs will be so easy you don't even notice yourself fixing them. But most of the *time* you spend debugging will be on the hard bugs. And most of your time spent programming will be spent debugging.

As such, it makes a lot of sense to develop your debugging skill. The more you improve that skill, the faster you are to extract the learning from the experience and move on to the next.

Let's consider two mindsets, 'brain modes', we might use to find bugs:

1. Find the fix
2. Find the problem

When **finding the fix** we're solution-oriented. We're driven to try the first thing we see in hope it works.

When **finding the problem** we're learning-oriented. We're driven to understand the code we look at before we make changes.

Most people instinctively jump to the fixing mindset, because in the real world we can often merely 'look for something out of place' in order to fix problems.

It's actually a pretty good strategy in most situations — but not for the hard bugs.

## Interlude: Getting visibility

The biggest tool in our armoury is **getting visibility**.

You'll hear this term a lot. It refers to a variety of techniques to 'see into' your program as it runs. This helps us understand the code.

Consider this buggy example:

```js
function factorial(n) {
  let product = 1
  while (n > 0) {
    n -= 1
    product *= n
  }
  return product
}

// Expected output:
//
// > factorial(5)
// => 120
```

We could comb through the code, keep everything in our heads and figure out what is wrong with it, or we could **get visibility** and ask the program to tell us using `console.log()`, like so:

```js
function factorial(n) {
  let product = 1
  console.log(`at the start: product is ${product}`)
  while (n > 0) {
    n -= 1
    console.log(`we multiply: ${product} by ${n}`)

    product *= n

    console.log(`we get: ${product}`)
  }
  return product
}
```

Try running that and fixing the bug.

## Exercise 4

```js
const encode = (string, key) => {
  return string.split('').map(char => {
    let number = (parseInt(charSet[char]) + key) % 99
    return number.padStart(2, '0')
  }).join('')
}

console.log(encode('Hi, Booleaners!', 4))

// Expected console output => '391482053320201710061910232458'
```

Your task is **not** to fix this code. Let go of that idea.

Imagine your friend wrote this code and doesn't know where he went wrong. He doesn't need your fix — he needs to understand the problem so he can write better code.

You're a code archaeologist now!

Instruction: go and get visibility on this short program by opening the `index.html` file in your browser.

```
>
>>
>>>
>>>>
>>>>>
>>>>>>
>>>>>>>
>>>>>>>>
>>>>>>>>>
>>>>>>>>>>
>>>>>>>>>>>
>>>>>>>>>>>>
>>>>>>>>>>>>>
>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>
>>>>>>>>>>>>>
>>>>>>>>>>>>
>>>>>>>>>>>
>>>>>>>>>>
>>>>>>>>>
>>>>>>>>
>>>>>>>
>>>>>>
>>>>>
>>>>
>>>
>>
>


>
>>
>>>
>>>>
>>>>>
>>>>>>
>>>>>>>
>>>>>>>>
>>>>>>>>>
>>>>>>>>>>
>>>>>>>>>>>
>>>>>>>>>>>>
>>>>>>>>>>>>>
>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>
>>>>>>>>>>>>>
>>>>>>>>>>>>
>>>>>>>>>>>
>>>>>>>>>>
>>>>>>>>>
>>>>>>>>
>>>>>>>
>>>>>>
>>>>>
>>>>
>>>
>>
>

😜

>
>>
>>>
>>>>
>>>>>
>>>>>>
>>>>>>>
>>>>>>>>
>>>>>>>>>
>>>>>>>>>>
>>>>>>>>>>>
>>>>>>>>>>>>
>>>>>>>>>>>>>
>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>
>>>>>>>>>>>>>
>>>>>>>>>>>>
>>>>>>>>>>>
>>>>>>>>>>
>>>>>>>>>
>>>>>>>>
>>>>>>>
>>>>>>
>>>>>
>>>>
>>>
>>
>

```

## Exercise 5

Instruction: go and get visibility on this short program by opening the `index.html` file in your browser.
Debug this:

```js
const decode = (string, key) => {
  let invertedCharSet = invert(charSet)

  return chunk(string.split(''), 2).map(pair => {
    let cipherPair = parseInt(pair.join(''))
    let number = (99 + (cipherPair - key)) % 99
    return invertedCharSet[number.toString()]
  }).join('')
}

const chunk = (array, chunk_size) => {
  let chunks = [];

  while (array.length) {
      chunks.push(array.splice(0, chunk_size));
  }

  return chunks
}

const invert = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach(key => newObj[key] = key)
  return newObj;
}

console.log(decode('391482053320201710061910232458', 4))

// Expected console output => 'Hi, Booleaners!'
```
