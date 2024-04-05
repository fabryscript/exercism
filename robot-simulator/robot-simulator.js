//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || "Invalid Input";
  }
}

const VALID_BEARINGS = ["north", "east", "south", "west"];
export class Robot {
  constructor() {
    this.direction = "north";
    this.originalCoordinates = [0, 0];
  }

  get bearing() {
    return this.direction;
  }

  get coordinates() {
    return this.originalCoordinates;
  }

  place({ x, y, direction }) {
    this.originalCoordinates = [x, y];
    if (VALID_BEARINGS.includes(direction)) {
      this.direction = direction;
    } else {
      throw new InvalidInputError();
    }
  }

  #getAdvancedCoordinates(direction, coordinates) {
    const index = VALID_BEARINGS.indexOf(direction) + 1;
    if (index % 2 === 0) {
      if (direction === "west") return [coordinates[0] - 1, coordinates[1]];
      return [coordinates[0] + 1, coordinates[1]];
    } else {
      if (direction === "north") return [coordinates[0], coordinates[1] + 1];
      return [coordinates[0], coordinates[1] - 1];
    }
  }

  evaluate(instructions) {
    const getNextIndex = (currentIndex, move) => {
      let index = VALID_BEARINGS.indexOf(currentIndex);
      if (move === "R") {
        return (index + 1) % VALID_BEARINGS.length;
      } else if (move === "L") {
        return (index - 1 + VALID_BEARINGS.length) % VALID_BEARINGS.length;
      }
      return index;
    };

    instructions.split("").forEach((instruction) => {
      switch (instruction) {
        case "R":
        case "L":
          this.direction =
            VALID_BEARINGS[getNextIndex(this.direction, instruction)];
          break;
        case "A":
          this.originalCoordinates = this.#getAdvancedCoordinates(
            this.direction,
            this.originalCoordinates
          );
          break;
        default:
          break;
      }
    });
  }
}
