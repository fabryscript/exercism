//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (input: any[]) => {
  const result: any[] = [];

  const handleFlattening = (arr: unknown[]) => {
    let counter = 0;

    while (counter < arr.length) {
      const value = arr[counter];

      if (Array.isArray(value)) {
        handleFlattening(value);
      } else if (value === 0 || value) {
        result.push(value);
      }

      counter++;
    }
  };

  handleFlattening(input);
  return result;
};
