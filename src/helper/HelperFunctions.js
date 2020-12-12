export const removeItemFromArrayById = (array, id) => {
  const removeIndex = array.map((obj) => obj.id).indexOf(id);
  if (removeIndex > -1) {
    array.splice(removeIndex, 1);
    return array;
  }
  return array;
};

export const checkAllowedRoles = (userRoles, allowedRoles) => {
  if (Array.isArray(allowedRoles) && !allowedRoles.length) {
    return true;
  }
  return userRoles.split(',').some((r) => allowedRoles.indexOf(r) >= 0);
};

export const UppercaseFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);
