const { log } = require("./helpers");
const {
  TestRunner,
  RegxTest_WithObjects_ShapeVarAndConstructor,
  RegxTest_WithObjects_ShapeVariation,
  RegxTest_WithObjects_UniformShape,
  RegxTest_WithStringsArray,
  StrMatchTest_WithStringsArray,
  StrMatchTest_OnBigString
} = require("./Modules/modules");

log("Testing Regex vs Str.Match vs Manual Match", 4);
console.log("\n");

log("Str.Match on a Big-String", 4);
log(
  `Testing Str.Match on a Big-String 10k-times-Average is ${TestRunner(
    StrMatchTest_OnBigString
  )} milliseconds`,
  2
);
console.log("\n");
log("Str.Match on an Array of Strings", 4);
log(
  `Testing Str.Match on a Array of Strings 10k-times-Average is ${TestRunner(
    StrMatchTest_WithStringsArray
  )} milliseconds`,
  2
);

console.log("\n");
log("Regex.test on an Array of Strings", 4);
log(
  `Testing Regex.test on Array of Strings 10k-times-Average is ${TestRunner(
    RegxTest_WithStringsArray
  )} milliseconds`,
  2
);

console.log("\n");
log("Regex.test on an Array of Objects(uniform shape) ", 4);
log(
  `Testing Regex.test on Array of Objects(uniform shape) 10k-times-Average is ${TestRunner(
    RegxTest_WithObjects_UniformShape
  )} milliseconds`,
  2
);
console.log("\n");
log("Regex.test on an Array of Objects(shape variation) ", 4);
log(
  `Testing Regex.test on Array of Objects(shape variation) 10k-times-Average is ${TestRunner(
    RegxTest_WithObjects_ShapeVariation
  )} milliseconds`,
  2
);

console.log("\n");
log("Regex.test on an Array of Objects(shape variation and constructor) ", 4);
log(
  `Testing Regex.test on Array of Objects(shape variation and constructor) 10k-times-Average is ${TestRunner(
    RegxTest_WithObjects_ShapeVarAndConstructor
  )} milliseconds`,
  2
);
