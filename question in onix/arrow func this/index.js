const greeter = {
    greet: function (name) {
        console.log('hello ', name);
    },

    greetAll: function (names) {
        names.forEach((names) => {
            this.greet(names);
        });
    }
};

const name = ['Bob', 'Mark', 'Pete'];

greeter.greetAll(name);

const greeter1 = {
    greet: function (name) {
        console.log('hello ', name);
    },

    greetAll: function (names) {
        names.forEach(function (names) {
            this.greet(names);
        });
    }
};


greeter1.greetAll(name);