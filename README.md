# infer-gender

Infer the gender of a name based on a large list of names, case insensitive and removes diacritics.

## Installation

```sh
$ npm install infer-gender
```

## Usage

The method `gender.infer()` will return one of the following values:

- female
- male
- unisex
- unknown

```js
const gender = require('infer-gender')

console.log(gender.infer('~~(Micha^el) Bolton~~')) // -> male
```

## Sources

- [x] https://github.com/davidemiceli/gender-detection/tree/a81669c8d03a1844588f4d2504c2cf9c042343b0/genders
- [x] https://github.com/trevorah/boy-girl/tree/2da54897ca378395ef1583561c033ba4ee160d6a
- [x] https://github.com/isaachess/gender-guess/tree/560dd8663c3702bb6ab29f1911daef22e1d7a902/names/final_names
- [x] https://github.com/darul75/string-gender/blob/3c598c94448c360c7eefccbca9b31a4f42d8a6ea/src/nam_dict.txt
- [x] https://gist.github.com/thoppe/e9d5ba72fcfc3089a0ca223acc6a09cd
- [x] https://www.ranker.com/list/common-russian-language-names/reference
- [x] https://www.ranker.com/list/common-chinese-language-names/reference
- [x] http://masterrussian.com/aa031701a.shtml
- [x] http://masterrussian.com/aa031001a.shtml
- [x] https://www.fakenamegenerator.com/order.php

## License



MIT License

Copyright (c) 2018 Ariel Flesler

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

