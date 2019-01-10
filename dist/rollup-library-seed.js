/*!
 * rollup-library-seed.js v1.0.0
 * (c) 2018-2019 Fan Chao
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['rollup-library-seed'] = factory());
}(this, function () { 'use strict';

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

  var main = {
    foo: foo
  };

  return main;

}));
//# sourceMappingURL=rollup-library-seed.js.map
