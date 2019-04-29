const babelParser = require("@babel/parser");
const {
    default: generate
} = require("@babel/generator");
const {
    default: traverse
} = require("@babel/traverse");
const {default:template} = require("@babel/template");
const t = require("@babel/types");


function messUp(code, opt) {
    if (!opt || typeof opt !== "object") {
        opt = {};
    }

    const {
        headCnt = 3,
            es6 = false,
    } = opt;

    const ast = babelParser.parse(code, {
        sourceType: 'module'
    });
//    console.log(JSON.parse(JSON.stringify(ast)));
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const declarWord = es6 ? 'const' : 'var';

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
    //step1 stringify keys
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
    if (es6) {
        traverse(ast, {
            ObjectProperty: {
                enter(path) {
                    if (path.node.computed) {
                        return;
                    }
                    path.node.computed = true;
                    const key = path.node.key;
                    if (key.type === "StringLiteral") {} else if (key.type === "Identifier") {
                        key.type = "StringLiteral";
                        key.value = key.name;
                    }
                }
            },

        });
    }

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
                    let code = v.value;
                    code = code.replace(/\\/g, "\\\\");
                    code = code.replace(/\n/g, "\\n");
                    code = code.replace(/'/g, "\\'");
                    const char = alphabet[i % alphabet.length];
                    const name = path.scope.generateUidIdentifier(char).name;
                    v.name = name;
                    decentMap[name] = name;
                    tpl += `${declarWord} ${name}='${code}';`;
                });
                path.unshiftContainer('body', template(tpl)({}));

                path.node.decentMap = decentMap;
            }
        },
    });
    //step3 add declaration
    const functionDeclarationAndExpression = {
        enter(path) {
            let tpl = '';
            shuffle(headerArr);
            const decentMap = {}
            headerArr.forEach(function (v, i) {
                const char = alphabet[i % alphabet.length];
                const name = path.scope.generateUidIdentifier(char).name;
                tpl += `${declarWord} ${name}=${v.name};`;
                decentMap[v.name] = name;
            });
            path.get("body").unshiftContainer('body', template(tpl)({}));
            path.node.decentMap = decentMap;

        }
    };
    traverse(ast, {
        FunctionDeclaration: functionDeclarationAndExpression,
        FunctionExpression: functionDeclarationAndExpression
    });

    //step4 handle string

    let skipCnt = headCnt;
    traverse(ast, {
        StringLiteral: {
            enter(path) {
                if (path.parent.type === "ObjectProperty" && path.key === 'key' && !es6) {
                    return;
                }
                if (path.parent.type === "ImportDeclaration") {//not in import
                    return;
                }
                if (path.parent.type === "CallExpression" && path.parent.callee.name === 'require') {//not in require
                    return;
                }
                const parent = path.findParent((path) => path.isFunctionDeclaration() || path.isProgram())
                const text = path.node.value;


                if (!text) {
                    return;
                }

                if (skipCnt) {
                    skipCnt--;
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
                path.replaceWith(template("(" + arr.join("+") + ")")({}));
            }
        },

    });

    return generate(ast, {}, code).code;
}
module.exports = messUp;