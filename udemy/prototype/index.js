const animal = {
    say: function () {
        console.log(this.name, 'gose', this.voice);
    }
};

// 1  - не верный способ, потому что setPrototypeOf - warning грузит компилятор
const dog = {
    name: 'dog',
    voice: 'woof',
};
Object.setPrototypeOf(dog, animal);
dog.say();

// 2 - не правильный подход
const cat = Object.create(animal);
cat.name = 'cat';
cat.voice = 'meow';
cat.say();

// 3 -  правильное решение
function createAnimal(name, voice) {
    const anyAnimal = Object.create(animal);
    anyAnimal.name = name;
    anyAnimal.voice = voice;
    return anyAnimal;
}

const mouse = createAnimal('mouse', 'sqeuak');
mouse.say();

// 4 - упрощенный вариант
function Animals(name, voice) {
    this.name = name;
    this.voice = voice;
}
Animals.prototype.say = function () {
    console.log(this.name, 'gose', this.voice);
};
const cow = new Animals('cow', 'moo');
cow.say();