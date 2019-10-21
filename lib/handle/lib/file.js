const print = console.log,
      fs = require('fs'),
      path = require('path'),
      mkdirp = require('mkdirp');

let write = fs.writeFile,
    exists = fs.existsSync,
    resolve = path.resolve,
    join = path.join,
    file,
    logger,
    date,
    boiler;

module.exports = function(log, response) {
	if(log && log.settings && log.settings.output && log.settings.output.path && log.settings.output.filename) {
		file = join(log.settings.output.path, log.settings.output.filename);
		if(exists(resolve(file))) {
			if(log.settings.output.file) {
				logger = fs.createWriteStream(file, { flags: 'a' });
				logger.write(response+'\n');
			}
		}
		else {
			mkdirp(log.settings.output.path, err => {
				if(err) { print(err) }
				else {
					date = new Date();
					boiler = `START - ${date}\n\n`;
					write(file, boiler, err => {
						if(err) throw err;
						logger = fs.createWriteStream(file, { flags: 'a' });
						logger.write(response+'\n');
					});
				}
			});
		}
	}
	else {
		if(log && log.settings && !log.settings.output) {
			print('Warning: no output settings configured');
		}
		else {
			if(typeof log.settings.output !== 'object') {
				print('Error: invalid option given to output settings');
			}
		}
	}
};
