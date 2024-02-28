# Parametrics
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


## Tasks

### Task 1 - twofer

Complete the function in [`task-1-twofer.js`](./task-1-twofer.js) so that it returns:

- `"Two for me and one for you"`: when no arguments are passed
- `"Two for me and one for <name>"`: when we pass an argument. "<name>" should be replaced by the passed argument

For example:

```js
console.log(twofer("Fran")) // "Two for me and one for Fran"
console.log(twofer()) // "Two for me and one for you"
```
    
### Task 2 - exponent 

Complete the function in [`task-2-exponent.js`](./task-2-exponent.js) so that it returns the result of an exponentiation depending on the arguments passed.

- if we pass 2 arguments, it returns the result of the first argument to the power of the second one
- if we pass only 1 argument, the second one should be set to 2 by default

For example:

```js
console.log(exponent(2, 4)); // 16
console.log(exponent(3, 3)); // 27
console.log(exponent(2, 3)); // 8 
console.log(exponent(3)); // 9
console.log(exponent(4)); // 16 
```

### Task 3 - howManyArgs 

Complete the function in [`task-3-howManyArgs.js`](./task-3-howManyArgs.js).

The function should return the total amount of arguments passed to it.

For example:
```js
console.log(howManyArgs()); // 0
console.log(howManyArgs(1, false, "hello")); // 3
console.log(howManyArgs("better")); // 1
```

### Task 4 - sum 

Complete the function in [`task-4-sum.js`](./task-4-sum.js).

The function accepts any amount of numbers and returns the total of their sum.

For example:

```js
console.log(sum(1)); // 1
console.log(sum(1, 15)); // 16
console.log(sum(25, 25, 20)); // 70
```

### Task 5 (BONUS) - average

Create a function in [`task-5-average.js`](./task-5-average.js).

The function accepts any amount of numbers and returns their mean average.

For example:

```js
console.log(average(0)); // 0
console.log(average(1, 2)); // 1.5
console.log(average(1, 3, 6, 10)); // 5
console.log(average(12, 14, 16)); // 14
```

The mean average of a set of numbers is calculated by adding them all up and dividing the result of the addition by the amount of numbers in the set

For example:
```
To calculate the average of 12, 14 and 16

12 + 14 + 16 = 42
42 / 3 = 14
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1.`task-1-twofer.js`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Should return Two for me + Argument |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Should return Two for me one for you, if no Arguments passed |

### 2. `task-2-exponent.js`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Should return 2 to the power of 2 |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Should return 2 to the power of 4 |

### 3. `task-3-howManyArgs.js`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | Should return the number of Arguments passed |

### 4.`task-4-sum.js`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | Should take any amount of number as Argument and return their sum |

### 5. `task-5-average.js`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | Should take any amount of number as Argument and return their average |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Function-Parametrics)


[//]: # (autograding info end)