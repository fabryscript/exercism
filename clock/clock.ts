//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  private hours: number = 0;
  private minutes: number = 0;

  constructor(hours: number, minutes: number) {
    this.hours = this.getHours(hours);
    this.minutes = this.getMinutes(minutes);
  }

  private getHours(hours: number) {
    return hours % 24;
  }

  private getMinutes(minutes: number) {
    return minutes % 60; // ??
  }

  toString() {
    let result = {};
    if (this.hours < 0) result = { ...result, hours: 24 + -this.hours };
  }

  plus() {}

  minus() {}

  equals(clock: Clock) {
    return clock.hours === this.hours && clock.minutes === this.minutes;
  }
}

console.log(160 % 60);
