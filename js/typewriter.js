var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Designer')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Developer')
    .pauseFor(2000)
    .start();