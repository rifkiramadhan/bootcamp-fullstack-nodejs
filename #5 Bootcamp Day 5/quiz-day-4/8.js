const employees = [
    {
      employee_id: 100,
      first_name: "Steven",
      last_name: "King",
      age: 40,
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
        }
      ]
    }
]

function totalEmployeeByJobsId(employees) {
    return employees;
}
  
console.log(totalEmployeeByJobsId(employees));
   