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
    });


//another example:::

//Successful Request
const mySixthPromise = new Promise((resolve, reject) => {
    const frontend = new Set(['HTML', 'CSS', 'JavaScript', 'React', 'Redux']);
    const backend = new Set(['JavaScript', 'MySQL', 'NodeJs']);

    const developer = {
        Front: {
            name: 'Front-end Developer',
            topics: frontend
        },
        Back: {
            name: 'Back-end Developer',
            topics: backend
        },
        Full: {
            name: 'Fullstack Developer',
        }
    };
    //garbage 
    /*if(developer.Front.name === 'Front-end Developer') {
        resolve(developer);
    }
     if(developer.Back.name === 'Back-end Developer') {
        resolve(developer); //is many resolve() is working???
    }
     if(developer.Front.name === 'Front-end Developer' && developer.Back.name === 'Back-end Developer') {
        resolve(developer);
    }*/

    if(developer.Front.name !== 'Front-end Developer' || developer.Back.name !== 'Back-end Developer' || developer.Full.name !== 'Fullstack Developer') {
        const msg = 'Something went wrong, Please choose the correct developer!';
        reject(msg);
    }
    resolve(developer);
});

mySixthPromise
    .then((developer) => {
        console.log(`First is ${developer.Front.name}, 
        Second is ${developer.Back.name} and 
            Third is ${developer.Full.name}.`);
        console.log(`Front-end Topics: `);
        console.log(developer.Front.topics);
    })
    .catch((msg) => {
        console.log(msg);
    });

//Failed Request /*for line 192 */
const mySixthFailedPromise = new Promise((resolve, reject) => {
    const frontend = new Set(['HTML', 'CSS', 'JavaScript', 'React', 'Redux']);
    const backend = new Set(['JavaScript', 'MySQL', 'NodeJs']);

    const developer = {
        Front: {
            name: 'Front-end Developer',
            topics: frontend
        },
        Back: {
            name: 'Back-end Developer',
            topics: backend
        },
        Full: {
            name: 'Fullstack Developer',
        }
    };

    if(developer.Front.name !== 'Front-end Developer' || developer.Back.name !== 'Back-end Developer' || developer.Full.name !== 'FullstackDeveloper') {
        const msg = 'Something went wrong, Please choose the correct developer!';
        reject(msg);
    }
    resolve(developer);
});

mySixthFailedPromise
    .then((developer) => {
        console.log(`First is a ${developer.Front.name} & related topics ${developer.Front.topics}, 
        Second is ${developer.Back.name} and 
        Third is ${developer.Full.name}.`);
    })
    .catch((msg) => {
        console.log(msg);
    });


//:::another example: Promises in ES6::

//Successful request
const mySeventhPromise = new Promise((resolve, reject) => {
    const myName = 'Md. Ajgar Hossain Jewell';
    if(myName !== 'Md. Ajgar Hossain Jewell') {
        const errorMessage = 'Please enter my correct name.';
        reject(errorMessage);
    }
    resolve(myName);
});

mySeventhPromise.then((myName) => {
    console.log(`My Name is ${myName}`);
}, (errorMessage) => {
    console.log(errorMessage);
    
});

//Failed request
const mySeventhFailedPromise = new Promise((resolve, reject) => {
    const myName = 'Md. Ajgar';
    if(myName !== 'Md. Ajgar Hossain Jewell') {
        const errorMessage = 'Enter the correct name.';
        reject(errorMessage);
    }
    resolve(myName);
});

mySeventhFailedPromise.then((myName) => {
    console.log(`My Name is ${myName}`);
}, (errorMessage) => {
    console.log(errorMessage);
    
});


//:::another example with an asynchronous code:::
const myEighthPromise = new Promise((resolve, reject) => {
    const courseName = 'JavaScript Promises';
    setTimeout(() => {
        resolve(courseName);
    }, 5000);
});

myEighthPromise.then((courseName) => {
    console.log(`${courseName} is very important!`);
});


//:::::::::Lecture from Udacity:::::::::::::
new Promise(function(resolve) {
    console.log('First');
    resolve();
    console.log('Second');
}).then(function() {
    console.log('Third');
});

