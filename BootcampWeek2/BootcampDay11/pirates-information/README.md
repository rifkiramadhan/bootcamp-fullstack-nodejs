# Pirate x Marine : Time To advance

> _⏰_ Time Estimation ~150 minutes

## TASK SUMMARY

Di masa kejayaan para Pirate demi memburu sebuah harta Karun bernama "Satu Buah" mereka melakukan perekurutan untuk kapal. Seorang marinir ditugaskan untuk membuat sebuah rincian anggota atau kru dari sebuah kapal bajak laut.

## Tasks 1

Buatlah table `Ships` yang memiliki kolom-kolom sebagai berikut :

| Field | Datatype | Modifiers   |
| ----- | -------- | ----------- |
| id    | SERIAL   | PRIMARY KEY |
| name  | VARCHAR  | NOT NULL    |
| type  | VARCHAR  | NOT NULL    |
| power | INT      | NOT NULL    |

Buatlah table `Pirates` yang memiliki kolom-kolom sebagai berikut :

| Field  | Datatype | Modifiers   |
| ------ | -------- | ----------- |
| id     | SERIAL   | PRIMARY KEY |
| name   | VARCHAR  | NOT NULL    |
| status | VARCHAR  | NOT NULL    |
| type   | VARCHAR  | NOT NULL    |

## Tasks 2

Buatlah routing dengan menggunakan `ExpressJS` agar dapat melakukan CRUD operations dengan detail seperti dibawah:

| Method | Route               | Keterangan                                                                                                  |
| ------ | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| GET    | /                   | Menampilkan home                                                                                            |
| GET    | /ships              | Menampilkan semua kapal yang ada dalam database                                                             |
| GET    | /pirates            | Menampilkan semua pirates yang ada dalam database                                                           |
| GET    | /ships/add          | Menampilkan halaman form untuk menambahkan data kapal                                                       |
| POST   | /ships/add          | Menerima data yang dikirim dari halaman `/ships/add` untuk melakukan _insertion_ ke dalam table `Ships`     |
| GET    | /pirates/add        | Menampilkan halaman form untuk menambahkan data pirates                                                     |
| POST   | /pirates/add        | Menerima data yang dikirim dari halaman `/pirates/add` untuk melakukan _insertion_ ke dalam table `Pirates` |
| GET    | /ships/delete/:id   | Melakukan _delete_ data kapal berdasarkan `id` yang dikirimkan                                              |
| GET    | /pirates/delete/:id | Melakukan _delete_ data pirates berdasarkan `id` yang dikirimkan                                            |

## Tasks 3

Buat database berupa json dengan nama file **pirates.json** dan **ships.json**


---

> USAHA KERAS TIDAK MENGKHIANATI HASIL

---
