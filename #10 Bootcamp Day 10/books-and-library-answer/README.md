# Librarian Books

## Express with Sequelize and PostgreSQL

### SUMMARY 

Perusahaan Bookstore meminta bantuan anda untuk membuat aplikasi yang melakukan listing terhadap buku-buku yang mereka miliki.

### Tasks 0

Buatlah _DATABASE_ dengan menggunakan PostgreSQL dengan nama `bookstore-file`.

> Nama database WAJIB bookstore-file

### Tasks 1

Buatlah table `Books` yang memiliki kolom-kolom sebagai berikut :

| Field         | Datatype | Modifiers   |
| ------------- | -------- | ----------- |
| id            | SERIAL   | PRIMARY KEY |
| title         | VARCHAR  | NOT NULL    |
| author        | VARCHAR  | NOT NULL    |
| released_date | DATE     | NOT NULL    |
| pages         | INTEGER  | NOT NULL    |
| genre         | VARCHAR  | NOT NULL    |

### Tasks 2

Buatlah proses _seeding_ yang berfungsi untuk melakukan seeding data ke dalam table `Books` berdasarkan data dari `books.json` :

### Tasks 3

Buatlah routing dengan menggunakan `ExpressJS` agar dapat melakukan CRUD operations dengan detail seperti dibawah:

| Method | Route             | Keterangan                                                                                                             |
| ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| GET    | /                 | Menampilkan semua buku yang ada dalam database                                                                         |
| GET    | /books/add        | Menampilkan halaman form untuk menambahkan data buku                                                                   |
| POST   | /books/add        | Menerima data yang dikirim dari halaman `/books/add` untuk melakukan _insertion_ ke dalam table `Books`                |
| GET    | /books/edit/:id   | Menampilkan halaman form untuk mengedit data buku                                                                      |
| POST   | /books/edit/:id   | Menerima data yang dikirim dari halaman `/books/edit` untuk melakukan _update_ data buku berdasarkan `id` yang dikirim |
| GET    | /books/delete/:id | Melakukan _delete_ data buku berdasarkan `id` yang dikirimkan                                                          |

### Tasks 4

#### Halaman Home atau `/`

Halaman home akan menampilkan buku dalam bentuk table.

#### Halaman Add Book atau `/books/add`

Halaman add akan menampilkan form untuk memasukkan data buku yang akan disimpan ke dalam database.

Untuk bagian `genre` menggunakan select input yang terdapat 5 pilihan:

    - Article
    - Biography
    - Drama
    - Fantasy
    - Fiction

> Apabila berhasil menambahkan buku maka halaman akan berpindah ke home atau `/`

Lakukan validasi pada saat proses `add` buku baru, apabila `title` yang dimasukkan sudah ada dalam database maka akan muncul pesan error.

#### Halaman Edit Book atau `/books/edit/:id`

Halaman edit akan menampilkan form yang berisikan data buku yang akan diedit.
Pastikan data `released_date` dan `genre` sudah terisi sesuai dengan data buku yang akan diedit.

> Apabila berhasil mengedit buku maka halaman akan berpindah ke home atau `/`

Lakukan validasi juga pada saat proses `edit`, jika `title` yang diganti sudah ada dalam database maka akan muncul pesan error.

#### Delete Book atau `/books/delete/:id`

Untuk delete book tidak perlu membuat halaman baru tapi cukup dengan menekan tombol delete yang akan mengarahkan routing ke `/books/delete/:id` dimana proses delete akan dilakukan berdasarkan `id` yang dikirimkan.

> Apabila berhasil menghapus buku maka halaman akan berpindah ke home atau `/`
