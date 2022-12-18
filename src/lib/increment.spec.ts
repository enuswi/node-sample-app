import { increment } from "./increment"

test('increment', () => {
  expect(increment(10)).toBe(11)
})