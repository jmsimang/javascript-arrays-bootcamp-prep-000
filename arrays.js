var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skitles']

function addElementToBeginningOfArray(arrayToEdit, element) {
  arrayToEdit.unshift(element)
  return arrayToEdit
}

function destructivelyAddElementToBeginningOfArray(arrayToEdit, element) {
  var newArray = [element, ...arrayToEdit]
  return newArray
}

function addElementToEndOfArray(arrayToEdit, element) {
  var newArray = [...arrayToEdit, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(arrayToEdit, element) {
  arrayToEdit.push(element)
  return arrayToEdit
}

function accessElementInArray(arrayToSearch, index) {
  return arrayToSearch[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayToEdit) {
  return arrayToEdit.shift()
}

function 