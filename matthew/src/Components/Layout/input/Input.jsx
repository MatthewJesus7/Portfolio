const Input = ({text, name, type, rows }) => {
    return(
        <div>
        <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-600 mb-1">
            {text}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          required
          rows={rows}
          className="w-full p-2 border border-gray-300 bg-white/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
    );
};

export default Input;