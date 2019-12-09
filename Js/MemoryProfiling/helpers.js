const chalk = require("chalk");
const collection = {
  log: function(str, color) {
    if (color === 1) {
      console.log(chalk.greenBright(str));
    } else if (color === 2) {
      console.log(chalk.redBright(str));
    } else if (color === 3) {
      console.log(chalk.yellowBright(str));
    } else if (color === 4) {
      console.log(chalk.yellowBright.inverse(str));
    }
  },

  inMB: x => Math.round((x / 1024 / 1024) * 100) / 100 + " MB",

  MemoryInUse: _ => process.memoryUsage().heapUsed,

  MemoryInUse_MB: _ => collection.inMB(collection.MemoryInUse())
};
module.exports = collection;
