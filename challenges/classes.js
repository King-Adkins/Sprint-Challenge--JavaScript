// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;
    
//   }

//   CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
//   };

//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   };

//   cuboid = new CuboidMaker();
//     length: 4;
//     width: 5;
//     height: 5;

class CubeMaker {
    constructor(properties) {
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    };

    volume() {
        return 4 * 5 * 5; 
    }

    surfaceArea() {
        return 2 * (4 * 5 + 4 * 5 + 5 * 5);

    }
}

const newCube = {
    length: 4,
    width: 5,
    height: 5,
}

const cuboid = new CubeMaker(newCube.length, newCube.width, newCube.height);


// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.