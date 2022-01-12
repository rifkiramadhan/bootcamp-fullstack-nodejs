## Latihan Postgres Sequelize
- [x] [Dokumentasi Postman](https://documenter.getpostman.com/view/10749611/UVXhpc6D)
- [x] [Sequalize](https://sequelize.org/v6/manual/model-querying-basics.html)

### Notes
- Baca keterangan dari atas ke bawah

### Cara Installasi
- npm install express pg sequelize
  - Untuk menginstall experss, postgres, dan sequalize
- npm install nodemon sequelize-cli --save-dev
  - Untuk menginstall nodemon, sequalize-cli yang di simpan kedalam devDependencies untuk mode development
- npx sequelize-cli init
  - Langkah pertama untuk membuat sequelize
- npx sequelize-cli db:create
  - Untuk membuat database sequelize secara migrasi
- npx sequelize-cli model:generate --name todo --attributes task:string,status:boolean
  - Untuk membuat table beserta attributes nya secara migrasi
- npx sequelize-cli db:migrate
  - Untuk menaikan/up ke dalam database
- npx sequelize-cli seed:generate --name todo-seeder
  - Untuk membuat seeder dengan nama too-seeder secara migrasi
- npx sequelize-cli db:seed:all
  - Untuk menamahkan data yang di input dari format json secara migrasi

### Work Flow
- Membuat file app.js, kemudian jalankan servernya
- Membuat folder routes untuk routes nya pada index.js
- Membuat folder controller untuk membuat file controller nya
- Membuat folder views untuk membuat file views nya

### Pengertian
- dependencies
  - Ketika aplikasi dalam keadaan development akan menggunakan dependencies yang
    sebelumnya dibuat --save-dev
- devDependencies
  - Sebaliknya
- file .gitignore
  - Digunakan untuk mencegah folder atau file yang ditulis didalamnya agar tidak masuk ke dalam repository git
- CLI singkatan dari Command Line Interface
- Up
  - Untuk memasukkan banyak
- Down
  - Seperti kita ingin revert/undo