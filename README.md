# lazydebugger

:zzz: Dead simple, Node.js based logging utility.

[![Build Status](https://travis-ci.com/arakilian0/lazydebugger.svg?branch=master)](https://travis-ci.com/arakilian0/lazydebugger) [![npm version](https://img.shields.io/npm/v/lazydebugger.svg?style=flat)](https://www.npmjs.com/package/lazydebugger) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arakilian0/lazydebugger/blob/master/LICENSE.md) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/arakilian0/lazydebugger/blob/master/CONTRIBUTING.md)

**NOTE: THIS MODULE IS CURRENTLY IN BETA**

Description: Create a logger for your project the lazy way. Using a single YAML file called `debugger.yml`, configure your settings, then create your log objects in the same file and access them through the API.

## Installation
```
$ npm install lazydebugger
```

## Usage
*Note: If you don't have a file named **debugger.yml** in the root directory of your project, this module won't work! This will change in the 1.0 release to support multiple filenames and formats. For now, name your debugger file exclusively `debugger.yml` and check out this quick [yaml cheatsheet](https://github.com/helm/helm/blob/master/docs/chart_template_guide/yaml_techniques.md) if you don't already know YAML syntax.*

**Step 1:** You need to configure your debug settings. Here is an example of all the allowed options.
```yml
# debugger.yml

settings:
  debug: true
  output:
    file: true
    path: "./log"
    filename: test.log
    console: true
    color: red
    bold: true
```

**Step 2:** Create your log objects in the same file.
```yml
# debugger.yml

settings:
  debug: true
  output:
    file: true
    path: "./log"
    filename: test.log
    console: true
    color: red
    bold: true

0:
  type: pass
  prefix: Success
  message: valid log object detected
1:
  type: fail
  prefix: Error
  message: invalid log object detected
2:
  type: pass
  prefix: Success
  message: some other success message
```

**Step 3:** Use the module. Provide the main method a log id and lazydebugger will print that log id's message to a file and the console respective of your settings.
```js
/* example.js */

const log = require('lazydebugger');

if(userInputIsValid) {
  log(0);
}
else {
  log(1);
}
```

**Step 4:** View your logs! The output path and filename are set in the settings object of the `debugger.yml` file. If you set `console: true` in the settings object, you should have your output in the console as well.
```bash
- /root
    - debugger.yml
    - example.js
    - /log
      - test.log
```

## License
MIT License

Copyright (c) 2019 Michael Arakilian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
