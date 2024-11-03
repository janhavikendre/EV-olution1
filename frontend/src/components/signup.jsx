import React, { useState } from 'react';
import { signup } from '../services/userService'; 

const Signup = ({ onClose }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        try {
            const response = await signup({ firstname, lastname, email, password });
            if (response.error) {
                setError(response.error.message);
            } else {
                console.log('Signup successful:', response);
                onClose(); 
                
                localStorage.setItem('token', response.token); 
                localStorage.setItem('user', JSON.stringify(response.user)); 
            }
        } catch (error) {
            console.error(error);
            setError('Signup failed. Please try again.');
        }
    };

    // Inline styles
    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundImage: 'url(https://img.freepik.com/free-photo/flat-lay-clean-office-desk_23-2148219267.jpg?t=st=1730457082~exp=1730460682~hmac=5cf5e4d372a99e3c4ab0b687d2826e9e8c95083d207f4fbbcf68a1fa60f89afe&w=900)', // Replace with your background image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        rightSide: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white background
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            maxWidth: '400px',
            margin: '20px',
            textAlign: 'center',
        },
        heading: {
            color: '#E88982',
            marginBottom: '20px',
        },
        input: {
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #E88982',
            borderRadius: '5px',
            outline: 'none',
        },
        inputFocus: {
            borderColor: '#0984e3',
        },
        button: {
            backgroundColor: '#E88982',
            color: 'white',
            border: 'none',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            margin: '10px 0',
        },
        buttonHover: {
            backgroundColor: '#d87873',
        },
        error: {
            color: 'red',
            marginTop: '10px',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.rightSide}>
                <h2 style={styles.heading}>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                        style={styles.input}
                        onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                        onBlur={(e) => e.target.style.borderColor = '#E88982'}
                        />
                    <input
                        type="text"
                        placeholder="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                        style={styles.input}
                        onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                        onBlur={(e) => e.target.style.borderColor = '#E88982'}
                        />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                        onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                        onBlur={(e) => e.target.style.borderColor = '#E88982'}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                        onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                        onBlur={(e) => e.target.style.borderColor = '#E88982'}
                    />
                    <button type="submit" style={styles.button}>Sign Up</button>
                    <button type="button" onClick={onClose} style={styles.button}>Close</button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
            </div>
        </div>
    );
};

export default Signup;
