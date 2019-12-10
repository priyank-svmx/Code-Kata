const { log } = require("./helpers");
const {
  TestRunner,
  RegxTest_WithObjects_ShapeVarAndConstructor,
  RegxTest_WithObjects_ShapeVariation,
  RegxTest_WithObjects_UniformShape,
  RegxTest_WithStringsArray,
  RegxTest_WithObjects_RandomStringValue,
  StrMatchTest_WithStringsArray,
  StrMatchTest_OnBigString
} = require("./Modules/modules");

log(
  "WORST CASE scenarios Time Consumption - Testing Regex vs Str.Match vs Manual Match",
  4
);
console.log("\n");

log("Str.Match on a Big-String", 4);
log(
  `Testing Str.Match on a Big-String 10K Average is ${TestRunner(
    StrMatchTest_OnBigString
  )} milliseconds`,
  2
);
console.log("\n");
log("Str.Match on an Array of Strings", 4);
log(
  `Testing Str.Match on a Array of Strings 10K Average is ${TestRunner(
    StrMatchTest_WithStringsArray
  )} milliseconds`,
  2
);

console.log("\n");
log("Regex.test on an Array of Strings", 4);
log(
  `Testing Regex.test on Array of Strings 10K Average is ${TestRunner(
    RegxTest_WithStringsArray
  )} milliseconds`,
  2
);

console.log("\n");
log("Regex.test on an Array of Objects(uniform shape) ", 4);
log(
  `Testing Regex.test on Array of Objects(uniform shape) 10K Average is ${TestRunner(
    RegxTest_WithObjects_UniformShape
  )} milliseconds`,
  2
);
console.log("\n");
log("Regex.test on an Array of Objects(shape variation) ", 4);
log(
  `Testing Regex.test on Array of Objects(shape variation) 10K Average is ${TestRunner(
    RegxTest_WithObjects_ShapeVariation
  )} milliseconds`,
  2
);

console.log("\n");
log("Regex.test on an Array of Objects(shape variation and constructor) ", 4);
log(
  `Testing Regex.test on Array of Objects(shape variation and constructor) 10K Average is ${TestRunner(
    RegxTest_WithObjects_ShapeVarAndConstructor
  )} milliseconds`,
  2
);

console.log("\n");
log(
  "Regex.test on an Array of Objects(Uniform shape and random string value) ",
  4
);
log(
  `Testing Regex.test on Array of Objects(Uniform shape and random string value) 10K Average is ${TestRunner(
    RegxTest_WithObjects_RandomStringValue
  )} milliseconds`,
  2
);
