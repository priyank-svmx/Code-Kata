const chalk = require("chalk");
const beforeTimeStarts = process.memoryUsage().heapUsed;
function log(str, red) {
  if (red === undefined) {
    console.log(chalk.greenBright(str));
  } else if (red === 1) {
    console.log(chalk.redBright(str));
  } else {
    console.log(chalk.yellowBright(str));
  }
}

const inMB = x => Math.round((x / 1024 / 1024) * 100) / 100 + " MB";

log("heap used before even starting anything");
log(inMB(beforeTimeStarts), 1);
const COMPLEX_PROPERTY_NAME = "8n_xmklsdl@JLP129039_fmzXDKP";
log(
  chalk.greenBright("heap used after creating a constant COMPLEX_PROPERTY_NAME")
);
log(inMB(process.memoryUsage().heapUsed), 1);

var objectString = "{";
for (let i = 0; i < 15; i++) {
  objectString += `${COMPLEX_PROPERTY_NAME + i}:${COMPLEX_PROPERTY_NAME + i},`;
}
objectString += "}";

log("heap used after creating the stringified object");
log(inMB(process.memoryUsage().heapUsed), 1);

var arr = "[";
for (var j = 0; j < 20000; j++) {
  arr += `${objectString},`;
}
arr += "]";

let BytesUsed = process.memoryUsage().heapUsed - beforeTimeStarts;
log("ACTUAL heap utilized for stringified array of 20,000 objects");
log(inMB(BytesUsed), 1);
const used = BytesUsed / 1024 / 1024;
log(`The script uses approximately ${Math.round(used * 100) / 100} MB`, 2);
console.log("\n \n");
