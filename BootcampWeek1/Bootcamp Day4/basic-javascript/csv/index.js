// node.js memiliki modul/package yang dinamakan fs (file system)

const fs = require('fs'); // mengambil package dari node;

const getCSV = (file) => {
    let data = fs.readFileSync(file, 'utf8')

    let dataSplit = data.split('\r\n')
    // console.log(dataSplit)
    let tempData = []

    for (let i = 0; i < dataSplit.length; i++) {
        tempData.push(dataSplit[i].split(','))
    }
    // console.log(tempData)

    let tempObj = {}
    let resultArr = []
    for (let i = 0; i < tempData.length; i++) {
        tempObj.id = Number(tempData[i][0])
        tempObj.name = tempData[i][1]
        tempObj.gpa = Number(tempData[i][2])
        tempObj.city = tempData[i][3]
        tempObj.campus = tempData[i][4]

        resultArr.push(tempObj)
        tempObj = {};
    }
    return resultArr
}

let students = getCSV('./data.csv')
const addStudent = student => {
    let [name, gpa, city, campus] = student
    let id = students[students.length - 1].id + 1;

    let obj = {
        id, name, gpa, city, campus
    }
    students.push(obj)
}

addStudent(["tests", 2.75, 'indramayu', 'trisakti'])
addStudent(["admin", 3.00, 'kuningan', 'tarumanagara'])
addStudent(["rifki", 4.00, 'jakarta', 'unas'])

const saveCSV = () => {
    let arrTemp = []

    students.forEach(student => {
        let { id, name, gpa, city, campus } = student
        arrTemp.push([id, name, gpa, city, campus].join())
    })
    let joinArr = arrTemp.join('\r\n')
    fs.writeFileSync('./data.csv', joinArr, 'utf8')
    // console.log(joinArr)
}
saveCSV()
// console.log(students);

/* 
[
    {
        id: 1,
        name: 'vincent',
        gpa: 3.21,
        city: 'jakarta',
        campus: 'binus'
    }
]
*/