#!/usr/bin/env node

// USAGE: $ node bin/cli.js john doe
const { infer } = require('../index')

const name = process.argv.slice(2).join(' ')

console.log(infer(name))
process.exit()
