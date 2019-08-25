class fetchs {

    _apiBase = 'https://swapi.co/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} , received ${res.status}`);
        }
        const body = await res.json();
        return body
    };

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return person;
    }

    getPlanet1() {
        fetch('https://swapi.co/api/people/2/')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                Console.log(data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

}

const testApi = new fetchs();

///////////
testApi.getPerson(1).then((obj) => {
    console.log(obj);
});
///////////


/////////// test catch err
console.log(testApi.getPerson(231).then((obj) => {
    console.log(obj);
}).catch((err) => {
    console.log(err);
    console.log('!!!!!!!!!за ошибки пошли другим путем!!!!!!!!');
}));
///////////


///////////
const res = testApi.getPlanet1(1);
console.log(res);
///////////

//

fetch('https://swapi.co/api/people/2/')
    .then((res) => {
        return res.json();
    }).then((text) => {
    console.log("json() - ", text);
});