const states = {
    chronology: {
        items: {
            1: {age: '2993', events: 'родился'},
            2: {age: '2000', events: 'родился'},
            3: {age: '2008', events: 'закончил школу'},
            4: {age: '2009', events: 'поступил в коледж'}
        }
    }
};

const sortObj = (obj) => {
    const items = {...obj.chronology.items};
    console.log(items);
    for (let key in items) {
        console.log("1 obj[key] - ", items[key]);
        console.log("1 obj[key] - ", items[key].age);
    }
};
console.log(sortObj(states));
console.log("---------------");

const sortObj1 = (obj) => {
    const data = {...obj.chronology.items};
    const sorted = {};
    Object
        .keys(data).sort( (a, b) => {
        console.log(data[a]);
        console.log(data[a].age);
        return data[a].age - data[b].age;
    })
        .forEach((key, index) => {
            console.log(key);
            console.log("data[key] - ",data[key]);
            sorted[index] = {...data[key]};
        });
    console.log("result sorted - ",sorted);
    return sorted;
};

console.log(sortObj1(states));

