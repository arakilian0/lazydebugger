# [Releases]
<details>
<summary>Beta Releases</summary><br>

- [v0.3.2](#032)
- [v0.5.1](#051)
</details>

## 0.5.1
<details>
<summary>Release Data</summary><br>

```yaml
release:
  stage: beta
  name: lazydebugger
  tag: Dead simple, Node.js based logging utility.
  date: October 20, 2019
  version: 0.5.1
  contributers:
  - arakilian0
  description: "
    Fixed some errors. v0.3.2 up until
	now had some errors being thrown
	because of a file dependency not
	being met. That dependency not being
	met was also causing some more issues.
	This release fixes most of those bugs.
	"
  schema: same
```
</details>

## 0.3.2
<details>
<summary>Release Data</summary><br>

```yaml
release:
  stage: beta
  name: lazydebugger
  tag: Dead simple, Node.js based logging utility.
  date: October 20, 2019
  version: 0.3.2
  contributers:
  - arakilian0
  description: "
    Node.js based logging utility.
    The module requires 'debugger.yml'
    to be in your projects root
    directory. In that file goes the
    configuration for the debugger.
    Along with the configuration goes
    the actual log objects labeled by
    incrementing integers of type string.
    Use the module by requiring it in
    your script and providing the
    function a log object id.
  "
  schema:
    api:
    - index()
    settings:
      debug: boolean
      output:
        file: boolean
        console: boolean
        path: string
        filename: string
        color: string
        bold: boolean
    logObject:
      type: string
      prefix: string
      message: string
```
</details>
