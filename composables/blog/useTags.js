/**
 * Returns an object with a `tags` property that contains an array of unique tags from the provided posts.
 * @param {Array} posts - An array of posts
 * @returns {Object} An object with a `tags` property that contains an array of unique tags from the provided posts.
 */

const useTags = (posts) => {
  const tagSet = new Set(posts.flatMap((post) => post.tags));
  const tags = Array.from(tagSet);
  return { tags };
};

export default useTags;
