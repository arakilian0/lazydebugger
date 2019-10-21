// const print = console.log,
//       fs = require('fs'),
//       path = require('path'),
//       yaml = require('js-yaml'),
//       chalk = require('chalk'),
//       mkdirp = require('mkdirp');
//
// let load = yaml.safeLoad,
//     read = fs.readFileSync,
//     resolve = path.resolve,
//     join = path.join,
//     write = fs.writeFile,
//     file = 'debugger.yml',
//     filedata = read(file, 'utf8'),
//     logfile = 'main.log',
//     boiler,
//     date,
//     logger;
//
// module.exports = function() {
//   log = load(filedata);
//   if(log) {
//     if(log.settings) {
//       if(log.settings.debug) {
//         if(log.settings.output.file && log.settings.output.path) {
//           if(log.settings.output.filename) { logfile = log.settings.output.filename; };
//           mkdirp(log.settings.output.path, err => {
//             if(err) { print(err); }
//             else {
//               if(log.settings.output.include.start) {
//                 date = new Date();
//                 boiler = `START - ${date}\n\n`;
//               }
//               write(join(log.settings.output.path, log.settings.output.filename), boiler, err => {
//                 if(err) throw err;
//                 // logger = fs.createWriteStream(join(log.settings.output.path, log.settings.output.filename),{ flags: 'a' });
//                 // logger.write('');
//               });
//             }
//           });
//         }
//       }
//     }
//     else { print('Error: unable to detect settings object') }
//   }
//   else { print('Error: unable to load debugger.yml file') }
// };
