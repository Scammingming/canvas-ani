# Related Data

Often times, the data we are working with is related:
- Student Names and Student Grades
- City Names and Population
- Number of Days and Number of bacteria

We will see 3 ways to handle data that is related.

## Parallel Arrays

`Parallel` arrays are 2 or more arrays of the same length where the indexes relate to the same type of data:

```
var lastName = ['Dunn', 'Bacque', 'Sabourin'];
var unit3grade = [85, 64, 93];
```

In the above example, Dunn has a grade of 85 while Sabourin has a grade of 93. Some things to keep in mind when using parallel arrays:
- Be extremely careful when modifying a parallel array, as the order is extremely important.
  - For example, if you use .push on one array but .unshift on the other to add an element, the data is no longer related and the arrays are meaningless
- There are better ways of handling related data, but it is still important to know how to work with parallel arrays.

>Example. Write an application that prompts the user to enter a student's last name, English 30 final grade, and whether they plan to write the diploma this year. Give them a prompt to continue adding values. Then, output the data in an organized way.

>You Try. Using the arrays above, output:
  a. Only students with grades above 75.
  b. Only students who plan to write the diploma.

## Multidimensional Arrays
One of the drawbacks of parallel arrays is that the related data is held in separate data structres (2 different arrays). A multidimensial array is a way to store all data in the same structure.

```
var circlePositions = [ [100,120], [200,50], [300,75] ];
```

To access one of the inner arrays, use the regular way to access a simple array:

```
console.log(circlePositions[2]);
// displays [300,75]
```

To display a single value, add an additional square bracket to indicate the position of the value in the inner array:

```
console.log(circlePositions[2][0]);
// displays 300

console.log(circlePositions[2][1]);
// displays 75
```

> Example. Create a multidimensial array that stores the x, y, width, and height of 3 rectangles. Then, output these rectangles on the canvas.

> You Try. Push a 4th rectangle onto the array.

> You Try. Changes the width of the 2nd rectangle to 200 in a new line of code (don't go back above and change any values).

## Objects
`Objects` or `associative arrays` are a collection of properties of that object. This is a very common way of structuring related data. Here are some examples:

```
var player = {
  health: 500,
  attackStat: 20,
  defenseStat: 12
}
```

The attributes health, attackStat, and defenseStat are known as `keys`. The entries 500, 20, and 12 are known as `values`. Accessing and modifying values in an object is straightforward:

```
console.log(player.health);
// displays 500

player.attackStat += 5;
// increases the attack stat to 25

player.magicStat = 15
// pushes a new key to the object with a value of 15.
```

> Example. Create a circle object that stores a circle's x, y, radius, color and xSpeed. Then, animate the circles to move across the screen.

> You try. When the circle moves off screen, have it reappear at a random location on the other side.

## Combining Data Structures

One of the benefits of objects is that it makes the data easy to read, as the object and its keys are named in such a way that you have a good idea about what you can access in that object.

This detail makes it straightforward to create large quantities of objects and store them together in an array.

```
var rectangles = [];

for (let i = 0; i < 5; i++){
  rectangles.push(
    {
      x: 20,
      y: 50,
      w: 100,
      h: 40
    }
  )
}
```

The above code will add 5 rectangle objects to the rectangle array. You might notice an issue though:  The rectangles are exactly the same!

> Example. Create an object array of 5 rectangles with random x, y positions within the canvas, and a random width/height from 50 to 200.  Display these on the canvas within the draw function.

> You try. Add a dW key (dW stands for "change in width") with a random decimal between 0 and 2. Animate the width of each rectangle using dW.

> You try. Have the width of each rectangle pulse out and in by adding an appropriate if statement to your draw function.

