import React from 'react';

const Counter = ({ className, children }) => {
    return (
        <div className={`Counter ${className || ''}`}>
            {children}
        </div>
    );
};

export default Counter;
