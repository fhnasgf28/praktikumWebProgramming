"use client"

import { FormEvent, useState } from 'react';
import { ref, push } from 'firebase/database';
import firebaseApp from '../../utils/firebase';
import { getDatabase } from 'firebase/database'; // Sesuaikan path dengan lokasi firebaseConfig Anda

const TambahBuku = () => {
  const [judul, setJudul] = useState('');
  const [penulis, setPenulis] = useState('');
  const [penerbit, setPenerbit] = useState('');
  const [tahunTerbit, setTahunTerbit] = useState('');
  const [harga, setHarga] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const target = e.target as typeof e.target & {
      judul: { value: string };
      penulis: { value: string };
      penerbit: { value: string };
      tahunTerbit: { value: string };
      harga: { value: string };
    };
  
    const newBook = {
      judul: judul,
      penulis: penulis,
      penerbit: penerbit,
      tahun_terbit: tahunTerbit,
      harga: parseFloat(harga)
    };
  
    
    try {
        const db = getDatabase(firebaseApp);
        const booksRef = ref(db, 'books');
        await push(booksRef, newBook);
  
        target.judul.value = '';
        target.penulis.value = '';
        target.penerbit.value = '';
        target.tahunTerbit.value = '';
        target.harga.value = '';
  
        setIsConnected(true);
        setSuccessMessage('Buku berhasil ditambahkan ke Realtime Database!');
        setErrorMessage('');
      } catch (error) {
        console.error('Gagal menambahkan buku:', error);
        setSuccessMessage('');
      }
    };

  return (
    <div className="mx-auto max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Tambah Buku</h1>
      {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Judul" value={judul} onChange={(e) => setJudul(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        <input type="text" placeholder="Penulis" value={penulis} onChange={(e) => setPenulis(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        <input type="text" placeholder="Penerbit" value={penerbit} onChange={(e) => setPenerbit(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        <input type="text" placeholder="Tahun Terbit" value={tahunTerbit} onChange={(e) => setTahunTerbit(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        <input type="text" placeholder="Harga" value={harga} onChange={(e) => setHarga(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Tambah Buku</button>
      </form>
    </div>
  );
};

export default TambahBuku;
