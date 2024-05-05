//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  #values: unknown[] = [];

  constructor(startingArr: unknown[]) {
    this.#values = startingArr;
  }

  get values() {
    return this.#values;
  }

  append(list: List) {
    const values = list.values;

    for (let i = 0; i < values.length; i++) {
      const incomingElement = values[i];
      this.#values = [...this.#values, incomingElement];
    }

    return new List(this.values);
  }

  concat() {}

  filter() {}

  map() {}

  length() {}

  foldl() {}

  foldr() {}

  reverse() {}
}

const list1 = new List([1, 2, 3, 4]);
const list2 = new List([4, 5, 6]);

console.log(list1.append(list2).values);
