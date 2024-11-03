import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        image: ''
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        try {
            const response = await axios.post('http://localhost:YOUR_PORT/user/signup', formData);
            setSuccessMessage(response.data.message);
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'An error occurred during signup.');
            } else {
                setError('An error occurred during signup.');
            }
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <h1>Sign Up</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Image URL (optional):
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
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
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
