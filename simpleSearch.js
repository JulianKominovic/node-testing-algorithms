import { TimeMeter } from "@pipeletteio/time-meter";
import fs from "fs";
import path from "path";
const meter = new TimeMeter();
let data = [];
data = JSON.parse(
  fs.readFileSync(
    path.resolve("search-engine/expensive_data.json"),

    {
      encoding: "utf-8",
    }
  )
);

console.log(`Listo en: ${meter.next()}ms`);

const testeos = [];

Array.from(Array(10).keys()).forEach((_, it) => {
  data.filter((item) => {
    return item.index === Math.random() * 1000000;
  });

  testeos.push({ it, time: meter.next() });
});
console.log(testeos);
console.log({
  total: testeos.reduce((prev, curr) => (curr = prev + curr.time), 0),
  mean:
    testeos.reduce((prev, curr) => (curr = prev + curr.time), 0) /
    testeos.length,
  max: testeos.sort((a, b) => b.time - a.time)[0],
  min: testeos.sort((a, b) => a.time - b.time)[0],
});
