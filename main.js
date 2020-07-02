let ul = document.querySelector('ul');
let movie = document.querySelector('input');
let liked = document.querySelectorAll('input')[1];
let submit = document.querySelector('button');
let li = document.querySelector('li');

function Movies(name, year, type, actors) {
    this.name = name,
        this.year = year,
        this.type = type,
        this.actors = actors;
        greet: function() {
            alert('fgchdchnc');
    }
    let li = document.createElement('li');
    li.textContent = ('The name of the movie is ' + name + '. The year of the release is ' + year + '. The type of the movie is ' + type + '. The main Characters include ' + actors + '.');

    ul.appendChild(li);
}

let Survey1 = new Movies('3 idiots', '2009', 'Comedy', 'Aaamir Khan').greeting;
let Survey2 = new Movies('ChakDe! India', '2007', 'Drama, Family, Sports', 'Shah Rukh Khan');
let Survey3 = new Movies('Black', '2005', 'Drama', 'Amitabh Bachan');
let Survey4 = new Movies('Munna Bhai M.B.B.S', '2003', 'Comedy, Drama, Musical', 'Sanjay Dutt');
let Survey5 = new Movies('Avengers End Game', '2019', 'Action, Suspense', 'alottttttt');

submit.addEventListener('click', showpara);

function showpara() {
    if (movie.value.length < 1) {
        alert('Please Insert a Movie Name. I know it is hard to remember at times....')
    } else if (liked.value.length < 1) {

        alert('Please enter what was the best thing you liked about that movie.????')
    } else {
        let moviee = movie.value;
        let favthing = liked.value;
        let li = document.createElement('li');
        let textContent = ('Users Favourite movie is ' + moviee + '. The thing which user loved the most is ' + favthing);
        li.append(textContent);
        ul.appendChild(li);
        movie.focus();
        movie.select();
    }
}