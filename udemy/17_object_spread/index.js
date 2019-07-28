const defaults = {
    host: 'localhost',
    dbname: 'blog',
    user: 'admin'
};

const opts = {
    user: 'oleksii',
    pass: '123'
};

//
const result = Object.assign({}, defaults, opts);
console.log(result);
//аналог 13 строки

const port = 8080;
const res = {
    ...defaults,
    ...opts,
    port,
    connect(){
        console.log('connect');
    }
};
console.log(res);
console.log(res.connect());
