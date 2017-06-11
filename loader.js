const messup=require("./index.js");
module.exports = function(source) {
  return messup(source,this.query);
};