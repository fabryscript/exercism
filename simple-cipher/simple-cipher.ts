//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
const DEFAULT_KEY = "aaaaaaaaaa";

const sub = (input: string, key = DEFAULT_KEY) => {
  console.log("SUB:");

  const substituted = key
    .split("")
    .map((keyChar, i) => {
      const keyCharCode = keyChar.charCodeAt(0);
      const diff = input.charCodeAt(i) - keyCharCode;

      console.log(diff);

      return String.fromCharCode(keyCharCode + diff);
    })
    .join("");

  return substituted;
};

// https://www.ascii-code.com/
const getRandomLowerCaseAlphabetChar = () =>
  String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);

export class Cipher {
  #key: string = DEFAULT_KEY;

  constructor(key?: string) {
    if (!key) {
      this.#key = this._generateRandomKey();
      return;
    }

    this.#key = key;
  }

  _generateRandomKey() {
    const arr: string[] = [];

    for (let i = 0; i < 101; i++) {
      arr.push(getRandomLowerCaseAlphabetChar());
    }

    return arr.join("");
  }

  encode(input: string) {
    return sub(input, this.#key);
  }

  decode(input: string) {}

  get key() {
    return this.#key;
  }
}

const cipher = new Cipher();

console.log(cipher.encode("abcdefghij"));
