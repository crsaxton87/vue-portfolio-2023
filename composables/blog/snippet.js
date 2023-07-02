/**
 * Returns a truncated version of the input text based on the width of the window.
 * @param {string} text - The input text to be truncated.
 * @returns {string} The truncated text.
 */
export const snippet = (text) => {
  if (window.innerWidth < 480) {
    return text.slice(0, 300) + "...";
  } else if (window.innerWidth < 640) {
    return text.slice(0, 400) + "...";
  } else {
    return text.slice(0, 500) + "...";
  }
};
