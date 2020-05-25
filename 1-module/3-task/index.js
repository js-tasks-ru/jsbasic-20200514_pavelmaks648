/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
    const Strlength = str.length;
    if (Strlength <= 0) return str = '';
    if (Strlength > 0) return (str[0].toUpperCase() + str.slice(1, Strlength));
}