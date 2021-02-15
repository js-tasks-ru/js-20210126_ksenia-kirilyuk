/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let container = "";
  let i = 0;
  let j = 1;
  
  if (size == 0) {return "";}
  if (!size) {return string;}

  while (i < string.length) {
    if (string.charAt(j) === string.charAt(i)) {
      j += 1;
    }
    else {
      let selectedChars = string.substring(i, Math.min(j - 1, i + size - 1) + 1); 
      container += selectedChars;
      i = j;
      j += 1;
    }
  }
  return container;
}
