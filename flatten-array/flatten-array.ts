//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isNil = (v: any) => v == null;

export const flatten = (input: any[]) =>
  input.reduce(
    (total, value) => [
      ...total,
      ...(Array.isArray(value) ? flatten(value) : isNil(value) ? [] : [value]),
    ],
    []
  );
