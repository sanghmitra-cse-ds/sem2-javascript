const { useState, useEffect } = React;

function App() {
    // Form state
    const [name, setName]         = useState("");
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");

    // Error state
    const [errors, setErrors] = useState({});

    // Success & registered users state
    const [success, setSuccess]         = useState(false);
    const [registeredUsers, setRegisteredUsers] = useState([]);

    // API fetched users state
    const [apiUsers, setApiUsers]   = useState([]);
    const [loading, setLoading]     = useState(true);

    // useEffect: fetch users from public API when component mounts
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                // Use first 3 users as pre-existing sample data
                setApiUsers(data.slice(0, 3).map(u => ({ name: u.name, email: u.email })));
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []); // empty dependency array = runs once on mount

    // Form validation
    function validate() {
        const newErrors = {};
        if (!name.trim())
            newErrors.name = "Name is required.";
        if (!email.trim())
            newErrors.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            newErrors.email = "Enter a valid email address.";
        if (!password.trim())
            newErrors.password = "Password is required.";
        else if (password.length < 6)
            newErrors.password = "Password must be at least 6 characters.";
        return newErrors;
    }

    // Handle form submission
    function handleRegister() {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess(false);
            return;
        }
        // Add to registered users list
        setRegisteredUsers(prev => [...prev, { name, email }]);
        setSuccess(true);
        setErrors({});
        setName("");
        setEmail("");
        setPassword("");
    }

    // Combine API users + registered users for display
    const allUsers = [...apiUsers, ...registeredUsers];

    return (
        <div className="app-container">
            {/* Registration Form */}
            <div className="form-card">
                <h1 className="form-title">Registration Form</h1>
                <p className="form-subtitle">
                    Sanghmitra Shakya &nbsp;|&nbsp; 2025B15410312 &nbsp;|&nbsp; CSE DS 3
                </p>

                {/* Name Field */}
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={e => { setName(e.target.value); setSuccess(false); }}
                        className={errors.name ? "error-input" : ""}
                    />
                    {errors.name && <div className="error-msg">{errors.name}</div>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={e => { setEmail(e.target.value); setSuccess(false); }}
                        className={errors.email ? "error-input" : ""}
                    />
                    {errors.email && <div className="error-msg">{errors.email}</div>}
                </div>

                {/* Password Field */}
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={e => { setPassword(e.target.value); setSuccess(false); }}
                        className={errors.password ? "error-input" : ""}
                    />
                    {errors.password && <div className="error-msg">{errors.password}</div>}
                </div>

                <button className="btn-register" onClick={handleRegister}>
                    Register
                </button>

                {success && (
                    <div className="success-msg">Registration Successful!</div>
                )}
            </div>

            {/* Registered Users List */}
            <div className="users-card">
                <div className="users-title">Registered Users</div>
                {loading ? (
                    <div className="loading">Loading users...</div>
                ) : allUsers.length === 0 ? (
                    <div className="loading">No users registered yet.</div>
                ) : (
                    allUsers.map((user, index) => (
                        <div key={index} className="user-item">
                            <div className="user-dot"></div>
                            {user.name} – {user.email}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
