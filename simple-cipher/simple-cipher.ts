const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export class Cipher {
  #key: number[];

  constructor(key = "aaaaaaaaaa") {
    this.#key = [...key].map((c) => ALPHABET.indexOf(c));
  }

  transform(msg: string, operation: "encode" | "decode") {
    return [...msg]
      .map((c, i) => {
        const keyIndex = this.#key[i % this.#key.length];
        const alphabetIndex = ALPHABET.indexOf(c);

        let newIndex: number;

        if (operation === "encode") {
          newIndex = (alphabetIndex + keyIndex) % 26;
        } else {
          newIndex = (alphabetIndex - keyIndex + 26) % 26;
        }

        return ALPHABET[newIndex];
      })
      .join("");
  }

  encode(msg: string) {
    return this.transform(msg, "encode");
  }

  decode(code: string) {
    return this.transform(code, "decode");
  }

  get key() {
    return this.#key.reduce((total, curr) => total + ALPHABET[curr], "");
  }
}
