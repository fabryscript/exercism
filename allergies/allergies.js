//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALLERGIES_LIST = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
};

export class Allergies {
  confirmedAllergies = [];

  constructor(score) {
    Object.entries(ALLERGIES_LIST).forEach(([allergen, value]) => {
      if (score & value) {
        this.confirmedAllergies.push(allergen);
      }
    });
  }

  list() {
    return this.confirmedAllergies;
  }

  allergicTo(allergen) {
    return this.confirmedAllergies.includes(allergen);
  }
}
