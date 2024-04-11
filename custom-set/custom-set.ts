//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  #arr: number[] = [];

  constructor(startingArray?: number[]) {
    this.#arr = [...(startingArray ?? [])];
  }

  empty() {
    if (this.#arr.length === 0) return true;

    return false;
  }

  contains(searchItem: number) {
    const idx = this.#arr.indexOf(searchItem);

    if (idx === -1) return false;

    return true;
  }

  add(item: number) {
    if (this.contains(item)) return;

    this.#arr.push(item);
  }

  subset(searchSet: CustomSet) {
    if (this.empty() && searchSet.empty()) return true;
    if (this.empty()) return true;
    if (searchSet.empty()) return false;

    const resultArray = searchSet.#arr.filter((searchItem) =>
      this.contains(searchItem)
    );

    if (!(resultArray.length === this.#arr.length)) return false;

    return true;
  }

  disjoint(searchSet: CustomSet) {
    if (this.empty() && searchSet.empty()) return true;
    if (this.empty()) return true;
    if (searchSet.empty()) return true;

    const resultArray = searchSet.#arr.filter((searchItem) =>
      this.contains(searchItem)
    );

    if (resultArray.length !== 0) return false;

    return true;
  }

  eql() {}

  union() {}

  intersection() {}

  difference() {}
}

console.log(new CustomSet([1]).disjoint(new CustomSet([])));
