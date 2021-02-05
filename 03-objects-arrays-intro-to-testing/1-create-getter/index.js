/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  function finder(obj) {
    if (!path) {return undefined;}
    const arr = path.split(".");
    let newObj = obj;
    arr.forEach((item)=>{newObj = newObj[item];});
    return newObj;
  }
  return finder;
}
