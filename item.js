import React, { useState } from 'react';

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  return (
    <div>
      <h1>Item List Manager</h1>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter item"
          value={newItem}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export default ItemListManager;
