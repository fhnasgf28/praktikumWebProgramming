"use client"

import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue,remove,update } from 'firebase/database';
import firebaseApp from '../../utils/firebase';

const ListBuku = () => {
  const [books, setBooks] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedBook, setEditedBook] = useState({
    id: '',
    judul: '',
    penulis: '',
    penerbit: '',
    tahun_terbit: '',
    harga: 0,
  });

  useEffect(() => {
    const db = getDatabase(firebaseApp);
    const booksRef = ref(db, 'books');

    // Mengambil data buku dari database
    onValue(booksRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const bookList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setBooks(bookList);
        setIsConnected(true);
      } else {
        setBooks([]);
      }
    });
  }, []);
  
  const handleEditClick = (book) => {
    setSelectedBook(book)
    setEditedBook(book);
    setEditMode(true);
  };

  const handleUpdateBook = () => {
    const db = getDatabase(firebaseApp);
    const bookRef = ref(db, `books/${selectedBook.id}`);

    update(bookRef, {
        judul: editedBook.judul,
    penulis: editedBook.penulis,
    penerbit: editedBook.penerbit,
    tahun_terbit: editedBook.tahun_terbit,
    harga: editedBook.harga,
  })
      .then(() => {
        console.log('Book updated successfully');
        setSelectedBook(null);
        setEditedBook({
            id: '',
            judul: '',
            penulis: '',
            penerbit: '',
            tahun_terbit: '',
            harga: 0,
          });
        setEditMode(false);
      })
      .catch((error) => {
        console.error('Error updating book:', error);
      });
  };

  const handleDeleteBook = (bookId) => {
    const db = getDatabase(firebaseApp);
    const bookRef = ref(db, `books/${bookId}`);

    remove(bookRef)
      .then(() => {
        console.log('Book deleted successfully');
        // Update the books state after deletion
        const updatedBooks = books.filter((book) => book.id !== bookId);
        setBooks(updatedBooks);
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [field]: value,
    }));
  };

  return (
    <div className="mx-auto max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
      {isConnected && (
        <p className="text-green-600 mb-4">Database terhubung dengan Firebase!</p>
      )}
      <h1 className="text-2xl font-semibold mb-4">Daftar Buku</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="border-b py-2">
            <h2 className="text-lg font-semibold">{book.judul}</h2>
            <p>Penulis: {book.penulis}</p>
            <p>Penerbit: {book.penerbit}</p>
            <p>Tahun Terbit: {book.tahun_terbit}</p>
            <p>Harga: {book.harga}</p>

            <button
              onClick={() => handleEditClick(book)}
              className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 mr-2"
            >
              Edit
            </button>

            <button
              onClick={() => handleDeleteBook(book.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md mt-2"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>

      {editMode && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Buku</h2>
            {Object.keys(editedBook).map((field) => (
            <input
              type="text"
              placeholder={field.split('_').join(' ')}
              value={editedBook[field]}
              onChange={(e) => handleInputChange(e, field)} 
              className="w-72 p-2 border border-gray-300 rounded-md mb-2"
            />
            ))}
            {/* Add other input fields for editing book details */}
            <button
              onClick={handleUpdateBook}
              className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 mr-2"
            >
              Update
            </button>
            <button
              onClick={() => {
                setSelectedBook(null);
                setEditedBook({
                  id: '',
                  judul: '',
                  penulis: '',
                  penerbit: '',
                  tahun_terbit: '',
                  harga: 0,
                });
                setEditMode(false);
              }}
              className="bg-gray-500 text-white px-3 py-1 rounded-md mt-2"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListBuku;
