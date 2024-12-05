const myLibrary = [];
function Book(auteur, titre, pages, read) {
    this.auteur = auteur;
    this.titre = titre;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

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

function showDetails(element){
    const bookTitle = document.querySelector("#bookTitle");
    const authorName = document.querySelector("#authorDisplay");
    const numberPage = document.querySelector("#pageDisplay");
    const checkbox  = document.querySelector("#checkboxBook")
    bookTitle.textContent = `${element.titre}`;
    authorName.textContent = `Écrit par ${element.auteur}`;
    numberPage.textContent = `${element.pages} pages `;
    if(element.read)
        checkbox.checked = true;
    else
        checkbox.checked = false;

}
function createDivs()
{
    const principal = document.querySelector("#main");
    const dialogBook = document.querySelector("#dialogBook");
    const AnnulerBook = document.querySelector("#cancelFromBook");
    const supprimerBook = document.querySelector("#supprimerBook");

    principal.innerHTML = ""
    myLibrary.forEach((element, index) => {
        let aDiv = document.createElement("div");
        aDiv.classList.add("book");
        aDiv.textContent = `${element.titre}`;
        principal.appendChild(aDiv);
        aDiv.addEventListener("click", () => {
            dialogBook.showModal();
            showDetails(element);
            
        } )
    });

    AnnulerBook.addEventListener("click", () => {
        dialogBook.close();
    })
    supprimerBook.addEventListener("click", () => {
        dialogBook.close();
    })
    
}



function main(){
    const firstBook = new Book("Ola", "Fifty Shades of Ola", 666, true);
    addBookToLibrary(firstBook);
    createDivs();
    addingInteraction(); 
}
main();
