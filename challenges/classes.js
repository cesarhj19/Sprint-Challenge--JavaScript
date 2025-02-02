// 1. Copy and paste your prototype in here and refactor into class syntax.
class Cuboidmaker {
	constructor(prop) {
		this.length = prop.length;
		this.width = prop.width;
		this.height = prop.height;
	}
	volume() {return this.length * this.width * this.height}
	surfaceArea() {return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)}
 }

let cuboi = new Cuboidmaker({length: 4, width: 5, height: 5})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboi.volume()); // 100
console.log(cuboi.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends Cuboidmaker {
	constructor(prop) {
		super(prop);
	}
	cubeVolume() {return Math.pow(this.length, 3)};
	cubeSurfaceArea() {return 6 * Math.pow(this.length,2)}
}

const cube = new CubeMaker({length: 7, width: 7,height: 7})
console.log(cube.cubeVolume()); // 343
console.log(cube.cubeSurfaceArea()); // 294