'use strict'

const ui =       require('cli-styles')
const esc =      require('ansi-escapes')
const chalk =    require('chalk')
const figures =  require('figures')
const wrap =     require('prompt-skeleton')



const SelectPrompt = {

	  moveCursor: function (n) {
		this.cursor = n
		this.value = this.values[n].value
		this.emit()
	}


	, reset: function () {
		this.moveCursor(0)
		this.render()
	}

	, abort: function () {
		this.done = this.aborted = true
		this.emit()
		this.render()
		this.out.write('\n')
		this.close()
	}

	, submit: function () {
		this.done = true
		this.aborted = false
		this.emit()
		this.render()
		this.out.write('\n')
		this.close()
	}



	, first: function () {
		this.moveCursor(0)
		this.render()
	}
	, last: function () {
		this.moveCursor(this.values.length - 1)
		this.render()
	}

	, up: function () {
		if (this.cursor === 0) return this.bell()
		this.moveCursor(this.cursor - 1)
		this.render()
	}
	, down: function () {
		if (this.cursor === (this.values.length - 1)) return this.bell()
		this.moveCursor(this.cursor + 1)
		this.render()
	}
	, next: function () {
		this.moveCursor((this.cursor + 1) % this.values.length)
		this.render()
	}

	, _: function (c) { // on space key
		if (c === ' ') return this.submit()
	}



	, render: function (first) {
		if (first) this.out.write(esc.cursorHide)
		else this.out.write(esc.eraseLines(this.values.length + 1))

		this.out.write([
			  ui.symbol(this.done, this.aborted)
			, chalk.bold(this.msg), ui.delimiter(false)
			, (this.done ? this.values[this.cursor].title : '')
		].join(' '))

		if (!this.done) this.out.write('\n' + this.values
			.map((v, i) => this.cursor === i
				? chalk.cyan.underline(v.title)
				: v.title)
			.map((v) => chalk.gray('- ') + v)
			.join('\n'))
	}
}



const defaults = {
	  values:  []
	, value:   null
	, cursor:  0

	, done:    false
	, aborted: false
}

const selectPrompt = (msg, values, opt) => {
	if ('string' !== typeof msg) throw new Error('Message must be string.')
	if (!Array.isArray(values)) throw new Error('Values must be in an array.')
	if (Array.isArray(opt) || 'object' !== typeof opt) opt = {}

	let p = Object.assign(Object.create(SelectPrompt), defaults, opt)
	p.msg = msg
	p.values = values
	p.value = p.values[p.cursor].value

	return wrap(p)
}



module.exports = Object.assign(selectPrompt, {SelectPrompt})
