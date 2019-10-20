const print = console.log,
      fs = require('fs'),
      path = require('path'),
      yaml = require('js-yaml'),
      chalk = require('chalk'),
      handle = require('./../handle');

let load = yaml.safeLoad,
    read = fs.readFileSync,
    write = fs.writeFileSync,
    exists = fs.existsSync,
    resolve = path.resolve,
    join = path.join,
    file = 'debugger.yml',
    filedata = read(file, 'utf8'),
    response,
    log;

module.exports = function(id,responseType='str') {
  if(id || id === 0) {
    if(exists(file)) {
      log = load(filedata);
      if(log[id.toString()]) {
        switch(responseType) {
          case "o":
          case "obj":
          case "object":
            handle.object(log, id);
            break;
          case "t":
          case "type":
            handle.type(log, id);
            break;
          case "p":
          case "pre":
          case "prefix":
            handle.prefix(log, id);
            break;
          case "m":
          case "msg":
          case "message":
            handle.message(log, id);
            break;
          case "s":
          case "str":
          case "string":
            handle.string(log, id);
            break;
          default:
            return print('Error: invalid response type given to debugger function');
        }
      }
      else { return print('Error: invalid log ID given to debugger function') }
    }
    else { return print('Error: unable to load debugger.yml file') }
  }
  else { return print('Error: no log ID given to debugger function') }
};
