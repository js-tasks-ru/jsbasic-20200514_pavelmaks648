/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    const checkStr = str.toLocaleLowerCase()
    if (checkStr.indexOf('xxx') != -1 || checkStr.indexOf('1xbet') != -1) return true;
    return false
}