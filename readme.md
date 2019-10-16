# select-prompt

**Deprecated. Use the [select prompt](https://github.com/enquirer/enquirer#select-prompt) from [`enquirer`](https://github.com/enquirer/enquirer).**

---

A prompt to an item from a list.

[![asciicast](https://asciinema.org/a/41541.png)](https://asciinema.org/a/41541)

[![npm version](https://img.shields.io/npm/v/select-prompt.svg)](https://www.npmjs.com/package/select-prompt)
[![dependency status](https://img.shields.io/david/derhuerst/select-prompt.svg)](https://david-dm.org/derhuerst/select-prompt#info=dependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/select-prompt.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)

*select-prompt* uses [*cli-styles*](https://github.com/derhuerst/cli-styles) and [*prompt-skeleton*](https://github.com/derhuerst/prompt-skeleton) to have a look & feel consistent with [other prompts](https://github.com/derhuerst/prompt-skeleton#prompts-using-prompt-skeleton).


## Installing

```
npm install select-prompt
```


## Usage

```js
const prompt = require('select-prompt')

const colors = [
	{title: 'red',    value: '#f00'},
	{title: 'yellow', value: '#ff0'},
	{title: 'green',  value: '#0f0'},
	{title: 'blue',   value: '#00f'},
	{title: 'black',  value: '#000'},
	{title: 'white',  value: '#fff'}
]

prompt('What is your favorite color?', colors, {cursor: 3})
.on('data', (e) => console.log('Interim value', e.value))
.on('abort', (v) => console.log('Aborted with', v))
.on('submit', (v) => console.log('Submitted with', v))
```


## Related

- [`date-prompt`](https://github.com/derhuerst/date-prompt)
- [`mail-prompt`](https://github.com/derhuerst/mail-prompt)
- [`multiselect-prompt`](https://github.com/derhuerst/multiselect-prompt)
- [`range-prompt`](https://github.com/derhuerst/range-prompt)
- [`tree-select-prompt`](https://github.com/derhuerst/tree-select-prompt)
- [`cli-autocomplete`](https://github.com/derhuerst/cli-autocomplete)


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/select-prompt/issues).
