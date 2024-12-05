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


function createDivs()
{
    const principal = document.querySelector("#main");
    
    principal.innerHTML = ""
    myLibrary.forEach((element, index) => {
        let aDiv = document.createElement("div");
        dialogBook = document.querySelector("#dialogBook");
        aDiv.classList.add("book");
        aDiv.textContent = `${element.titre}`;
        principal.appendChild(aDiv);
        aDiv.addEventListener("click", () => {
            dialogBook.showModal();
        } )
    });
    
}



function main(){
    const firstBook = new Book("Ola", "Fifty Shades of Ola", 666, true);
    addBookToLibrary(firstBook);
    createDivs();
    addingInteraction(); 
}
main();
