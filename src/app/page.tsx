import BookPage from "./components/dataBuku/dataBbuku"
import TambahBuku from "./components/tambahBuku/tambahBuku"
import ListBuku from "./components/ambilDataBuku/ambilBuku"
import DisplayBooksJSON from "./components/menampilkanJson/menampilkanJson"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-6">Selamat Datang Perpustakaan Buku</h1>
    <div className="grid grid-cols-2 gap-4 w-full max-w-3xl">
      <TambahBuku />
      <ListBuku/>
      <DisplayBooksJSON/>

      
    </div>
  </div>
  )
}
