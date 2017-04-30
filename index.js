//import * as babylon from "babylon";
const babylon = require("babylon");
const {
    default: generate
} = require("babel-generator");
const {
    default: traverse
} = require("babel-traverse");
const template = require("babel-template");
const t = require("babel-types");

const code = `
mongoose.connect(env !== 'test' ? config.database : config.testDatabase, err => {
    if (err) {
        console.log('connect database error -->', err);
        process.exit(1);
    }
    if (env === 'test') {
        mongoose.connection.db.dropDatabase();
    }
    console.log('connect database success');
    // clear old auth record
    require('./model/auth').remove({}, () => {
        console.log('remove all old auth');
    });
    // create default group
    const Group = require('./model/group');

    Group.find({ }, (findErr, groups) => {
        if (groups.length === 0) {
            const defaultGroup = new Group({
                name: 'fiora',
                isDefault: true,
            });
            defaultGroup.save((saveErr) => {
                if (saveErr) {
                    console.log('save default group get error ->', saveErr);
                }
                console.log('create default group success');
            });
        }

        if (findErr) {
            console.log('find default group get error ->', findErr);
        }
    });
});


`;
console.log("before ")
console.log(code);

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



const arrCnt = 3;

function getRandomIndex() {
    return Math.floor(Math.random() * arrCnt);
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
for (let i = 0; i < arrCnt; i++) {
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


//console.log('program', ast.program)
console.log("after");
console.log(generate(ast, {}, code).code);
setInterval(function () {

}, 1000);
