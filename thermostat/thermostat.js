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
reset() {
  if (this.currentTemp >10) {
    this.currentTemp = 20;
  }
}


usageStatus() {
  if (this.currentTemp < 18) {
    return 'low-usage';
  } else if (this.currentTemp <= 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
}
}

module.exports = Thermostat;



  