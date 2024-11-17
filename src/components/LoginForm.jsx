import { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validations';

function LoginForm({ onSubmit, isLoading, loginError }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

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
        const newErrors = { ...errors };
        if (name === 'email') {
            newErrors.email = validateEmail(value);
        } else if (name === 'password') {
            newErrors.password = validatePassword(value);
        }
        setErrors(newErrors);
    };

    const isFormValid = () => {
        return formData.email &&
            formData.password &&
            !errors.email &&
            !errors.password;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
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
                disabled={!isFormValid() || isLoading}
            >
                {isLoading ? 'CARGANDO...' : 'INICIAR SESIÓN'}
            </button>
            <div className="text-center text-sm text-zinc-400 mt-8">
                AÚN NO TENGO CUENTA? <a href="#" className="text-[#015F91]">REGISTRARSE</a>
            </div>
        </form>
    );
}

export default LoginForm; 