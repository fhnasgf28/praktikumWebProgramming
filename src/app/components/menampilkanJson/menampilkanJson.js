"use client"

import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebaseApp from '../../utils/firebase';

const DisplayBooksJSON = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const db = getDatabase(firebaseApp);
    const booksRef = ref(db, 'books');

    onValue(booksRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const bookList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setBooks(bookList);
      } else {
        setBooks([]);
      }
    });
  }, []);

  return (
    
    <div className="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">List of Books in JSON Format</h2>
      <div className="overflow-x-auto">
        <pre className="p-4 bg-gray-100 rounded-md">{JSON.stringify(books, null, 2)}</pre>
      </div>
    </div>
  )
};

export default DisplayBooksJSON;
