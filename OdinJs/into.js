function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function () {
        console.log(name)
    }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'



function libro(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        console.log(this.title + ' ' + this.author + ' ' + this.pages + ' ' + this.read)
        }
}

const libro2 = new libro('Paula', 'QPS', '12', 'NO')
libro2.info()