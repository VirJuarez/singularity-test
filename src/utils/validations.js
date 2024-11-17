export const validateEmail = (email) => {
    if (!email) {
        return 'El email es requerido';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        return 'Email inválido';
    }
    return '';
};

export const validatePassword = (password) => {
    if (!password) {
        return 'La contraseña es requerida';
    }
    if (password.length < 6) {
        return 'La contraseña debe tener al menos 6 caracteres';
    }
    return '';
}; 