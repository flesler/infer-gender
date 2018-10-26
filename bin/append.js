#!/usr/bin/env node
// USAGE: $ cat other-female.txt | node bin/append.js female
const fs = require('fs')
const { extractName } = require('../index')

const NEW_LINE = /\r?\n/

const { stdin } = process
const gender = process.argv[2]
const filename = `data/${gender}.txt`

const names = {}

fs.readFileSync(filename, 'utf8').split(NEW_LINE).forEach(add)

let buffer = ''

stdin.setEncoding('utf8')
stdin.on('data', (chunk) => {
	buffer += chunk
	const arr = buffer.split(NEW_LINE)
	buffer = arr.pop()
	arr.map(normalize).forEach(add)
})
stdin.on('end', () => {
	add(normalize(buffer))
	save()
})

function normalize(name) {
	name = extractName(name)
	if (/[^a-z-]/.test(name)) {
		console.error('Invalid characters found:', name)
		name = ''
	}
	return name
}

function add(name) {
	if (name) {
		names[name] = true
	}
}

function save() {
	fs.writeFileSync(filename, Object.keys(names).join('\n'))
	process.exit()
}
