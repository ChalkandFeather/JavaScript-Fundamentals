const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });
 
  it("returns temp 20 when getTemperature() is called", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("returns temp 22 when getTemperature is called following upMethod() being called twice", () => {
    thermostat.upMethod();
    thermostat.upMethod();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it("returns temp 19 when getTemperature is called following downMethod() being called once", () => {
    thermostat.downMethod();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("resets temp to 20 when reset is called", () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
});
