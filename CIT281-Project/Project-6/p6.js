/*
Project 6
Jorge Soto
*/

// Class for Shape with a default value of an empty array []
class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }
  perimeter = () =>
    this.sides.length ? this.sides.reduce((a, b) => a + b, 0) : 0;
}
// Class for Rectangle 
class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }
}
// Class for Triangle 
class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area() {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)
    );
  }
}
// Processing an array of sides
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (const sides of data) {
  let shape;

  switch (sides.length) {
    case 2:
      shape = new Rectangle(...sides);
      console.log(`Rectangle with sides ${sides[0]}, ${sides[1]} has a perimeter of ${shape.perimeter()} and an area of ${shape.area()}`);
      break;
    case 3:
      shape = new Triangle(...sides);
      console.log(`Triangle with sides ${sides[0]}, ${sides[1]}, ${sides[2]} has a perimeter of ${shape.perimeter()} and an area of ${shape.area()}`);
      break;
    default:
      shape = null;
      console.log(`Shape with ${sides.length} sides unsupported`);
  }
 
}
