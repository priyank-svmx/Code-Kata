const { log, inMB, MemoryInUse_MB, MemoryInUse } = require("./helpers");
let toogleToComplex = false;
let beforeTimeStarts = MemoryInUse();
log("Representing Object as one Blob of JSON-String: Memory Consumption", 4);
log("Memory Combusted - Origin", 1);
log(MemoryInUse_MB(), 2);
const COMPLEX_PROPERTY_NAME = "Aws90BXhzmk01_dfkQMIzl2002978#TLS"; //"8Mkl_op980HJDK#$QnmJHglazx_Xz#TLS_PITxz";

function factory() {
  var objectString = "{";
  for (let i = 0; i < 15; i++) {
    objectString += `"${COMPLEX_PROPERTY_NAME + i}":"${COMPLEX_PROPERTY_NAME +
      i}",`;
  }
  objectString += "}";

  return objectString;
}

log("Total Memory Combusted - After creating the Object's JSON string", 1);
log(MemoryInUse_MB(), 2);
let MemorySofar = MemoryInUse();
var arr = "[";
for (var j = 0; j < 20000; j++) {
  arr += factory();
}
arr += "]";

let MemoryUsageAfterCreatingTheStringBlob = MemoryInUse();

log(
  "Total Memory Combusted - After creating JSON string - Array with 20K Objects",
  1
);
log(MemoryInUse_MB(), 2);

log("Memory Combusted - Delta- ONLY for the JSON String", 3);
log(inMB(MemoryUsageAfterCreatingTheStringBlob - MemorySofar), 3);

console.log("\n");
log(
  "Second Experiment:: Representing the Object as a valid JSON string - Creating a 20k list in an Array",
  4
);
const MemoryOrigin = MemoryInUse();

log("Memory Combusted - Origin Second Experiment", 1);
log(MemoryInUse_MB(), 2);
const Arx = [];
for (var j = 0; j < 20000; j++) {
  Arx.push(factory());
}
const MemorySoFar_SecondExperiment = MemoryInUse();
log("Memory Combusted - After population", 1);
log(MemoryInUse_MB(), 2);
log("Memory Combusted Delta is ", 3);
log(inMB(MemorySoFar_SecondExperiment - MemoryOrigin), 3);
