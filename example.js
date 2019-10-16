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

selectPrompt('Which color do you like best?', colors)
// .on('data', (data) => console.log('Changed to', selected(data.value)))
.on('abort', (item) => console.log('Aborted with', item))
.on('submit', (item) => console.log('Submitted with', item))
