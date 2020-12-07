const removeItemFromArrayById = (array, id) => {
  const removeIndex = array.map((obj) => obj.id).indexOf(id);
  if (removeIndex > -1) {
    array.splice(removeIndex, 1);
    return array;
  }
  return array;
};

export default removeItemFromArrayById;
