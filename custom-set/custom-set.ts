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
    if (this.contains(item)) return new CustomSet(this.#arr);

    this.#arr.push(item);

    return new CustomSet(this.#arr);
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

  eql(compareSet: CustomSet) {
    if (this.empty() && compareSet.empty()) return true;
    if (this.empty()) return false;
    if (compareSet.empty()) return false;

    const compareSorted = compareSet.sorted().toString();
    const thisSorted = this.sorted().toString();

    return thisSorted === compareSorted;
  }

  union(compareSet: CustomSet) {
    const result = new CustomSet(this.#arr);

    compareSet.#arr.forEach((element) => result.add(element));

    return result;
  }

  intersection(compareSet: CustomSet) {
    if (this.empty() && compareSet.empty()) return new CustomSet();
    if (this.empty() || compareSet.empty()) return new CustomSet([]);

    const common = new CustomSet();

    compareSet.#arr.forEach((element) => {
      if (this.contains(element)) {
        common.add(element);
      }
    });

    return new CustomSet(common.sorted());
  }

  difference(compareSet: CustomSet) {
    if (this.empty() && compareSet.empty()) return new CustomSet();
    if (this.empty()) return new CustomSet();
    if (compareSet.empty()) return new CustomSet(this.#arr);

    const result = new CustomSet(this.#arr);

    compareSet.#arr.forEach((el) => {
      if (result.contains(el)) {
        result.remove(el);
      }
    });

    return result;
  }

  remove(item: number) {
    const index = this.#arr.indexOf(item);
    if (index !== -1) {
      this.#arr.splice(index, 1);
    }
  }

  sorted() {
    return this.#arr.sort((a, b) => (b > a ? -1 : 1));
  }
}

const actual = new CustomSet([1, 2, 3]).add(3);
const expected = new CustomSet([1, 2, 3]);
