This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


dokumentasi aplikasi Buku LIST

### Buat File .env.local

masukan data ini
NEXT_PUBLIC_API_KEY ="AIzaSyD6bIlDe3W9IB5VLWHG45pHTLYen8njk5U"
NEXT_PUBLIC_DATABASE_URL ="https://programweb-343e3-default-rtdb.asia-southeast1.firebasedatabase.app/"
NEXT_PUBLIC_AUTH_DOMAIN ="programweb-343e3.firebaseapp.com"
NEXT_PUBLIC_PROJECT_ID ="programweb-343e3"
NEXT_PUBLIC_STORAGE_BUCKET ="programweb-343e3.appspot.com"
NEXT_PUBLIC_MESSAGE_SENDER_ID ="193871713792"
NEXT_PUBLIC_APP_ID ="1:193871713792:web:b4de672ef06d12a4aa2ae5"
NEXT_PUBLIC_MEASUREMENT_ID ="G-F43WSDYM4V"


# Dokumentasi Aplikasi CRUD Buku

Aplikasi ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) terhadap data buku. Aplikasi menggunakan teknologi React untuk antarmuka pengguna, Firebase Realtime Database untuk menyimpan data, dan Tailwind CSS untuk tampilan.

## Fitur

- Menambahkan buku baru ke database
- Melihat daftar buku
- Mengedit buku yang ada
- Menghapus buku dari database
- Melihat daftar buku dalam format JSON

## Komponen

### TambahBuku

Komponen ini memungkinkan pengguna untuk menambahkan buku baru ke database.

### BookList

Komponen ini menampilkan daftar buku yang ada.

### EditBookModal

Komponen ini menampilkan modal untuk mengedit buku yang ada.

### BookListJSON

Komponen ini menampilkan daftar buku dalam format JSON.

## Penggunaan

1. Pastikan telah mengatur konfigurasi Firebase di file `firebase.js`.
2. Jalankan aplikasi dengan `yarn dev` atau `npm run dev`.
3. Buka `http://localhost:3000` di browser Anda.

## Pengembangan

### Instalasi

1. Clone repositori ini.
2. Jalankan `yarn install` atau `npm install` untuk menginstal dependensi.

### Kontribusi

Anda dapat melakukan kontribusi dengan cara:
- Fork repositori ini.
- Lakukan perubahan yang diinginkan.
- Buat pull request ke repositori utama.

### Lingkungan Pengembangan

- Next.js v14
- React
- Firebase Realtime Database
- Tailwind CSS




