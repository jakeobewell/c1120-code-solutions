/* exported defaults */
function defaults(target, source) {
  for (key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
