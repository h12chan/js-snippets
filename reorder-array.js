function reorderArray(arr, from, to) {
  // Delete the item from current position
  var item = arr.splice(from, 1);
  
  // Move the item to its new position
  arr.splice(to, 0, item[0]);
  
  // Make sure a valid array is provided
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
		throw new Error('Please provide a valid array');
	}
  
  // Make sure there's an item to move
	if (!item.length) {
		throw new Error('There is no item in the array at index ' + from);
	}
}

export default reorderArray;
