let myArray = []

let myDiv = document.querySelector('.main-div')

//crypto.randomUUID()

function Book (title,author,pages){
  this.title = title
  this.author = author
  this.pages = pages
}

function addBook(...y){
  let newBook = new Book (...y)
  myArray.push(newBook)
  arrayTraversal()

}

function arrayTraversal (x){
    myDiv.replaceChildren()
    for(x of myArray){
    //need to figure out way to only add newest addbook call

    let divBook = document.createElement('div')
    divBook.setAttribute('id', crypto.randomUUID())
    divBook.textContent = `${x.title} by ${x.author} spanning ${x.pages} pages.`
    myDiv.appendChild(divBook)
    }
}

addBook('hobbit', 'tolkien', 536)
addBook('lord of ring', 'tolkien', 892)
addBook('badabing', 'tolkien', 892)
console.log(myArray)

//dialog button interactions
const showButton = document.querySelector('.book-button');

const dialog = document.querySelector("dialog");
const confirmBtn = dialog.querySelector('#confirmBtn')
const titleBook = document.querySelector('#title')
const authorBook = document.querySelector('#author')
const pagesBook = document.querySelector('#page-count')
//figure out how to call add button when confirm button
//is pressed returning all values from their respecitve field

confirmBtn.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.close(addBook(titleBook.value, authorBook.value, pagesBook.value))
})

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

