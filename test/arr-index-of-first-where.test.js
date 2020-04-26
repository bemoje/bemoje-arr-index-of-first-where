import arrIndexOfFirstWhere from '../src/arr-index-of-first-where'

describe('arrIndexOfFirstWhere', () => {
	test('works', () => {
		const arr = [1, 2, 3, 4, 5]
		expect(
			arrIndexOfFirstWhere(arr, (element) => {
				return element >= 3
			}),
		).toBe(2)
		expect(
			arrIndexOfFirstWhere(arr, (element) => {
				return element >= 6
			}),
		).toBe(-1)
	})
})
