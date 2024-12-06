const myLibrary = [];
function Book(auteur, titre, pages, read) {
    this.auteur = auteur;
    this.titre = titre;
    this.pages = pages;
    this.read = read;
    this.changeReadStatut = function(){
        this.read = !this.read;
    }
}
//read the function name
function addBookToLibrary(book) {
    myLibrary.push(book);
}
// mostly dialog stuffs
function addingInteraction()
{
    const addingButton = document.querySelector("#addingLogo");
    const cancelButton = document.querySelector("#cancel");
    const submitButton = document.querySelector("#submit")
    const dialog = document.querySelector("dialog")
    addingButton.addEventListener("click", () => {
        dialog.showModal();
    });
    cancelButton.addEventListener("click", () => {
        dialog.close();
    })
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        const Abook = new Book(document.getElementById('author').value, document.getElementById('title').value, document.getElementById('pages').value, document.getElementById('read').value);
        console.log(document.getElementById('author').value)
        addBookToLibrary(Abook);
        createDivs();
        dialog.close();
    })
}
//show Details
function showDetails(element){
    const bookTitle = document.querySelector("#bookTitle");
    const authorName = document.querySelector("#authorDisplay");
    const numberPage = document.querySelector("#pageDisplay");
    const readPara  = document.querySelector("#readOrNot p")
    bookTitle.textContent = `${element.titre}`;
    authorName.textContent = `Écrit par ${element.auteur}`;
    numberPage.textContent = `${element.pages} pages `;
    if(element.read)
    {
        readPara.textContent = `Finished`;

    }
    else
    {
        readPara.textContent = `Not Read`;
    }
}
//divs creation
function createDivs()
{
    const principal = document.querySelector("#main");
    const dialogBook = document.querySelector("#dialogBook");
    const AnnulerBook = document.querySelector("#cancelFromBook");
    const supprimerBook = document.querySelector("#supprimerBook");
    const toggleRead = document.querySelector("#toggleRead")
    principal.innerHTML = ""
    myLibrary.forEach((element, index) => {
        let aDiv = document.createElement("button");
        aDiv.classList.add("book");
        aDiv.textContent = `${element.titre}`;
        principal.appendChild(aDiv);
        aDiv.addEventListener("click", () => {
            dialogBook.showModal();
            showDetails(element);
            
        } )
        toggleRead.addEventListener("click", () => {
            element.changeReadStatut();
            console.log(element.read);
            showDetails(element);
        })
        supprimerBook.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            createDivs();
            dialogBook.close();
        })
    });
    AnnulerBook.addEventListener("click", () => { 
        dialogBook.close();
    })
}
//main function
function main(){
    const firstBook = new Book("6ix9ine", "How to be a rat?", 69, true);
    const SecondBook = new Book("Robert Kiyosaki", "Poor dad, Rich dad", 336, true)
    addBookToLibrary(firstBook);
    addBookToLibrary(SecondBook);
    createDivs();
    addingInteraction(); 
}
main();
