const messUp = require("./index.js");
const fs = require("fs");

const code = fs.readFileSync("./input.js").toString();
console.log("before:");
console.log(code);
console.log("after:");
console.log(messUp(code, {
    headCnt: 13
}));
