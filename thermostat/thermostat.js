class Thermostat {
  constructor() {
    this.currentTemp = 20;
    this.powerSave = true;
  }

  getTemperature() {
    return this.currentTemp;
  }

upMethod() {
  if (this.powerSave && this.currentTemp < 25) {
    this.currentTemp += 1;
} else if (!this.powerSave && this.currentTemp < 32) {
    this.currentTemp += 1;
}
}

downMethod() {
  if (this.currentTemp >10) {
    this.currentTemp -= 1;
  }
}


}

module.exports = Thermostat;

/* //method to increase tempterature
//check powersave? status on/off true/false
  /*upMethod() => {
    if (this.powersave === true && currentTemp < 25);
     return this.currentTemp; */

  