const employees = [
    {
        employee_id: 100,
        first_name: "Steven",
        last_name: "King",
        email: "steven.king@sqltutorial.org",
        phone_number: "515.123.4567",
        hire_date: '1987-06-17',
        job_id: 4,
        salary: 2400.00,
        manager_id: null,
        my_age: 30,
        department_id: 9,
        employees_images: [
            {
                epim_id: 27,
                epim_filename: "after order.jpg",
                epim_path: "/uploads/after order.jpg",
                epim_primary: false,
                epim_employee_id: 100
            },
            {
                epim_id: 26,
                epim_filename: "cangkir jadul.jpg",
                epim_path: "/uploads/cangkir jadul.jpg",
                epim_primary: false,
                epim_employee_id: 100
            }]
    },
    {
        employee_id: 101,
        first_name: "Rifki",
        last_name: "Ramadhan",
        email: "riifkiramadhan2@gmail.com",
        phone_number: "08567885855",
        hire_date: '1999-06-01',
        job_id: 5,
        salary: 4800.00,
        manager_id: null,
        my_age: 22,
        department_id: 9,
        employees_images: [
            {
                epim_id: 28,
                epim_filename: "after order.jpg",
                epim_path: "/uploads/after order.jpg",
                epim_primary: false,
                epim_employee_id: 100
            },
            {
                epim_id: 27,
                epim_filename: "cangkir jadul.jpg",
                epim_path: "/uploads/cangkir jadul.jpg",
                epim_primary: false,
                epim_employee_id: 100
            }]
    },
    {
        employee_id: 101,
        first_name: "Nesti",
        last_name: "Annisa",
        email: "nesti@gmail.com",
        phone_number: "08567885855",
        hire_date: '1999-09-03',
        end_date: '2021-06-17',
        job_id: 5,
        salary: 4800.00,
        manager_id: null,
        my_age: 40,
        department_id: 9,
        employees_images: [
            {
                epim_id: 28,
                epim_filename: "after order.jpg",
                epim_path: "/uploads/after order.jpg",
                epim_primary: false,
                epim_employee_id: 100
            },
            {
                epim_id: 27,
                epim_filename: "cangkir jadul.jpg",
                epim_path: "/uploads/cangkir jadul.jpg",
                epim_primary: false,
                epim_employee_id: 100
            }]
    }
]

function showAges(employee, age1, age2){
    return employee.filter(function(obj){
        return obj.my_age === age1 || obj.my_age === age2
    })
}

console.log(showAges(employees, 30, 40))