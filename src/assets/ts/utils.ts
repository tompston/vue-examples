/**
 * #### Fake pause in async functions
 * @param {int} time in ms
 * @example const pause = await fakePause(1500)
 */
export function fakePause(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, time);
  });
}

/**
 * #### Convert input string to a slug
 * https://gist.github.com/codeguy/6684588
 */
export function slugify(text: string) {
  return text
    .toString() // Cast to string (optional)
    .normalize("NFKD") // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}
