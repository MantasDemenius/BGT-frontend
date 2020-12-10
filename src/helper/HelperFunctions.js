export const removeItemFromArrayById = (array, id) => {
  const removeIndex = array.map((obj) => obj.id).indexOf(id);
  if (removeIndex > -1) {
    array.splice(removeIndex, 1);
    return array;
  }
  return array;
};

export const checkAllowedRoles = (userRoles, allowedRoles) => userRoles.split(',').some((r) => allowedRoles.indexOf(r) >= 0);
