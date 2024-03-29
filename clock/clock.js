export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = ((hours % 24) + 24) % 24;
    this.minutes = ((minutes % 60) + 60) % 60;

    this.hours += Math.floor(minutes / 60); // Add excess minutes to hours
    this.hours %= 24; // Ensure hours stay within range after adjustment
  }

  toString() {
    const hours = (this.hours < 0 ? 24 + this.hours : this.hours).toString();
    const minutes = (
      this.minutes < 0 ? 60 + this.minutes : this.minutes
    ).toString();

    return `${this.addZero(hours)}:${this.addZero(minutes)}`;
  }

  addZero(input) {
    return input.length === 1 ? "0" + input : input;
  }

  plus(minutes) {
    const duration = this.minutesToDuration(minutes);
    this.hours += duration.hours;
    this.minutes += duration.minutes;
    return new Clock(this.hours, this.minutes);
  }

  minus(minutes) {
    const duration = this.minutesToDuration(minutes);
    this.hours -= duration.hours;
    this.minutes -= duration.minutes;
    return new Clock(this.hours, this.minutes);
  }

  minutesToDuration(inputMinutes) {
    const MINUTES_PER_HOUR = 60;
    const minutes = inputMinutes % MINUTES_PER_HOUR;

    if (minutes === 0) {
      return { hours: inputMinutes / MINUTES_PER_HOUR, minutes: 0 };
    }

    const hours = (inputMinutes - minutes) / MINUTES_PER_HOUR;
    return { hours, minutes };
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}
