# wine-shop-MVC

## Learning Competencies

    - Memahami Design Pattern MVC
    - Mampu membuat analisis mengenai suatu soal
    - Dapat mengaplikasikan konsep OOP

Tugas dikumpulkan dengan cara membuat `Branch` baru

## Summary

Seorang penjual minuman anggur atau disebut `wine` ingin membuat sebuah aplikasi untuk mengatur dan mengelola produk nya tersebut.
Buatlah sebuah aplikasi `Wine Management` dengan mengaplikasikan konsep MVC dan OOP.

Untuk menyimpan data, aplikasi menggunakan format JSON dalam file `wines.json` dimana format data tersebut dalam bentuk array of object seperti berikut :

(Format dalam json tidak boelh diubah)

```json
[
  {
    "id": 1,
    "name": "Moscato 2010",
    "year": 2010,
    "type": "Red",
    "createdAt": "2021-01-10"
  }
]
```

Berikut command-command yang ada dalam Wine Management apps :

```
node index.js
node index.js help
node index.js wines
node index.js add <wine_name>
node index.js sell <wine_id>
node index.js rename <wine_id> <wine_name>
node index.js findById <wine_id>
```

Karena aplikasi akan mengambil input dari command line maka kita perlu `process.argv` untuk memproses input tersebut.

## Task Objectives

### Task 1 - Implements the commands

1. Implement the `wines` command.

Buatlah code untuk menampilkan list dari wines yang tersedia di dalam rak. berikut adalah contoh penggunaannya :

```
node index.js wines
```

Aplikasi akan mengeluarkan list wine yang tersedia dalam rak.

```
Welcome to Wine Management!!
1. Moscato 2010
2. White Bourdon
```

2. Implement the `add` command.

Buatlah code untuk menambahkan wine ke dalam rak. Berikut adalah contoh :

```
node index.js add "Red Caliber/2015/R"

// aplikasi akan merespon
"Red Caliber" has been added!
```

Input <wine_name> berupa string dan harus di pecah agar dapat menjadi informasi yang baik.

Contoh : "Red Caliber/2015/R".
Keterangan :

    - name : Red Caliber
    - year : 2015
    - type : Red

Type wine ada 2 : R = Red , W = White, selain 2 tipe tersebut maka dibuat menjadi Other .

3. Implement the `sell` command.

Buat code untuk menghapus wine dari dalam rak. Berikut adalah contoh

```
node index.js sell 3

// aplikasi akan merespon
"Red Caliber" has been sold!
```

3. Implement the `rename` command.

Buat code untuk menghapus wine dari dalam rak. Berikut adalah contoh

```
node index.js rename 3 "White Caliber/2007/W"

// aplikasi akan merespon
Wine number 3 has been  rename !

// jika tidak ditemukan maka
Id is not found!
```

5. Implement the `findByid` command.

Buat code untuk mengetahui informasi wine dari dalam rak berdasarkan id yang di cari. Berikut adalah contoh :

```
node index.js findById 1

// aplikasi akan merespon
Moscato 2010 is Red Wine with age of 10 years.

// jika tidak ditemukan maka
Id is not found!
```

### Task 2 - Make more cool

Untuk membuatnya lebih keren, mari buat fitur baru untuk memudahkan si penjual :

1. Mengelompokkan wine berdasarkan typenya dengan `group <wine_type>`
2. Mensorting wine berdasarkan age nya dengan `age ascending` atau `age descending`.

Berikut adalah contohnya :
```
node index.js group <wine_type>
node index.js age ascending
```

___
> KERJAKAN YANG MUDAH DULU YA
___ 
