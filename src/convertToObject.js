'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};

  const styles = sourceString
    .trim()
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'));

  styles.forEach((el) => {
    const colonIndex = el.indexOf(':');
    const key = el.slice(0, colonIndex).trim();
    const value = el.slice(colonIndex + 1).trim();

    if (key && value !== undefined) {
      resultObject[key] = value;
    }
  });

  return resultObject;
}

module.exports = convertToObject;
