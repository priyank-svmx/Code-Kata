const { log, inMB, MemoryInUse } = require("./helpers");
let toogleToComplex = false;

console.log("\n \n");
log("Representing Object as a JSON string, all stored within an Array", 4);
log("Memory Just at the begining", 1);
let memAtBegining = MemoryInUse();
log(inMB(memAtBegining), 2);
const property_name = "Aws90BXhzmk01_dfkQMIzl2002978#TLS";
const property_name_simple = "Aws90BXhzmk01";

let factory_to_use = null;
log("Memory Combusted - after creating a string constant: property_name ", 1);
log(inMB(MemoryInUse()), 2);

function objectInJSON_Factory() {
  let jsonString = "{";
  for (let j = 0; j < 15; j++) {
    jsonString += `"${property_name} ${j}":"${property_name} ${j}" ${
      j !== 14 ? "," : ""
    }`;
  }
  return jsonString + "}";
}
function simple_ObjectInJSON_Factory() {
  let jsonString = "{";
  for (let j = 0; j < 15; j++) {
    jsonString += `"${property_name_simple} ${j}":"${property_name_simple} ${j}" ${
      j !== 14 ? "," : ""
    }`;
  }
  return jsonString + "}";
}

factory_to_use = toogleToComplex
  ? objectInJSON_Factory
  : simple_ObjectInJSON_Factory;
const ObjectList = [factory_to_use()];

log("Memory Combusted - after object-factory and Array-to-list creation", 1);
log(inMB(MemoryInUse()), 2);

for (let i = 0; i < 20000; i++) {
  ObjectList.push(factory_to_use());
}
log("Memory Combusted - after creating 20K JSON-string-represented-objects", 1);
log(inMB(MemoryInUse()), 2);

let stringified = JSON.stringify(ObjectList);
log("Memory Combusted - after Stringyfying the Object List", 1);
log(inMB(MemoryInUse()), 2);
console.log("\n \n");

log("Comparison If - Data existed as a ONE STRING", 4);

const NewObjectListString = (() => {
  let str = "[";
  for (let j = 0; j < 20000; j++) {
    str += `${factory_to_use()},`;
  }
  return str + "]";
})();
log("Memory Combusted - after Creating Strigified Object List", 1);
log(inMB(MemoryInUse()), 2);
