/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
    const strLenght = str.length;
    if (strLenght < maxlength) return str;
    else {
        const newStr = str.slice(0, maxlength - 1) + '…';
        return newStr
    }
}