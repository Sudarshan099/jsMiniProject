// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('bookList');
    const searchBar = document.getElementById('searchBar');
    const addBookBtn = document.getElementById('addBookBtn');

    const books = [
        { title: "The Great Gatsby", favorite: false, image: 'https://th.bing.com/th/id/OIP.fFaX7nKq5_5gf2nSI3QEUgHaLK?w=202&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { title: "To Kill a Mockingbird", favorite: false, image: 'https://th.bing.com/th/id/OIP.NGofr7d8y6lcAUn2SeXXPgHaLZ?w=201&h=310&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { title: "1984", favorite: false, image: 'https://th.bing.com/th/id/OIP.gX0ExEtzFf0AkuD2xmX2iAHaMF?w=195&h=319&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { title: "The Catcher in the Rye", favorite: false, image: 'https://th.bing.com/th/id/OIP.ysUvu--oOBJ3T2gdv4dBYwHaL8?w=196&h=317&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    ];

    function renderBooks(filter = '') {
        bookList.innerHTML = '';
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(filter.toLowerCase()));
        filteredBooks.forEach((book, index) => {
            const card = document.createElement('div');
            card.className = 'book-card';

            card.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <div class="content">
                    <h2>${book.title}</h2>
                </div>
                <div class="actions">
                    <button onclick="toggleFavorite(${index})">${book.favorite ? 'Unfavorite' : 'Favorite'}</button>
                    <button onclick="removeBook(${index})">Remove</button>
                </div>
            `;

            if (book.favorite) {
                card.querySelector('h2').classList.add('favorite');
            }

            bookList.appendChild(card);
        });
    }

    function addBook() {
        const bookTitle = prompt('Enter the book title:');
        const bookImage = prompt('Enter the book image URL:');
        if (bookTitle && bookImage) {
            books.push({ title: bookTitle, favorite: false, image: bookImage });
            renderBooks();
        }
    }

    function removeBook(index) {
        books.splice(index, 1);
        renderBooks();
    }

    function toggleFavorite(index) {
        books[index].favorite = !books[index].favorite;
        renderBooks();
    }

    searchBar.addEventListener('input', () => {
        renderBooks(searchBar.value);
    });

    addBookBtn.addEventListener('click', addBook);

    window.removeBook = removeBook;
    window.toggleFavorite = toggleFavorite;

    renderBooks();
});
