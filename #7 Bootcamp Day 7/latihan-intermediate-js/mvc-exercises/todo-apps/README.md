# todo-list-MVC

## MVC Exercise : Easy Level

## Learning Competencies

- Students can understand MVC Design Pattern
- Students can implement the relation between object & class
- Students can analyze the task

## To Do List

Simple application that can save and track our todo lizt.
The application has CRUD, find the id, and change status.

### Task Objectives

<!-- **Apply OOP with the MVC Design Pattern** -->

### Prepare the commands - Task 0 (5%)

```bash
node todo.js
node todo.js help //menampilkan commandd apa saja yang tersedia
node todo.js list //Melihat daftar TODO
node todo.js add <task> //Menambahkan TODO ke dalam list
node todo.js update <id> <task>//Melihat detail TODO sesuai `id` nya
node todo.js delete <id> //Menghapus TODO sesuai `id` nya
node todo.js complete <id> //Menandai status TODO selesai
node todo.js uncomplete <id> //Menandai status TODO belum selesai
```

`id` di sini berfungsi sebagai ID unik untuk membedakan tiap TODO.

Because we will get the value from the terminal, we need **process.argv** to get input value

Prepare the ``data.json`` to store and exchanging . The structure must be like these :

```json
[
   {
    "id": 1,
    "task": "Belajar Node.js",
    "status": true,
    "created_at": "2020-04-07T14:31:44.338Z",
    "completed_at": "2020-04-07T14:31:44.338Z"
  },
  {
    "id": 2,
    "task": "Download Stream",
    "status": false,
    "created_at": "2020-04-07T14:31:44.338Z",
    "completed_at": null
  },
]
```

___
> "MALU BERTANYA, SESAT IN JALAN!"
___

### Basic CRUD - Task 1 (50%)

- Implement the **help** command . For example :

  Input :

  ```
  node todo.js
  //atau
  node todo.js help
  ```

  OUtput :

  ```
  node todo.js
  node todo.js help
  node todo.js list  
  node todo.js add <task>
  node todo.js update <id> <task>
  node todo.js delete <id>
  node todo.js complete <id>
  node todo.js uncomplete <id>
  ```

- Implement the **list** command . For example :

  Input :

  ```
  node todo.js list
  ```

  OUtput :

  ```
    //Show the id and the tas
    1. [X] Belajar Node.js
    2. [ ] Download Stream

  ```

- Implement the **add** command . For example :

  Input :

  ```
  node todo.js add "Ngoding Bareng"
  ```

  OUtput :

  ```
  //Feedback must same
  "Ngoding Bareng" has been create!
  ```

- Implement the **delete** command . For example :

  Input :

  ```
  node todo.js delete 3
  ```

  OUtput :

  ``` 
  //Feedback must same
  "Ngoding Bareng" has been remove!
  ```
  
- Implement the **update** command . For example :

  Input :

  ``` 
  node todo.js update 3 "Makan Bersama"
  ```

  OUtput :

  ``` 
  //Feedback must same
  "Ngoding Bareng" has been changed to "Makan Bersama"!
  ```
  
### Change status - Task 2 (50%)

Make the apps more cool by adding new feature.

- Implement the **complete** command . For example :
  Input :

  ``` 
  node todo.js complete 3
  ```

  OUtput :

  ``` 
  //Feedback must same
  // Change to true
  "Ngoding Bareng" has been completed!
  ```
  
- Implement the **uncomplete** command . For example :
  Input :

  ``` 
  node todo.js uncomplete 3
  ```

  OUtput :

  ``` 
  //Feedback must same
  // Change to false
  "Ngoding Bareng" has been uncompleted!
  ```

## Procedure

- Boleh mnambah var baru jika diperlukan
- Penamaan var harus jelas
- Kerjakan yang mudah terlebih dulu
- Identasi/spasi/tab di perhatikan
- DRY and Clean Code!
