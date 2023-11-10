// INSTRUÇÕES DA ATIVIDADE
// Crie uma classe com as seguintes propriedades:
// title: string
// description: string
// author: string

// Crie uma classe com a seguinte :
// books: Book[]

// e com os seguintes
// adicionar: addBook(bookInfo: Omit<Book, ‘id’>): Book
// listar todos: getBooks(): Book[]
// remover: removeBookById(id: string): void
// mostrar um: getBookById(id: string): Book
// editar um: updateBookById(id: string, info: { title?: string, description?: string, author?: string }): Book

// CÓDIGO
class Book {
    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }
}


class Library {
    constructor(listName) {
        this.listName = listName;
        this.bookList = [];
        this.bookId = 0;  // ID count
    }


    addBook(title, description, author, id = this.bookId) {  // ID do livro automático, caso não for inserido (updateBookById)
        this.bookList.push([new Book(title, description, author), String(id)]);
        this.bookId++;
    }


    get Books() {
        return this.bookList;
    }


    removeBookById(id) {
        for (let b in this.bookList) {
            if (this.bookList[b][1] === id) this.bookList.splice(b, 1);
        }
        
    }


    getBookById(id) {
        for (let b in this.bookList) {
            if (this.bookList[b][1] === id) return this.bookList[b];
        }
    }


    updateBookById(id, title, description, author) {
        for (let b in this.bookList) {
            if (this.bookList[b][1] === id) {
                this.bookList.splice(b, 1);  // remove o livro antigo
                this.addBook(title, description, author, id);  // adiciona o livro atualizado, com o id antigo, ao final da lista
            }
        }
    }
}


// TESTES
// c = new Library('Alexandria');
// c.addBook('hunger games', 'distopis', 'suzanne');
// c.addBook('o retrato de dorian gray', 'egocentrismo', 'wilde');
// c.addBook('a culpa é das estrelas', 'câncer', 'green');
// // console.log(c);

// c.removeBookById('1');
// console.log(c.getBookById('1'));
// // console.log(c.Books);
// c.updateBookById('0', 'hunger games', 'distopia', 'collins');
// // console.log(c.Books);
// console.log(c);

// // console.log(c.getBookById('0'));
