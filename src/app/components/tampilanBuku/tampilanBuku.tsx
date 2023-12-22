import React from "react";

export interface Book {
    id: number;
    judul: string;
    penulis: string;
    penerbit: string;
    tahunTerbit: number;
    harga:string;
} 

interface BookListProps {
    books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books}) => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Daftar Buku</h1>
            <div className="grid grid-cols-3 gap-4">
                {books.map((book) => (
                    <div key={book.id} className="border p-4 rounded shadow">
                        <h2 className="text-lg font-semibold mb-2">{book.judul}</h2>
                        <p><span className="font-bold">Penulis:</span>{book.penulis}</p>
                        <p><span className="font-bold">Penerbit:</span>{book.penerbit}</p>
                        <p><span className="font-bold">Tahun Terbit:</span>{book.tahunTerbit}</p>
                        <p><span className="font-bold">Harga:</span>{book.harga}</p>

                        {/* tombol untuk menghapus dan mengetid */}
                        <div className="mt-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">Edit</button>

                            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-2">Hapus</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookList;