const fs = require('fs')
const removeDiacritics = require('diacritics').remove

const MALE = 'male'
const FEMALE = 'female'
const UNISEX = 'unisex'
const UNKNOWN = 'unknown'

function load(gender) {
	const path = require.resolve(`./data/${gender}.txt`)
	return fs.readFileSync(path, 'utf8').trim().split(/\r?\n/)
}

const names = {}
for (const name of load(MALE)) {
	names[name] = MALE
}

for (const name of load(FEMALE)) {
	names[name] = name in names ? UNISEX : FEMALE
}

exports.extractName = fullName => (
	removeDiacritics(fullName)
		.toLowerCase()
		.replace(/[^a-z -]+/g, '')
		.split(' ')[0]
)

exports.infer = fullName => (
	names[exports.extractName(fullName)] || UNKNOWN
)
