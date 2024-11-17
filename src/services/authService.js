const API_URL = 'https://reqres.in/api';

export const loginUser = async (credentials) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
    });

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || 'Error al iniciar sesión');
    }

    return data;
}; 