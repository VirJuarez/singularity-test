import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError('');

        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok && data.token) {
                // Guardar el token en localStorage
                localStorage.setItem('token', data.token);
                // Redireccionar a home
                navigate('/home');
            } else {
                setLoginError('Credenciales inválidas');
            }
        } catch (error) {
            setLoginError('Error al intentar iniciar sesión');
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let newErrors = { ...errors };

        switch (name) {
            case 'email':
                if (!value) {
                    newErrors.email = 'El email es requerido';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    newErrors.email = 'Email inválido';
                } else {
                    newErrors.email = '';
                }
                break;
            case 'password':
                if (!value) {
                    newErrors.password = 'La contraseña es requerida';
                } else if (value.length < 6) {
                    newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
                } else {
                    newErrors.password = '';
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const isFormValid = () => {
        return formData.email && 
               formData.password && 
               !errors.email && 
               !errors.password;
    };

    return (
        <div className="h-screen w-full lg:overflow-hidden lg:grid lg:grid-cols-2 font-open-sans bg-white lg:bg-transparent">
            {/* Logo */}
            <div className="lg:bg-white bg-orange-200 rounded-full flex items-center justify-center w-60 h-60 md:w-[23rem] md:h-[23rem] mx-auto my-8 lg:m-auto">
                <img src="/petlogo.svg" alt="Fetch! Pet Care" className="md:w-52 md:h-60 h-40"/>
            </div>

            {/* Contenido del formulario */}
            <div className="h-full flex items-start lg:items-center justify-center">
                <div className="w-full px-8 lg:w-2/3 lg:p-8">
                    <h2 className="text-2xl font-bold mb-11 border-l-8 border-orange-500 pl-8">BIENVENIDO</h2>
                    <form onSubmit={handleSubmit} >
                    {loginError && (
                    <p className="text-red-500 text-sm text-center">{loginError}</p>
                )}
                        <input 
                            type="email"
                            name="email" 
                            placeholder="EMAIL"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full text-lg py-3 px-7 border border-zinc-100 shadow-[2px_3px_4px_#00000029] placeholder:text-zinc-400 mb-4"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm ">{errors.email}</p>
                        )}

                        <input 
                            type="password"
                            name="password" 
                            placeholder="CONTRASEÑA"
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full py-3 pl-7 text-lg border border-zinc-100  shadow-[2px_3px_4px_#00000029] placeholder:text-zinc-400"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password}</p>
                        )}

                        <div className="text-right mb-12 mt-9 -mr-4">
                            <a href="#" className="text-sm text-zinc-400">¿Olvidaste tu contraseña?</a>
                        </div>
                        <button 
                        type="submit"
                            className={`block w-fit mx-auto px-11 py-6 rounded-full font-bold text-xl
                                ${isFormValid() 
                                    ? 'bg-[#4487FF] text-white cursor-pointer' 
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                            disabled={!isFormValid()}
                        >
                            INICIAR SESIÓN
                        </button>
                        <div className="text-center text-sm text-zinc-400 mt-8">
                            AÚN NO TENGO CUENTA? <a href="#" className="text-[#015F91]">REGISTRARSE</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
