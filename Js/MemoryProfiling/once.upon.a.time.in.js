const chalk = require("chalk");
const MuchBeforeTime = process.memoryUsage().heapUsed;
console.log("Size of the `used heap` at the beginning of the Universe");
console.log(process.memoryUsage().heapUsed);
const COMPLEX_PROPERTY_NAME = "8n_xmklsdl@JLP129039_fmzXDKP";
console.log(
  "Size of the `used heap` after adding a string constant - COMPLEX_PROPERTY_NAME in the Universe"
);
console.log(process.memoryUsage().heapUsed);

function CreateObjectWith_20_properties_with_COMPLEX_Property_Names() {
  if (
    !(
      this instanceof CreateObjectWith_20_properties_with_COMPLEX_Property_Names
    )
  ) {
    return new CreateObjectWith_20_properties_with_COMPLEX_Property_Names();
  }
  for (var i = 0; i < 15; i++) {
    this[COMPLEX_PROPERTY_NAME + i] = COMPLEX_PROPERTY_NAME + i;
  }
}

console.log(
  "Size of the `used heap` after adding a Function CreateObjectWith_20_properties() in the Universe"
);
console.log(process.memoryUsage().heapUsed);

// function CreateObjectWith_2_properties() {
//   if (!(this instanceof CreateObjectWith_2_properties)) {
//     return new CreateObjectWith_2_properties();
//   }
//   this["property 1"] = 23;
//   this["property 2"] = 24;
// }

// console.log("heap used after creating a function object ::::");
// console.log(process.memoryUsage().heapUsed);

let newArr = [CreateObjectWith_20_properties_with_COMPLEX_Property_Names()];
console.log("heap used after Initializing the array `newArr` ::::");
console.log(process.memoryUsage().heapUsed);

for (var i = 0; i < 20000; i++) {
  newArr.push(CreateObjectWith_20_properties_with_COMPLEX_Property_Names());
}

console.log(
  "heap used after POPULATING  the array `newArr` with 20,000 objects with complex property names ::::"
);
console.log(process.memoryUsage().heapUsed);

// const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
// arr.reverse();
let BytesUsed = process.memoryUsage().heapUsed - MuchBeforeTime;
console.log("The actual Bytes used are ::::");
console.log(BytesUsed);
const used = BytesUsed / 1024 / 1024;
console.log(
  chalk.yellow.bold(
    `The script uses approximately ${Math.round(used * 100) / 100} MB`
  )
);
