var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skitles']

function addElementToBeginningOfArray(arrayToEdit[], element) {
  arrayToEdit.unshift(element);
  return arrayToEdit;
}

function destructivelyAddElementToBeginningOfArray(arrayToEdit[], element) {
  var newArray = [element, ...arrayToEdit]
}