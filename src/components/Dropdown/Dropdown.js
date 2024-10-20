import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
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
            key={option.value}
            className={`option ${option.className}`}
            onClick={() => handleOptionSelect(option)}
        >
            {option.img && (
                <SVGIcon 
                    className={`icon ${option.className === 'upgrade' ? 'gradient-icon' : ''}`}
                    svg_url={option.img.src}
                />
            )}
            <span>{option.text}</span>
        </div>
    ), [handleOptionSelect]);

    return (
        <div className={`custom_dropdown ${className}`}>
            <div onClick={toggleDropdown} className={`default_option ${defaultOption.className}`}>
                {defaultOption.img && (
                    defaultOption.img.src.endsWith('.svg') ? (
                        <SVGIcon {...defaultOption.img} />
                    ) : (
                        <img
                            src={defaultOption.img.src}
                            alt={defaultOption.img.alt}
                        />
                    )
                )}
                <span>{defaultOption.text}</span>
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

Dropdown.propTypes = {
    className: PropTypes.string,
    defaultOption: PropTypes.shape({
        text: PropTypes.string.isRequired,
        className: PropTypes.string,
        img: PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number,
        }),
    }).isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            className: PropTypes.string,
            img: PropTypes.shape({
                src: PropTypes.string.isRequired,
            }),
        })
    ).isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
