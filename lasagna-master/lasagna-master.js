/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if(remainingTime > 0) {
    return 'Not done, please wait.';
  } else if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else {
    return 'You forgot to set the timer.';
  }
}

export function preparationTime(layers, preparationTimePerLayer = 2) {
  return layers.length * preparationTimePerLayer;
}

export function quantities(layers) {
  let sauceCount = 0;
  let noodlesCount = 0;

  for (let i = 0; i < layers.length; i++) {
    switch (layers[i]) {
      case "sauce":
        sauceCount += 0.2;
        break;
      case "noodles":
        noodlesCount += 50;
        break;
      default:
        break;
    }
  }

  return {
    sauce: sauceCount,
    noodles: noodlesCount
  }
}

export function addSecretIngredient(friendsList, myList) {
  const lastIngredient = friendsList[friendsList.length - 1];
  myList.push(lastIngredient)
}

const MAX_PORTIONS_PER_RECIPE = 2

export function scaleRecipe(recipe, wantedPortions) {
  const effectiveScaleFactor = wantedPortions / MAX_PORTIONS_PER_RECIPE;
  const scaledRecipe = {};
  
  for (let ingredient in recipe) {
    Object.assign(scaledRecipe, { [ingredient]: recipe[ingredient] * effectiveScaleFactor })
  }

  return scaledRecipe;
}