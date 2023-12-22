import React from "react";
import BookList from "../tampilanBuku/tampilanBuku";
import { Book } from "../tampilanBuku/tampilanBuku";

const booksData: Book[] = [
    {
    id: 1,
    judul: 'Judul Buku 1',
    penulis: 'Penulis 1',
    penerbit: 'Penerbit 1',
    tahunTerbit: 2022,
    harga: '$10',
    }
]

const BookPage: React.FC = () => {
    return (
        <div>
            <BookList books={booksData}/>
        </div>
    )
}

export default BookPage;