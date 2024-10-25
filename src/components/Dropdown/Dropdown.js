import React, { useState, useCallback } from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';

function Dropdown({ className, defaultOption, options = [], onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const handleOptionSelect = useCallback((option) => {
        onSelect(option);
        setIsOpen(false);
    }, [onSelect]);

    const renderOption = useCallback((option) => (
        <div
            key={option.value ? option.value : option}
            className={`option ${option.className ? option.className : ''}`}
            onClick={() => handleOptionSelect(option)}
        >
            {option.img ? (
                <SVGIcon 
                    className={`icon ${option.className === 'upgrade' ? 'gradient-icon' : ''}`}
                    svg_url={option.img.src}
                />
            ) : null}
            <span>{option.text ? option.text : option}</span>
        </div>
    ), [handleOptionSelect]);

    return (
        <div className={`custom_dropdown ${className ? className : ''}`}>
            <div
                onClick={toggleDropdown}
                className={`default_option ${defaultOption.className ? defaultOption.className : ''}`}
            >
                {defaultOption.img ? (
                    defaultOption.img.src.endsWith('.svg') ? (
                        <SVGIcon {...defaultOption.img} />
                    ) : (
                        <img
                            src={defaultOption.img.src}
                            alt={defaultOption.img.alt}
                        />
                    )
                ) : null}
                <span>{defaultOption.text ? defaultOption.text : defaultOption}</span>
                <SVGIcon
                    className="chevron"
                    svg_url={`${process.env.PUBLIC_URL}/assets/icons/chevron-${isOpen ? 'up' : 'down'}.svg`}
                />
            </div>
            {isOpen && (
                <div className="nested_options">
                    {options.map(renderOption)}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
