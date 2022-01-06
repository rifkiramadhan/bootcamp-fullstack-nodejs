const employees = [
    {
        employee_id: 100,
        first_name: "Steven",
        last_name: "King",
        email: "steven.king@sqltutorial.org",
        phone_number: "515.123.4567",
        hire_date: "1987-06-17",
        job_id: 4,
        salary: "24000.00",
        manager_id: null,
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
    hire_date: "1990-06-01",
    job_id: 5,
    salary: "25000.00",
    manager_id: null,
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


function searchEmployee(employee, prefix){
    return employee.filter(function(obj){
        return obj.first_name === prefix
    })
}

console.log(searchEmployee(employees, "Rifki"))