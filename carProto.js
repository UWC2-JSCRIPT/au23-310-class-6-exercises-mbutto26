/**
 * Car class
 * @constructor
 * @param {String} model
 */
class car {
  constructor(currentSpeed, model) {
    this.currentSpeed = 0;
    this.model = model;
    // instance method
    this.handleClick = () => {
      console.log(`${this.currentSpeed} is 0 ${this.model} is Taurus`);
    };
  }

  //  Create an instance, accelerate twice, brake once, and console log the instance.toString()
  toString() {
    return `${this.model} Taurus ${this.currentSpeed} accelerate twice`;
  }
}

console.log(Taurus.toString());
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
