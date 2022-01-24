const employees = [
    {
        employee_id: 100,
        first_name: "Steven",
        last_name: "King",
        email: "steven.king@sqltutorial.org",
        phone_number: "515.123.4567",
        hire_date: '1987-06-17',
        end_date: '2021-06-01',
        job_id: 4,
        salary: 2400.00,
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
        hire_date: '1999-06-01',
        end_date: '2022-06-01',
        job_id: 5,
        salary: 4800.00,
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
    },
    {
        employee_id: 101,
        first_name: "Nesti",
        last_name: "Annisa",
        email: "nesti@gmail.com",
        phone_number: "08567885855",
        hire_date: '1999-09-03',
        end_date: '2022-06-01',
        job_id: 5,
        salary: 4800.00,
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

function hireRangeDate(employee, startDate, endDate){
    return employee.filter(function(obj){
        return obj.hire_date === startDate || obj.end_date === endDate
    })
}

console.log(hireRangeDate(employees, '1999-09-03', '2022-06-01'))