//:::::::Demo for creating a Promise::::::::::
/*const promise = new Promise(function(resolve, reject) {
    let value = doSomething();
    if(thingWorked) {
        resolve(value);
    } else if(somethingWentWrong) {
        reject();
    }
}).then(function(value) {
    //succees!
    return nextThing(value);
}).catch(rejectFunction);*/

//::::::::::Creating a Promise::::::::::::::::

const myPromise = new Promise(function(resolve, reject){
    let developer = 'JavaScript Developer';
    if(developer === 'JavaScript Developer') {
        resolve(developer);
    } else if(developer !== 'JavaScript Developer') {
        let message = 'Please, be a JavaScript Developer first.';
        reject(message);
    }
});

myPromise.then(function(developer) {
    console.log(`Now you are a ${developer}.`);
}).catch(function(message) {
    console.log(message);
});

//:::More examples:::

//Successful Request
/*const mySecondPromise = new Promise(function(resolve, reject) {
    let name = 'Ajgar Hossain';
    
    if(name !== 'Ajgar Hossain') {
        let message = 'Please choose the correct name';
        reject(message);
    }
    resolve(name);
});

mySecondPromise
    .then(function(name) {
    console.log(`My name is ${name}!`);
    })
    .catch(function(message) {
    console.log(message);
    });*/

//Failed Request
const mySecondPromise = new Promise(function(resolve, reject) {
    let name = 'Jewel';
    
    if(name !== 'Ajgar Hossain') {
        let message = 'Please choose the correct name';
        reject(message);
    }
    resolve(name);
});

mySecondPromise
    .then(function(name) {
    console.log(`My name is ${name}!`);
    })
    .catch(function(message) {
    console.log(message);
    });
    

//:::another example:::
const myThirdPromise = new Promise((resolve, reject) => {
    const usingTech = 'Arrow function';
    if(usingTech !== 'Arrow function') {
        const message = 'Please use Arrow function';
        reject(message);
    }
    resolve(usingTech);
});

myThirdPromise
    .then((usingTech) => {
        console.log(`Thank you for using ${usingTech}!`);
    })
    .catch((message) => {
        console.log(message);
    })

//:::another example:::
const myFourthPromise = new Promise((resolve, reject) => {
    const person = {
        name: 'Mohammad Karim',
        age: 26
    };

    if(person.age !== 26) {
        const error = `It's not ${person.name}!`;
        reject(error);
    }
    resolve(person);
});

myFourthPromise
    .then((person) => {
        console.log(`This is ${person.name}!`);
    })
    .catch((error) => {
        console.log(error);        
    });


//:::another example:::
const myFifthPromise = new Promise((resolve,reject) => {
    const courseName = 'EcmaScript 6';
    resolve(courseName);
});

myFifthPromise
    .then((courseName) => {
        console.log(courseName);
    })
