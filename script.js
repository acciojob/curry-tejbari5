function curry(callback) {
  const arity = callback.length;

  return function curried(...args) {
    if (args.length >= arity) {
      return callback(...args);
    } else {
      return function(...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
}

module.exports = curry;
