import fs from "fs";
import path from "path";
import crypto from "crypto";
const data = [];

for (let index = 0; index < 1000000; index++) {
  data.push({
    index,
    id: crypto.randomUUID(),
    info: {
      title: "Titulo numero " + index,
      desc:
        "Big description, some letter and a bigger index for this text, like something as soon as " +
        index,
    },
  });
}

fs.writeFileSync(
  path.resolve("search-engine/expensive_data.json"),
  JSON.stringify(data),
  {
    encoding: "utf-8",
  }
);
