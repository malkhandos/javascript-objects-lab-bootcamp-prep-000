var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
<<<<<<< HEAD
  return Object.assign({}, recipes, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]=value
  return recipes
}

function deleteFromObjectByKey(recipes, key){
  var new_recipes = Object.assign({}, recipes);
  delete new_recipes[key];
  return new_recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes
}

=======
  return Object.assign({}, recipes, {[key]: value})
}
>>>>>>> 8b914066b0a7c3c46f62bbbcf65cda7c0eec2226
