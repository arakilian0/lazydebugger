# [Releases]
<details>
<summary>Alpha Releases</summary><br>

- [v0.3.2](#032)
</details>

## 0.3.2
<details>
<summary>Release Data</summary><br>

```yaml
release:
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
    function a logObject label.
  "
  schema:
    api:
    - index()
    settings:
      schema:
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
