//:::::::::::::::::::::Lesson-1 Creating Promises::::::::::::::::::::::::::::::::::::
//:::::::::::::Lectre-1 Callbacks vs Promises::::::::::::::::::

var planetName = 'Kepler 22 b';
console.log(planetName);

var file1 = get('file1.json');
var file2 = get('file2.json');
console.log(file1); //undefined
console.log(file2); //undefined

//::::::::callbacks vs then:::::::::::::::::::
/*code explanation is in private documents */
function loadImage(src, parent, callback) {
    var img = document.createElement('img');
    img.src = src;
    img.onload = callback;
    parent.appendChild(img);
}


/*Promises vacabulary : https://developers.google.com/web/fundamentals/primers/promises */