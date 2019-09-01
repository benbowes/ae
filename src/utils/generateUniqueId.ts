/**
 * Curried function that returns a unique key for react elements
 * @param prefix {string} - some string prefix that is unique to any adjacent dom elements
 * @returns {string} - a unique sting made up of a supplied `prefix` and an auto incremented number
 * @example 
 * generateUniqueId('item'); // "item_1"
 * generateUniqueId('item'); // "item_2"
 * generateUniqueId('item'); // "item_3"
 * generateUniqueId('item'); // "item_4" 
 * generateUniqueId('item'); // "item_5" 
 */
export const generateUniqueId = ((count: number = 0): Function => (prefix: string): string => {
    count += 1;
    return `${prefix}_${count}`;
})();
