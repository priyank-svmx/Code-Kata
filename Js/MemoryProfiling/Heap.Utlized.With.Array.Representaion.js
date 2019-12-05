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
console.log("\n \n");
log("ARRAY Representation  --", 2);
log("heap used before even starting anything");
log(inMB(beforeTimeStarts), 1);
const COMPLEX_PROPERTY_NAME = "8n_xmklsdl@JLP129039_fmzXDKP";
log(
  chalk.greenBright("heap used after creating a constant COMPLEX_PROPERTY_NAME")
);
log(inMB(process.memoryUsage().heapUsed), 1);

function ArrayRepresentationProperty(i) {
  return [COMPLEX_PROPERTY_NAME + i, COMPLEX_PROPERTY_NAME + i];
}
function ArrayRepresentation_Object() {
  var arr = [ArrayRepresentationProperty(0)];
  for (let i = 1; i < 15; i++) {
    arr.push(ArrayRepresentationProperty(i));
  }
  return arr;
}
log(chalk.greenBright("heap used after creating the Required functions"));
log(inMB(process.memoryUsage().heapUsed), 1);

var arr10000 = [ArrayRepresentation_Object()];
for (let j = 0; j < 20000; j++) {
  arr10000.push(ArrayRepresentation_Object());
}
log(
  chalk.greenBright(
    "heap used after creating the 20,000 Array represented objects"
  )
);
log(inMB(process.memoryUsage().heapUsed), 1);

let used = process.memoryUsage().heapUsed - beforeTimeStarts;
log("Actual Heap memory utilized when using Array  represented objects", 2);
log(inMB(used), 2);
