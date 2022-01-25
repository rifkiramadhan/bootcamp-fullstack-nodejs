import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {

  const students = [
    {
      name: "Rifki",
      age: 23,
      status: "Employer"
    },
    {
      name: "Romeo",
      age: 22,
      status: "Employee"
    },
    {
      name: "Nicky",
      age: 21,
      status: "Employee"
    },
    {
      name: "Meta",
      age: 21,
      status: "Employee"
    },
    {
      name: "Lasley",
      age: 21,
      status: "Employee"
    },
    {
      name: "Angela",
      age: 21,
      status: "Employee"
    },
  ];

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eligendi.</p>
      
      <Navbar />

      <div className="container">
        <div class="row">
          {
            students.map(student => {
              return (
                <>
                  <Card student={student} />
                </>
              );
            })
          };
        </div>
      </div>

    </div>
  );
};

export default App;
