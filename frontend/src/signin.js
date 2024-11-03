import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        try {
            const response = await axios.put('http://localhost:YOUR_PORT/user/signin', {
                email,
                password
            });
            setSuccessMessage(response.data.message);
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'An error occurred during signin.');
            } else {
                setError('An error occurred during signin.');
            }
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <h1>Sign In</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#E88982",
                        color: "white",
                        border: "none",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Signin;
