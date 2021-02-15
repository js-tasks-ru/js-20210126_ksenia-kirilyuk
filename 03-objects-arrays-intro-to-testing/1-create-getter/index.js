/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const arr = path.split("."); 
  if (!arr.length) { return; }
  
  function finder(obj) {   
    let newObj = obj;
    arr.forEach((item)=>{
      if (!newObj) {return;}
      else {newObj = newObj[item];}
    });
    return newObj;
  }
  return finder;
}
