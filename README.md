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

- [ ] https://github.com/davidemiceli/gender-detection/tree/a81669c8d03a1844588f4d2504c2cf9c042343b0/genders
- [ ] https://github.com/trevorah/boy-girl/tree/2da54897ca378395ef1583561c033ba4ee160d6a
- [ ] https://github.com/darul75/string-gender/blob/3c598c94448c360c7eefccbca9b31a4f42d8a6ea/src/nam_dict.txt
- [ ] https://github.com/isaachess/gender-guess/tree/560dd8663c3702bb6ab29f1911daef22e1d7a902/names/final_names
- [ ] https://github.com/markusz/gendr/blob/75cd89104a4bb4f3ac9d4394fb6bf9554f8e0774/data/world-census-data.json

## License

The Clear BSD License

Copyright (c) 2018 Ariel Flesler
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted (subject to the limitations in the disclaimer
below) provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

- Redistributions in binary form must reproduce the above copyright	notice, this list of conditions and the following disclaimer in the	documentation and/or other materials provided with the distribution.

- Neither the name of the copyright holder nor the names of its	contributors may be used to endorse or promote products derived from this	software without specific prior written permission.

NO EXPRESS OR IMPLIED LICENSES TO ANY PARTY'S PATENT RIGHTS ARE GRANTED BY
THIS LICENSE. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
