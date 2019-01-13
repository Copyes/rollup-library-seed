/*!
 * rollup-library-seed.js v1.0.0
 * (c) 2018-2019 Fan Chao
 * Released under the MIT License.
 */
// This function isn't used anywhere, so

function cube(x) {
  return x * x * x;
}

/* @flow */

function foo(x) {
  if (x) {
    return cube(x);
  }

  return -1;
}

var index = {
  foo: foo
};

export default index;
