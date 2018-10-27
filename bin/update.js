#!/usr/bin/env node
// USAGE: $ cat other-female.txt | node bin/update.js female
const fs = require('fs')
const { extractName } = require('../index')

const NEW_LINE = /\r?\n/

const { stdin } = process
const gender = process.argv[2]
const remove = process.argv[3] === '--remove'
const filename = `data/${gender}.txt`

const names = {}

fs.readFileSync(filename, 'utf8').split(NEW_LINE).forEach(add)

let buffer = ''

stdin.setEncoding('utf8')
stdin.on('data', (chunk) => {
	buffer += chunk
	const arr = buffer.split(NEW_LINE)
	buffer = arr.pop()
	arr.forEach(update)
})
stdin.on('end', () => {
	update(buffer)
	save()
})

function add(name) {
	if (name) {
		names[name] = true
	}
}

function update(name) {
	name = extractName(name, true)
	if (remove) {
		delete names[name]
	} else {
		add(name)
	}
}

function save() {
	fs.writeFileSync(filename, Object.keys(names).sort().join('\n') + '\n')
	process.exit()
}
