const { log, inMB, MemoryInUse, MemoryInUse_MB } = require("./helpers");

const getObject_0 = () =>
  JSON.parse(
    '{"userId":"1","id":"1","title":"delectus aut autem","completed":"false"}'
  );

const getObject_1 = () =>
  '{"userId":"1","id":"1","title":"delectus aut autem","completed":"false"}';

const getObject_2 = x => ({
  userId: 1,
  id: 1,
  title: `delectus aut autemdelectus aut autemdelectus aut autemdelectus aut autemdelectus
   aut autemdelectus aut autemdelectus aut autemdelectus aut autemdelectus ${x} aut autem`,
  completed: false
});

const getObject_3 = _ => {
  const random_prop_name = "AXVBDJooep098_#$jdkflAXN@@90_TLS";
  const Obj = [];
  for (let i = 0; i < 15; i++) {
    Obj.push([`${random_prop_name}${i}`, `${random_prop_name}${i}`]);
  }
  return Obj;
};

const start = MemoryInUse();
const containerArray = [];
for (let j = 0; j < 30000; j++) {
  containerArray.push(getObject_2());
}

//console.log(containerArray);

const stop = MemoryInUse();

const diff = stop - start;
//console.log(diff);
log(`Memory in use is ${inMB(diff)}`, 4);
