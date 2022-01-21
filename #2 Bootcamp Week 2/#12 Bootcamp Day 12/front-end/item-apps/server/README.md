## Latihan Server

### Cara Installasi
- npm init -y
  - Untuk membuat file package.json secara automatice
- npm install express pg sequelize dotenv bcrypt
  - Untuk menginstall dependencies express, pg, sequelize, dotenv, dan bcrypt
- npm install sequelize-cli nodemon --save-dev
  - Untuk menginstall dependencies sequelize-cli, nodemon, dan di save ke dalam devDependencies
- npm install jsonwebtoken
  - Untuk menginstall dependencies jsonwebtoken
- npx sequelize-cli init
  - Untuk membuat folder untuk migrasi database, table dan data ke dalam database postgres
- npx sequelize-cli model:generate --name user --attributes email:string,password:string,username:string,avatar:string,role:string
  - Untuk membuat table dengan nama user beserta nama value nya
- npx sequelize-cli model:generate --name item --attributes name:string,type:string,image:string,price:integer,stock:integer,userId:integer
  - Untuk membuat table dengan nama item beserta nama value nya
- npx sequelize-cli db:create
  - Untuk membuat database sesuai nama yang di inputkan pada folder config di file config.json
- npx sequelize-cli db:migrate
  - Untuk migrasi ke dalam database postgres
- npx sequelize-cli seed:generate --name nama-seeder
  - untuk membuat nama file seeder yang dibuat secara migrasi untuk mengirim data secara keseluruhan dari data.json yang telah dibuat
- npx sequelize-cli db:seed:all
  - Untuk menulis seluruh data.json yang telah dibuat

### Cara Undo
- npx sequelize-cli db:migrate:undo
- npx sequelize-cli db:seed:undo

### Work Flow
- code .gitignore
- code app.js
- code .env
- mkdir routes controllers helpers middlewares
- buat file index.js, user.js, dan item.js pata folder routes
- buat file UserController.js dan ItemController.js pada folder controllers
- buat file bycrypt.js dan jwt.js untuk mengimplementasikan variable bcrypt agar lebih rapih
- buat file auth.js pada folder middlewares

### Penjelasan
- Token generator
  - Membuat data menjadi token
- token verifier
  - Membuat token menjadi data

## Standar API
- [METHOD]: {root.api}/{version}/{grouping}/{endpoint}
- SAMPLE: 
  - [POST]: http://api.google.com/v1/auth/login

==============================================================================================

## Standar Status Response
  [1] - 200 - OK                        --> Call API Success.
  [2] - 201 - CREATED                   --> Post Success.
  [3] - 400 - BAD REQUEST               --> Error on Client Side (Bisa input yang salah dll).
  [4] - 401 - UNATHORIZED               --> User not authorized to the request.
  [5] - 403 - FORBIDDEN                 --> User not allowed to access.
  [6] - 404 - NOT FOUND                 --> Request Endpoint Not Found.
  [7] - 500 - INTERNAL SERVER ERROR     --> Error on Server Side.
  [8] - 502 - BAD GATEWAY               --> Invalid Response From Another Request.

==============================================================================================