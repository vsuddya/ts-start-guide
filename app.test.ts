import { add } from './app';

describe('Add function Tests', () => {
  test('Adding 5 and 3 to be number 8', () => {
    expect(add(5, 3)).toBe(8)
  })

  test('Adding 7 and 2 to be string "9"', () => {
    expect(add(7, 2)).toBe('9')
  })

  test('Adding 3 and 2 to be 5', () => {
    expect(add(3, 2)).toBe(5)
  })
})
