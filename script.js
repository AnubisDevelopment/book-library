let myArray = []
let myDiv = document.querySelector('.main-div')

function Book (title,author,pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.id = self.crypto.randomUUID()
  this.read = read
}

function addBook(...y){
  let newBook = new Book (...y)
  myArray.push(newBook)
  arrayTraversal()

}

function arrayTraversal (x){
    myDiv.replaceChildren()
    for(x of myArray){

    let divBook = document.createElement('div')
    let removeButton = document.createElement('button')
    let readStatus = document.createElement('button')
    
    readStatus.textContent = 'Unread'
    removeButton.textContent = 'Remove Book'
    divBook.textContent = `${x.title} by ${x.author} spanning ${x.pages} pages.`
      //sets removeButton id to match the index of array it was
      //placed in. When pressed removes the array index associated
      //with button.
      removeButton.setAttribute('data-index', 'my-value')
      removeButton.dataset.index = myArray.length-1
      removeButton.addEventListener('click', () => {
        myArray.splice(removeButton.dataset.index, 1)
        arrayTraversal()
        console.log(myArray)
      })
      
      readStatus.addEventListener('click', () => {
        readStatus.textContent = 'Finished'
      })

    myDiv.appendChild(divBook)
    divBook.appendChild(removeButton)
    divBook.appendChild(readStatus)
    console.log(myArray)
    console.log(removeButton.dataset.index)
    }
}

addBook('hobbit', 'tolkien', 536)
addBook('lord of ring', 'tolkien', 892)
addBook('badabing', 'tolkien', 892)

//dialog button interactions
const showButton = document.querySelector('.book-button');

const dialog = document.querySelector("dialog");
const confirmBtn = dialog.querySelector('#confirmBtn')
const titleBook = document.querySelector('#title')
const authorBook = document.querySelector('#author')
const pagesBook = document.querySelector('#page-count')

confirmBtn.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.close(addBook(titleBook.value, authorBook.value, pagesBook.value))
})

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

