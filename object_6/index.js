const user = {
    name: 'aleks',
    age: '26',
    staus: 'user'
};

const admin = {
    name: 'admin',
    age: '',
    status: 'admin'
};

const userAdmin = Object.assign({}, user, admin);
const userAdmin1 = Object.assign({}, admin, user);

console.log(userAdmin);
console.log(userAdmin1);

const spreadExample = {...user, ...admin};
const spreadExample1 = {...admin, ...user};

console.log(spreadExample);
console.log(spreadExample1);


const a = {
    a: 1,
    b: ['Aleks'],
    c: new Date(),
    d: {
        a: 2,
        b: 3
    },
    g:{
        a: 1,
        b: 2
    },
    f:{
        a: 5,
        b: 10
    }
};

const {d} = a;
const g = {...a.g};
const {f} = {...a};

console.log('const {d} = a; d - ',d);
console.log("a.d == d - " ,a.d == d);
console.log("a.d === d - ",a.d === d);

console.log('const g = {...a.g};   g - ',g);
console.log("a.g === g - ", a.g === g);
console.log("a === g - ", a === g);

console.log('const {f} = {...a};  f - ',f);
console.log("a.f === f- ", a.f === f);
console.log("a === f - ", a === f);


function makeCopy(obj) {
    let objCopy;

    if (typeof obj !== "object") {
        return obj;
    }
    if (typeof obj === 'object') {
        const res = new obj.constructor();
        for (let key in obj) {
            res[key] = makeCopy(obj[key]);
        }
        return res;
    }
    if (Array.isArray(obj)) {
        const res = new obj.constructor(val.length);
        for (let i = 0; i < obj.length; i++) {
            res[i] = makeCopy(obj[i]);
        }
        return res;
    }
    for (let key in obj) {
        objCopy[key] = copy(a[key]);
    }
    return objCopy;
}

const copyOnj = makeCopy(a);

console.log(copyOnj);
console.log(copyOnj == a);
console.log(copyOnj === a);
