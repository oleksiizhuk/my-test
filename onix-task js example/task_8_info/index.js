const div = document.getElementById('button');


const lol = () => {
    console.log('lol');
};

const smile = () => {
    console.log('smile :)');
};


div.addEventListener('click', lol, false);
div.addEventListener('click', lol, true);


div.removeEventListener('click', lol, true);
