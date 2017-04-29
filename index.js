//import * as babylon from "babylon";
const babylon=require("babylon");
const {default:generate}=require("babel-generator");
const {default:traverse}=require("babel-traverse");
const template=require("babel-template");
const t=require("babel-types");

const code = `function square(n) {
  n.a.b=n["a"]["b"];
}`;


const ast = babylon.parse(code);
traverse(ast, {
  enter(path) {
      if(path.type==="MemberExpression"&&path.node.property&&path.node.property.type==="Identifier"){
          console.log(path.node)
          const stringLiteral=t.stringLiteral(path.node.property.name);
          path.node.computed=true;
          console.log(stringLiteral);
          path.node.property= stringLiteral;
      }else if(path.type==="MemberExpression"&&path.node.property&&path.node.property.type==="StringLiteral"){
          console.log(2,path.node);
      }
//    console.log("path",path,path.type);
  }
});
console.log('program',ast.program)
console.log(generate(ast, {}, code).code);
setInterval(function(){
    
},1000);