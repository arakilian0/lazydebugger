const print = console.log,
      chalk = require('chalk');

let response;

module.exports = function(log, response) {
  if(log.settings.output.bold) { response = chalk.bold(response) };
  switch(log.settings.output.color) {
    case "black":
      if(log.settings.output.bold) { response = chalk.black.bold(response) }
      else { response = chalk.black(response) };
      break;
    case "red":
      if(log.settings.output.bold) { response = chalk.red.bold(response) }
      else { response = chalk.red(response) };
      break;
    case "green":
      if(log.settings.output.bold) { response = chalk.green.bold(response) }
      else { response = chalk.green(response) };
      break;
    case "yellow":
      if(log.settings.output.bold) { response = chalk.yellow.bold(response) }
      else { response = chalk.yellow(response) };
      break;
    case "blue":
      if(log.settings.output.bold) { response = chalk.blue.bold(response) }
      else { response = chalk.blue(response) };
      break;
    case "magenta":
      if(log.settings.output.bold) { response = chalk.magenta.bold(response) }
      else { response = chalk.magenta(response) };
      break;
    case "cyan":
      if(log.settings.output.bold) { response = chalk.cyan.bold(response) }
      else { response = chalk.cyan(response) };
      break;
    case "white":
      if(log.settings.output.bold) { response = chalk.white.bold(response) }
      else { response = chalk.white(response) };
      break;
    case "gray":
      if(log.settings.output.bold) { response = chalk.gray.bold(response) }
      else { response = chalk.gray(response) };
      break;
    default:
      print('Error: invalid color option in settings object');
  }
  // // final check
  if(log.settings.output.console) { print(response) };
};
