

const API_URL = "http://localhost:3000//api"; 

export const signup = async (data) => {
    const response = await fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const json = await response.json(); 
    return json;
};

export const signin = async (credentials) => {
    const response = await fetch('http://localhost:3000/user/signin', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    const json = await response.json();
    return json;};
