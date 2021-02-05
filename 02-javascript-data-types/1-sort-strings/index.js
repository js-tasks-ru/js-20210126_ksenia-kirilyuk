/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}

 */
export function sortStrings(arr, param = 'asc') {
    const arrCopy = arr.slice();  
    if (param === 'asc') {
        arrCopy.sort(function (a, b) {       
        return a.localeCompare(b, ['ru', 'eng'], { caseFirst: 'upper' });
        })
    }
    else if (param === 'desc') {
        arrCopy.sort(function (a, b) { 
            return  -1 *  a.localeCompare(b, ['ru', 'eng'], { caseFirst: 'upper' });
         })
    }
   else{ console.log(`param should be equal to asc or desc`);}
    return arrCopy;
}
