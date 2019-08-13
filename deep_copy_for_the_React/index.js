makeCopy = (obj) => {
    let objCopy;

    if (typeof obj !== "object") {
        return obj;
    }
    if (typeof obj === 'object') {
        const res = new obj.constructor();
        for (let key in obj) {
            res[key] = this.makeCopy(obj[key]);
        }
        return res;
    }
    if (Array.isArray(obj)) {
        const res = new obj.constructor(obj.length);
        for (let i = 0; i < obj.length; i++) {
            res[i] = this.makeCopy(obj[i]);
        }
        return res;
    }
    for (let key in obj) {
        objCopy[key] =  this.makeCopy(obj[key]);
    }
    return objCopy;
};
