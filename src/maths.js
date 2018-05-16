// This function isn't used anywhere, so
// Rollup excludes it from the bundle...
const PI = 3.14

export function square(x) {
  return x * x
}
b = 1
// This function gets included
export function cube(x) {
  return x * x * x * PI
}
