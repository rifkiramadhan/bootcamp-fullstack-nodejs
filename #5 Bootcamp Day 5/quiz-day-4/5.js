const employees = [
    {
        employee_id: 100,
        first_name: "Steven",
        last_name: "King",
        email: "steven.king@sqltutorial.org",
        phone_number: "515.123.4567",
        hire_date: "1987-06-17",
        job_id: 4,
        salary: 2400,
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
        email: "riifkiramadhan09@gmail.com",
        phone_number: "082122116992",
        hire_date: "1990-06-30",
        job_id: 5,
        salary: 4800,
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


function totalSalaryAllEmployee(employee){
    let total = 0
    employee.forEach(person => {
        total += person.salary
    });
    return total
}

console.log(totalSalaryAllEmployee(employees))  