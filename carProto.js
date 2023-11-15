/**
 * Car class
 * @constructor
 * @param {String} model
 */
class car2 {
  constructor(model) {
    this.currentSpeed = 0;
    this.model = model;
  }
  accelerate() {
    this.currentSpeed++;
  }
  brake() {
    this.currentSpeed--;
  }

  toString() {
    return `${this.model} has a current speed of ${this.currentSpeed}`;
  }
}
// instance method

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const honda = new car2(`honda`);
honda.accelerate();
honda.accelerate();
honda.brake();

console.log(honda.toString());
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

class Tesla extends car2 {
  constructor(model, maxSpeed) {
    super(`Tesla`, motor, maxSpeed);
    this.electricCar = true;
  }

  motor() {
    this.motor = electric;
  }
  toString() {
    return `electricCar${super.toString()}`;
  }
}

const model4 = new Tesla(`4`, 140);
model4.accelerate();
model4.accelerate();
model4.braker();
console.log(model4.toString());
