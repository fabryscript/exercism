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
  confirmedAllergies: string[] = [];

  constructor(score: number) {
    Object.entries(ALLERGIES_LIST).forEach(([allergen, value]) => {
      if (score % (value * 2) >= value) {
        this.confirmedAllergies.push(allergen);
      }
    });
  }

  list() {
    return this.confirmedAllergies;
  }

  allergicTo(allergen: string) {
    return this.confirmedAllergies.includes(allergen);
  }
}
