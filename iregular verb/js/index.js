let verb = {
    "word": {
        "1": {"1": "be", "2": "was", "3": "been", "4": "быть"},
        "2": {"1": "bear", "2": "bore", "3": "borne", "4": "выдержать"},
        '3': {"1": "beat", "2": "beat", "3": "beaten", "4": "быть"},
        '4': {"1": "become", "2": "became", "3": "become", "4": "становиться"},
        '5': {"1": "begin", "2": "began", "3": "begun", "4": "начинать"},
        '6': {"1": "bet", "2": "bet", "3": "bet", "4": "держать пари"},
        '7': {"1": "bite", "2": "bit", "3": "bitten", "4": "кусать"},
        '8': {"1": "bleed", "2": "bled", "3": "bled", "4": "кровоточить"},
        '9': {"1": "blow", "2": "blew", "3": "blown", "4": "дуть"},
        '10': {"1": "break", "2": "broke", "3": "broken", "4": "ломать"},
        '11': {"1": "bring", "2": "brought", "3": "brought", "4": "принести"},
        '12': {"1": "broadcast", "2": "broadcast", "3": "broadcast", "4": "широко вещать"},
        '13': {"1": "build", "2": "built", "3": "built", "4": "строить"},
        '14': {"1": "burn", "2": "burnt", "3": "burnt", "4": "гореть"},
        '15': {"1": "buy", "2": "bought", "3": "bought", "4": "купить"},
        '16': {"1": "catch", "2": "caught", "3": "caught", "4": "ловить"},
        '17': {"1": "choose", "2": "chose", "3": "chosen", "4": "выбирать"},
        '18': {"1": "come", "2": "came", "3": "come", "4": "приходить"},
        '19': {"1": "cost", "2": "cost", "3": "cost", "4": "стоить"},
        '20': {"1": "cut", "2": "cut", "3": "cut", "4": "резать"},
        '21': {"1": "deal", "2": "dealt", "3": "dealt", "4": "торговать"},
        '22': {"1": "dig", "2": "dug", "3": "dug", "4": "копать"},
        '23': {"1": "dive", "2": "dove", "3": "dived", "4": "нырять"},
        '24': {"1": "do", "2": "did", "3": "done", "4": "делать"},
        '25': {"1": "draw", "2": "drew", "3": "drawn", "4": "рисовать"},
        '26': {"1": "dream", "2": "dreamt", "3": "dreamt", "4": "видеть сны"},
        '27': {"1": "drink", "2": "drank", "3": "drunk", "4": "пить"},
        '28': {"1": "drive", "2": "drove", "3": "driven", "4": "водить"},
        '29': {"1": "dwell", "2": "dwelt", "3": "dwelt", "4": "обитать"},
        '30': {"1": "eat", "2": "ate", "3": "eaten", "4": "есть"},
        '31': {"1": "fall", "2": "fell", "3": "fallen", "4": "падать"},
        '32': {"1": "feed", "2": "fed", "3": "fed", "4": "кормить"},
        '33': {"1": "feel", "2": "felt", "3": "felt", "4": "чуствовать"},
        '34': {"1": "fight", "2": "fought", "3": "fought", "4": "бороться"},
        '35': {"1": "find", "2": "found", "3": "found", "4": "находить"},
        '36': {"1": "fit", "2": "fit", "3": "fit", "4": "подходить"},
        '37': {"1": "fly", "2": "flew", "3": "flown", "4": "летать"},
        '38': {"1": "forbid", "2": "forbade", "3": "forbidden", "4": "запретить"},
        '39': {"1": "forecast", "2": "forecast", "3": "forecast", "4": "придвидеть"},
        '40': {"1": "foretell", "2": "foretold", "3": "foretold", "4": "предсказать"},
        '41': {"1": "forget", "2": "forgot", "3": "forgotten", "4": "забыть"},
        '42': {"1": "forgive", "2": "forgave", "3": "forgiven", "4": "простить"},
        '43': {"1": "foresee", "2": "foresaw", "3": "foreseen", "4": "придвидеть"},
        '44': {"1": "freeze", "2": "froze", "3": "frozen", "4": "замерзать"},
        '45': {"1": "get", "2": "got", "3": "got", "4": "получать"},
        '46': {"1": "give", "2": "gave", "3": "given", "4": "давать"},
        '47': {"1": "go", "2": "went", "3": "gone", "4": "идти"},
        '48': {"1": "grow", "2": "grew", "3": "grown", "4": "расти"},
        '49': {"1": "hang", "2": "hung", "3": "hung", "4": "висеть"},
        '50': {"1": "have", "2": "had", "3": "had", "4": "иметь"},
        '51': {"1": "cut", "2": "cut", "3": "cut", "4": "принести"},
    }
};


const start = document.getElementById('button-start');
const verbIput1 = document.getElementById('verb-1');
const verbIput2 = document.getElementById('verb-2');
const verbIput3 = document.getElementById('verb-3');
const translateInput = document.getElementById('translate');
const check = document.getElementById('check');
let idVerb = 1;
let correct = 0;
let wrong = 0;
let lastId = Object.keys(verb.word).length;

start.addEventListener('click', function () {
    console.log(verb);
    console.log(verb.word);
    console.log(verb.word["1"]);
    console.log(verb.word["1"]['1']);
    addToInput();
    console.log(Object.keys(verb.word).length);
    console.log(Object.keys(verb.word[idVerb]).length);

});

check.addEventListener('click', function () {
    getInput();
    idVerb++;
    createResult();
    clearInput();
    nextQuestion();

});

function initProject() {
    let idVerb = 1;
    let correct = 0;
    let wrong = 0;
    let lastId = Object.keys(verb.word).length;

}

function addToInput() {
    if (lastId === idVerb) {
        console.log("finished test");
    }
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            const firstWord = verb.word[idVerb]['1'];
            verbIput1.value = firstWord;
            break;
        case 1:
            const secondWord = verb.word[idVerb]['2'];
            verbIput2.value = secondWord;
            break;
        case 2:
            const thirdWord = verb.word[idVerb]['3'];
            verbIput3.value = thirdWord;
            break;
        case 3:
            const translateWord = verb.word[idVerb]['4'];
            translateInput.value = translateWord;
            break;
    }
}

function getInput() {
    const present = verbIput1.value;
    const past = verbIput2.value;
    const future = verbIput3.value;
    const translate = translateInput.value;

    if (present !== verb.word[idVerb]['1'] || past !== verb.word[idVerb]['2']
        || future !== verb.word[idVerb]['3'] || translate !== verb.word[idVerb]['4']) {
        wrong++;
        addWrongOrCorrect(0);
    } else {
        correct++;
        addWrongOrCorrect(1);
    }

    if (present !== verb.word[idVerb]['1']) {
        console.log(present);
    }
    if (past !== verb.word[idVerb]['2']) {
        console.log(past);
    }
    if (future !== verb.word[idVerb]['3']) {
        console.log(future);
    }
    if (translate !== verb.word[idVerb]['4']) {
        console.log(translate);
    }
}

function addWrongOrCorrect(res) {
    res ? document.getElementById('correct_span').innerHTML = correct :
        document.getElementById('wrong_span').innerText = wrong;
}


function clearInput() {
    verbIput1.value = "";
    verbIput2.value = "";
    verbIput3.value = "";
    translateInput.value = "";
}

function nextQuestion() {
    addToInput();
}

function createResult() {
    const div = document.createElement("div");
    const repotr = document.getElementById('report');
    div.classList.add("reportQuestion");
    let arr = [];
    arr.push(verbIput1.value);
    arr.push(verbIput2.value);
    arr.push(verbIput3.value);
    arr.push(translateInput.value);

    for (let key in verb.word[idVerb]) {
        let word = verb.word[idVerb - 1][key];
        const p = document.createElement("p");
        p.innerHTML = arr[key - 1];
        if (word != arr[key - 1]) {
            console.log('не верно');
            p.innerHTML = arr[key - 1] + '(' + verb.word[idVerb - 1][key] + ')';
            p.classList.add("colorWordWrong");
        } else {
            p.classList.add("colorWordCorrect");
        }
        div.append(p);
    }
    repotr.append(div);
}
