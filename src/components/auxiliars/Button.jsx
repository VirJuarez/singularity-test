function Button({text, color, background}){
    return (
        <button className={`bg-${background} text-${color} px-4 py-2 rounded-md font-medium`}>
            {text}
        </button>
    )
}

export default Button;

