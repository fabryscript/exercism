//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #balance: number = 0;
  #isOpen = false;

  open() {
    if (this.#isOpen) throw new ValueError();

    this.#isOpen = true;
  }

  close() {
    if (!this.#isOpen) throw new ValueError();

    this.#isOpen = false;
    this.#balance = 0;
  }

  deposit(amount: number) {
    if (!this.#isOpen) throw new ValueError();

    if (amount < 0) {
      throw new ValueError();
    }

    this.#balance += amount;
  }

  withdraw(amount: number) {
    if (!this.#isOpen) throw new ValueError();

    if (amount < 0 || amount > this.#balance) {
      throw new ValueError();
    }

    this.#balance -= amount;
  }

  get balance() {
    if (!this.#isOpen) throw new ValueError();

    return this.#balance;
  }

  set balance(_) {
    throw new Error("Cannot set balance directly");
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
