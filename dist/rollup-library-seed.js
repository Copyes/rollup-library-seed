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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var Test =
  /*#__PURE__*/
  function () {
    function Test() {
      _classCallCheck(this, Test);

      _defineProperty(this, "state", {
        name: 'xunzhi'
      });
    }

    _createClass(Test, [{
      key: "getName",
      value: function getName() {
        console.log(this.state.name);
      }
    }]);

    return Test;
  }();

  var Foo =
  /*#__PURE__*/
  function () {
    function Foo() {
      _classCallCheck(this, Foo);

      _defineProperty(this, "person", {
        name: 'xunzhi'
      });
    }

    _createClass(Foo, [{
      key: "getTest",
      value: function getTest() {
        var test = new Test();
        console.log(test.getName());
      }
    }, {
      key: "setAge",
      value: function setAge() {
        this.person.sex = 'boy';
      }
    }]);

    return Foo;
  }();

  return Foo;

}));
//# sourceMappingURL=rollup-library-seed.js.map
