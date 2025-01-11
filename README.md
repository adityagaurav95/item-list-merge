java script import React, { useState } from 'react';

function ItemListManager() {
  // State to store the list of items and the current input
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  // Handle adding the item to the list
  const handleAddItem = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);  // Add the new item to the list
      setInput('');  // Clear the input field
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);  // Update the input state with the value from the input field
  };

  return (
    <div>
      <h1>Item List Manager</h1>

      {/* Input field */}
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter item"
      />
      
      {/* Button to add item */}
      <button onClick={handleAddItem}>Add Item</button>

      {/* Display the list of items */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
