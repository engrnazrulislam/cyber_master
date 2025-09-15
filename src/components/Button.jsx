import { ShoppingCart } from 'lucide-react';
const Button = ({handleClick, color, children}) => {
    const ButtonColors = {
        default: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white",
        warning: "bg-amber-500 hover:bg-amber-600 text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
        danger: "bg-red-600 hover:bg-red-700 text-white",
        info: "bg-cyan-600 hover:bg-cyan-700 text-white",

        light: "bg-slate-200 hover:bg-slate-300 text-gray-800",
        dark: "bg-black hover:bg-gray-900 text-white",

        purple: "bg-purple-600 hover:bg-purple-700 text-white",
        pink: "bg-pink-600 hover:bg-pink-700 text-white",
        teal: "bg-teal-600 hover:bg-teal-700 text-white",
        indigo: "bg-indigo-600 hover:bg-indigo-700 text-white",
        orange: "bg-orange-600 hover:bg-orange-700 text-white",
        lime: "bg-lime-600 hover:bg-lime-700 text-white",
    };
    return (
        <button onClick={handleClick} 
        key = {handleClick}
        className={`px-1 py-1 ${ButtonColors[color]} flex justify-center items-center gap-1 cursor-pointer rounded-md shadow-sm`}>
            <ShoppingCart size={15} />{children}
        </button>        
    );
};

export default Button;