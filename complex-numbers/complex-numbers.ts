//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  #real: number;
  #imaginary: number;

  constructor(real: number, imag: number) {
    this.#real = real;
    this.#imaginary = imag;
  }

  get real() {
    return this.#real;
  }

  get imag() {
    return this.#imaginary;
  }

  add(term: ComplexNumber) {
    return new ComplexNumber(this.real + term.real, this.imag + term.imag);
  }

  sub(term: ComplexNumber) {
    return new ComplexNumber(this.real - term.real, this.imag - term.imag);
  }

  div(divisor: ComplexNumber) {
    const dividend = { real: this.real, imag: this.imag };

    return new ComplexNumber(
      (dividend.real * divisor.real + dividend.imag * divisor.imag) /
        (divisor.real ** 2 + divisor.imag ** 2),
      (dividend.imag * divisor.real - dividend.real * divisor.imag) /
        (divisor.real ** 2 + divisor.imag ** 2)
    );
  }

  mul(multiplier: ComplexNumber) {
    const multiplicand = { real: this.real, imag: this.imag };

    return new ComplexNumber(
      multiplicand.real * multiplier.real - multiplicand.imag * multiplier.imag,
      multiplicand.imag * multiplier.real + multiplicand.real * multiplier.imag
    );
  }

  get abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  get conj() {
    return new ComplexNumber(
      this.real / (this.real ** 2 + this.imag ** 2),
      (this.imag / (this.real ** 2 + this.imag ** 2)) * -1
    );
  }

  get exp() {
    const expRealPart = Math.E ** this.real;
    return new ComplexNumber(
      expRealPart * Math.cos(this.imag),
      expRealPart * Math.sin(this.imag)
    );
  }
}
