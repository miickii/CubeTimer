import React from 'react';

const SortIcon = ({ size, angle }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        // viewBox="0 0 10.033 5" 
        viewBox="0 0 24 12"
        fill="currentColor" 
        width={size} 
        height={size/2}
        style={{ transform: `rotate(${angle}deg)`, transformOrigin: 'center' }}
    >
        {/* <path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z"/> */}
        <path d="M12 0L0 12h24L12 0z"/>
    </svg>
);

export default SortIcon;