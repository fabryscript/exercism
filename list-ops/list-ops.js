// Did someone say "no Array.prototype"? Challenge accepted!

export class List {
  #values = [];
  #length = 0;

  constructor(starting) {
    if (!starting) return;

    for (let element of starting) {
      if (element instanceof List) {
        this.#values = [...this.values, ...element.values];
        this.#length++;
        continue;
      }

      this.#values = [...this.values, element];
      this.#length++;
    }
  }

  get values() {
    return this.#values;
  }

  append(list) {
    const values = list.values;

    for (let element of values) {
      this.#values = [...this.values, element];
      this.#length++;
    }

    return new List(this.values);
  }

  concat(list) {
    const incomingValues = list.values;

    for (let value of incomingValues) {
      if (typeof value !== "object") {
        this.#values = [...this.values, value];
        this.#length++;
        continue;
      }

      this.append(new List(value));
      this.#length++;
    }

    return new List(this.#values);
  }

  filter(cb) {
    let result = [];

    for (let element of this.values) {
      if (cb(element)) result = [...result, element];
    }

    return new List(result);
  }

  map(cb) {
    let result = [];

    for (let element of this.values) {
      const callbackResult = cb(element);
      result = [...result, callbackResult];
    }

    return new List(result);
  }

  length() {
    return this.#length;
  }

  foldl(cb, initialValue = 0) {
    let accumulated = initialValue;

    for (let element of this.values) {
      accumulated = cb(accumulated, element);
    }

    return accumulated;
  }

  foldr(cb, initialValue = 0) {
    let accumulated = initialValue;

    for (let i = this.length(); i > 0; i--) {
      const element = this.values[i - 1];
      accumulated = cb(accumulated, element);
    }

    return accumulated;
  }

  reverse() {
    let result = [];

    for (let i = this.length(); i > 0; i--) {
      const element = this.values[i - 1];
      result = [...result, element];
    }

    return new List(result);
  }
}
