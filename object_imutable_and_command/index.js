const chronology = {
    items: {
        0: {age: '2993', events: 'родился'},
        1: {age: '2000', events: 'поступил в школу'},
        2: {age: '2008', events: 'закончил школу'},
        3: {age: '2009', events: 'поступил в коледж'},
        4: {age: '1000', events: 'тест'}
    }
};

const ObjectValue = () => {
    const obj = {...chronology.items};
    console.log("start - Object.values() - ", obj);
    const newArray = [];
    for (let item in obj) {
        newArray[item] = Object.values(obj[item]);
    }
    console.log("end - Object.values() - ", newArray);
};

const ObjectKeys = () => {
    const newArr = {...chronology.items};
    console.log("start   Object.keys() - ", newArr);
    const newArray = Object.keys(newArr).map((el) => newArr[el]);
    console.log("end  Object.keys() - ", newArray);
};

const ObjectEntries = () => {
    const obj = {...chronology.items};
    const newVariable = Object.entries(obj);
    console.log("Object.entries - ", newVariable);

    const newArray =
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key}: ${Object.entries(value)}`);

    });
};

const ObjectAssign = () => {
    const obj = {...chronology.items};
    const newObj = Object.assign({}, obj);
    console.log("создает дублика обьекта");
    console.log("const newObj = ObjectAssign({}, obj); - ", newObj);
};

ObjectValue();
console.log("---------------------------------");
ObjectKeys();
console.log("---------------------------------");
ObjectEntries();
console.log("---------------------------------");
ObjectAssign();
console.log("---------------------------------");

/*///
const sort = () => {
    const newArr = {...chronology.items};
    const newArray = Object.keys(newArr).map((el) => newArr[el]);
    console.log("newArr - ", newArray);
    const newObject = insertionSort(newArray);
    console.log("новый = ", newObject);
    console.log("старый = ", chronology.items);
};

const createNewObject = (obj) => {
    const value = Object.values(obj);
    console.log("CNO = ", value);
    let newArray = [];
    for (let item in obj) {
        newArray[item] = Object.values(obj[item]);
    }
    let filtered = newArray.filter(function (el) {
        return el != null;
    });
    return filtered;
};

const objVal = createNewObject({...chronology.items});
console.log(objVal);

const insertionSort = (arr) => {
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let tmp = arr[i].age;
        let tmpEvents = arr[i].events;
        let index = i - 1;
        while (index >= 0 && arr[index].age > tmp) {
            arr[index + 1].age = arr[index].age;
            arr[index + 1].events = arr[index].events;
            index--;
        }
        arr[index + 1].age = tmp;
        arr[index + 1].events = tmpEvents;
    }
    return arr;
};*/


//sort();
