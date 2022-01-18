## Latihan Relational Database (Librarian Books)
- [x] [Dokumentasi Postman](https://documenter.getpostman.com/view/10749611/UVXjKGBd)
- [x] [Image Placeholder](https://placeholder.com/)

## Notes
- Baca keterangan dari atas ke bawah
- Pastikan testing API di postman setelah installasi
- Matikan script res.json yang ada di folder controllers auth dan book, kemudian nyalakan script res.redirect untuk melihat tampilan UI/ejs
- Buka browser kemudian jalankan port 3000
- Jika pada tampilan UI home books/author terdapat error, maka singkronisasikan/put data terlebih dahulu yaitu pada value authorId yang defaultnya null yang ada di dalam table books dengan id author yang ada di dalam table author ketika input data

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
- npx sequelize-cli model:generate --name author --attributes name:string,age:integer,image:string
  - Untuk membuat table baru dengan nama author beserta valuenya secara migrasi
- npx sequelize-cli model:generate --name books --attributes title:string,genre:string,page:integer,price:integer,image:string,authorId:integer,released_date:dateonly
  - Untuk membuat table baru dengan nama books beserta valuenya secara migrasi
- npx sequelize-cli db:migrate
  - Untuk migrasi ke dalam database postgres

## Installasi Tambahan
- npx sequelize-cli seed:generate --name library-seeder
  - Untuk membuat seeder dengan nama library-seeder secara migrasi
- npx sequelize-cli db:seed:all
  - Untuk menambahkan data yang di input dari format json secara migrasi

## Penjelasan
- File .env
  - Untuk menyimpan sebuah variable atau key yang rahasia