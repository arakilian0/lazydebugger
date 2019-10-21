const print = console.log,
      chalk = require('chalk'),
      consoleHandle = require('./lib/console'),
      fileHandle = require('./lib/file');

module.exports = function(log, id) {
  if(log.settings) {
		if(typeof log.settings === 'object') {
			if(log.settings.debug) {
				response = `${log[id.toString()].prefix}: ${log[id.toString()].message}`;
				consoleHandle(log, response);
				fileHandle(log, response);
			};
		}
		else { return print('Error: invalid options in settings object') };
  }
  else { return print('Error: unable to detect settings object') };
};
