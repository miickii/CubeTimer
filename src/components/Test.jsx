import React, { useState, useEffect } from 'react';

const Test = () => {
    const [selectedHeight, setSelectedHeight] = useState('100vh');
    const [parentHeight, setParentHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      const handleResize = () => {
        let heightValue;
        switch (selectedHeight) {
          case '100vh':
            heightValue = window.innerHeight;
            break;
          case '100dvh':
            heightValue = window.innerHeight; // Assuming dynamic viewport height is the same for simplicity
            break;
          case '100svh':
            heightValue = window.innerHeight; // Assuming static viewport height is the same for simplicity
            break;
          case '100%':
            heightValue = window.innerHeight; // Assuming the parent container takes the full viewport height
            break;
          default:
            heightValue = window.innerHeight;
        }
        setParentHeight(heightValue);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Call initially to set the correct values
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [selectedHeight]);
  
    return (
      <div 
        className={`parent-element fixed bg-gray-100 h-${selectedHeight}`}
    >
        <div>Height: {parentHeight.toFixed(2)} px</div>
        <select
          value={selectedHeight}
          onChange={(e) => setSelectedHeight(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="100vh">100vh</option>
          <option value="100dvh">100dvh</option>
          <option value="100svh">100svh</option>
          <option value="full">100%</option>
        </select>
      </div>
    );
  };

export default Test;