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

export function cookingStatus(remainingTime){
  if (remainingTime === 0){
    return "Lasagna is done."
  }
  else if (remainingTime == null){
    return "You forgot to set the timer."
  }
  return "Not done, please wait."
}

export function preparationTime(layers=[],avgPrepTimeInMinutes){
  if (avgPrepTimeInMinutes == null){
    return layers.length * 2 ;
  }
  
  return layers.length *avgPrepTimeInMinutes;
}

export function quantities(layers=[]){
  //to ensure enough sauce and noodles for lasagna preparation
  //for each noodle layer in lasagna, 50grams of noodles is required
  //for each sauce layer, 0.2litres of sauce
  //returns object
  let sumOfNoodles  = 0;
  let sumOfSauce = 0;
  
    for (let index = 0; index < layers.length; index++) {
      if (layers[index] == 'noodles'){
       sumOfNoodles += 50
    }
       else if (layers[index] == 'sauce'){
       sumOfSauce += 0.2
    }
       
    }
     return({
     noodles: sumOfNoodles,
     sauce: sumOfSauce
  })

}

export function addSecretIngredient(friendsList=[],myList=[]){
  //accepts two arraysofingredients as params
  //first param is my friends list
  //second param is my own recipe
  //function adds last item from my friend to my list
  //modifies my recipe but the function returns nothing,
  let lastItem = friendsList[friendsList.length-1];
  myList.push(lastItem);
}

export function scaleRecipe(recipe,numberOfPortions){
  //takes two parameters
  //returns recipeobject with amount for the number of portions
  // for one portion, noddles=100;sauce = 0.25; mozzarella = 0.5; meat =50

  //takes recipe and NOF then uses NOF
  // first take NOF,divide it by 2
  // then multiply each of the recipe by the result

  let portionsDivisor= numberOfPortions/2;
  let scaleRecipeObject = {}
  
  for (let i in recipe){
   scaleRecipeObject[i] = recipe[i]  * portionsDivisor
  }
  return scaleRecipeObject
  // let recipeNeeded={
  //     noodles: 100,
  //     sauce: 0.25,
  //     mozzarella: 0.5,
  //     meat: 50
  // };
  // for (let i in recipeNeeded){
  //   // if(recipe(i) === )
  //   recipeNeeded[i]= recipeNeeded[i]*numberOfPortions
  // }
 
  // return recipe
}
