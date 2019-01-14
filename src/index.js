/* @flow */
import Test from './test'

class Foo {
  person = {
    name: 'xunzhi'
  }
  getTest() {
    const test = new Test()
    console.log(test.getName())
  }

  setAge() {
    this.person.sex = 'boy'
  }
}

export default Foo
