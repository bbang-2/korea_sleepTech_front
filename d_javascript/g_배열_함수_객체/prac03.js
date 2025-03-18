class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isVailable = true;
  }
  // 책 대여 기능
  rentBook() {
    if (this.isVailable) {
      this.isVailable = false;
      console.log(`${this.title} 대여 완료`);
    } else {
      console.log(`${this.title} 현재 미보유`);
    }
  }

  rentBook() {
    this.isVailable = true;
    console.log(`${this.title} 반납 완료`);
  }
}

class Library {
  constructor () {
    this.books = [];
    this.nextBookId = 1;
  }

  addBook(title, author) {
    const newBook = new Book(this.nextBookId, title, author);
    this.books.push(newBook);

    console.log(`${title} 책이 추가 됨`);
    this.nextBookId++;
  }
  displayBooks(){
    this.books.forEach(book => {
      console.log(`${book.id}: ${book.title} 저자 ${book.author} - ${book.isVailable ? '대여 가능' :'대여 중'}`);
    });
  }

  rentBook(id) {
    const book = this.books.find(book => book.id === id);

    if(book) {
      book.rentBook();
    } else { 
      console.log('해당 책 노');
    }
  }

  returnBook(id) {
    const book = this.books.find(book => book.id === id);

    if (book) {
      book.returnBook();
    } else {
      console.log('해당 책 노');
    }
  }

  updateBook(id, newTitle, newAuthor) {
    const book = this.books.find(book => book.id === id);

    if(!book) {
      console.log('해당 책 노');
      return;
    } 

    const isNewTitleValid = newTitle && newTitle.trim().length > 0;
    const isNewAuthorValid = newAuthor && newAuthor.trim().length > 0;

    if(!newTitle && !newAuthor) {
      console.log('수정바람');
      return;
    }

    book.title = newTitle || book.title;
    book.author = newAuthor || book.author;
  }

  removeBook(id) {
    
  }
}