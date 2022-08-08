import { TimeMeter } from "@pipeletteio/time-meter";
import fs from "fs";
import path from "path";
const meter = new TimeMeter();

const data = JSON.parse(
  fs.readFileSync(
    path.resolve("search-engine/expensive_data.json"),

    {
      encoding: "utf-8",
    }
  )
);

console.log(`Listo en: ${meter.next()}ms`);

console.log(data.length);
