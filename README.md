# cognate [![Build Status](https://secure.travis-ci.org/vxtindia/cognate.png?branch=master)](http://travis-ci.org/vxtindia/cognate)

Replace MS word special characters with ASCII cognates.

## Installation
`npm install cognate`

## Usage
```javascript
var cognate = require('cognate');

//Replace smart single quotes and apostrophe (\u2018 \u2019 \u201A)
cognate.replace("‘’‚"); // "'''"

//Replace smart double quotes(\u201E \u201C \u201D)
cognate.replace("„“”"); // """""

//Replace dashes(\u2013, \u2014)
cognate.replace("–—"); // "--"

//Replace circumflex (\u02C6)
cognate.replace("ˆ"); // "^"

//Replace open angle bracket (\u2039)
cognate.replace("‹"); // "<"

//Replace close angle bracket (\u203A)
cognate.replace("›"); // ">"

//Replace spaces (\u02DC, \u00A0)
cognate.replace("˜ \u00A0"); // "   "

```

## Tests
Run tests

````
npm test
````

or

````
grunt nodeunit
````

## References
http://en.wikipedia.org/wiki/Windows-1252#Codepage_layout
http://www.andornot.com/blog/post/Replace-MS-Word-special-characters-in-javascript-and-C.aspx

## License
Copyright (c) 2014 Prama
Licensed under the MIT license.
