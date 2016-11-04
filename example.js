'use strict'

const selectPrompt = require('./index')



const colors = [
	{title: 'red',    value: '#f00'},
	{title: 'yellow', value: '#ff0'},
	{title: 'green',  value: '#0f0'},
	{title: 'blue',   value: '#00f'},
	{title: 'black',  value: '#000'},
	{title: 'white',  value: '#fff'}
]

selectPrompt('Which color?', colors, {cursor: 3})
.on('data', (e) => console.log('Interim value', e.value))
.on('abort', (v) => console.log('aborted with', v))
.on('submit', (v) => console.log('submitted with', v))
