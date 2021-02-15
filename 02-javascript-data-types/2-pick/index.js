/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick, keys
 * @returns {object} - returns the new object
 */

export const pick = (obj, ...fields) => {
  const newObject = {};
  fields.forEach(item => { 
    for (const [key, value] of Object.entries(obj)) {
      if (key === item) {
        newObject[key] = value;    
      }     
    }
  });
  return newObject;
};
