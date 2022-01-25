import './Card.css';

function Card(props) {

    const { student } = props;

    const showAlert = student => {
        alert(`Age: ${student.age}, Status: ${student.status}`);
    };

    return (
        <>
            <div className="col-4">
                <div className="card mb-3 p-3">
                    <div className="card-top">
                        <h3>Hello, {student.name}</h3>
                        
                    </div>
                    <div className="card-bottom">
                        <button className="btn btn-primary" onClick={() => showAlert(student)}>More Info</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;