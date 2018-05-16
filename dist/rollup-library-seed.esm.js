/*!
 * rollup-library-seed.js v1.0.0
 * (c) 2018-2018 Charming
 * Released under the MIT License.
 */
// This function isn't used anywhere, so
// Rollup excludes it from the bundle...
var PI = 3.14;

// This function gets included
function cube(x) {
  return x * x * x * PI;
}

// 只使用了 cube, 所以 maths 中的 square 会被 tree shaking 移除掉
function foo() {
  if (x) {
    return cube(x);
  }
  return -1;
}

var main = {
  foo: foo
};

export default main;
