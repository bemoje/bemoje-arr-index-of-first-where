import arrIndexOfFirstWhere from '../src/arr-index-of-first-where'

const arr = [1, 2, 3, 4, 5]

arrIndexOfFirstWhere(arr, (element) => {
	return element >= 3
})
//=> 2

arrIndexOfFirstWhere(arr, (element) => {
	return element >= 6
})
//=> -1
