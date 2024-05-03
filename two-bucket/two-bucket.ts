class Bucket {
  name: string;
  size: number;
  content: number;

  constructor(name: string, size: number, content: number) {
    this.name = name;
    this.size = size;
    this.content = content;
  }
}

const gcd = (x: number, y: number) => {
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
};

export class TwoBucket {
  #bucketOneSize: number;
  #bucketTwoSize: number;
  #goal: number;
  #startBucket: string;

  constructor(
    bucketOneSize: number,
    bucketTwoSize: number,
    goal: number,
    startBucket: string
  ) {
    this.#checkInputValidity(bucketOneSize, bucketTwoSize, goal);

    this.#bucketOneSize = bucketOneSize;
    this.#bucketTwoSize = bucketTwoSize;
    this.#goal = goal;
    this.#startBucket = startBucket;
  }

  #checkInputValidity(
    bucketOneSize: number,
    bucketTwoSize: number,
    goal: number
  ) {
    if (goal % gcd(bucketOneSize, bucketTwoSize))
      throw new Error(
        `Goal ${goal} must divide evenly by the GCD of ${bucketOneSize} and ${bucketTwoSize}!`
      );
    if (goal > bucketOneSize && goal > bucketTwoSize)
      throw new Error(
        `Impossible goal: ${goal} is greater than ${bucketOneSize} and ${bucketTwoSize}!`
      );
  }

  solve() {
    let bucketA = new Bucket("one", this.#bucketOneSize, 0);
    let bucketB = new Bucket("two", this.#bucketTwoSize, 0);

    if (this.#startBucket === "two") {
      [bucketA, bucketB] = [bucketB, bucketA];
    }

    let moves = 0;

    while (true) {
      if (bucketA.content === this.#goal || bucketB.content === this.#goal) {
        if (bucketB.content === this.#goal) {
          [bucketA, bucketB] = [bucketB, bucketA];
        }

        return {
          moves,
          goalBucket: bucketA.name,
          otherBucket: bucketB.content,
        };
      } else if (bucketA.content === 0) {
        bucketA.content = bucketA.size;
      } else if (bucketB.size === this.#goal) {
        bucketB.content = bucketB.size;
      } else if (bucketB.content === bucketB.size) {
        bucketB.content = 0;
      } else {
        const pour = Math.min(bucketA.content, bucketB.size - bucketB.content);
        bucketA.content -= pour;
        bucketB.content += pour;
      }
      moves += 1;
    }
  }
}
