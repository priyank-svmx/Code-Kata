const { log, inMB, MemoryInUse, MemoryInUse_MB } = require("./helpers");

const memORIGIN = MemoryInUse();
log(`Memory - ORIGIN - ${MemoryInUse_MB()}`, 2);

const CRAZY_PROPERTY_NAME_STRING = "crazypropertyNameString_zxncm78tlsPOQ_";
const containerArray = [];

log(
  `Memory - After creating container array and the constant - ${MemoryInUse_MB()}`,
  1
);

function ObjectFactory() {
  let SeedObject = "{";
  for (let i = 0; i < 15; i++) {
    SeedObject += `${CRAZY_PROPERTY_NAME_STRING}${i}:${CRAZY_PROPERTY_NAME_STRING}${i},`;
  }
  return SeedObject + "}";
}

log(`Memory - After creating ObjectFactory - ${MemoryInUse_MB()}`, 3);
let seedConatinerArray = "[";
for (let j = 0; j < 20000; j++) {
  seedConatinerArray += `${ObjectFactory()},`;
}
seedConatinerArray += "]";

log(
  `Memory - After creating 20k Objects - with 15 properties Each - ${MemoryInUse_MB()}`,
  1
);

setTimeout(function() {
  const Memory_Used_After_Creating_20k_Objects = MemoryInUse();
  log(
    `All Stringified-Effective Memory Utilized - After creating 20k Objects - with 15 properties Each -  ${inMB(
      Memory_Used_After_Creating_20k_Objects - memORIGIN
    )}`,
    4
  );
}, 2000);
