import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import LoginForm from '../components/LoginForm';

function Login() {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    const handleSubmit = async (formData) => {
        setLoginError('');
        setIsLoading(true);

        try {
            const data = await loginUser(formData);
            localStorage.setItem('token', data.token);
            navigate('/');
        } catch (error) {
            setLoginError('Credenciales inválidas');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen w-full lg:overflow-hidden lg:grid lg:grid-cols-2 font-open-sans bg-white lg:bg-transparent">
            {/* Logo */}
            <div className="lg:bg-white bg-orange-200 rounded-full flex items-center justify-center w-60 h-60 md:w-[23rem] md:h-[23rem] mx-auto my-8 lg:m-auto">
                <img src="/petlogo.svg" alt="Fetch! Pet Care" className="md:w-52 md:h-60 h-40" />
            </div>

            {/* Contenido del formulario */}
            <div className="h-full flex items-start lg:items-center justify-center">
                <div className="w-full px-8 lg:w-2/3 lg:p-8">
                    <h2 className="text-2xl font-bold mb-11 border-l-8 border-orange-500 pl-8">BIENVENIDO</h2>
                    <LoginForm 
                        onSubmit={handleSubmit}
                        isLoading={isLoading}
                        loginError={loginError}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
