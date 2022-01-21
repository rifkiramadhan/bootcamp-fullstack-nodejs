## Books and Library
- [x] [Dokumentasi Postman]()

## Notes
- Baca keterangan dari atas ke bawah
- Pastikan testing API di postman setelah installasi
- Matikan script res.json yang ada di folder controllers auth dan book, kemudian nyalakan script res.redirect untuk melihat tampilan UI/ejs
- Buka browser kemudian jalankan port 3000

### Cara Installasi
- npm init -y
  - Untuk membuat file package.json secara automatice
- npm install express pg sequelize dotenv ejs
  - Untuk menginstall express, postgres, sequelize, ejs, dan dotenv
- npm install nodemon sequelize-cli --save-dev
  - Untuk menginstall nodemon, sequelize-cli yang disimpan ke dalam devDependencies untuk mode development
- npx sequelize-cli init
  - Untuk membuat folder untuk migrasi database, table dan data ke dalam database postgres
- npx sequelize-cli db:create
  - Untuk membuat database baru yang telah di inputkan didalam file config.json
- npx sequelize-cli model:generate --name book --attributes title:string,author:string,released_date:date,pages:integer,genre:string
  - Untuk membuat table baru dengan nama book beserta valuenya secara migrasi
- npx sequelize-cli db:migrate
  - Untuk migrasi ke dalam database postgres

## Installasi Tambahan
- npx sequelize-cli seed:generate --name library-seeder
  - Untuk membuat seeder dengan nama library-seeder secara migrasi
- npx sequelize-cli db:seed:all
  - Untuk menambahkan data yang di input dari format json secara migrasi

## Cara Undo
- npx sequelize-cli db:migrate:undo
  - Untuk mengundo/menghapus table yang telah dibuat di dalam database book

## Work Flow
- Buat file app.js, .gitignore, .env
- Buat folder controller, helpers, routes
- Buat file index.js dan book.js pada folder routes
- Buat file BookController.js dan index.js pada folder controller

## Penjelasan
- File .env
  - Untuk menyimpan sebuah variable atau key yang rahasia