import { useEffect, useState, useRef } from 'react';

const SearchSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const node = useRef<HTMLDivElement>(null);  // Create a ref

    const handleClickOutside = (e: MouseEvent) => {
        if (node.current?.contains(e.target as Node)) {
            // inside click
            return;
        }
        // outside click 
        setIsOpen(false);
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClickOutside);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`relative flex items-center transition duration-500 ${isOpen ? 'border-2 border-white' : 'border-0 border-transparent'}`} ref={node}>
            <div className="cursor-pointer text-lg" onClick={() => setIsOpen(!isOpen)}>
                <i className="fa-solid fa-magnifying-glass ml-2 text-white"></i>
            </div>
            <input
                className={`transition-width duration-500 ease-in-out ml-2 bg-transparent text-white placeholder-white outline-none ${isOpen ? 'w-48' : 'w-0'
                    }`}
                type="text"
                placeholder="Search..."
            />
        </div>
    );
};


export default SearchSection;