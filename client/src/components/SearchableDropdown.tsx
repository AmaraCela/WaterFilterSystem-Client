import React, { useEffect, useState } from 'react';

const SearchableDropdown = ({ options, selectedOption, onOptionSelect }: any) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const filteredOptions = options.filter((option: any) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOptionClick = (option: any) => {
        onOptionSelect(option);
        setIsOpen(false);
    };

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        setSearchTerm(value);
        setIsOpen(true);
        if (options.includes(value)) {
        onOptionSelect(value);
        } else {
        onOptionSelect("");
        }
    };

    return (
        <div className="relative">
        <input
            type="text"
            className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
            value={selectedOption || searchTerm}
            placeholder="Select a client..."
            onClick={() => setIsOpen(!isOpen)}
            onChange={handleInputChange}
        />
        {isOpen && (
            <ul className="absolute z-10 w-full bg-white border border-black border-solid rounded-xl max-h-60 overflow-y-auto mt-1">
            {filteredOptions.length > 0 ? (
                filteredOptions.map((option: any, index: any) => (
                <li
                    key={index}
                    className="cursor-pointer px-2 py-1 hover:bg-indigo-500 hover:text-white text-sm"
                    onClick={() => handleOptionClick(option)}
                >
                    {option}
                </li>
                ))
            ) : (
                <li className="px-2 py-1 text-gray-500 text-sm">No results found</li>
            )}
            </ul>
        )}
        </div>
    );
}

export default SearchableDropdown;