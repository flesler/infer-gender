const assert = require('assert')
const gender = require('../index')

function infer(name, expected) {
	assert.equal(expected, gender.infer(name))
}

describe('Single word names', () => {
	it('It should return male', () => {
		infer('Alfonso', 'male')
	})

	it('It should return female', () => {
		infer('Ariana', 'female')
	})

	it('It should return unisex', () => {
		infer('rene', 'unisex')
	})

	it('It should return unknown', () => {
		infer('abcdef', 'unknown')
	})
})

describe('Multi-word names', () => {
	it('It should return male', () => {
		infer('Alfonso Wayne', 'male')
	})

	it('It should return female', () => {
		infer('Ariana Matrix', 'female')
	})

	it('It should return male even though first word does not match', () => {
		infer('Abcde Alfonso Wayne', 'male')
	})

	it('It should return female even though first word does not match', () => {
		infer('Abcde Ariana Matrix', 'female')
	})
})

describe('Names with non-latin characters', () => {
	it('It should return male', () => {
		infer('~~Alfonso...', 'male')
	})

	it('It should return female', () => {
		infer('<<Aria♥na>>', 'female')
	})
})

describe('Names with diacritics', () => {
	it('It should return male', () => {
		infer('Alfónso', 'male')
	})

	it('It should return female', () => {
		infer('Ariána', 'female')
	})

	it('It should return unisex', () => {
		infer('rené', 'unisex')
	})
})
