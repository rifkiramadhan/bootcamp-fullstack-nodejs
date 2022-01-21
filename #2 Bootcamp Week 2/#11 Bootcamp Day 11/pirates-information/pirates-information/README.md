## Latihan Relational Database (Pirate x Marine : Time To advance)
- [x] [Dokumentasi Postman](https://documenter.getpostman.com/view/10749611/UVXnHa9m)

## Notes
- Baca keterangan dari atas ke bawah
- Pastikan testing API di postman setelah installasi
- Matikan script res.json yang ada di folder controllers ships dan pirates, kemudian nyalakan script res.redirect untuk melihat tampilan UI/ejs
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
- npx sequelize-cli model:generate --name ships --attributes name:string,type:string,power:integer
  - Untuk membuat table baru dengan nama ships beserta valuenya secara migrasi
- npx sequelize-cli model:generate --name pirates --attributes name:string,status:string,type:string
  - Untuk membuat table baru dengan nama pirates beserta valuenya secara migrasi
- npx sequelize-cli db:migrate
  - Untuk migrasi ke dalam database postgres

## Installasi Tambahan
- npx sequelize-cli seed:generate --name bajak-laut-seeder
  - Untuk membuat seeder dengan nama bajak-laut-seeder secara migrasi
- npx sequelize-cli db:seed:all
  - Untuk menambahkan data yang di input dari format json secara migrasi

## Penjelasan
- File .env
  - Untuk menyimpan sebuah variable atau key yang rahasia