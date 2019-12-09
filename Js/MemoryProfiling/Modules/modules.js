function testRunner(testedFunction) {
  let AverageValue = 0;
  let i = 0;
  while (i < 10000) {
    AverageValue += testedFunction();

    i++;
  }
  return AverageValue / 10000;
}

function CreateTestTarget() {
  let seed = "[";
  for (let j = 0; j < 30000; j++) {
    seed += `JavaScript${j}`;
  }
  return seed + "]";
}

function StrMatchOnBigString() {
  let TestStr = CreateTestTarget();
  let timeOrigin = Date.now();
  let matchedArray = TestStr.match(/JavaScript/g);
  let timeAfterMatch = Date.now();

  return timeAfterMatch - timeOrigin;
}

function MatchStringsKeptInAnArray() {
  let TargetArr = [];
  (function PopulateArray() {
    let i = 0;
    while (i < 30000) {
      if (i % 2 === 0) {
        TargetArr.push("JavaScript");
      } else {
        TargetArr.push("Scrappy Coco");
      }
      i++;
    }
  })();
  let startTime_Before_Measuring_Array_Approach = Date.now();
  let testResultArray = [];
  for (let j = 0; j < 30000; j++) {
    if (TargetArr[j].match(/JavaScript/g)) {
      testResultArray.push(true);
    } else {
      testResultArray.push(false);
    }
  }
  let stopTime = Date.now();
  return stopTime - startTime_Before_Measuring_Array_Approach;
}

function RegexTest_OnArrayOfStrings() {
  //log("regex.test on an Array of strings", 4);
  let TargetArr = [];
  (function PopulateArray() {
    let i = 0;
    while (i < 30000) {
      if (i % 2 === 0) {
        TargetArr.push("JavaScript");
      } else {
        TargetArr.push("Scrappy Coco");
      }
      i++;
    }
  })();
  let startTime_ = Date.now();
  let testResultAccumalator = [];
  for (let j = 0; j < 30000; j++) {
    if (/JavaScript/.test(TargetArr[j])) {
      testResultAccumalator.push(true);
    } else {
      testResultAccumalator.push(false);
    }
  }
  let stopTime_ = Date.now();
  return stopTime_ - startTime_;
}

function RegexTest_OnObjectsArray() {
  //log("regex.test on an Array of Objects", 4);
  let TargetArr = [];
  (function() {
    let i = 0;
    while (i < 30000) {
      TargetArr.push({
        propertyToMatch: "JavaScript"
      });
      i++;
    }
  })();

  let startTime_ = Date.now();
  let testResultAccum = [];
  for (let j = 0; j < 30000; j++) {
    if (/JavaScript/.test(TargetArr[j]["propertyToMatch"])) {
      testResultAccum.push(true);
    } else {
      testResultAccum.push(false);
    }
  }
  let stopTime_ = Date.now();
  return stopTime_ - startTime_;
}

function RegexTest_ObjectsArray_With_Object_ShapeVariation() {
  //   log(
  //     "regex.test on an Array of Objects - with a variation in the property value",
  //     4
  //   );
  let TargetArr = [];
  (function() {
    let i = 0;
    while (i < 30000) {
      if (i % 2 === 0) {
        TargetArr.push({
          propertyToMatch: "JavaScript"
        });
      } else {
        TargetArr.push({
          propertyToMatch: "Scrappy Coco",
          crazyKai: "0"
        });
      }

      i++;
    }
  })();

  let startTime_ = Date.now();
  let testResultAccum = [];
  for (let j = 0; j < 30000; j++) {
    if (/JavaScript/.test(TargetArr[j]["propertyToMatch"])) {
      testResultAccum.push(true);
    } else {
      testResultAccum.push(false);
    }
  }
  let stopTime_ = Date.now();
  return stopTime_ - startTime_;
}

function RegexTest_ObjectsArray_ShapeVariation_and_Using_ObjectConstructor() {
  // log(
  //     "regex.test on an Array of Objects - property Value variation && using a constructor for Object creation",
  //     4
  //   );
  let TargetArr = [];
  function ObjectCreator(i) {
    if (i % 2 === 0) {
      this["propertyToMatch"] = "JavaScript";
    } else {
      this["propertyToMatch"] = "Scrappy Coco";
      this["crazy kai"] = 0;
    }
  }

  (function() {
    let i = 0;
    while (i < 30000) {
      TargetArr.push(new ObjectCreator(i));

      i++;
    }
  })();

  let startTime_ = Date.now();
  let testResultAccum = [];
  for (let j = 0; j < 30000; j++) {
    if (/JavaScript/.test(TargetArr[j]["propertyToMatch"])) {
      testResultAccum.push(true);
    } else {
      testResultAccum.push(false);
    }
  }
  let stopTime_ = Date.now();
  return stopTime_ - startTime_;
}

module.exports = {
  TestRunner: testRunner,
  RegxTest_WithObjects_ShapeVarAndConstructor: RegexTest_ObjectsArray_ShapeVariation_and_Using_ObjectConstructor,
  RegxTest_WithObjects_ShapeVariation: RegexTest_ObjectsArray_With_Object_ShapeVariation,
  RegxTest_WithObjects_UniformShape: RegexTest_OnObjectsArray,
  RegxTest_WithStringsArray: RegexTest_OnArrayOfStrings,
  StrMatchTest_WithStringsArray: MatchStringsKeptInAnArray,
  StrMatchTest_OnBigString: StrMatchOnBigString
};
