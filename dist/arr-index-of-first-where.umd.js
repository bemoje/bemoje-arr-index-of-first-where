(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-index-of-first-where'] = factory(global.assertArgs, global.assertType));
}(this, (function (assertArgs, assertType) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Return the index of the first element of an array where the callback returns true. Returns -1 if none do.
	 * @param {Array} arr - The array to iterate
	 * @param {predicate} callback - The callback(element, index, array): boolean
	 * @returns {any} The first element to satisfy the condition
	 */
	function arrIndexOfFirstWhere(arr, callback) {
		assertArgs(arr, callback);
		assertType(Array, arr);
		assertType(Function, callback);

		for (let i = 0, len = arr.length; i < len; i++) {
			if (callback(arr[i], i, arr) === true) {
				return i
			}
		}

		return -1
	}

	/**
	 * @callback predicate
	 * @param {*} element - The current array element
	 * @param {number} index - The current index
	 * @param {Array} array - The array being itereated
	 * @returns {boolean}
	 */

	return arrIndexOfFirstWhere;

})));
