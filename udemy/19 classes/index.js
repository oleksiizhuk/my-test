// пример подхода с помощью  прототипов
function Animals(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animals.prototype.say = function () {
    console.log(this.name, 'gose', this.voice);
};
const cow = new Animals('cow', 'moo');
cow.say();

// классы в js это синтаксический сахар
//пример подхода с помощью  классов
class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(this.name, 'gose', this.voice);
    }
}

// duck -> Bird.prototype
// -> Animal.prototype
// -> Object.prototype
// -> null
class Bird extends Animal {
    constructor(name, voice, canFly) {
        super(name, voice);
        super.say();
        this.canFly = canFly;
    }

    canFlying() {
        this.canFly ? console.log('yes') : console.log('NO')
    }
    say() {
        console.log('переопределение методов')
    }
}

const duck = new Bird('duck', 'quack', true);
duck.say();
duck.canFlying();