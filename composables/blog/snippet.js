/**
 * Returns a truncated version of the input text based on the width of the window.
 * @param {string} text - The input text to be truncated.
 * @returns {string} The truncated text.
 */
export const snippet = (text) => {
  const truncationValues = {
    /* Window width in px: Truncated word count */
    1800: 500,
    1536: 300,
    1280: 400,
    1024: 400,
    768: 250,
    640: 400,
  };
  const maxWidth = window.innerWidth;
  const maxLength = Object.keys(truncationValues).find(
    (width) => maxWidth >= width
  );
  return text.substring(0, truncationValues[maxLength]) + "...";
};
