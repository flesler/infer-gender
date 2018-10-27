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

exports.extractName = (fullName, onlyFirst = false) => (
	removeDiacritics(fullName)
		.toLowerCase()
		.replace(/[^a-z-абвгдезиклмнопрстэюяабвгдеийклмнопрстуфхчьяё ]+/g, '')
		.split(' ')
		// Return the first word that matches a name
		.find(name => name in names || onlyFirst)
)

exports.infer = (fullName, onlyFirst = false) => (
	names[exports.extractName(fullName, onlyFirst)] || UNKNOWN
)
