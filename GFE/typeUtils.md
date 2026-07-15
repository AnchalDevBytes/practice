```bash

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isFunction(value) {
  return typeof value === 'function';
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isObject(value) {
  return (
    value !== null &&
    (typeof value === 'object' ||
      typeof value === 'function'
    )
  );
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isPlainObject(value) {
  if(value === null || typeof value !== 'object') {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);

  return (
    prototype === Object.prototype ||
    prototype === null
  );
}
```
