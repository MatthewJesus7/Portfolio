const Textarea = ({ name, text, rows }) => {
    return(
        <div>
            <label htmlFor={name} 
            className="block text-sm font-medium text-gray-600 mb-1">
                {text}
            </label>
            <textarea
              name={name}
              id={name}
              required
              rows={rows}
              className="w-full p-2 border border-gray-300 bg-white/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>
    );
};

export default Textarea;