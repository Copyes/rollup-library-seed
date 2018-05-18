import { cube, round, square } from '../src/maths'

describe('maths methods test', () => {
  describe('求立方', () => {
    test('3 的立方等于 27', () => {
      expect(cube(3)).toBe(27)
    })
  })
  describe('求圆的面积', () => {
    test('半径为 3 的圆的面积等于 27', () => {
      expect(round(3)).toBeCloseTo(28.26, 2)
    })
  })
  describe('求平方', () => {
    test('3 的平方等于 9', () => {
      expect(square(3)).toBe(9)
    })
  })
})
