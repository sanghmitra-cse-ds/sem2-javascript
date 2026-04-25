// Functional Component: Student
// Accepts props: name, course, marks
function Student(props) {
    return (
        <div className="student-card">
            <div className="student-name">{props.name}</div>
            <div className="student-course">Course: {props.course}</div>
            <div className="student-marks">Marks: {props.marks}</div>
            <div className="marks-badge">
                {props.marks >= 75 ? "Distinction" : props.marks >= 60 ? "First Class" : "Pass"}
            </div>
        </div>
    );
}

// App Component - uses Student component multiple times with different props
function App() {
    return (
        <div className="app-container">
            <h1 className="app-title">Student Information</h1>
            <p className="app-subtitle">
                Name: Sanghmitra Shakya &nbsp;|&nbsp; Admission No: 2025B15410312
            </p>

            {/* Passing different props to Student component */}
            <Student
                name="Sanghmitra Shakya"
                course="Computer Science"
                marks={85}
            />
            <Student
                name="Anita Verma"
                course="Information Technology"
                marks={92}
            />
            <Student
                name="Rohan Gupta"
                course="Electronics"
                marks={78}
            />
            <Student
                name="Priya Mehta"
                course="Data Science"
                marks={67}
            />
        </div>
    );
}

// Render App to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
