const memoize = require('fast-memoize');

function getClass(styles, conditionalStyles) {
  return Object.keys(conditionalStyles).reduce((prev, next) => {
    if (conditionalStyles[next]) {
      return [...prev, styles[next]];
    }

    return prev;
  }, []);
}

export default memoize(getClass);
