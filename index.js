const babylon = require("babylon");
const {
    default: generate
} = require("babel-generator");
const {
    default: traverse
} = require("babel-traverse");
const template = require("babel-template");
const t = require("babel-types");

function messUp(code, opt) {
    if (!opt || typeof opt !== "object") {
        opt = {};
    }

    const {
        headCnt = 3,
    } = opt;

    const ast = babylon.parse(code);
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function getRandomIndex() {
        return Math.floor(Math.random() * headCnt);
    }
    const headerArr = [];
    //step1 stringify key
    traverse(ast, {
        MemberExpression: {
            enter(path) {

                if (t.isIdentifier(path.node.property) && !path.node.computed) {
                    path.set("computed", true);
                    path.get("property").replaceWith(t.stringLiteral(path.node.property.name))
                } else if (t.isMemberExpression(path) && path.node.property && path.node.property.type === "StringLiteral") {

                }
            }
        }
    });
    //step2 get charset
    const charset = {};

    function addString(str) {
        str.split("").forEach(function (v) {
            charset[v] = true;
        });
    }
    traverse(ast, {
        StringLiteral(path) {
            addString(path.node.value);
        }
    });
    let charsetArr = [];
    for (const i in charset) {
        charsetArr.push(i);
    }
    for (let i = 0; i < headCnt; i++) {
        headerArr.push({
            value: shuffle(charsetArr).join("")
        });
    }
    traverse(ast, {
        Program: {
            enter(path) {
                let tpl = '';
                const decentMap = {}
                headerArr.forEach(function (v, i) {

                    v.value = v.value.replace(/\\/g, "\\\\");
                    v.value = v.value.replace(/'/g, "\\'");
                    const char = alphabet[i % alphabet.length];
                    const name = path.scope.generateUidIdentifier(char).name;
                    v.name = name;
                    decentMap[name] = name;
                    tpl += `var ${name}='${v.value}';`;
                });
                path.unshiftContainer('body', template(tpl)({}));
                path.node.decentMap = decentMap;
            }
        },
    });
    //step3 add declaration
    traverse(ast, {
        FunctionDeclaration: {
            enter(path) {
                let tpl = '';
                shuffle(headerArr);
                const decentMap = {}
                headerArr.forEach(function (v, i) {
                    const char = alphabet[i % alphabet.length];
                    const name = path.scope.generateUidIdentifier(char).name;
                    tpl += `var ${name}=${v.name};`;
                    decentMap[v.name] = name;
                });
                path.get("body").unshiftContainer('body', template(tpl)({}));
                path.node.decentMap = decentMap;

            }
        },

    });

    //step4 handle string
    traverse(ast, {
        StringLiteral: {
            enter(path) {
                const parent = path.findParent((path) => path.isFunctionDeclaration() || path.isProgram())
                const text = path.node.value;
                if (!text) {
                    return;
                }
                if (parent.isProgram() && headerArr.some((head) => text === head.value)) {

                    return;

                }
                const decentMap = parent.node.decentMap;

                const arr = text.split("").map(function (ch) {
                    const randomIndex = getRandomIndex();
                    let name = headerArr[randomIndex].name;
                    name = decentMap[name];
                    let index = headerArr[randomIndex].value.indexOf(ch);
                    return `${name}[${index}]`;
                });
                path.replaceWith(template(arr.join("+"))({}));
            }
        },

    });

    return generate(ast, {}, code).code;
}
module.exports = messUp;
