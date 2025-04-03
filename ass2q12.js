const library = {

    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    addBook(book) {
        if(book || typeof book !== "object"){
            console.log("Invalid book data");
        }
    
    if (!book.title || !book.author || !book.year) {
    
    console.log("Book information is incomplete.");
    
    return;
    
    }
    this.books.push(book);
    
    },
    
    findBookByTitle(title) {
    
    return this.books.find(book => book.title === title) || "Book Not found";
    
    },
    
    removeBook(title) {
    
    const index = this.books.findIndex(book => book.title === title);
    
    if (index !== -1) {
    
    this.books.splice(index, 1);
    
    } else {
    
    console.log("Book not found.");
    
    } } };
    
    library.addBook({ author: "George Orwell", year: 1949 });
    
    console.log(library.books.length);