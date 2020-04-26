# @bemoje/arr-index-of-first-where

Return the index of the first element of an array where the callback returns true. Returns -1 if none do.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-index-of-first-where" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-index-of-first-where" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-index-of-first-where" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-index-of-first-where.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-index-of-first-where" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-index-of-first-where.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-index-of-first-where" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-index-of-first-where" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-index-of-first-where/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-index-of-first-where" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-index-of-first-where
npm install --save @bemoje/arr-index-of-first-where
npm install --save-dev @bemoje/arr-index-of-first-where
```

## Usage

```javascript
import arrIndexOfFirstWhere from '@bemoje/arr-index-of-first-where'

const arr = [1, 2, 3, 4, 5]

arrIndexOfFirstWhere(arr, (element) => {
	return element >= 3
})
//=> 2

arrIndexOfFirstWhere(arr, (element) => {
	return element >= 6
})
//=> -1

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrIndexOfFirstWhere

Return the index of the first element of an array where the callback returns true. Returns -1 if none do.

##### Parameters

-   `arr` **[Array][5]** The array to iterate

-   `callback` **[predicate][6]** The callback(element, index, array): boolean

##### Returns
**any** The first element to satisfy the condition

## predicate

Type: [Function][7]

##### Parameters

-   `element` **any** The current array element

-   `index` **[number][8]** The current index

-   `array` **[Array][5]** The array being itereated

##### Returns
**[boolean][9]** 

[1]: #arrindexoffirstwhere

[2]: #parameters

[3]: #predicate

[4]: #parameters-1

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[6]: #predicate

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean