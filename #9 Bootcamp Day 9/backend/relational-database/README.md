## Latihan Relational Database
- [x] [Dokumentasi Postman](https://documenter.getpostman.com/view/10749611/UVXhrcuP)
- [x] [Image Placeholder](hthttps://placeholder.com/)

## Notes
- Baca keterangan dari atas ke bawah
- Pastikan testing API di postman setelah installasi
- Nyalakan script res.json yang ada di folder controllers auth dan book, kemudian matikan script res.render untuk melihat tampilan UI/ejs
- Refresh browser kemudian jalankan port 3000

### Cara Installasi
- npm init -y
  - Untuk membuat file package.json secara automatice
- npm install express pg sequelize dotenv ejs
  - Untuk menginstall express, postgres, sequelize, ejs, dan dotenv
- npm install nodemon sequelize-cli --seve-dev
  - Untuk menginstall nodemon, sequelize-cli yang disimpan ke dalam devDependencies untuk mode development
- npx sequelize-cli init
  - Untuk membuat folder untuk migrasi database, table dan data ke dalam database postgres
- npx sequelize-cli db:create
  - Untuk membuat database baru yang telah di inputkan didalam file config.json
- npx sequelize-cli model:generate --name author --attributes name:string,age:integer,image:string
  - Untuk membuat table baru dengan nama author beserta valuenya secara migrasi
- npx sequelize-cli model:generate --name book --attributes title:string,genre:string,page:integer,price:integer,image:string,authorId:integer
  - Untuk membuat table baru dengan nama author beserta valuenya secara migrasi
- npx sequelize-cli db:migrate
  - Untuk migrasi ke dalam database postgres

## Penjelasan
- File .env
  - Untuk menyimpan sebuah variable atau key yang rahasia